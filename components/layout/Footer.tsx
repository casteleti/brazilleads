import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-brand-navy border-t border-white/10 py-12">
      <div className="container-page">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-3 flex items-center gap-2">
              <div className="bg-brand-green font-num flex h-8 w-8 items-center justify-center rounded-md text-sm font-black text-white">
                BL
              </div>
              <span className="font-num font-semibold tracking-tight text-white">Brazilleads</span>
            </div>
            <p className="mb-4 max-w-xs text-sm leading-relaxed text-white/55">
              Crescimento pros nossos lá fora. Google Ads para empresários brasileiros em USA,
              Canadá, Austrália e Portugal.
            </p>
            <p className="text-xs text-white/40">hello@brazilleads.com</p>
          </div>

          {/* Services */}
          <div>
            <p className="font-num mb-4 text-xs font-semibold tracking-wider text-white/60 uppercase">
              Serviços
            </p>
            <ul className="space-y-2 text-sm text-white/55">
              <li>
                <Link
                  href="#como-funciona"
                  className="duration-fast transition-colors hover:text-white"
                >
                  Como funciona
                </Link>
              </li>
              <li>
                <Link
                  href="#investimento"
                  className="duration-fast transition-colors hover:text-white"
                >
                  Preços
                </Link>
              </li>
              <li>
                <Link href="#contato" className="duration-fast transition-colors hover:text-white">
                  Agendar conversa
                </Link>
              </li>
            </ul>
          </div>

          {/* Countries */}
          <div>
            <p className="font-num mb-4 text-xs font-semibold tracking-wider text-white/60 uppercase">
              Países
            </p>
            <ul className="space-y-2 text-sm text-white/55">
              {['Canadá', 'USA', 'Austrália', 'Portugal'].map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/35 md:flex-row">
          <p>© {new Date().getFullYear()} Brazilleads. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="transition-colors hover:text-white/70">
              Privacidade
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white/70">
              Termos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
