# hiredeveloper.ae — Deployment Guide

## Stack
- Next.js 16 (SSR — server-side rendering)
- Nodemailer for email
- TypeScript

## Requirements
- Node.js 20+
- npm

## Setup
```bash
git clone git@github.com:lucaskacem/hiredeveloper.ae.git
cd hiredeveloper.ae
npm install
```

## Environment (.env.local)
```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=lucas@digitalunicorn.fr
SMTP_PASS=<app-password>
```

## Build & Run
```bash
npm run build
npm start -- -p 4002
```

## PM2
```bash
pm2 start npm --name hiredeveloper -- start -- -p 4002
pm2 save
```

## Nginx
Reverse proxy to port 4002. Domain: hiredeveloper.ae

## Notes
- SSR site (needs Node.js process running, NOT static)
- ~500+ dynamic pages (developer/marketer hiring, UAE/GCC cities)
- Contact form sends to lucas@digitalunicorn.fr + contact@digitalunicorn.fr
- Rate limited: 5 requests/hour per IP on /api/contact
- Leads backed up to .leads/leads.json
