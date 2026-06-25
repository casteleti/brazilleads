import { Star } from 'lucide-react'

const cases = [
  {
    country: 'Canadá',
    industry: 'E-commerce',
    before: '$2.000/mês gasto → $1.500 em vendas',
    after: '$1.200/mês gasto → $5.000 em vendas',
    timeline: '45 dias',
    metric: 'ROI +300%',
    quote:
      'A Brazilleads não só reduziu meu gasto em anúncios — triplicou meu retorno. E o melhor: tudo explicado em português.',
    name: 'Marcos T.',
    role: 'E-commerce · Toronto',
  },
  {
    country: 'USA',
    industry: 'Consultoria',
    before: 'Custo por lead: $80',
    after: 'Custo por lead: $25',
    timeline: '30 dias',
    metric: '3x mais leads',
    quote:
      'Em 30 dias meu custo por lead caiu 68%. Com o mesmo orçamento, tenho 3 vezes mais clientes em potencial.',
    name: 'Carla M.',
    role: 'Consultoria · Miami',
  },
  {
    country: 'Austrália',
    industry: 'SaaS',
    before: 'Conversão de 0,5%',
    after: 'Conversão de 3,5%',
    timeline: '60 dias',
    metric: 'Lead 80% mais barato',
    quote:
      'Precisava de dados e provas antes de confiar. Me apresentaram números reais em cada reunião. Resultado confirmado.',
    name: 'Bruno K.',
    role: 'SaaS · Sydney',
  },
]

export function SocialProofSection() {
  return (
    <section className="section-standard bg-white">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="label-eyebrow mb-3">Resultados reais</p>
          <h2 className="font-display text-brand-navy mb-4 text-3xl md:text-4xl">
            Empresários Como Você Que Confiaram na Brazilleads
          </h2>
          <p className="text-brand-muted mb-14 text-lg">
            Números reais. Sem exagero. Sem promessas impossíveis.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {cases.map((c) => (
            <div
              key={c.name}
              className="border-brand-border flex flex-col rounded-lg border bg-white shadow-sm"
            >
              {/* Header */}
              <div className="bg-brand-navy rounded-t-lg px-6 py-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-num text-sm font-medium text-white/60">
                    {c.country} · {c.industry}
                  </span>
                  <span className="font-num rounded-full bg-white/15 px-3 py-0.5 text-xs font-semibold text-white">
                    {c.metric}
                  </span>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-red-400">Antes:</span>
                    <span className="text-white/40 line-through">{c.before}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-brand-green-mid">Depois:</span>
                    <span className="font-semibold text-white">{c.after}</span>
                  </div>
                  <p className="text-xs text-white/40">Tempo: {c.timeline}</p>
                </div>
              </div>

              {/* Quote */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4"
                      style={{ fill: '#9a7209', color: '#9a7209' }}
                      aria-hidden
                    />
                  ))}
                </div>
                <p className="text-brand-body mb-6 flex-1 leading-relaxed italic">
                  &ldquo;{c.quote}&rdquo;
                </p>
                <div>
                  <p className="text-brand-navy font-semibold">{c.name}</p>
                  <p className="text-brand-muted text-sm">{c.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="bg-brand-navy mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-6 rounded-lg p-8 md:grid-cols-4">
          {[
            { value: '50+', label: 'empresários atendidos' },
            { value: '4', label: 'países' },
            { value: '40%', label: 'redução média de gasto' },
            { value: '85%', label: 'taxa de retenção' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-num text-3xl font-black text-white">{s.value}</div>
              <div className="mt-1 text-sm text-white/55">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
