import Link from 'next/link'
import { ArrowRight, Compass, Target, TrendingUp, Users } from 'lucide-react'

const steps = [
  {
    icon: Compass,
    num: '01',
    title: 'Entendemos seu negócio',
    text: 'Conhecemos seu mercado, sua cidade e como seus clientes tomam decisões antes de criar qualquer estratégia.',
  },
  {
    icon: Target,
    num: '02',
    title: 'Conectamos você às pessoas certas',
    text: 'Posicionamos seu negócio diante de brasileiros que já demonstram intenção de contratar.',
  },
  {
    icon: TrendingUp,
    num: '03',
    title: 'Otimizamos continuamente',
    text: 'Analisamos resultados e ajustamos a estratégia para melhorar o desempenho de forma consistente.',
  },
  {
    icon: Users,
    num: '04',
    title: 'Criamos crescimento previsível',
    text: 'Mais contatos qualificados, mais oportunidades e uma operação comercial mais consistente.',
  },
]

/* ═══════════════════════════════════════════════════════
   Section 04 — O Método Brazilleads
   Framework proprietário. Autoridade. Sistema.
   Fundo #F6F8F5 — ritmo visual.
═══════════════════════════════════════════════════════ */
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
            'radial-gradient(ellipse 55% 40% at 50% 0%, rgba(33,139,82,0.03) 0%, transparent 60%),' +
            'radial-gradient(ellipse 45% 35% at 50% 100%, rgba(15,23,42,0.02) 0%, transparent 55%)',
        }}
      />

      <div className="container-page relative py-[88px] max-lg:py-[64px]">
        {/* Header */}
        <div className="mx-auto mb-12 text-center" style={{ maxWidth: '680px' }}>
          <p className="reveal mb-5 text-[0.8125rem] font-medium" style={{ color: '#218B52' }}>
            Nosso método
          </p>

          <h2
            className="reveal font-display mb-5 tracking-tight"
            style={{
              fontSize: 'clamp(2.375rem, 4.5vw, 3.5rem)',
              lineHeight: '1.0',
              color: '#0F2747',
            }}
          >
            Transformamos buscas em{' '}
            <em style={{ color: '#218B52', fontStyle: 'italic' }}>oportunidades reais.</em>
          </h2>

          <p
            className="reveal text-[1.0625rem] leading-[1.65]"
            style={{ color: '#475569', maxWidth: '600px' }}
          >
            Não acreditamos em campanhas genéricas. Criamos uma estratégia completa para conectar
            seu negócio às pessoas certas, no momento em que elas procuram pelo seu serviço.
          </p>
        </div>

        {/* 4 cards */}
        <div className="method-cards reveal mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, num, title, text }) => (
            <div
              key={num}
              className="method-card flex flex-col rounded-[24px] border bg-white"
              style={{
                borderColor: 'rgba(15,23,42,0.08)',
                boxShadow: '0 2px 16px rgba(15,23,42,0.04)',
                padding: '32px 28px',
              }}
            >
              <span
                className="mb-5 block text-[0.6875rem] font-semibold tracking-widest uppercase"
                style={{ color: 'rgba(15,23,42,0.2)' }}
              >
                {num}
              </span>

              <div
                className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ background: '#F6F8F5' }}
              >
                <Icon className="h-5 w-5" style={{ color: '#218B52' }} strokeWidth={1.5} />
              </div>

              <h3
                className="font-display mb-3 leading-snug"
                style={{ fontSize: '1.125rem', color: '#0F2747' }}
              >
                {title}
              </h3>

              <p className="text-[0.875rem] leading-[1.7]" style={{ color: '#475569' }}>
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal flex flex-col items-center gap-3 text-center">
          <p className="text-[1rem] leading-[1.7]" style={{ color: '#475569' }}>
            Você cuida do negócio. Nós cuidamos para que as pessoas certas encontrem você.
          </p>
          <Link
            href="#contato"
            className="mt-4 inline-flex h-13 items-center justify-center gap-2.5 rounded-2xl px-8 text-[0.9375rem] font-semibold text-white transition-opacity duration-150 hover:opacity-90 active:scale-[0.98] max-sm:w-full"
            style={{ background: '#218B52', height: '52px' }}
          >
            Quero conhecer nossa estratégia
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  )
}
