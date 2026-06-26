import Link from 'next/link'
import { ArrowRight, Compass, Target, TrendingUp, Users } from 'lucide-react'

const steps = [
  {
    icon: Compass,
    title: 'Entendemos seu negócio',
    text: 'Conhecemos seu mercado, sua cidade e o perfil dos brasileiros que você deseja alcançar.',
  },
  {
    icon: Target,
    title: 'Encontramos quem procura',
    text: 'Posicionamos seu negócio diante das pessoas que já demonstram intenção de contratar.',
  },
  {
    icon: TrendingUp,
    title: 'Otimizamos continuamente',
    text: 'Acompanhamos os dados, ajustamos campanhas e melhoramos os resultados ao longo do tempo.',
  },
  {
    icon: Users,
    title: 'Transformamos interesse em clientes',
    text: 'Mais contatos qualificados, mais oportunidades e um crescimento previsível.',
  },
]

/* ═══════════════════════════════════════════════════════
   Section 04 — O Método
   Turning point: problema → esperança → confiança → desejo
═══════════════════════════════════════════════════════ */
export function MethodologySection() {
  return (
    <section
      id="como-funciona"
      className="relative overflow-hidden"
      style={{ background: '#FFFFFF' }}
    >
      {/* Subtle radial — quase invisível */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 55% 40% at 50% 0%, rgba(33,139,82,0.03) 0%, transparent 60%),' +
            'radial-gradient(ellipse 45% 35% at 50% 100%, rgba(15,23,42,0.02) 0%, transparent 55%)',
        }}
      />

      <div className="container-page relative py-[120px] max-lg:py-[80px]">
        {/* ── Header — centered ────────────────────────── */}
        <div className="mx-auto mb-16 max-w-[720px] text-center max-lg:mb-12">
          <p className="reveal mb-5 text-[0.8125rem] font-medium" style={{ color: '#218B52' }}>
            Nosso método
          </p>

          <h2
            className="reveal font-display mb-6 tracking-tight"
            style={{
              fontSize: 'clamp(2.625rem, 4vw, 3.75rem)',
              lineHeight: '1.0',
              color: '#0F2747',
            }}
          >
            Como transformamos buscas em clientes.
          </h2>

          <p
            className="reveal mx-auto text-[1.0625rem] leading-[1.65]"
            style={{ color: '#475569', maxWidth: '660px' }}
          >
            Criamos uma estratégia completa para que brasileiros encontrem seu negócio no momento em
            que já estão procurando exatamente o que você oferece.
          </p>
        </div>

        {/* ── Cards — 4 colunas desktop, stack mobile ──── */}
        <div className="reveal mb-16 grid grid-cols-1 gap-5 max-lg:gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <div
              key={i}
              className="flex flex-col rounded-3xl border bg-white p-7 max-lg:p-6"
              style={{
                borderColor: 'rgba(15,23,42,0.08)',
                boxShadow: '0 2px 16px rgba(15,23,42,0.04)',
              }}
            >
              {/* Step number */}
              <span
                className="mb-5 block text-[0.6875rem] font-semibold tracking-widest uppercase"
                style={{ color: 'rgba(15,23,42,0.25)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Icon placeholder */}
              <div
                className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{ background: '#F6F8F5' }}
              >
                <Icon className="h-5 w-5" style={{ color: '#218B52' }} strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3
                className="font-display mb-3 text-[1.125rem] leading-snug"
                style={{ color: '#0F2747' }}
              >
                {title}
              </h3>

              {/* Text */}
              <p className="text-[0.9375rem] leading-[1.65]" style={{ color: '#475569' }}>
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* ── Closing + CTA — centered ──────────────────── */}
        <div className="reveal mx-auto max-w-[560px] text-center">
          <p className="mb-2 text-[1.0625rem] leading-[1.7]" style={{ color: '#0F2747' }}>
            Você continua fazendo o que faz melhor.
          </p>
          <p className="mb-10 text-[1.0625rem] leading-[1.7]" style={{ color: '#475569' }}>
            Nós cuidamos para que as pessoas certas encontrem você.
          </p>

          <Link
            href="#contato"
            className="inline-flex h-14 items-center justify-center gap-2.5 rounded-2xl px-8 text-[0.9375rem] font-semibold text-white transition-colors duration-150 hover:opacity-90 active:scale-[0.98] max-sm:w-full"
            style={{ background: '#218B52' }}
          >
            Quero conhecer a estratégia
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  )
}
