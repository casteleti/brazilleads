# Contributing

## Setup

```bash
git clone https://github.com/casteleti/brazilleads.git
cd brazilleads
npm install
cp .env.example .env.local
npm run dev
```

## Workflow

1. Create branch from `main`
2. Make changes
3. Run `npm run lint && npm run type-check`
4. Commit (Husky runs lint-staged automatically)
5. Push and open PR to `main`

## Branches

| Branch      | Purpose      |
| ----------- | ------------ |
| `main`      | Production   |
| `dev`       | Development  |
| `feature/*` | New features |
| `fix/*`     | Bug fixes    |

## Commit Convention

```
feat: add hero section
fix: form validation error message
chore: update dependencies
docs: add deployment guide
```
