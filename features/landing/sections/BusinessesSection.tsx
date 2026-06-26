import Link from 'next/link'
import {
  ArrowRight,
  Briefcase,
  Calculator,
  Dumbbell,
  Hammer,
  Heart,
  Home,
  Scale,
  Scissors,
  ShoppingCart,
  Smile,
  Stethoscope,
  Utensils,
} from 'lucide-react'

/* ═══════════════════════════════════════════════════════
   Section 07 — Negócios que Atendemos
   Fundo #FFFFFF — alternância no ritmo visual.
   Objetivo: identificação imediata. O visitante reconhece
   que a Brazilleads trabalha com negócios como o seu.
═══════════════════════════════════════════════════════ */

const businesses = [
  { icon: Utensils, name: 'Restaurantes', desc: 'Culinária que faz a saudade' },
  { icon: Scissors, name: 'Salões de Beleza', desc: 'Estilo que você conhece' },
  { icon: Stethoscope, name: 'Clínicas', desc: 'Saúde com confiança' },
  { icon: Smile, name: 'Dentistas', desc: 'Cuidado em português' },
  { icon: Scale, name: 'Advogados', desc: 'Orientação jurídica confiável' },
  { icon: Calculator, name: 'Contadores', desc: 'Finanças sem burocracia' },
  { icon: ShoppingCart, name: 'Mercados', desc: 'O Brasil pertinho' },
  { icon: Home, name: 'Corretores', desc: 'Imóveis sem surpresas' },
  { icon: Dumbbell, name: 'Academias', desc: 'Motivação sem fronteiras' },
  { icon: Heart, name: 'Pet Shops', desc: 'Para seus companheiros' },
  { icon: Hammer, name: 'Construção', desc: 'Qualidade que você entende' },
  { icon: Briefcase, name: 'Outros Negócios', desc: 'Se brasileiros buscam, ajudamos' },
]

export function BusinessesSection() {
  return (
    <section id="segmentos" className="relative overflow-hidden" style={{ background: '#FFFFFF' }}>
      {/* Radiais sutis */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 50% 40% at 50% 0%, rgba(33,139,82,0.025) 0%, transparent 55%),' +
            'radial-gradient(ellipse 40% 30% at 50% 100%, rgba(15,23,42,0.015) 0%, transparent 50%)',
        }}
      />

      <div className="container-page relative py-[120px] max-lg:py-[80px]">
        {/* ── Header centralizado ───────────────────────── */}
        <div className="mx-auto mb-16 text-center max-lg:mb-12" style={{ maxWidth: '680px' }}>
          <p className="reveal mb-5 text-[0.8125rem] font-medium" style={{ color: '#218B52' }}>
            Quem atendemos
          </p>

          <h2
            className="reveal font-display mb-6 tracking-tight"
            style={{
              fontSize: 'clamp(2.375rem, 4.5vw, 3.25rem)',
              lineHeight: '1.05',
              color: '#0F2747',
            }}
          >
            Seu negócio pode crescer com a estratégia certa.
          </h2>

          <p
            className="reveal mx-auto text-[1.0625rem] leading-[1.65]"
            style={{ color: '#475569', maxWidth: '560px' }}
          >
            Independentemente do segmento, ajudamos empresas brasileiras no exterior a serem
            encontradas pelas pessoas certas no momento certo.
          </p>
        </div>

        {/* ── Grid 4 colunas ────────────────────────────── */}
        <div className="reveal mb-16 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {businesses.map(({ icon: Icon, name, desc }) => (
            <div
              key={name}
              className="business-card flex flex-col rounded-[28px] border bg-white p-6"
              style={{
                borderColor: 'rgba(15,23,42,0.08)',
                boxShadow: '0 2px 16px rgba(15,23,42,0.04)',
              }}
            >
              {/* Icon */}
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{ background: '#F6F8F5' }}
              >
                <Icon className="h-5 w-5" style={{ color: '#218B52' }} strokeWidth={1.5} />
              </div>

              {/* Name */}
              <h3
                className="font-display mb-2 leading-snug"
                style={{ fontSize: '1.0625rem', color: '#0F2747' }}
              >
                {name}
              </h3>

              {/* Description */}
              <p className="text-[0.8125rem] leading-[1.6]" style={{ color: '#94A3B8' }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* ── Closing + CTA ─────────────────────────────── */}
        <div className="reveal mx-auto text-center" style={{ maxWidth: '600px' }}>
          <p className="mb-10 text-[1.0625rem] leading-[1.7]" style={{ color: '#475569' }}>
            Se brasileiros procuram pelo seu serviço, existe uma estratégia para ajudá-los a
            encontrar o seu negócio.
          </p>

          <Link
            href="#contato"
            className="inline-flex h-14 items-center justify-center gap-2.5 rounded-2xl px-8 text-[0.9375rem] font-semibold text-white transition-colors duration-150 hover:opacity-90 active:scale-[0.98] max-sm:w-full"
            style={{ background: '#218B52' }}
          >
            Quero conversar sobre meu negócio
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  )
}
