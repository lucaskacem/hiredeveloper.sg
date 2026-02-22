import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { readFileSync, writeFileSync, existsSync } from 'fs';

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

function buildEmailHtml(data: LeadData): string {
  const rows = [
    { label: 'Name', value: data.name },
    { label: 'E-Mail', value: data.email },
    { label: 'Unternehmen', value: data.company },
    { label: 'Telefon', value: data.phone || '-' },
    { label: 'Gesuchte Rolle', value: data.role },
    { label: 'Budget pro Monat', value: data.budget || '-' },
    { label: 'Projektbeschreibung', value: data.description || '-' },
    { label: 'Quelle', value: data.source || '-' },
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
          <h1 style="color: #ffffff; margin: 0; font-size: 20px;">Neue Anfrage von ${data.name}</h1>
          <p style="color: #9ca3af; margin: 8px 0 0; font-size: 14px;">${data.company}</p>
        </div>
        <div style="padding: 24px 32px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            ${tableRows}
          </table>
        </div>
        <div style="padding: 16px 32px; background-color: #f9fafb; border-top: 1px solid #e5e7eb;">
          <p style="margin: 0; font-size: 12px; color: #6b7280; text-align: center;">
            Diese Anfrage wurde uber das Kontaktformular auf programmier-anfang.de gesendet.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function saveLeadToFile(data: LeadData): void {
  const filePath = '/tmp/leads.json';
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

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const data: LeadData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.company || !data.role) {
      return NextResponse.json(
        { error: 'Bitte fullen Sie alle Pflichtfelder aus.' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(data.email)) {
      return NextResponse.json(
        { error: 'Bitte geben Sie eine gultige E-Mail-Adresse ein.' },
        { status: 400 }
      );
    }

    const recipients = ['lucas@digitalunicorn.fr', 'contact@digitalunicorn.fr'];
    const subject = `Neue Anfrage von ${data.name} - ${data.company}`;
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
        console.log(`[Lead] E-Mail erfolgreich gesendet an: ${recipients.join(', ')}`);
      } catch (emailError) {
        console.error('[Lead] Fehler beim E-Mail-Versand:', emailError);
      }
    } else {
      console.log('[Lead] SMTP nicht konfiguriert. E-Mail-Versand uebersprungen.');
    }

    // Always save to file as backup / fallback
    try {
      saveLeadToFile(data);
      console.log('[Lead] Lead-Daten in /tmp/leads.json gespeichert.');
    } catch (fileError) {
      console.error('[Lead] Fehler beim Speichern der Lead-Daten:', fileError);
    }

    // Log the lead data to console regardless
    console.log('[Lead] Neue Anfrage erhalten:', JSON.stringify(data, null, 2));

    return NextResponse.json(
      {
        success: true,
        message: 'Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.',
        emailSent,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Lead] Unerwarteter Fehler:', error);
    return NextResponse.json(
      { error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.' },
      { status: 500 }
    );
  }
}
