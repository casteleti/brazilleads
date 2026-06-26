import Link from 'next/link'
import { ArrowRight, BarChart2, Globe, Layers, Mail, Monitor, TrendingUp } from 'lucide-react'

/* ═══════════════════════════════════════════════════════
   Section 06 — Ecossistema de Crescimento
   Diagrama SVG desktop: hub central + 6 satélites.
   Mobile: hub card + grid 2×3.
   Fundo #F6F8F5 — ritmo visual.
═══════════════════════════════════════════════════════ */

const leftModules = [
  { icon: TrendingUp, label: 'Google Ads', desc: 'Busca paga no Google' },
  { icon: Globe, label: 'Meta Ads', desc: 'Facebook e Instagram' },
  { icon: Monitor, label: 'Google Business', desc: 'Presença local orgânica' },
]

const rightModules = [
  { icon: Layers, label: 'Landing Pages', desc: 'Páginas de conversão' },
  { icon: BarChart2, label: 'Analytics', desc: 'Rastreamento e dados' },
  { icon: Mail, label: 'CRM + WhatsApp', desc: 'Gestão de relacionamento' },
]

const allModules = [...leftModules, ...rightModules]

export function EcosystemSection() {
  const cardY = [20, 155, 290]
  const cardCY = [75, 210, 345]

  return (
    <section
      id="ecossistema"
      className="relative overflow-hidden"
      style={{ background: '#F6F8F5' }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 55% 40% at 50% 0%, rgba(33,139,82,0.04) 0%, transparent 60%),' +
            'radial-gradient(ellipse 40% 35% at 50% 100%, rgba(15,23,42,0.02) 0%, transparent 55%)',
        }}
      />

      <div className="container-page relative py-[88px] max-lg:py-[64px]">
        {/* Header */}
        <div className="mx-auto mb-14 text-center" style={{ maxWidth: '680px' }}>
          <p className="reveal mb-5 text-[0.8125rem] font-medium" style={{ color: '#218B52' }}>
            Ecossistema de crescimento
          </p>

          <h2
            className="reveal font-display mb-5 tracking-tight"
            style={{
              fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
              lineHeight: '1.0',
              color: '#0F2747',
            }}
          >
            Muito mais do que anúncios.{' '}
            <em style={{ color: '#218B52', fontStyle: 'italic' }}>
              Um sistema completo de aquisição.
            </em>
          </h2>

          <p
            className="reveal text-[1.0625rem] leading-[1.65]"
            style={{ color: '#475569', maxWidth: '560px', margin: '0 auto' }}
          >
            Cada ferramenta possui uma função. Quando trabalham juntas, criam uma operação capaz de
            atrair, acompanhar e converter novos clientes continuamente.
          </p>
        </div>

        {/* SVG Diagram — desktop */}
        <div className="reveal mx-auto hidden lg:block" style={{ maxWidth: '1100px' }}>
          <svg
            width="100%"
            viewBox="0 0 1100 420"
            xmlns="http://www.w3.org/2000/svg"
            style={{ overflow: 'visible' }}
            aria-label="Ecossistema Brazilleads"
          >
            <defs>
              <filter id="eco-card-shadow" x="-8%" y="-15%" width="116%" height="140%">
                <feDropShadow
                  dx="0"
                  dy="2"
                  stdDeviation="8"
                  floodColor="rgba(15,23,42,0.07)"
                  floodOpacity="1"
                />
              </filter>
              <filter id="eco-hub-shadow" x="-10%" y="-8%" width="120%" height="120%">
                <feDropShadow
                  dx="0"
                  dy="4"
                  stdDeviation="20"
                  floodColor="rgba(15,23,42,0.09)"
                  floodOpacity="1"
                />
              </filter>
            </defs>

            {/* Connection lines */}
            {cardCY.map((cy) => (
              <g key={cy}>
                <line
                  x1="280"
                  y1={cy}
                  x2="410"
                  y2={cy}
                  stroke="rgba(15,23,42,0.09)"
                  strokeWidth="1.5"
                  strokeDasharray="5 4"
                />
                <line
                  x1="820"
                  y1={cy}
                  x2="690"
                  y2={cy}
                  stroke="rgba(15,23,42,0.09)"
                  strokeWidth="1.5"
                  strokeDasharray="5 4"
                />
                <circle cx="282" cy={cy} r="3.5" fill="rgba(33,139,82,0.35)" />
                <circle cx="818" cy={cy} r="3.5" fill="rgba(33,139,82,0.35)" />
              </g>
            ))}
            {cardCY.map((cy) => (
              <g key={`hub-${cy}`}>
                <circle cx="408" cy={cy} r="3.5" fill="rgba(33,139,82,0.35)" />
                <circle cx="692" cy={cy} r="3.5" fill="rgba(33,139,82,0.35)" />
              </g>
            ))}

            {/* Left cards */}
            {leftModules.map(({ label, desc }, i) => (
              <g key={label} filter="url(#eco-card-shadow)">
                <rect
                  x="0"
                  y={cardY[i]}
                  width="280"
                  height="110"
                  rx="20"
                  fill="white"
                  stroke="rgba(15,23,42,0.08)"
                  strokeWidth="1"
                />
                <circle cx="48" cy={cardCY[i]} r="24" fill="#F0F4F0" />
                <text
                  x="84"
                  y={cardCY[i] - 8}
                  fontFamily="DM Serif Display, Georgia, serif"
                  fontSize="15"
                  fill="#0F2747"
                >
                  {label}
                </text>
                <text
                  x="84"
                  y={cardCY[i] + 12}
                  fontFamily="Inter, ui-sans-serif, sans-serif"
                  fontSize="11.5"
                  fill="#94A3B8"
                >
                  {desc}
                </text>
              </g>
            ))}

            {/* Right cards */}
            {rightModules.map(({ label, desc }, i) => (
              <g key={label} filter="url(#eco-card-shadow)">
                <rect
                  x="820"
                  y={cardY[i]}
                  width="280"
                  height="110"
                  rx="20"
                  fill="white"
                  stroke="rgba(15,23,42,0.08)"
                  strokeWidth="1"
                />
                <circle cx="868" cy={cardCY[i]} r="24" fill="#F0F4F0" />
                <text
                  x="904"
                  y={cardCY[i] - 8}
                  fontFamily="DM Serif Display, Georgia, serif"
                  fontSize="15"
                  fill="#0F2747"
                >
                  {label}
                </text>
                <text
                  x="904"
                  y={cardCY[i] + 12}
                  fontFamily="Inter, ui-sans-serif, sans-serif"
                  fontSize="11.5"
                  fill="#94A3B8"
                >
                  {desc}
                </text>
              </g>
            ))}

            {/* Center Hub */}
            <g filter="url(#eco-hub-shadow)">
              <rect
                x="410"
                y="20"
                width="280"
                height="380"
                rx="28"
                fill="white"
                stroke="rgba(33,139,82,0.22)"
                strokeWidth="1.5"
              />
              <ellipse cx="550" cy="210" rx="100" ry="120" fill="rgba(33,139,82,0.025)" />
              <circle cx="550" cy="135" r="44" fill="#F0F7F3" />
              <circle
                cx="550"
                cy="135"
                r="44"
                fill="none"
                stroke="rgba(33,139,82,0.2)"
                strokeWidth="1.5"
              />
              <text
                x="550"
                y="210"
                textAnchor="middle"
                fontFamily="DM Serif Display, Georgia, serif"
                fontSize="24"
                fill="#0F2747"
              >
                Brazilleads
              </text>
              <text
                x="550"
                y="236"
                textAnchor="middle"
                fontFamily="Inter, ui-sans-serif, sans-serif"
                fontSize="12"
                fill="#94A3B8"
              >
                Ecossistema de crescimento
              </text>
              <circle cx="526" cy="300" r="3" fill="rgba(33,139,82,0.22)" />
              <circle cx="550" cy="300" r="3" fill="rgba(33,139,82,0.22)" />
              <circle cx="574" cy="300" r="3" fill="rgba(33,139,82,0.22)" />
            </g>
          </svg>
        </div>

        {/* Mobile: hub + grid */}
        <div className="reveal lg:hidden">
          <div
            className="mx-auto mb-8 rounded-[28px] border p-8 text-center"
            style={{
              maxWidth: '340px',
              borderColor: 'rgba(33,139,82,0.22)',
              boxShadow: '0 4px 32px rgba(15,23,42,0.07)',
              background: '#fff',
            }}
          >
            <div
              className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl"
              style={{ background: '#F0F7F3', border: '1.5px solid rgba(33,139,82,0.2)' }}
            />
            <p className="font-display text-[1.375rem] leading-snug" style={{ color: '#0F2747' }}>
              Brazilleads
            </p>
            <p className="mt-1 text-[0.8125rem]" style={{ color: '#94A3B8' }}>
              Ecossistema de crescimento
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {allModules.map(({ label, desc }) => (
              <div
                key={label}
                className="rounded-[20px] border bg-white p-5"
                style={{
                  borderColor: 'rgba(15,23,42,0.08)',
                  boxShadow: '0 2px 12px rgba(15,23,42,0.05)',
                }}
              >
                <div className="mb-4 h-10 w-10 rounded-xl" style={{ background: '#F0F4F0' }} />
                <p
                  className="font-display mb-1 text-[0.9375rem] leading-snug"
                  style={{ color: '#0F2747' }}
                >
                  {label}
                </p>
                <p className="text-[0.75rem] leading-[1.5]" style={{ color: '#94A3B8' }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing + CTA */}
        <div className="reveal mx-auto mt-14 text-center" style={{ maxWidth: '540px' }}>
          <p
            className="mb-2 text-[1rem] leading-[1.7]"
            style={{ color: '#0F2747', fontWeight: 500 }}
          >
            Nenhuma ferramenta gera resultados sozinha.
          </p>
          <p className="mb-10 text-[1rem] leading-[1.7]" style={{ color: '#475569' }}>
            A força está na estratégia que conecta todas elas.
          </p>
          <Link
            href="#contato"
            className="inline-flex h-[52px] items-center justify-center gap-2.5 rounded-2xl px-8 text-[0.9375rem] font-semibold text-white transition-opacity duration-150 hover:opacity-90 active:scale-[0.98] max-sm:w-full"
            style={{ background: '#218B52' }}
          >
            Quero conhecer o ecossistema
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  )
}
