import { CheckCircle } from 'lucide-react'

const differentiators = [
  'Suporte 100% em português — sem tradução, sem ruído',
  'Entendemos os dois mercados: o seu e o do país onde você está',
  'Otimização diária, não mensal',
  'Parceria de longo prazo, não transação',
  'Expectativas realistas — sem promessas impossíveis',
  'Relatórios claros que você realmente entende',
]

export function PositioningSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-page">
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: text */}
          <div>
            <p className="mb-3 text-sm font-semibold tracking-widest text-green-600 uppercase">
              Quem somos
            </p>
            <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">
              Não Somos Mais Uma Agência Digital
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-slate-600">
              Somos brasileiros que entendem o que é empreender fora do Brasil. Conhecemos os
              desafios de operar em outro país, em outra moeda, com outra cultura de consumo.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-slate-600">
              Por isso não gerenciamos anúncios — construímos crescimento. Estratégia, dados e
              execução focados no que realmente importa: o seu resultado.
            </p>

            <ul className="space-y-3">
              {differentiators.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: visual card */}
          <div className="relative">
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-8">
              <blockquote className="mb-6 text-xl leading-relaxed font-medium text-blue-900 italic">
                &ldquo;Você não precisa de mais uma agência. Você precisa de alguém que entende sua
                jornada lá fora e sabe como fazer seu negócio crescer.&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-900 text-lg font-bold text-white">
                  BL
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Brazilleads</p>
                  <p className="text-sm text-slate-500">
                    Growth Partner para brasileiros no exterior
                  </p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -right-4 -bottom-4 rounded-xl bg-green-600 px-5 py-3 text-center shadow-lg">
              <p className="text-2xl font-bold text-white">4</p>
              <p className="text-xs text-green-100">países atendidos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
