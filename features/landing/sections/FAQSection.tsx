'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

/* ═══════════════════════════════════════════════════════
   Section 08 — FAQ
   Fundo #F6F8F5 — fecha o ritmo visual antes do CTA final.
   Acordeão: um item aberto por vez. Animação via grid-rows.
═══════════════════════════════════════════════════════ */

const faqs = [
  {
    q: 'Vocês atendem qualquer tipo de negócio?',
    a: 'Atendemos empresas que desejam atrair clientes brasileiros no país onde atuam. Antes de iniciar qualquer projeto, avaliamos se existe potencial para gerar resultados consistentes.',
  },
  {
    q: 'Vocês atendem qualquer país?',
    a: 'Sim. Nossa estratégia é adaptada ao mercado local e ao comportamento dos brasileiros em cada região do mundo.',
  },
  {
    q: 'Preciso ter um site?',
    a: 'Nem sempre. Dependendo da estratégia, podemos utilizar landing pages desenvolvidas especificamente para conversão, sem necessidade de um site completo.',
  },
  {
    q: 'Em quanto tempo começo a ver resultados?',
    a: 'Isso depende do segmento, da concorrência e do investimento. Nosso foco é construir crescimento consistente e sustentável — não resultados artificiais de curto prazo.',
  },
  {
    q: 'Existe contrato de fidelidade?',
    // ⚠️  EDITAR: inserir política comercial real aqui
    a: 'Entre em contato para conhecer nossas condições comerciais. Apresentaremos todas as informações durante a conversa inicial, sem letras miúdas.',
  },
  {
    q: 'Quanto preciso investir?',
    a: 'Cada projeto recebe uma estratégia personalizada. O investimento varia conforme os objetivos, o mercado e o potencial do segmento. Apresentamos um plano detalhado após o diagnóstico inicial.',
  },
  {
    q: 'Como funciona o atendimento?',
    a: 'Todo o acompanhamento acontece em português, de forma próxima, transparente e orientada por resultados. Você sempre sabe o que está sendo feito e por quê.',
  },
]

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (i: number) => setOpen((prev) => (prev === i ? null : i))

  return (
    <section id="faq" className="relative overflow-hidden" style={{ background: '#F6F8F5' }}>
      {/* Radiais sutis */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 55% 40% at 50% 0%, rgba(33,139,82,0.04) 0%, transparent 60%),' +
            'radial-gradient(ellipse 40% 30% at 50% 100%, rgba(15,23,42,0.02) 0%, transparent 55%)',
        }}
      />

      <div className="container-page relative py-[88px] max-lg:py-[64px]">
        {/* ── Header ───────────────────────────────────── */}
        <div className="mx-auto mb-14 text-center" style={{ maxWidth: '680px' }}>
          <p className="reveal mb-5 text-[0.8125rem] font-medium" style={{ color: '#218B52' }}>
            Perguntas frequentes
          </p>

          <h2
            className="reveal font-display mb-5 tracking-tight"
            style={{
              fontSize: 'clamp(2.375rem, 4vw, 3.25rem)',
              lineHeight: '1.05',
              color: '#0F2747',
            }}
          >
            Ainda tem alguma dúvida?
          </h2>

          <p className="reveal text-[1.0625rem] leading-[1.65]" style={{ color: '#475569' }}>
            Respondemos às dúvidas mais comuns para que você possa tomar sua decisão com
            tranquilidade.
          </p>
        </div>

        {/* ── Accordion ────────────────────────────────── */}
        <div className="mx-auto space-y-3" style={{ maxWidth: '900px' }}>
          {faqs.map(({ q, a }, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className="reveal overflow-hidden rounded-[28px] border bg-white"
                style={{
                  borderColor: isOpen ? 'rgba(33,139,82,0.25)' : 'rgba(15,23,42,0.08)',
                  boxShadow: isOpen
                    ? '0 4px 32px rgba(15,23,42,0.07)'
                    : '0 2px 12px rgba(15,23,42,0.04)',
                  transition: 'border-color 200ms ease, box-shadow 200ms ease',
                }}
              >
                {/* Question row */}
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between gap-6 px-8 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className="font-display text-[1.0625rem] leading-snug"
                    style={{ color: '#0F2747' }}
                  >
                    {q}
                  </span>
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-150"
                    style={{
                      background: isOpen ? 'rgba(33,139,82,0.1)' : 'rgba(15,23,42,0.05)',
                    }}
                  >
                    {isOpen ? (
                      <Minus
                        className="h-3.5 w-3.5"
                        style={{ color: '#218B52' }}
                        strokeWidth={2.5}
                      />
                    ) : (
                      <Plus
                        className="h-3.5 w-3.5"
                        style={{ color: '#475569' }}
                        strokeWidth={2.5}
                      />
                    )}
                  </span>
                </button>

                {/* Answer — grid-rows animation (globals.css: .faq-body) */}
                <div className={isOpen ? 'faq-body is-open' : 'faq-body'}>
                  <div>
                    <p
                      className="px-8 pb-6 text-[0.9375rem] leading-[1.7]"
                      style={{ color: '#475569' }}
                    >
                      {a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* ── Reassurance ──────────────────────────────── */}
        <div className="reveal mx-auto mt-12 text-center" style={{ maxWidth: '480px' }}>
          <p className="text-[0.9375rem] leading-[1.7]" style={{ color: '#475569' }}>
            Ainda não encontrou sua resposta?
          </p>
          <p
            className="text-[0.9375rem] leading-[1.7]"
            style={{ color: '#218B52', fontWeight: 500 }}
          >
            Nossa equipe terá prazer em conversar com você.
          </p>
        </div>
      </div>
    </section>
  )
}
