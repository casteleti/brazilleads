import { Star } from 'lucide-react'

const cases = [
  {
    country: '🇨🇦 Canadá',
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
    country: '🇺🇸 USA',
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
    country: '🇦🇺 Austrália',
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
    <section className="section-padding bg-white">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-green-600 uppercase">
            Resultados reais
          </p>
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Empresários Como Você Que Confiaram na Brazilleads
          </h2>
          <p className="mb-14 text-lg text-slate-600">
            Números reais. Sem exagero. Sem promessas impossíveis.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {cases.map((c) => (
            <div
              key={c.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              {/* Header */}
              <div className="rounded-t-2xl bg-slate-900 px-6 py-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-300">
                    {c.country} · {c.industry}
                  </span>
                  <span className="rounded-full bg-green-500 px-3 py-0.5 text-xs font-bold text-white">
                    {c.metric}
                  </span>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-red-400">Antes:</span>
                    <span className="text-slate-400 line-through">{c.before}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-green-400">Depois:</span>
                    <span className="font-semibold text-white">{c.after}</span>
                  </div>
                  <p className="text-xs text-slate-500">Tempo: {c.timeline}</p>
                </div>
              </div>

              {/* Quote */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-6 flex-1 leading-relaxed text-slate-600 italic">
                  &ldquo;{c.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-slate-900">{c.name}</p>
                  <p className="text-sm text-slate-500">{c.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-6 rounded-2xl bg-blue-900 p-8 md:grid-cols-4">
          {[
            { value: '50+', label: 'empresários atendidos' },
            { value: '4', label: 'países' },
            { value: '40%', label: 'redução média de gasto' },
            { value: '85%', label: 'taxa de retenção' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-black text-white">{s.value}</div>
              <div className="mt-1 text-sm text-blue-200">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
