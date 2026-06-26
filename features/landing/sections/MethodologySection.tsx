import Link from 'next/link'
import { ArrowRight, BarChart2, Search, Target, TrendingUp } from 'lucide-react'

/* ═══════════════════════════════════════════════════════
   Section 04 — O Método Brazilleads
   4 cards em progressão visual: 01 → 04 (jornada, não lista).
   Card 04 é o destino — fundo verde-tint, borda mais forte.
   Animação escalonada via CSS transitionDelay + .reveal.
   Fundo #F6F8F5 — ritmo visual.
═══════════════════════════════════════════════════════ */

const steps = [
  {
    icon: Search,
    num: '01',
    title: 'Aprendemos antes de agir',
    text: 'Antes do primeiro anúncio, entendemos o seu mercado, a sua cidade e como seus clientes tomam decisões. Estratégia antes de execução.',
    accent: 'rgba(33,139,82,0.12)',
    bg: '#FFFFFF',
    border: 'rgba(15,23,42,0.08)',
  },
  {
    icon: Target,
    num: '02',
    title: 'Você aparece para quem já procura',
    text: 'Posicionamos o seu negócio no momento exato em que brasileiros estão buscando o serviço que você oferece — com intenção real de contratar.',
    accent: 'rgba(33,139,82,0.18)',
    bg: '#FFFFFF',
    border: 'rgba(15,23,42,0.08)',
  },
  {
    icon: BarChart2,
    num: '03',
    title: 'Melhoramos com base em resultados',
    text: 'Analisamos o que funciona e ajustamos continuamente. Cada decisão é tomada a partir de dados reais — não de intuição.',
    accent: 'rgba(33,139,82,0.25)',
    bg: '#FFFFFF',
    border: 'rgba(15,23,42,0.08)',
  },
  {
    icon: TrendingUp,
    num: '04',
    title: 'Crescimento que se mantém',
    text: 'O resultado é uma operação comercial previsível: mais clientes qualificados, mais oportunidades, e um negócio que cresce de forma consistente.',
    accent: 'rgba(33,139,82,0.55)',
    bg: 'rgba(33,139,82,0.03)',
    border: 'rgba(33,139,82,0.18)',
  },
]

export function MethodologySection() {
  return (
    <section
      id="como-funciona"
      className="relative overflow-hidden"
      style={{ background: '#F6F8F5' }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(33,139,82,0.04) 0%, transparent 65%),' +
            'radial-gradient(ellipse 50% 40% at 50% 100%, rgba(15,23,42,0.02) 0%, transparent 55%)',
        }}
      />

      <div className="container-page relative py-[88px] max-lg:py-[64px]">
        {/* Header */}
        <div className="reveal mx-auto mb-14 text-center" style={{ maxWidth: '680px' }}>
          <p className="mb-5 text-[0.8125rem] font-medium" style={{ color: '#218B52' }}>
            Nosso método
          </p>

          <h2
            className="font-display mb-5 tracking-tight"
            style={{
              fontSize: 'clamp(2.25rem, 4.5vw, 3.375rem)',
              lineHeight: '1.05',
              color: '#0F2747',
            }}
          >
            Não vendemos anúncios.{' '}
            <em style={{ color: '#218B52', fontStyle: 'italic' }}>Entregamos crescimento.</em>
          </h2>

          <p className="text-[1.0625rem] leading-[1.65]" style={{ color: '#475569' }}>
            Antes do primeiro anúncio, entendemos o seu mercado. É assim que construímos estratégias
            que conectam os clientes certos ao seu negócio — e se mantêm ao longo do tempo.
          </p>
        </div>

        {/* 4 cards — progressão visual escalonada */}
        <div className="method-cards mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, num, title, text, accent, bg, border }, i) => (
            /* reveal wrapper: handles scroll animation + stagger delay
               method-card is the inner element: handles hover independently */
            <div key={num} className="reveal" style={{ transitionDelay: `${i * 90}ms` }}>
              <div
                className="method-card flex h-full flex-col rounded-[24px] border"
                style={{
                  background: bg,
                  borderColor: border,
                  boxShadow: '0 2px 16px rgba(15,23,42,0.05)',
                  padding: '32px 28px',
                  borderTop: `3px solid ${accent}`,
                }}
              >
                {/* Número */}
                <span
                  className="mb-5 block text-[0.6875rem] font-semibold tracking-widest uppercase"
                  style={{ color: i === 3 ? '#218B52' : 'rgba(15,23,42,0.2)' }}
                >
                  {num}
                </span>

                {/* Ícone */}
                <div
                  className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{
                    background: i === 3 ? 'rgba(33,139,82,0.1)' : '#F6F8F5',
                  }}
                >
                  <Icon
                    className="h-5 w-5"
                    style={{ color: '#218B52' }}
                    strokeWidth={i === 3 ? 2 : 1.5}
                  />
                </div>

                {/* Título */}
                <h3
                  className="font-display mb-3 leading-snug"
                  style={{
                    fontSize: '1.0625rem',
                    color: '#0F2747',
                    fontWeight: i === 3 ? 400 : 400,
                  }}
                >
                  {title}
                </h3>

                {/* Texto */}
                <p className="text-[0.875rem] leading-[1.7]" style={{ color: '#475569' }}>
                  {text}
                </p>

                {/* Connector — nos primeiros 3 cards em desktop */}
                {i < 3 && (
                  <div className="mt-auto hidden pt-6 lg:block" aria-hidden>
                    <div className="h-px w-full" style={{ background: 'rgba(15,23,42,0.06)' }} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA — próximo passo natural */}
        <div className="reveal flex flex-col items-center gap-3 text-center">
          <p className="text-[0.9375rem]" style={{ color: '#64748b' }}>
            Você cuida do negócio. Nós cuidamos para que as pessoas certas encontrem você.
          </p>
          <Link
            href="#contato"
            className="mt-3 inline-flex h-[52px] items-center justify-center gap-2.5 rounded-2xl px-8 text-[0.9375rem] font-semibold text-white transition-opacity duration-150 hover:opacity-90 active:scale-[0.98] max-sm:w-full"
            style={{ background: '#218B52' }}
          >
            Quero conhecer o método
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  )
}
