# Folder Structure

```
brazilleads/
├── app/                        # Next.js App Router
│   ├── (marketing)/            # Route group: public pages
│   │   ├── page.tsx            # Home / Landing page
│   │   ├── usa/page.tsx        # USA-specific landing
│   │   ├── canada/page.tsx     # Canada-specific landing
│   │   ├── australia/page.tsx  # Australia-specific landing
│   │   └── portugal/page.tsx   # Portugal-specific landing
│   ├── api/                    # API routes
│   │   └── leads/route.ts      # Lead submission endpoint
│   ├── layout.tsx              # Root layout
│   ├── globals.css             # Global styles + design tokens
│   ├── sitemap.ts              # Dynamic sitemap
│   └── robots.ts               # Robots.txt
│
├── components/                 # Reusable UI components
│   ├── ui/                     # shadcn/ui components
│   ├── common/                 # App-wide common components
│   └── layout/                 # Header, Footer, Navigation
│
├── features/                   # Feature-based modules
│   └── landing/                # Landing page feature
│       ├── components/         # Feature-specific components
│       └── sections/           # Page sections (Hero, Problem, etc.)
│
├── layouts/                    # Page layout wrappers
│
├── lib/                        # Shared utilities
│   ├── utils.ts                # cn(), formatCurrency()
│   ├── structured-data.ts      # JSON-LD schemas
│   └── validations/            # Zod schemas
│
├── hooks/                      # Custom React hooks
├── providers/                  # Context providers
│
├── services/                   # Business logic services
├── server/                     # Server-only code
│   ├── api/                    # Route handlers + utilities
│   └── webhooks/               # Webhook handlers
│
├── integrations/               # Third-party integrations
│   # (Calendly, RD Station, WhatsApp, n8n, etc.)
│
├── config/                     # App configuration
│   ├── site.ts                 # Site metadata + constants
│   └── metadata.ts             # Next.js metadata config
│
├── constants/                  # App-wide constants
├── types/                      # TypeScript type definitions
├── utils/                      # Pure utility functions
├── styles/                     # Additional stylesheets
│
├── public/                     # Static assets
│   ├── fonts/                  # Self-hosted fonts
│   └── images/                 # Optimized images
│
├── scripts/                    # Build/deploy scripts
├── docs/                       # Project documentation
└── tests/                      # Test files
    ├── unit/                   # Vitest unit tests
    └── e2e/                    # Playwright E2E tests
```
