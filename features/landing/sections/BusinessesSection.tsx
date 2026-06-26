import {
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
   Cards limpos: ícone + nome apenas. Sem descrição.
   Grid 4-col desktop / 3-col tablet / 2-col mobile.
   Fundo #FFFFFF — ritmo visual.
═══════════════════════════════════════════════════════ */

const businesses = [
  { icon: Utensils, name: 'Restaurantes' },
  { icon: Scissors, name: 'Salões de Beleza' },
  { icon: Stethoscope, name: 'Clínicas' },
  { icon: Smile, name: 'Dentistas' },
  { icon: Scale, name: 'Advogados' },
  { icon: Calculator, name: 'Contadores' },
  { icon: ShoppingCart, name: 'Mercados' },
  { icon: Home, name: 'Corretores' },
  { icon: Dumbbell, name: 'Academias' },
  { icon: Heart, name: 'Pet Shops' },
  { icon: Hammer, name: 'Construção' },
  { icon: Briefcase, name: 'Outros Negócios' },
]

export function BusinessesSection() {
  return (
    <section id="segmentos" className="relative overflow-hidden" style={{ background: '#FFFFFF' }}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 50% 40% at 50% 0%, rgba(33,139,82,0.025) 0%, transparent 55%),' +
            'radial-gradient(ellipse 40% 30% at 50% 100%, rgba(15,23,42,0.015) 0%, transparent 50%)',
        }}
      />

      <div className="container-page relative py-[88px] max-lg:py-[64px]">
        {/* Header */}
        <div className="mx-auto mb-14 text-center" style={{ maxWidth: '620px' }}>
          <p className="reveal mb-5 text-[0.8125rem] font-medium" style={{ color: '#218B52' }}>
            Quem atendemos
          </p>

          <h2
            className="reveal font-display mb-5 tracking-tight"
            style={{
              fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
              lineHeight: '1.05',
              color: '#0F2747',
            }}
          >
            Seu negócio pode crescer com a{' '}
            <em style={{ color: '#218B52', fontStyle: 'italic' }}>estratégia certa.</em>
          </h2>

          <p className="reveal text-[1.0625rem] leading-[1.65]" style={{ color: '#475569' }}>
            Se brasileiros procuram pelo seu serviço, existe uma estratégia para você.
          </p>
        </div>

        {/* Grid */}
        <div className="reveal grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {businesses.map(({ icon: Icon, name }) => (
            <div
              key={name}
              className="business-card flex flex-col items-start rounded-[20px] border bg-white p-5"
              style={{
                borderColor: 'rgba(15,23,42,0.08)',
                boxShadow: '0 2px 12px rgba(15,23,42,0.04)',
              }}
            >
              <div
                className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ background: '#F6F8F5' }}
              >
                <Icon className="h-5 w-5" style={{ color: '#218B52' }} strokeWidth={1.5} />
              </div>
              <h3
                className="font-display leading-snug"
                style={{ fontSize: '1rem', color: '#0F2747' }}
              >
                {name}
              </h3>
            </div>
          ))}
        </div>

        {/* Closing note */}
        <div className="reveal mt-10 text-center">
          <p className="text-[0.9375rem]" style={{ color: '#94a3b8' }}>
            Não encontrou seu segmento?{' '}
            <a
              href="#contato"
              className="font-medium transition-colors duration-150"
              style={{ color: '#218B52' }}
            >
              Vamos conversar.
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
