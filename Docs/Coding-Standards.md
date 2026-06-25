# Coding Standards

## TypeScript

- Strict mode enabled
- No `any` types — use `unknown` or proper types
- Prefer `interface` for object shapes, `type` for unions/intersections
- Export types explicitly

## React

- Server Components by default — add `'use client'` only when needed
- Props interfaces named `ComponentNameProps`
- No inline styles — use Tailwind classes
- Use `next/image` for all images
- Use `next/link` for all internal links

## File Naming

| Type       | Convention                     | Example             |
| ---------- | ------------------------------ | ------------------- |
| Components | PascalCase                     | `HeroSection.tsx`   |
| Hooks      | camelCase with `use` prefix    | `useLeadForm.ts`    |
| Utils/lib  | camelCase                      | `formatCurrency.ts` |
| Config     | camelCase                      | `site.ts`           |
| Types      | camelCase                      | `index.ts`          |
| API routes | kebab-case folder + `route.ts` | `leads/route.ts`    |

## Component Structure

```tsx
// 1. Imports
import { cn } from '@/lib/utils'

// 2. Types
interface HeroSectionProps {
  className?: string
}

// 3. Component
export function HeroSection({ className }: HeroSectionProps) {
  return <section className={cn('section-padding', className)}>{/* content */}</section>
}
```

## Styling

- Use `cn()` for conditional classes
- Use `cva()` from `class-variance-authority` for variant components
- Design tokens via CSS variables (see `globals.css`)
- Mobile-first responsive design

## Imports

Use path aliases:

```ts
import { cn } from '@/lib/utils' // ✓
import { cn } from '../../lib/utils' // ✗
```
