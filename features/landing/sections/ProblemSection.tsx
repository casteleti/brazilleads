import { Eye } from 'lucide-react'

/* ═══════════════════════════════════════════════════════
   Section 02 — A Oportunidade Invisível
   Fundo #F6F8F5. Copy à esquerda, ilustração conceitual
   à direita. A ilustração conta a história visualmente
   antes da leitura.
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
            'radial-gradient(ellipse 60% 50% at 88% 8%, rgba(33,139,82,0.04) 0%, transparent 65%),' +
            'radial-gradient(ellipse 50% 45% at 10% 92%, rgba(15,23,42,0.025) 0%, transparent 60%)',
        }}
      />

      <div className="container-page relative py-[88px] max-lg:py-[64px]">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[44fr_56fr]">
          {/* ─── LEFT — copy ───────────────────────────── */}
          <div className="flex flex-col">
            <p className="reveal mb-6 text-[0.8125rem] font-medium" style={{ color: '#218B52' }}>
              A oportunidade invisível
            </p>

            {/* Headline — conclusão implícita: não é qualidade, é visibilidade */}
            <h2
              className="reveal font-display mb-6 tracking-tight"
              style={{
                fontSize: 'clamp(2.25rem, 4vw, 3.125rem)',
                lineHeight: '1.0',
                color: '#0F2747',
                maxWidth: '500px',
              }}
            >
              Todos os dias, clientes escolhem negócios que apareceram primeiro.{' '}
              <em style={{ color: '#218B52', fontStyle: 'italic' }}>
                Não porque são melhores. Porque foram encontrados.
              </em>
            </h2>

            {/* Copy — comportamento humano, não linguagem técnica */}
            <div
              className="reveal mb-8 space-y-3 text-[1.0625rem] leading-[1.65]"
              style={{ color: '#475569', maxWidth: '460px' }}
            >
              <p>
                Quando alguém precisa de um serviço, abre o Google e escolhe entre os primeiros
                resultados. O processo inteiro leva menos de dois minutos.
              </p>
              <p>Nesse tempo, seu cliente já decidiu — e raramente você está entre as opções.</p>
            </div>

            {/* Callout card — reforça sem repetir */}
            <div
              className="reveal rounded-3xl p-6"
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(15,23,42,0.08)',
                boxShadow: '0 2px 16px rgba(15,23,42,0.04)',
                maxWidth: '460px',
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: '#F6F8F5' }}
                >
                  <Eye className="h-5 w-5" style={{ color: '#218B52' }} strokeWidth={1.5} />
                </div>
                <div>
                  <p
                    className="font-display mb-1 text-[1rem] leading-snug"
                    style={{ color: '#0F2747' }}
                  >
                    A decisão acontece antes do primeiro contato.
                  </p>
                  <p className="text-[0.875rem] leading-[1.6]" style={{ color: '#475569' }}>
                    Quem aparece nos primeiros resultados recebe a ligação. Quem não aparece, fica
                    esperando.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ─── RIGHT — ilustração conceitual ─────────── */}
          <div className="reveal flex items-center justify-center lg:justify-end">
            <div
              className="relative w-full overflow-hidden rounded-[28px]"
              style={{
                maxWidth: '520px',
                aspectRatio: '1 / 1',
                boxShadow:
                  '0 4px 6px rgba(15,23,42,0.04), 0 16px 48px rgba(15,23,42,0.12), 0 32px 80px rgba(15,23,42,0.08)',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/imgs/negocio-invisivel-no-google.png"
                alt="Mapa conceitual — negócios visíveis e negócios invisíveis no Google"
                className="h-full w-full object-cover"
                style={{ objectPosition: 'center center' }}
              />

              {/* Vinheta sutil nas bordas para integrar com o fundo da seção */}
              <div
                className="pointer-events-none absolute inset-0 rounded-[28px]"
                style={{
                  boxShadow: 'inset 0 0 40px rgba(15,23,42,0.08)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
