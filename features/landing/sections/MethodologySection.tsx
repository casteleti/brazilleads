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
    <section id="como-funciona" className="section-standard bg-brand-warm-white">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="label-eyebrow mb-3">Como trabalhamos</p>
          <h2 className="font-display text-brand-navy mb-4 text-3xl md:text-4xl">
            Um Processo Transparente do Início ao Resultado
          </h2>
          <p className="text-brand-muted mb-14 text-lg">
            Sem caixa preta. Você sabe o que acontece em cada etapa.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
          {steps.map((step) => (
            <div
              key={step.number}
              className="border-brand-border relative rounded-lg border bg-white p-7 shadow-sm"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-num text-brand-navy-tint text-5xl font-black">
                  {step.number}
                </span>
                <span className="bg-brand-green-tint font-num text-brand-green rounded-full px-3 py-1 text-xs font-semibold">
                  {step.timeline}
                </span>
              </div>

              <p className="label-eyebrow mb-1">{step.phase}</p>
              <h3 className="font-display text-brand-navy mb-3 text-xl">{step.title}</h3>
              <p className="text-brand-body mb-4 leading-relaxed">{step.description}</p>

              <div className="bg-brand-navy-tint rounded-md px-4 py-3">
                <p className="text-brand-navy text-sm font-medium">✓ {step.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
