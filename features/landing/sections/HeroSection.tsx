import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section
      id="hero-section"
      className="bg-brand-warm-white relative overflow-hidden pt-10 pb-16 md:pt-24 md:pb-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-10%,rgba(15,34,68,0.10),transparent)]"
      />

      <div className="container-page relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge — trigger for sticky CTA visibility */}
          <div id="hero-cta-trigger" className="mb-3 flex justify-center md:mb-6">
            <Badge
              variant="outline"
              className="border-brand-navy-tint bg-brand-navy-tint font-num text-brand-navy-mid px-4 py-1.5 text-sm font-medium"
            >
              Especialistas em Google Ads para brasileiros no exterior
            </Badge>
          </div>

          {/* Headline — text-3xl mobile keeps it to 4 lines max */}
          <h1 className="font-display text-brand-navy mb-4 text-3xl tracking-tight sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl">
            Seus Anúncios no Exterior{' '}
            <em className="text-brand-body italic">Estão Custando Mais</em> do que Deveriam.
          </h1>

          {/* Primary subheadline */}
          <p className="text-brand-body mx-auto mb-3 max-w-2xl text-lg leading-relaxed md:mb-4 md:text-2xl">
            Otimizamos suas campanhas de Google Ads em 30 dias.
          </p>

          {/* Secondary subheadline — hidden on mobile to preserve fold */}
          <p className="text-brand-muted mx-auto mb-6 hidden max-w-xl text-lg sm:block md:mb-10">
            Suporte 100% em português · Resultado comprovado ·{' '}
            <span className="text-brand-body font-semibold">
              Canadá · USA · Austrália · Portugal
            </span>
          </p>

          {/* Trust indicators */}
          <div className="text-brand-muted mb-6 flex flex-wrap justify-center gap-x-5 gap-y-1.5 text-sm md:mb-10">
            {['Sem contrato de fidelidade', 'Garantia de 60 dias', 'Resposta em até 2h'].map(
              (item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle className="text-brand-green h-4 w-4" />
                  {item}
                </span>
              )
            )}
          </div>

          {/* CTAs — secondary is ghost on mobile to reduce visual competition */}
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button
              asChild
              size="lg"
              className="bg-brand-green hover:bg-brand-navy duration-fast h-14 w-full gap-2 px-8 text-base font-semibold text-white shadow-md transition-colors sm:w-auto"
            >
              <Link href="#contato">
                Agendar Estratégia Gratuita
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="text-brand-muted hover:text-brand-navy duration-fast sm:border-brand-border sm:hover:bg-brand-navy-tint h-auto py-2 text-sm transition-colors hover:bg-transparent sm:h-14 sm:border sm:px-8 sm:text-base"
            >
              <Link href="#como-funciona">Ver como funciona</Link>
            </Button>
          </div>

          {/* Stats bar */}
          <div className="divide-brand-navy/10 border-brand-navy/12 bg-brand-navy-tint mt-12 grid grid-cols-3 divide-x rounded-lg border py-5 md:mt-16 md:py-6">
            {[
              { value: '30 dias', label: 'para ver resultado' },
              { value: '60%', label: 'redução média no CPL' },
              { value: '4 países', label: 'atendidos em português' },
            ].map((stat) => (
              <div key={stat.label} className="px-3 text-center md:px-8">
                <div className="font-num text-brand-navy text-xl font-bold md:text-3xl">
                  {stat.value}
                </div>
                <div className="text-brand-muted mt-0.5 text-xs md:mt-1 md:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
