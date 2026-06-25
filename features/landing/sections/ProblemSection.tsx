import { XCircle } from 'lucide-react'

const problems = [
  {
    title: 'Gasta $2.000/mês em anúncios, vende $1.000',
    description:
      'Seu orçamento some todo mês e os resultados não aparecem. Você não sabe o que está errado.',
  },
  {
    title: 'Agências locais não entendem seu contexto',
    description:
      'Você tenta explicar seu negócio, mas ninguém fala português e ninguém entende a sua realidade.',
  },
  {
    title: 'Ninguém acompanha sua conta de verdade',
    description:
      'O relatório chega uma vez por mês, cheio de números que não explicam nada. Você está no escuro.',
  },
  {
    title: 'Fuso horário é um pesadelo',
    description:
      'Quando você precisa de suporte, ninguém responde. Quando eles trabalham, você está dormindo.',
  },
  {
    title: 'Sem estratégia, só gasto',
    description:
      'Você roda anúncios, mas sem estrutura, sem teste, sem otimização. É dinheiro indo embora todo dia.',
  },
]

export function ProblemSection() {
  return (
    <section className="section-padding bg-slate-900">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-green-400 uppercase">
            Você já passou por isso?
          </p>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            A Realidade de Quem Anuncia Sozinho no Exterior
          </h2>
          <p className="mb-12 text-lg text-slate-400">
            Milhares de empresários brasileiros vivem essa frustração todo mês.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2 lg:gap-6">
          {problems.map((problem, i) => (
            <div key={i} className="flex gap-4 rounded-xl border border-slate-700 bg-slate-800 p-5">
              <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
              <div>
                <p className="font-semibold text-white">{problem.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">{problem.description}</p>
              </div>
            </div>
          ))}

          {/* Full-width closing card */}
          <div className="flex gap-4 rounded-xl border border-red-900/40 bg-red-950/30 p-5 md:col-span-2">
            <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
            <div>
              <p className="font-semibold text-white">Resultado? Frustração mês após mês.</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-400">
                Você continua pagando, continua esperando, e a concorrência continua crescendo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
