import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

/* ═══════════════════════════════════════════════════════
   Section 03 — Quebra de Crença
   Objetivo: trocar a crença "preciso trabalhar mais"
   por "preciso ser encontrado". Tipografia como protagonista.
   Sem cards, sem diagramas, sem estatísticas.
═══════════════════════════════════════════════════════ */
export function PositioningSection() {
  return (
    <section
      id="perspectiva"
      className="relative overflow-hidden"
      style={{ background: '#FFFFFF' }}
    >
      {/* Radiais quase invisíveis */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 50% 40% at 50% 0%, rgba(33,139,82,0.025) 0%, transparent 55%),' +
            'radial-gradient(ellipse 40% 30% at 50% 100%, rgba(15,23,42,0.015) 0%, transparent 50%)',
        }}
      />

      <div
        className="container-page relative py-[120px] max-lg:py-[80px]"
        style={{ maxWidth: '980px' }}
      >
        {/* ── Eyebrow ──────────────────────────────────── */}
        <p
          className="reveal mb-8 text-center text-[0.8125rem] font-medium"
          style={{ color: '#218B52' }}
        >
          Uma nova perspectiva
        </p>

        {/* ── Headline ─────────────────────────────────── */}
        <h2
          className="reveal font-display mb-10 text-center tracking-tight"
          style={{
            fontSize: 'clamp(2.625rem, 5vw, 3.75rem)',
            lineHeight: '1.0',
            color: '#0F2747',
          }}
        >
          Pare de tentar trabalhar mais.
          <br />
          <span style={{ color: '#218B52', fontStyle: 'italic' }}>Comece a ser encontrado.</span>
        </h2>

        {/* ── Copy ─────────────────────────────────────── */}
        <div
          className="reveal mx-auto mb-14 space-y-4 text-center text-[1.0625rem] leading-[1.7]"
          style={{ color: '#475569', maxWidth: '600px' }}
        >
          <p>Mais esforço não significa mais clientes.</p>
          <p>
            Se as pessoas certas não encontram o seu negócio, todo o restante acontece com muito
            mais dificuldade.
          </p>
          <p>O crescimento começa quando você deixa de ser invisível.</p>
        </div>

        {/* ── Quote block — centro emocional da seção ──── */}
        <div className="reveal mx-auto mb-14" style={{ maxWidth: '760px' }}>
          <div
            className="rounded-[28px] border bg-white px-10 py-10 text-center max-lg:px-7 max-lg:py-8"
            style={{
              borderColor: 'rgba(15,23,42,0.08)',
              boxShadow: '0 4px 40px rgba(15,23,42,0.05)',
            }}
          >
            {/* Aspas decorativas */}
            <div
              className="font-display mx-auto mb-4 leading-none select-none"
              style={{
                fontSize: 'clamp(3rem, 6vw, 5rem)',
                color: 'rgba(33,139,82,0.18)',
                lineHeight: '0.6',
              }}
              aria-hidden
            >
              &ldquo;
            </div>

            <blockquote
              className="font-display tracking-tight"
              style={{
                fontSize: 'clamp(1.375rem, 3vw, 2rem)',
                lineHeight: '1.25',
                color: '#0F2747',
              }}
            >
              As pessoas não podem escolher um negócio
              <br className="hidden sm:block" /> que nunca encontraram.
            </blockquote>
          </div>
        </div>

        {/* ── Supporting paragraph ──────────────────────── */}
        <div
          className="reveal mx-auto mb-12 space-y-2 text-center text-[1.0625rem] leading-[1.7]"
          style={{ color: '#475569', maxWidth: '520px' }}
        >
          <p>Os melhores negócios nem sempre são os mais escolhidos.</p>
          <p>Na maioria das vezes, são os mais fáceis de encontrar.</p>
        </div>

        {/* ── CTA ──────────────────────────────────────── */}
        <div className="reveal flex justify-center">
          <Link
            href="#contato"
            className="inline-flex h-14 items-center justify-center gap-2.5 rounded-2xl px-8 text-[0.9375rem] font-semibold text-white transition-colors duration-150 hover:opacity-90 active:scale-[0.98] max-sm:w-full"
            style={{ background: '#218B52' }}
          >
            Quero mudar isso
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  )
}
