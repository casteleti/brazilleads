import {
  Activity,
  Briefcase,
  Building2,
  Calculator,
  Hammer,
  Heart,
  Scale,
  Scissors,
  ShoppingBag,
  Smile,
  Stethoscope,
  Utensils,
} from 'lucide-react'

/* ═══════════════════════════════════════════════════════
   Section 07 — Negócios que Atendemos
   Grid 4-col desktop / 3-col tablet.
   Mobile: carrossel horizontal com snap scrolling.
   Hover via CSS (.business-card, .business-icon, .business-name).
   reveal wrapper separado do business-card (evita delay no hover).
   Fundo #FFFFFF — ritmo visual.
═══════════════════════════════════════════════════════ */

const businesses = [
  { Icon: Utensils, name: 'Restaurantes', desc: 'Busca local e reservas' },
  { Icon: Scissors, name: 'Salões de Beleza', desc: 'Captação e fidelização' },
  { Icon: Stethoscope, name: 'Clínicas', desc: 'Consultas e procedimentos' },
  { Icon: Smile, name: 'Dentistas', desc: 'Pacientes qualificados' },
  { Icon: Scale, name: 'Advogados', desc: 'Consultas de alto valor' },
  { Icon: Calculator, name: 'Contadores', desc: 'Captação B2B e empresarial' },
  { Icon: ShoppingBag, name: 'Mercados', desc: 'Visibilidade local' },
  { Icon: Building2, name: 'Corretores', desc: 'Captação imobiliária' },
  { Icon: Activity, name: 'Academias', desc: 'Matrículas e retenção' },
  { Icon: Heart, name: 'Pet Shops', desc: 'Clientes recorrentes' },
  { Icon: Hammer, name: 'Construção', desc: 'Projetos e orçamentos' },
  { Icon: Briefcase, name: 'Outros Negócios', desc: 'Estratégia personalizada' },
]

function BusinessCard({ Icon, name, desc }: (typeof businesses)[number]) {
  return (
    <div
      className="business-card flex h-full flex-col rounded-[18px] border bg-white"
      style={{
        padding: '20px',
        borderColor: 'rgba(15,23,42,0.07)',
        boxShadow: '0 1px 8px rgba(15,23,42,0.04)',
      }}
    >
      <div
        className="business-icon mb-4 flex h-10 w-10 items-center justify-center rounded-[10px]"
        style={{ background: '#F6F8F5' }}
      >
        <Icon className="h-[18px] w-[18px]" style={{ color: '#218B52' }} strokeWidth={1.5} />
      </div>

      <h3
        className="business-name font-display mb-1 leading-snug"
        style={{ fontSize: '0.9375rem', color: '#0F2747' }}
      >
        {name}
      </h3>

      <p className="mt-auto text-[0.75rem] leading-[1.5]" style={{ color: '#94a3b8' }}>
        {desc}
      </p>
    </div>
  )
}

export function BusinessesSection() {
  return (
    <section id="segmentos" className="relative overflow-hidden" style={{ background: '#FFFFFF' }}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 50% 40% at 50% 0%, rgba(33,139,82,0.025) 0%, transparent 55%)',
        }}
      />

      <div className="container-page relative py-[88px] max-lg:py-[64px]">
        {/* Header */}
        <div className="mx-auto mb-12 text-center" style={{ maxWidth: '600px' }}>
          <p className="reveal mb-5 text-[0.8125rem] font-medium" style={{ color: '#218B52' }}>
            Quem atendemos
          </p>

          <h2
            className="reveal font-display mb-4 tracking-tight"
            style={{
              fontSize: 'clamp(2.125rem, 3.8vw, 3rem)',
              lineHeight: '1.05',
              color: '#0F2747',
            }}
          >
            Cada negócio tem uma realidade.{' '}
            <em style={{ color: '#218B52', fontStyle: 'italic' }}>Cada estratégia, também.</em>
          </h2>

          <p className="reveal text-[1rem] leading-[1.65]" style={{ color: '#475569' }}>
            Se brasileiros buscam pelo que você oferece, existe uma estratégia feita para o seu
            negócio.
          </p>
        </div>

        {/* ── DESKTOP grid ── */}
        <div className="hidden grid-cols-4 gap-3 sm:grid lg:grid-cols-4">
          {businesses.map(({ Icon, name, desc }, i) => (
            <div key={name} className="reveal" style={{ transitionDelay: `${i * 40}ms` }}>
              <BusinessCard Icon={Icon} name={name} desc={desc} />
            </div>
          ))}
        </div>

        {/* ── MOBILE carousel ── */}
        <div
          className="businesses-scroll sm:hidden"
          style={{
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            gap: '12px',
            paddingInline: '2px',
            paddingBottom: '4px',
          }}
        >
          <style>{`.businesses-scroll::-webkit-scrollbar { display: none; }`}</style>
          {businesses.map(({ Icon, name, desc }) => (
            <div
              key={name}
              style={{
                flexShrink: 0,
                width: 'calc(72vw - 12px)',
                scrollSnapAlign: 'start',
              }}
            >
              <BusinessCard Icon={Icon} name={name} desc={desc} />
            </div>
          ))}
        </div>

        {/* Closing note */}
        <div className="reveal mt-10 text-center">
          <p className="text-[0.9375rem] leading-[1.7]" style={{ color: '#94a3b8' }}>
            Seu segmento não está aqui?{' '}
            <a
              href="#contato"
              className="font-medium underline-offset-2 transition-colors duration-150 hover:underline"
              style={{ color: '#218B52' }}
            >
              Fale com a nossa equipe.
            </a>{' '}
            Se brasileiros buscam pelo que você oferece, temos uma estratégia para você.
          </p>
        </div>
      </div>
    </section>
  )
}
