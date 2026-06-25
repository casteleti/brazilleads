const steps = [
  {
    number: '01',
    phase: 'Descoberta',
    timeline: 'Dias 1–7',
    title: 'Auditoria Completa',
    description:
      'Analisamos sua conta atual em profundidade. Identificamos 5–10 problemas concretos e construímos o mapa do que precisa mudar.',
    outcome: 'Você sabe exatamente o que está errado e como corrigir.',
  },
  {
    number: '02',
    phase: 'Estratégia',
    timeline: 'Dias 8–14',
    title: 'Plano de Crescimento',
    description:
      'Definimos audiências, estrutura de campanhas, proposta de valor e metas realistas. Nada de promessa vazia.',
    outcome: 'Blueprint estratégico personalizado para o seu mercado.',
  },
  {
    number: '03',
    phase: 'Execução',
    timeline: 'Dia 15+',
    title: 'Lançamento e Otimização',
    description:
      'Subimos as campanhas otimizadas, monitoramos diariamente e ajustamos baseado em dados reais. Você acorda com progresso feito.',
    outcome: 'Campanhas no ar, otimizando enquanto você dorme.',
  },
  {
    number: '04',
    phase: 'Escala',
    timeline: 'Contínuo',
    title: 'Crescimento Composto',
    description:
      'Review semanal de performance, reunião mensal de estratégia e escala do que funciona. O resultado melhora todo mês.',
    outcome: 'Resultado crescente mês após mês, sem surpresas.',
  },
]

export function MethodologySection() {
  return (
    <section id="como-funciona" className="section-padding bg-slate-50">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-green-600 uppercase">
            Como trabalhamos
          </p>
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Um Processo Transparente do Início ao Resultado
          </h2>
          <p className="mb-14 text-lg text-slate-600">
            Sem caixa preta. Você sabe o que acontece em cada etapa.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              {/* Step number */}
              <div className="mb-4 flex items-center justify-between">
                <span className="text-5xl font-black text-blue-100">{step.number}</span>
                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                  {step.timeline}
                </span>
              </div>

              <p className="mb-1 text-xs font-semibold tracking-wider text-slate-400 uppercase">
                {step.phase}
              </p>
              <h3 className="mb-3 text-xl font-bold text-slate-900">{step.title}</h3>
              <p className="mb-4 leading-relaxed text-slate-600">{step.description}</p>

              {/* Outcome */}
              <div className="rounded-lg bg-blue-50 px-4 py-3">
                <p className="text-sm font-medium text-blue-900">✓ {step.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
