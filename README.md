# Brazilleads

> **Crescimento pros nossos lá fora**

Google Ads management & growth strategy platform for Brazilian entrepreneurs in USA, Canada, Australia and Portugal.

---

## Stack

- **Next.js 16** — App Router, Server Components
- **React 19** + **TypeScript 5**
- **Tailwind CSS 4** + **shadcn/ui**
- **React Hook Form** + **Zod**
- **Deployed on Coolify** (self-hosted VPS)

## Quick Start

```bash
git clone https://github.com/casteleti/brazilleads.git
cd brazilleads
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Scripts

| Command              | Description             |
| -------------------- | ----------------------- |
| `npm run dev`        | Start dev server        |
| `npm run build`      | Production build        |
| `npm run start`      | Start production server |
| `npm run lint`       | Run ESLint              |
| `npm run lint:fix`   | Fix ESLint errors       |
| `npm run format`     | Format with Prettier    |
| `npm run type-check` | TypeScript check        |
| `npm run test`       | Run Vitest              |
| `npm run test:e2e`   | Run Playwright          |

## Project Structure

```
app/          — Next.js routes
components/   — Reusable UI components
features/     — Feature modules (landing, crm, dashboard…)
lib/          — Utilities, validations, structured data
config/       — Site config, metadata
types/        — TypeScript types
providers/    — React context providers
server/       — Server-only code (API handlers, webhooks)
integrations/ — Third-party integrations
docs/         — Documentation
```

See [docs/Folder-Structure.md](docs/Folder-Structure.md) for the full tree.

## Environment Variables

```bash
cp .env.example .env.local
```

See [docs/Environment.md](docs/Environment.md) for details.

## Deployment

Auto-deploys to Coolify on push to `main`.

See [docs/Deployment.md](docs/Deployment.md) for details.

## Roadmap

| Phase | Feature              | Status         |
| ----- | -------------------- | -------------- |
| 1     | Landing Page         | 🚧 In Progress |
| 2     | CRM (RD Station)     | ⏳ Planned     |
| 3     | Dashboard + Auth     | ⏳ Planned     |
| 4     | Calendar integration | ⏳ Planned     |
| 5     | WhatsApp automation  | ⏳ Planned     |
| 6     | AI features          | ⏳ Planned     |
| 7     | Blog + CMS           | ⏳ Planned     |
| 8     | Multi-language       | ⏳ Planned     |

## License

Private — All rights reserved © Brazilleads
