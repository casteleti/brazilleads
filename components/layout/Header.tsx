import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header
      className="border-brand-border bg-brand-warm-white/97 sticky top-0 z-50 border-b backdrop-blur-sm"
      style={{ borderTop: '3px solid #0f2244' }}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-brand-navy flex h-8 w-8 items-center justify-center rounded-md text-sm font-black text-white">
            BL
          </div>
          <span className="font-num text-brand-navy font-semibold tracking-tight">Brazilleads</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Navegação principal">
          <Link
            href="#como-funciona"
            className="text-brand-muted hover:text-brand-navy duration-fast text-sm transition-colors"
          >
            Como funciona
          </Link>
          <Link
            href="#faq"
            className="text-brand-muted hover:text-brand-navy duration-fast text-sm transition-colors"
          >
            Preços
          </Link>
        </nav>

        <Button
          asChild
          className="bg-brand-green hover:bg-brand-navy duration-fast font-semibold text-white transition-colors"
          size="sm"
        >
          <Link href="#contato">Falar com especialista</Link>
        </Button>
      </div>
    </header>
  )
}
