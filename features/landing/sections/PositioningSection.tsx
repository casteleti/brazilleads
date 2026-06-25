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
    <section className="section-premium bg-white">
      <div className="container-page">
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: text */}
          <div>
            <p className="label-eyebrow mb-3">Quem somos</p>
            <h2 className="font-display text-brand-navy mb-6 text-3xl md:text-4xl">
              Não Somos Mais Uma Agência Digital
            </h2>
            <p className="text-brand-body mb-4 text-lg leading-relaxed">
              Somos brasileiros que entendem o que é empreender fora do Brasil. Conhecemos os
              desafios de operar em outro país, em outra moeda, com outra cultura de consumo.
            </p>
            <p className="text-brand-body mb-8 text-lg leading-relaxed">
              Por isso não gerenciamos anúncios — construímos crescimento. Estratégia, dados e
              execução focados no que realmente importa: o seu resultado.
            </p>

            <ul className="space-y-3">
              {differentiators.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="text-brand-navy mt-0.5 h-5 w-5 shrink-0" />
                  <span className="text-brand-body">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: visual card */}
          <div className="relative pb-0 lg:pb-6">
            <div className="border-brand-navy-tint bg-brand-navy-tint rounded-xl border p-8">
              <blockquote className="font-display text-brand-navy mb-6 text-xl leading-relaxed italic">
                &ldquo;Você não precisa de mais uma agência. Você precisa de alguém que entende sua
                jornada lá fora e sabe como fazer seu negócio crescer.&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="bg-brand-navy font-num flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white">
                  BL
                </div>
                <div>
                  <p className="text-brand-navy font-semibold">Brazilleads</p>
                  <p className="text-brand-muted text-sm">
                    Growth Partner para brasileiros no exterior
                  </p>
                </div>
              </div>
            </div>

            {/* Floating badge — desktop only, navy to avoid green overuse */}
            <div className="bg-brand-navy absolute -right-4 -bottom-4 hidden rounded-lg px-5 py-3 text-center shadow-lg lg:block">
              <p className="font-num text-2xl font-bold text-white">4</p>
              <p className="text-xs text-white/60">países atendidos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
