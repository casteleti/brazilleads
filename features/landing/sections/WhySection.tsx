/* ═══════════════════════════════════════════════════════
   Section 05 — Nosso Diferencial
   Layout assimétrico: headline editorial grande à esquerda,
   3 pilares de texto à direita (sem cards com ícones).
   Completamente diferente da Section 02 e Section 04.
   Fundo #FFFFFF — ritmo visual.
═══════════════════════════════════════════════════════ */

const pillars = [
  {
    num: '01',
    title: 'Falamos a mesma língua',
    text: 'Entendemos como brasileiros pesquisam, confiam e tomam decisões. Não apenas traduzimos — interpretamos.',
  },
  {
    num: '02',
    title: 'Conhecemos sua realidade',
    text: 'Empreender fora do Brasil exige estratégias diferentes. Nós construímos campanhas considerando o contexto onde você atua.',
  },
  {
    num: '03',
    title: 'Marketing com contexto',
    text: 'Muito além de cliques. Criamos conexões entre brasileiros que procuram ajuda e brasileiros que decidiram empreender.',
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
            'radial-gradient(ellipse 55% 40% at 0% 50%, rgba(33,139,82,0.025) 0%, transparent 60%),' +
            'radial-gradient(ellipse 45% 35% at 100% 20%, rgba(15,23,42,0.015) 0%, transparent 55%)',
        }}
      />

      <div className="container-page relative py-[100px] max-lg:py-[72px]">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[58fr_42fr] lg:gap-20">
          {/* ─── LEFT — headline editorial grande ──────── */}
          <div>
            <p className="reveal mb-8 text-[0.8125rem] font-medium" style={{ color: '#218B52' }}>
              Nosso diferencial
            </p>

            <h2
              className="reveal font-display tracking-tight"
              style={{
                fontSize: 'clamp(2.625rem, 5vw, 4rem)',
                lineHeight: '1.0',
                color: '#0F2747',
              }}
            >
              Conhecer a plataforma é importante.{' '}
              <em style={{ color: '#218B52', fontStyle: 'italic' }}>
                Conhecer as pessoas faz toda a diferença.
              </em>
            </h2>

            {/* Quote — separador visual */}
            <div
              className="reveal mt-10 pt-10"
              style={{ borderTop: '1px solid rgba(15,23,42,0.07)' }}
            >
              <blockquote
                className="font-display"
                style={{
                  fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                  lineHeight: '1.35',
                  color: 'rgba(15,39,71,0.40)',
                  fontStyle: 'italic',
                }}
              >
                &ldquo;Antes de pensar em anúncios,
                <br />
                pensamos nas pessoas.&rdquo;
              </blockquote>
            </div>
          </div>

          {/* ─── RIGHT — 3 pilares de texto ─────────── */}
          <div className="flex flex-col gap-0">
            {pillars.map(({ num, title, text }, i) => (
              <div
                key={num}
                className="reveal py-8"
                style={{
                  borderTop: i === 0 ? '1px solid rgba(15,23,42,0.07)' : 'none',
                  borderBottom: '1px solid rgba(15,23,42,0.07)',
                }}
              >
                <div className="flex items-start gap-5">
                  <span
                    className="font-num mt-0.5 shrink-0 text-[0.6875rem] font-semibold tracking-widest"
                    style={{ color: '#218B52' }}
                  >
                    {num}
                  </span>
                  <div>
                    <h3
                      className="font-display mb-2 leading-snug"
                      style={{ fontSize: '1.125rem', color: '#0F2747' }}
                    >
                      {title}
                    </h3>
                    <p className="text-[0.875rem] leading-[1.7]" style={{ color: '#64748b' }}>
                      {text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
