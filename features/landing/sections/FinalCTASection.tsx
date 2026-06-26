'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { track } from '@/lib/tracking'

/* ═══════════════════════════════════════════════════════
   Section 09 — CTA Final
   Fundo navy #0F2747 — conclusão emocional da landing page.
   Fecha a história que o Hero abriu.
   Tipografia pura. Um único objetivo: o clique.
═══════════════════════════════════════════════════════ */

const trust = ['Diagnóstico estratégico inicial', 'Atendimento em português', 'Sem compromisso']

export function FinalCTASection() {
  return (
    <section id="contato" className="relative overflow-hidden" style={{ background: '#0F2747' }}>
      {/* Radiais profundos sobre navy */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(33,139,82,0.09) 0%, transparent 60%),' +
            'radial-gradient(ellipse 50% 40% at 50% 100%, rgba(255,255,255,0.02) 0%, transparent 55%)',
        }}
      />

      <div className="container-page relative py-[112px] max-lg:py-[80px]">
        <div className="mx-auto text-center" style={{ maxWidth: '900px' }}>
          {/* Eyebrow */}
          <p className="reveal mb-8 text-[0.8125rem] font-medium" style={{ color: '#4ade80' }}>
            Pronto para dar o próximo passo?
          </p>

          {/* Headline */}
          <h2
            className="reveal font-display mb-8 tracking-tight"
            style={{
              fontSize: 'clamp(2.625rem, 5.5vw, 4.5rem)',
              lineHeight: '1.0',
              color: '#ffffff',
            }}
          >
            Você já fez a parte mais difícil.{' '}
            <em style={{ color: '#4ade80', fontStyle: 'italic' }}>
              Agora deixe que as pessoas certas encontrem você.
            </em>
          </h2>

          {/* Supporting copy */}
          <p
            className="reveal mx-auto mb-12 text-[1.125rem] leading-[1.7]"
            style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '620px' }}
          >
            Todos os dias, brasileiros procuram exatamente o serviço que você oferece. Nossa missão
            é garantir que eles encontrem o seu negócio antes de encontrarem outra empresa.
          </p>

          {/* CTA */}
          <div className="reveal mb-10">
            <Link
              href="https://wa.me/+1000000000"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                track.contact('Quero conversar com a Brazilleads', 'final_cta')
                track.ctaClick('Quero conversar com a Brazilleads', 'final_cta', 'whatsapp')
              }}
              className="inline-flex h-16 items-center justify-center gap-3 rounded-2xl px-10 text-[1rem] font-semibold text-white transition-opacity duration-150 hover:opacity-90 active:scale-[0.98] max-sm:w-full"
              style={{ background: '#218B52', boxShadow: '0 4px 24px rgba(33,139,82,0.35)' }}
            >
              Quero conversar com a Brazilleads
              <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
            </Link>
          </div>

          {/* Trust items */}
          <div className="reveal flex flex-wrap items-center justify-center gap-6">
            {trust.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2
                  className="h-4 w-4 shrink-0"
                  style={{ color: '#4ade80' }}
                  strokeWidth={2}
                />
                <span className="text-[0.875rem]" style={{ color: 'rgba(255,255,255,0.60)' }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
