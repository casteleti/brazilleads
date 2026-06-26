import Link from 'next/link'
import { ExternalLink, Globe, Mail, MessageCircle } from 'lucide-react'

const nav = [
  { label: 'Início', href: '#hero-section' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Quem Atendemos', href: '#segmentos' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
]

const social = [
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/+1000000000' },
  { icon: Mail, label: 'E-mail', href: 'mailto:hello@brazilleads.com' },
  { icon: Globe, label: 'Instagram', href: '#' },
  { icon: ExternalLink, label: 'LinkedIn', href: '#' },
]

export function Footer() {
  return (
    <footer
      style={{
        background: '#081628',
        borderTop: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <div className="container-page py-16 max-lg:py-12">
        {/* ── Main row ─────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_auto_auto]">
          {/* Brand */}
          <div style={{ maxWidth: '320px' }}>
            <div className="mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/imgs/logo_brazilleads_branco.png"
                alt="Brazilleads"
                style={{ height: '28px', width: 'auto', objectFit: 'contain', opacity: 0.9 }}
              />
            </div>
            <p
              className="text-[0.875rem] leading-[1.65]"
              style={{ color: 'rgba(255,255,255,0.45)' }}
            >
              Conectando brasileiros no exterior às pessoas que já procuram pelos seus serviços.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="mb-5 text-[0.6875rem] font-semibold tracking-[0.08em] uppercase"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              Navegação
            </p>
            <ul className="space-y-3">
              {nav.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="footer-link text-[0.875rem]">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              className="mb-5 text-[0.6875rem] font-semibold tracking-[0.08em] uppercase"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              Contato
            </p>
            <ul className="space-y-3">
              {social.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="footer-link flex items-center gap-2.5 text-[0.875rem]"
                  >
                    <Icon className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ───────────────────────────────── */}
        <div className="mt-12 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <p className="text-[0.75rem]" style={{ color: 'rgba(255,255,255,0.28)' }}>
            © Brazilleads — Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
