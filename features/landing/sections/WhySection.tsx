import Link from 'next/link'
import { ArrowRight, Globe, Heart, Lightbulb } from 'lucide-react'

const cards = [
  {
    icon: Globe,
    title: 'Falamos a mesma língua',
    text: 'Não apenas português. Entendemos como brasileiros pesquisam, perguntam, confiam e tomam decisões.',
  },
  {
    icon: Heart,
    title: 'Conhecemos sua realidade',
    text: 'Empreender fora do Brasil exige estratégias diferentes. Construímos campanhas considerando o contexto onde você atua.',
  },
  {
    icon: Lightbulb,
    title: 'Marketing com contexto',
    text: 'Mais do que gerar cliques. Criamos conexões entre brasileiros que procuram ajuda e brasileiros que decidiram empreender no exterior.',
  },
]

/* ═══════════════════════════════════════════════════════
   Section 05 — Por que Brazilleads?
   Fundo branco #FFFFFF — alternância no ritmo visual.
   Objetivo: conexão antes de confiança técnica.
   Layout editorial: 52/48 esquerda conteúdo / direita cards.
═══════════════════════════════════════════════════════ */
export function WhySection() {
  return (
    <section
      id="diferenciais"
      className="relative overflow-hidden"
      style={{ background: '#FFFFFF' }}
    >
      {/* Radiais imperceptíveis */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 55% 40% at 0% 50%, rgba(33,139,82,0.03) 0%, transparent 60%),' +
            'radial-gradient(ellipse 45% 35% at 100% 20%, rgba(15,23,42,0.02) 0%, transparent 55%)',
        }}
      />

      <div className="container-page relative py-[120px] max-lg:py-[80px]">
        <div className="grid grid-cols-1 items-start gap-[72px] lg:grid-cols-[52fr_48fr]">
          {/* ─── LEFT — conteúdo editorial ─────────────── */}
          <div className="flex flex-col">
            {/* Eyebrow */}
            <p className="reveal mb-7 text-[0.8125rem] font-medium" style={{ color: '#218B52' }}>
              Nosso diferencial
            </p>

            {/* Headline */}
            <h2
              className="reveal font-display mb-8 tracking-tight"
              style={{
                fontSize: 'clamp(2.375rem, 4vw, 3.25rem)',
                lineHeight: '1.05',
                color: '#0F2747',
                maxWidth: '580px',
              }}
            >
              Conhecer a plataforma é importante.{' '}
              <em style={{ color: '#218B52', fontStyle: 'italic' }}>
                Conhecer as pessoas faz toda a diferença.
              </em>
            </h2>

            {/* Supporting copy */}
            <div
              className="reveal mb-12 space-y-4 text-[1.0625rem] leading-[1.7]"
              style={{ color: '#475569', maxWidth: '520px' }}
            >
              <p>Toda campanha começa muito antes do primeiro anúncio.</p>
              <p>
                Ela começa entendendo como brasileiros pesquisam, em quem confiam e por que escolhem
                um negócio em vez de outro.
              </p>
              <p>É essa compreensão que torna uma estratégia realmente eficiente.</p>
            </div>

            {/* Highlight quote block */}
            <div
              className="reveal mb-12 rounded-[28px] p-8"
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(15,23,42,0.08)',
                boxShadow: '0 4px 40px rgba(15,23,42,0.06)',
              }}
            >
              {/* Decorative quote mark */}
              <div
                className="font-display mb-3 leading-none"
                aria-hidden
                style={{
                  fontSize: 'clamp(3rem, 5vw, 4rem)',
                  color: 'rgba(33,139,82,0.18)',
                  lineHeight: 1,
                }}
              >
                &ldquo;
              </div>
              <blockquote
                className="font-display leading-snug"
                style={{
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
                  color: '#0F2747',
                }}
              >
                Antes de pensar em anúncios, pensamos nas pessoas.
              </blockquote>
            </div>

            {/* CTA */}
            <div className="reveal">
              <Link
                href="#contato"
                className="inline-flex h-14 items-center justify-center gap-2.5 rounded-2xl px-8 text-[0.9375rem] font-semibold text-white transition-colors duration-150 hover:opacity-90 active:scale-[0.98]"
                style={{ background: '#218B52' }}
              >
                Quero conhecer a Brazilleads
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
            </div>
          </div>

          {/* ─── RIGHT — 3 cards empilhados ─────────────── */}
          <div className="flex flex-col gap-6">
            {cards.map(({ icon: Icon, title, text }, i) => (
              <div
                key={i}
                className="reveal rounded-[28px] border bg-white"
                style={{
                  borderColor: 'rgba(15,23,42,0.08)',
                  boxShadow: '0 2px 16px rgba(15,23,42,0.04)',
                  padding: '36px 32px',
                }}
              >
                {/* Ícone */}
                <div
                  className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{ background: '#F6F8F5' }}
                >
                  <Icon className="h-6 w-6" style={{ color: '#218B52' }} strokeWidth={1.5} />
                </div>

                {/* Título */}
                <h3
                  className="font-display mb-3 leading-snug"
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
        </div>
      </div>
    </section>
  )
}
