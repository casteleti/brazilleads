import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 py-12">
      <div className="container-page">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-sm font-black text-white">
                BL
              </div>
              <span className="font-bold text-white">Brazilleads</span>
            </div>
            <p className="mb-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Crescimento pros nossos lá fora. Google Ads para empresários brasileiros em USA,
              Canadá, Austrália e Portugal.
            </p>
            <p className="text-xs text-slate-500">📧 hello@brazilleads.com</p>
          </div>

          {/* Services */}
          <div>
            <p className="mb-4 text-sm font-semibold text-white">Serviços</p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="#como-funciona" className="hover:text-white">
                  Como funciona
                </Link>
              </li>
              <li>
                <Link href="#investimento" className="hover:text-white">
                  Preços
                </Link>
              </li>
              <li>
                <Link href="#contato" className="hover:text-white">
                  Agendar conversa
                </Link>
              </li>
            </ul>
          </div>

          {/* Countries */}
          <div>
            <p className="mb-4 text-sm font-semibold text-white">Países</p>
            <ul className="space-y-2 text-sm text-slate-400">
              {['🇨🇦 Canadá', '🇺🇸 USA', '🇦🇺 Austrália', '🇵🇹 Portugal'].map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-xs text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} Brazilleads. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-slate-300">
              Privacidade
            </Link>
            <Link href="/terms" className="hover:text-slate-300">
              Termos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
