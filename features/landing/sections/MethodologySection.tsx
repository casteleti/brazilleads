import Link from 'next/link'
import { ArrowRight, Compass, Target, TrendingUp, Users } from 'lucide-react'

const steps = [
  {
    icon: Compass,
    title: 'Entendemos seu negócio',
    text: 'Conhecemos seu mercado, sua cidade e como seus clientes tomam decisões antes de criar qualquer estratégia.',
  },
  {
    icon: Target,
    title: 'Conectamos você às pessoas certas',
    text: 'Posicionamos seu negócio diante de brasileiros que já demonstram intenção de contratar.',
  },
  {
    icon: TrendingUp,
    title: 'Otimizamos continuamente',
    text: 'Analisamos resultados, realizamos ajustes e melhoramos o desempenho constantemente.',
  },
  {
    icon: Users,
    title: 'Criamos crescimento previsível',
    text: 'Mais contatos qualificados, mais oportunidades e uma operação comercial mais consistente.',
  },
]

/* ═══════════════════════════════════════════════════════
   Section 04 — O Método Brazilleads
   Framework proprietário. Autoridade. Sistema.
   Hover: card sobe + borda verde + siblings em 82%.
   CSS puro via .method-card / .method-cards em globals.css
═══════════════════════════════════════════════════════ */
export function MethodologySection() {
  return (
    <section
      id="como-funciona"
      className="relative overflow-hidden"
      style={{ background: '#F6F8F5' }}
    >
      {/* Radiais imperceptíveis */}
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
        {/* ── Header centralizado ───────────────────────── */}
        <div className="mx-auto mb-16 text-center max-lg:mb-12" style={{ maxWidth: '760px' }}>
          <p className="reveal mb-5 text-[0.8125rem] font-medium" style={{ color: '#218B52' }}>
            Nosso método
          </p>

          <h2
            className="reveal font-display mb-6 tracking-tight"
            style={{
              fontSize: 'clamp(2.75rem, 5vw, 4rem)',
              lineHeight: '1.0',
              color: '#0F2747',
            }}
          >
            Transformamos buscas em oportunidades reais.
          </h2>

          <p
            className="reveal mx-auto text-[1.0625rem] leading-[1.65]"
            style={{ color: '#475569', maxWidth: '680px' }}
          >
            Não acreditamos em campanhas genéricas. Criamos uma estratégia completa para conectar
            seu negócio às pessoas certas, exatamente no momento em que elas procuram pelo serviço
            que você oferece.
          </p>
        </div>

        {/* ── 4 cards horizontais ──────────────────────── */}
        {/*
         * .method-cards + .method-card = hooks para CSS :has()
         * hover: lift 5px + border verde + siblings opacity 82%
         */}
        <div className="method-cards reveal mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <div
              key={i}
              className="method-card flex flex-col rounded-[28px] border bg-white"
              style={{
                borderColor: 'rgba(15,23,42,0.08)',
                boxShadow: '0 2px 16px rgba(15,23,42,0.04)',
                padding: '40px 32px',
              }}
            >
              {/* Número */}
              <span
                className="mb-6 block text-[0.6875rem] font-semibold tracking-widest uppercase"
                style={{ color: 'rgba(15,23,42,0.22)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Ícone */}
              <div
                className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{ background: '#F6F8F5' }}
              >
                <Icon className="h-6 w-6" style={{ color: '#218B52' }} strokeWidth={1.5} />
              </div>

              {/* Título */}
              <h3
                className="font-display mb-4 leading-snug"
                style={{ fontSize: '1.1875rem', color: '#0F2747' }}
              >
                {title}
              </h3>

              {/* Texto */}
              <p className="text-[0.9375rem] leading-[1.7]" style={{ color: '#475569' }}>
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* ── Closing + CTA centralizado ────────────────── */}
        <div className="reveal mx-auto text-center" style={{ maxWidth: '520px' }}>
          <p className="mb-2 text-[1.0625rem] leading-[1.7]" style={{ color: '#0F2747' }}>
            Você continua cuidando do seu negócio.
          </p>
          <p className="mb-10 text-[1.0625rem] leading-[1.7]" style={{ color: '#475569' }}>
            Nós cuidamos para que as pessoas certas encontrem você.
          </p>

          <Link
            href="#contato"
            className="inline-flex h-14 items-center justify-center gap-2.5 rounded-2xl px-8 text-[0.9375rem] font-semibold text-white transition-colors duration-150 hover:opacity-90 active:scale-[0.98] max-sm:w-full"
            style={{ background: '#218B52' }}
          >
            Quero conhecer nossa estratégia
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  )
}
