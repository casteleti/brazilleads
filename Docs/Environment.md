# Environment Variables

See `.env.example` for the full list of required variables.

## Variable Groups

### App

- `NEXT_PUBLIC_SITE_URL` — production URL

### Analytics

- `NEXT_PUBLIC_GA_ID` — Google Analytics 4
- `NEXT_PUBLIC_GTM_ID` — Google Tag Manager
- `NEXT_PUBLIC_META_PIXEL` — Meta Pixel ID
- `NEXT_PUBLIC_CLARITY_ID` — Microsoft Clarity

### Database (Phase 3+)

- `DATABASE_URL` — PostgreSQL connection string
- `REDIS_URL` — Redis connection string

### Integrations

- `RESEND_API_KEY` — Email sending
- `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` — Google OAuth
- `CALENDLY_API_KEY` — Calendar booking
- `RD_STATION_TOKEN` — CRM
- `WHATSAPP_API_URL` / `WHATSAPP_TOKEN` — WhatsApp
- `N8N_WEBHOOK` — Automation

### Infrastructure

- `BIGQUERY_PROJECT` — Analytics warehouse
- `COOLIFY_DEPLOY_HOOK` — Manual deploy trigger

## Setup

```bash
cp .env.example .env.local
# Fill in actual values
```
