# Deployment

## Overview

Production deployments run on **Coolify** (self-hosted, VPS `167.233.105.48`).

GitHub push to `main` → Coolify auto-deploys.

## Build

```bash
npm run build   # Production build
npm run start   # Start production server
```

## Environment

Copy `.env.example` → `.env.local` and fill in all values.

## Coolify Configuration

| Setting       | Value                       |
| ------------- | --------------------------- |
| URL           | http://167.233.105.48:8000/ |
| Project       | My first project            |
| App           | brazilleads                 |
| Build command | `npm run build`             |
| Start command | `npm run start`             |
| Port          | 3000                        |
| Health check  | `/api/health`               |

## Domain

- Production: `https://brazilleads.com`
- DNS: Cloudflare → VPS IP `167.233.105.48`

## Future: Country subpaths

- `brazilleads.com/usa`
- `brazilleads.com/canada`
- `brazilleads.com/australia`
- `brazilleads.com/portugal`
