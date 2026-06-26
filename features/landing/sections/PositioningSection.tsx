/* ═══════════════════════════════════════════════════════
   Section 03 — Quebra de Crença
   Tipografia como protagonista. Editorial puro.
   Sem cards, sem diagramas, sem CTAs.
   Fundo #FFFFFF — ritmo visual.
═══════════════════════════════════════════════════════ */
export function PositioningSection() {
  return (
    <section
      id="perspectiva"
      className="relative overflow-hidden"
      style={{ background: '#FFFFFF' }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 50% 40% at 50% 0%, rgba(33,139,82,0.02) 0%, transparent 55%),' +
            'radial-gradient(ellipse 40% 30% at 50% 100%, rgba(15,23,42,0.01) 0%, transparent 50%)',
        }}
      />

      <div
        className="container-page relative py-[100px] max-lg:py-[72px]"
        style={{ maxWidth: '900px' }}
      >
        {/* Eyebrow */}
        <p
          className="reveal mb-10 text-center text-[0.8125rem] font-medium"
          style={{ color: '#218B52' }}
        >
          Uma nova perspectiva
        </p>

        {/* Main headline — tipografia como protagonista */}
        <h2
          className="reveal font-display mb-12 text-center tracking-tight"
          style={{
            fontSize: 'clamp(2.875rem, 6vw, 4.5rem)',
            lineHeight: '1.0',
            color: '#0F2747',
          }}
        >
          Pare de tentar trabalhar mais.
          <br />
          <span style={{ color: '#218B52', fontStyle: 'italic' }}>Comece a ser encontrado.</span>
        </h2>

        {/* Divider */}
        <div
          className="reveal mx-auto mb-12"
          style={{ width: '48px', height: '2px', background: 'rgba(33,139,82,0.3)' }}
        />

        {/* Quote — centro emocional */}
        <div className="reveal mx-auto mb-12" style={{ maxWidth: '720px' }}>
          <div
            className="rounded-[28px] px-10 py-10 text-center max-lg:px-7 max-lg:py-8"
            style={{
              background: '#F6F8F5',
              border: '1px solid rgba(15,23,42,0.06)',
            }}
          >
            <div
              className="font-display mx-auto mb-4 leading-none select-none"
              style={{
                fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                color: 'rgba(33,139,82,0.2)',
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

        {/* Closing copy */}
        <div
          className="reveal mx-auto space-y-2 text-center text-[1.0625rem] leading-[1.7]"
          style={{ color: '#475569', maxWidth: '480px' }}
        >
          <p>Os melhores negócios nem sempre são os mais escolhidos.</p>
          <p>Na maioria das vezes, são os mais fáceis de encontrar.</p>
        </div>
      </div>
    </section>
  )
}
