import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import path from 'path';

// ---------------------------------------------------------------------------
// Rate limiter – in-memory, 5 requests / hour / IP
// ---------------------------------------------------------------------------
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 5;
const rateLimitMap = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) ?? [];

  // Keep only timestamps within the current window
  const recent = timestamps.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);
  rateLimitMap.set(ip, recent);

  if (recent.length >= RATE_LIMIT_MAX) {
    return true;
  }

  recent.push(now);
  rateLimitMap.set(ip, recent);
  return false;
}

// Periodically purge stale IPs to prevent unbounded memory growth
setInterval(() => {
  const now = Date.now();
  for (const [ip, timestamps] of rateLimitMap) {
    const recent = timestamps.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);
    if (recent.length === 0) {
      rateLimitMap.delete(ip);
    } else {
      rateLimitMap.set(ip, recent);
    }
  }
}, RATE_LIMIT_WINDOW_MS);

// ---------------------------------------------------------------------------
// HTML sanitisation – prevent XSS in email templates
// ---------------------------------------------------------------------------
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface LeadData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  role: string;
  budget?: string;
  description?: string;
  source?: string;
}

// ---------------------------------------------------------------------------
// Email builder
// ---------------------------------------------------------------------------
function buildEmailHtml(data: LeadData): string {
  const rows = [
    { label: 'Name', value: escapeHtml(data.name) },
    { label: 'Email', value: escapeHtml(data.email) },
    { label: 'Company', value: escapeHtml(data.company) },
    { label: 'Phone', value: escapeHtml(data.phone || '-') },
    { label: 'Role Needed', value: escapeHtml(data.role) },
    { label: 'Monthly Budget', value: escapeHtml(data.budget || '-') },
    { label: 'Project Description', value: escapeHtml(data.description || '-') },
    { label: 'Source', value: escapeHtml(data.source || '-') },
  ];

  const tableRows = rows
    .map(
      (row) => `
      <tr>
        <td style="padding: 10px 16px; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151; background-color: #f9fafb; width: 200px; vertical-align: top;">
          ${row.label}
        </td>
        <td style="padding: 10px 16px; border-bottom: 1px solid #e5e7eb; color: #111827; vertical-align: top;">
          ${row.value}
        </td>
      </tr>`
    )
    .join('');

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f3f4f6; margin: 0; padding: 24px;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
        <div style="background-color: #111827; padding: 24px 32px;">
          <h1 style="color: #ffffff; margin: 0; font-size: 20px;">New Inquiry from ${escapeHtml(data.name)}</h1>
          <p style="color: #9ca3af; margin: 8px 0 0; font-size: 14px;">${escapeHtml(data.company)}</p>
        </div>
        <div style="padding: 24px 32px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            ${tableRows}
          </table>
        </div>
        <div style="padding: 16px 32px; background-color: #f9fafb; border-top: 1px solid #e5e7eb;">
          <p style="margin: 0; font-size: 12px; color: #6b7280; text-align: center;">
            This inquiry was submitted via the contact form on hiredeveloper.ae
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// ---------------------------------------------------------------------------
// Secure file-based lead storage
// ---------------------------------------------------------------------------
function getLeadsFilePath(): string {
  const dir = path.join(process.cwd(), '.leads');
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
  return path.join(dir, 'leads.json');
}

function saveLeadToFile(data: LeadData): void {
  const filePath = getLeadsFilePath();
  let leads: LeadData[] = [];

  try {
    if (existsSync(filePath)) {
      const content = readFileSync(filePath, 'utf-8');
      leads = JSON.parse(content);
    }
  } catch {
    leads = [];
  }

  leads.push({ ...data, ...{ timestamp: new Date().toISOString() } as Record<string, string> });
  writeFileSync(filePath, JSON.stringify(leads, null, 2), 'utf-8');
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'
  );
}

// ---------------------------------------------------------------------------
// POST handler
// ---------------------------------------------------------------------------
export async function POST(request: NextRequest) {
  try {
    // --- Rate limiting ---
    const clientIp = getClientIp(request);
    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();

    // --- Honeypot bot protection ---
    // The "website" field is a hidden honeypot – real users never fill it in.
    if (body.website) {
      // Return a fake success so bots think their submission worked.
      return NextResponse.json(
        {
          success: true,
          message: 'Thank you! We will get back to you within 24 hours.',
          emailSent: true,
        },
        { status: 200 }
      );
    }

    const data: LeadData = body;

    // Validate required fields
    if (!data.name || !data.email || !data.company || !data.role) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(data.email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const recipients = ['lucas@digitalunicorn.fr', 'contact@digitalunicorn.fr'];
    const subject = `New Inquiry from ${data.name} - ${data.company}`;
    const html = buildEmailHtml(data);

    let emailSent = false;

    // Try to send via nodemailer if SMTP env vars are configured
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpHost && smtpPort && smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: parseInt(smtpPort, 10),
          secure: parseInt(smtpPort, 10) === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        await transporter.sendMail({
          from: smtpUser,
          to: recipients.join(', '),
          subject,
          html,
          replyTo: data.email,
        });

        emailSent = true;
        console.log(`[Lead] Email sent successfully to: ${recipients.join(', ')}`);
      } catch (emailError) {
        console.error('[Lead] Error sending email:', emailError);
      }
    } else {
      console.log('[Lead] SMTP not configured. Email sending skipped.');
    }

    // Always save to file as backup / fallback
    try {
      saveLeadToFile(data);
      console.log('[Lead] Lead data saved to .leads/leads.json.');
    } catch (fileError) {
      console.error('[Lead] Error saving lead data:', fileError);
    }

    // Log the lead data to console regardless
    console.log('[Lead] New inquiry received:', JSON.stringify(data, null, 2));

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! We will get back to you within 24 hours.',
        emailSent,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Lead] Unexpected error:', error);
    return NextResponse.json(
      { error: 'An error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
