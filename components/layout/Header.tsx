import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-900 text-sm font-black text-white">
            BL
          </div>
          <span className="font-bold text-slate-900">Brazilleads</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="#como-funciona" className="text-sm text-slate-600 hover:text-slate-900">
            Como funciona
          </Link>
          <Link href="#investimento" className="text-sm text-slate-600 hover:text-slate-900">
            Preços
          </Link>
        </nav>

        <Button
          asChild
          className="bg-green-600 font-semibold text-white hover:bg-green-700"
          size="sm"
        >
          <Link href="#contato">Falar com especialista</Link>
        </Button>
      </div>
    </header>
  )
}
