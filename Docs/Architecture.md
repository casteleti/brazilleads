# Architecture

## Overview

Brazilleads is a Next.js App Router application designed as a Growth Platform for Brazilian entrepreneurs abroad.

## Current Phase

Landing Page — single-page lead generation with form submission and strategy call booking.

## Future Phases

| Phase | Feature                               |
| ----- | ------------------------------------- |
| 2     | CRM integration (RD Station)          |
| 3     | Dashboard & Authentication            |
| 4     | Calendar (Google Calendar + Calendly) |
| 5     | WhatsApp automation                   |
| 6     | AI features                           |
| 7     | Blog + CMS                            |
| 8     | Multi-language + Multi-country        |

## Request Lifecycle

```
Browser → CDN (Cloudflare) → Vercel/Coolify Edge → Next.js App Router
                                                    ├─ Server Components (default)
                                                    ├─ Client Components (only when needed)
                                                    └─ API Routes (/app/api/*)
```

## Data Flow

```
Lead Form → API Route → CRM (RD Station) → Email (Resend) → Calendar (Calendly)
                     ↘ Webhook (n8n)    → WhatsApp notification
```

## Analytics Architecture

```
GTM (Web) → Data Layer → GA4 → BigQuery → Looker Studio
                      → Meta Pixel + CAPI
                      → Google Ads Conversions
                      → Microsoft Clarity (session recording)
```
