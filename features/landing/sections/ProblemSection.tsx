import { Eye } from 'lucide-react'

/* ═══════════════════════════════════════════════════════
   Section 02 — A Oportunidade Invisível
   Layout: coluna de texto à esquerda, imagem 16:9 à direita.
   Copy mínimo — uma verdade, uma conclusão.
   Fundo #F6F8F5 — ritmo visual.
═══════════════════════════════════════════════════════ */
export function ProblemSection() {
  return (
    <section
      id="oportunidade"
      className="relative overflow-hidden"
      style={{ background: '#F6F8F5' }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 55% 50% at 90% 10%, rgba(33,139,82,0.035) 0%, transparent 60%)',
        }}
      />

      <div className="container-page relative py-[88px] max-lg:py-[64px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[42fr_58fr] lg:gap-16">
          {/* ─── LEFT — copy ─────────────────────────────── */}
          <div className="flex flex-col">
            <p className="reveal mb-6 text-[0.8125rem] font-medium" style={{ color: '#218B52' }}>
              A oportunidade invisível
            </p>

            {/* Headline — curto, direto, impactante */}
            <h2
              className="reveal font-display mb-6 tracking-tight"
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 2.875rem)',
                lineHeight: '1.06',
                color: '#0F2747',
                maxWidth: '420px',
              }}
            >
              Clientes não escolhem o melhor negócio.{' '}
              <em style={{ color: '#218B52', fontStyle: 'italic' }}>
                Escolhem o que encontraram primeiro.
              </em>
            </h2>

            {/* Supporting copy — uma verdade, sem overexplain */}
            <p
              className="reveal mb-8 text-[1rem] leading-[1.7]"
              style={{ color: '#475569', maxWidth: '380px' }}
            >
              Quando alguém precisa de um serviço, abre o Google e decide em segundos. Se o seu
              negócio não aparece, ele simplesmente não é considerado.
            </p>

            {/* Insight card — conclusão da seção */}
            <div
              className="reveal rounded-2xl p-5"
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(15,23,42,0.07)',
                boxShadow: '0 2px 12px rgba(15,23,42,0.04)',
                maxWidth: '380px',
              }}
            >
              <div className="flex items-center gap-3.5">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: 'rgba(33,139,82,0.08)' }}
                >
                  <Eye className="h-4.5 w-4.5" style={{ color: '#218B52' }} strokeWidth={1.5} />
                </div>
                <div>
                  <p
                    className="font-display text-[0.9375rem] leading-snug"
                    style={{ color: '#0F2747' }}
                  >
                    A decisão acontece antes do primeiro contato.
                  </p>
                  <p className="mt-0.5 text-[0.8125rem]" style={{ color: '#94a3b8' }}>
                    Quem aparece, recebe a ligação.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ─── RIGHT — ilustração 16:9 ─────────────────── */}
          <div className="reveal flex items-center">
            <div
              className="w-full overflow-hidden rounded-[20px]"
              style={{
                aspectRatio: '16 / 9',
                boxShadow: '0 4px 24px rgba(15,23,42,0.08), 0 1px 4px rgba(15,23,42,0.04)',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/imgs/negocio-invisivel-no-google.webp"
                alt="Negócios visíveis e invisíveis no Google"
                width={1280}
                height={720}
                loading="lazy"
                className="h-full w-full object-cover"
                style={{ objectPosition: 'center center' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
