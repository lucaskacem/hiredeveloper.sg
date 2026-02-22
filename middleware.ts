import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    // Only enforce basic auth when explicitly enabled (e.g., staging/dev)
    // In production, BASIC_AUTH_ENABLED should not be set, so all requests pass through
    if (process.env.BASIC_AUTH_ENABLED !== 'true') {
        return NextResponse.next();
    }

    // Always allow search engine crawlers through, even if auth is enabled
    const userAgent = req.headers.get('user-agent') || '';
    const crawlerPatterns = /Googlebot|Bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot|Sogou|facebookexternalhit|Twitterbot|LinkedInBot|WhatsApp|TelegramBot|Applebot/i;
    if (crawlerPatterns.test(userAgent)) {
        return NextResponse.next();
    }

    const basicAuth = req.headers.get('authorization');

    if (basicAuth) {
        const authValue = basicAuth.split(' ')[1];
        const [user, pwd] = atob(authValue).split(':');

        if (
            user === (process.env.BASIC_AUTH_USER || 'admin') &&
            pwd === (process.env.BASIC_AUTH_PASSWORD || 'password')
        ) {
            return NextResponse.next();
        }
    }

    return new NextResponse('Authentication Required', {
        status: 401,
        headers: {
            'WWW-Authenticate': 'Basic realm="HireDeveloper.ae"',
        },
    });
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - images (public images)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
    ],
};
