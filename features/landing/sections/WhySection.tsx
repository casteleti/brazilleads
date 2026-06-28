/* ═══════════════════════════════════════════════════════
   Section 05 — Por que a Brazilleads
   Layout assimétrico mantido: headline editorial à esquerda,
   3 pilares interativos à direita.
   Narrativa: plataformas → pessoas → cultura → decisão → resultado.
   Hover via CSS puro (.why-pillar, .why-num, .why-title, .why-text).
   Fundo #FFFFFF — ritmo visual.
═══════════════════════════════════════════════════════ */

const pillars = [
  {
    num: '01',
    title: 'A busca começa com identificação.',
    text: 'Muito antes da compra, existe confiança. E confiança começa quando o cliente se sente compreendido.',
  },
  {
    num: '02',
    title: 'Sabemos como eles decidem.',
    text: 'Entender como brasileiros no exterior escolhem uma empresa é o primeiro passo para construir uma estratégia eficiente.',
  },
  {
    num: '03',
    title: 'A mensagem certa muda tudo.',
    text: 'Quando você entende as pessoas, seus anúncios deixam de ser interrupções e passam a ser respostas.',
  },
]

export function WhySection() {
  return (
    <section
      id="diferenciais"
      className="relative overflow-hidden"
      style={{ background: '#FFFFFF' }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 55% 40% at 0% 50%, rgba(33,139,82,0.03) 0%, transparent 60%),' +
            'radial-gradient(ellipse 45% 35% at 100% 20%, rgba(15,23,42,0.015) 0%, transparent 55%)',
        }}
      />

      <div className="container-page relative py-[100px] max-lg:py-[72px]">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[58fr_42fr] lg:gap-20">
          {/* ─── LEFT — headline editorial + brand statement ── */}
          <div className="lg:sticky lg:top-24">
            <p
              className="reveal mb-8 text-[0.8125rem] font-semibold tracking-[0.08em] uppercase"
              style={{ color: '#218B52' }}
            >
              Muito além dos anúncios.
            </p>

            <h2
              className="reveal font-display tracking-tight"
              style={{
                fontSize: 'clamp(2.5rem, 4.5vw, 3.75rem)',
                lineHeight: '1.02',
                color: '#0F2747',
              }}
            >
              Toda estratégia começa{' '}
              <em style={{ color: '#218B52', fontStyle: 'italic' }}>entendendo pessoas.</em>
            </h2>

            {/* Brand statement — conclusão visual da seção */}
            <div
              className="reveal mt-12 pt-10"
              style={{ borderTop: '1px solid rgba(15,23,42,0.08)' }}
            >
              {/* Acento verde */}
              <div
                className="mb-5 h-[3px] rounded-full"
                style={{ width: '28px', background: '#218B52' }}
                aria-hidden
              />

              <p
                className="font-display"
                style={{
                  fontSize: 'clamp(1.25rem, 2.2vw, 1.5625rem)',
                  lineHeight: '1.3',
                  color: '#0F2747',
                  fontStyle: 'normal',
                }}
              >
                Toda compra começa com uma decisão.
              </p>

              <p className="mt-3 text-[0.875rem] leading-[1.65]" style={{ color: '#94a3b8' }}>
                É por isso que entendemos pessoas antes de construir estratégias.
              </p>
            </div>
          </div>

          {/* ─── RIGHT — 3 pilares interativos ──────────── */}
          <div className="flex flex-col">
            {pillars.map(({ num, title, text }, i) => (
              <div
                key={num}
                className="reveal why-pillar"
                style={{
                  paddingTop: '32px',
                  paddingBottom: '32px',
                  borderTop: i === 0 ? '1px solid rgba(15,23,42,0.08)' : 'none',
                  borderBottom: '1px solid rgba(15,23,42,0.08)',
                }}
              >
                <div className="flex items-start gap-5">
                  {/* Número */}
                  <span className="why-num font-num mt-0.5 shrink-0 text-[0.6875rem] font-semibold tracking-widest">
                    {num}
                  </span>

                  <div>
                    <h3
                      className="why-title font-display mb-2.5 leading-snug"
                      style={{ fontSize: '1.125rem', color: '#0F2747' }}
                    >
                      {title}
                    </h3>
                    <p
                      className="why-text text-[0.875rem] leading-[1.75]"
                      style={{ color: '#64748b' }}
                    >
                      {text}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Trust note */}
            <p
              className="reveal mt-8 text-[0.8125rem] leading-[1.6]"
              style={{ color: 'rgba(15,23,42,0.3)' }}
            >
              Tecnologia conecta pessoas. Entender pessoas cria conexões que geram resultados.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
