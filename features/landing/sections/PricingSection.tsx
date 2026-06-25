import { CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

const plans = [
  {
    name: 'Auditoria',
    type: 'one-time',
    price: '$399',
    currency: 'USD',
    period: 'pagamento único',
    description: 'Entenda exatamente o que está errado antes de investir mais.',
    timeline: 'Entrega em 5–7 dias',
    cta: 'Solicitar Auditoria',
    highlighted: false,
    items: [
      'Análise profunda da conta',
      'Relatório em PDF (20–30 páginas)',
      '5 a 10 problemas identificados',
      'Recomendações específicas e priorizadas',
      'Call de 30 min explicando tudo',
      'Proposta personalizada (sem obrigação)',
    ],
  },
  {
    name: 'Kickstart',
    type: 'combo',
    price: '$2.997',
    currency: 'USD',
    period: '3 meses · pagamento único',
    description: 'O caminho mais rápido para resultado comprovado.',
    timeline: 'Resultado em 90 dias',
    cta: 'Começar Agora',
    highlighted: true,
    badge: 'Mais escolhido',
    savings: 'Economize $300 vs contratar separado',
    items: [
      'Auditoria completa (Dia 1)',
      'Setup otimizado (Semana 1)',
      '3 meses de gestão e otimização diária',
      '3 relatórios mensais detalhados',
      '3 reuniões de review estratégico',
      'Suporte prioritário via WhatsApp',
      'Garantia: resultado em 90 dias ou 50% de reembolso',
    ],
  },
  {
    name: 'Gestão Mensal',
    type: 'monthly',
    price: '$999',
    currency: 'USD',
    period: 'por mês · sem contrato',
    description: 'Crescimento consistente com acompanhamento contínuo.',
    timeline: 'Resultado em 30–60 dias',
    cta: 'Iniciar Gestão',
    highlighted: false,
    items: [
      'Otimização diária das campanhas',
      'A/B testing contínuo',
      'Relatório semanal de performance',
      '1 reunião mensal de estratégia',
      'Suporte via WhatsApp',
      'Sem contrato — cancela quando quiser',
      'Garantia de 60 dias',
    ],
  },
]

export function PricingSection() {
  return (
    <section id="investimento" className="section-padding bg-white">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-green-600 uppercase">
            Investimento
          </p>
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Preço Transparente. Resultado Garantido.
          </h2>
          <p className="mb-14 text-lg text-slate-600">
            Se você gasta $3k/mês em anúncios e reduzimos para $1.5k mas você vende 2x mais — seu
            retorno acontece em 1–2 meses.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl items-start gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-7 shadow-sm ${
                plan.highlighted
                  ? 'border-blue-900 bg-blue-900 text-white shadow-xl ring-2 ring-blue-900'
                  : 'border-slate-200 bg-white'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <Badge className="bg-green-500 px-4 py-1 text-xs font-bold text-white shadow">
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <div className="mb-6">
                <p
                  className={`mb-1 text-sm font-semibold tracking-wider uppercase ${plan.highlighted ? 'text-blue-200' : 'text-slate-400'}`}
                >
                  {plan.name}
                </p>
                <div className="flex items-end gap-1">
                  <span
                    className={`text-4xl font-black ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`mb-1 text-sm ${plan.highlighted ? 'text-blue-200' : 'text-slate-500'}`}
                  >
                    {plan.currency}
                  </span>
                </div>
                <p className={`text-sm ${plan.highlighted ? 'text-blue-200' : 'text-slate-500'}`}>
                  {plan.period}
                </p>
                {plan.savings && (
                  <p className="mt-2 rounded-lg bg-green-500/20 px-3 py-1.5 text-sm font-medium text-green-300">
                    {plan.savings}
                  </p>
                )}
              </div>

              <p
                className={`mb-6 text-sm leading-relaxed ${plan.highlighted ? 'text-blue-100' : 'text-slate-600'}`}
              >
                {plan.description}
              </p>

              <ul className="mb-8 flex-1 space-y-3">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle
                      className={`mt-0.5 h-4 w-4 shrink-0 ${plan.highlighted ? 'text-green-400' : 'text-green-600'}`}
                    />
                    <span
                      className={`text-sm ${plan.highlighted ? 'text-blue-100' : 'text-slate-600'}`}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mb-4">
                <Button
                  asChild
                  className={`w-full font-semibold ${
                    plan.highlighted
                      ? 'bg-green-500 text-white hover:bg-green-400'
                      : 'bg-blue-900 text-white hover:bg-blue-800'
                  }`}
                  size="lg"
                >
                  <Link href="#contato">{plan.cta}</Link>
                </Button>
              </div>

              <p
                className={`text-center text-xs ${plan.highlighted ? 'text-blue-300' : 'text-slate-400'}`}
              >
                {plan.timeline}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-slate-500">
          Preços em USD. Pagamento por transferência bancária, PIX (via câmbio) ou cartão
          internacional.
        </p>
      </div>
    </section>
  )
}
