/* ═══════════════════════════════════════════════════════
   Section 03 — Quebra de Crença
   A virada psicológica da landing page.
   O visitante percebe que o problema não é esforço — é visibilidade.
   Tipografia como protagonista. A quote é o elemento hero.
   Fundo #FFFFFF — ritmo visual.
═══════════════════════════════════════════════════════ */
export function PositioningSection() {
  return (
    <section
      id="perspectiva"
      className="relative overflow-hidden"
      style={{ background: '#FFFFFF' }}
    >
      {/* Radial sutil — dá profundidade sem cor */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(33,139,82,0.025) 0%, transparent 65%)',
        }}
      />

      <div
        className="container-page relative py-[72px] max-lg:py-[56px]"
        style={{ maxWidth: '820px' }}
      >
        {/* Eyebrow */}
        <p
          className="reveal mb-8 text-center text-[0.8125rem] font-medium tracking-[0.06em] uppercase"
          style={{ color: '#218B52' }}
        >
          A virada
        </p>

        {/* Headline */}
        <h2
          className="reveal font-display mb-12 text-center tracking-tight"
          style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
            lineHeight: '1.05',
            color: '#0F2747',
          }}
        >
          Seu negócio já está pronto.{' '}
          <em style={{ color: '#218B52', fontStyle: 'italic' }}>Agora ele precisa ser visto.</em>
        </h2>

        {/* Quote — elemento hero da seção */}
        <div className="reveal mx-auto mb-10" style={{ maxWidth: '680px' }}>
          <div
            className="rounded-[24px] px-10 py-10 text-center max-lg:px-7 max-lg:py-8"
            style={{
              background: '#FFFFFF',
              border: '1px solid rgba(33,139,82,0.15)',
              boxShadow:
                '0 2px 0 rgba(33,139,82,0.12), 0 8px 40px rgba(15,23,42,0.07), 0 2px 8px rgba(15,23,42,0.04)',
            }}
          >
            {/* Acento verde no topo */}
            <div
              className="mx-auto mb-8 rounded-full"
              style={{ width: '36px', height: '3px', background: '#218B52', opacity: 0.5 }}
            />

            <blockquote
              className="font-display tracking-tight"
              style={{
                fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                lineHeight: '1.2',
                color: '#0F2747',
              }}
            >
              O crescimento começa quando sua empresa
              <br className="hidden sm:block" /> passa a fazer parte da decisão.
            </blockquote>
          </div>
        </div>

        {/* Closing */}
        <div
          className="reveal mx-auto text-center text-[1.0625rem] leading-[1.7]"
          style={{ color: '#64748b', maxWidth: '440px' }}
        >
          <p>
            Crescimento não acontece por acaso.
            <br className="hidden sm:block" />
            Acontece quando sua empresa passa a ser encontrada.
          </p>
        </div>
      </div>
    </section>
  )
}
