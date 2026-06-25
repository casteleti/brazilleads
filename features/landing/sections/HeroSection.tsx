import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 md:pt-24 md:pb-28">
      {/* Background subtle gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(30,58,138,0.08),transparent)]"
      />

      <div className="container-page relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 flex justify-center">
            <Badge
              variant="outline"
              className="border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-800"
            >
              🇧🇷 Especialistas em Google Ads para brasileiros no exterior
            </Badge>
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            Cansado de Gastar <span className="text-blue-900">Milhares em Anúncios</span> sem
            Resultado?
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mb-4 max-w-2xl text-xl leading-relaxed text-slate-600 md:text-2xl">
            Otimizamos suas campanhas de Google Ads em 30 dias.
          </p>
          <p className="mx-auto mb-10 max-w-xl text-lg text-slate-500">
            Suporte 100% em português · Resultado comprovado ·{' '}
            <span className="font-semibold text-slate-700">
              Canadá · USA · Austrália · Portugal
            </span>
          </p>

          {/* Trust indicators */}
          <div className="mb-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
            {['Sem contrato de fidelidade', 'Garantia de 60 dias', 'Resposta em até 2h'].map(
              (item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  {item}
                </span>
              )
            )}
          </div>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-14 gap-2 bg-green-600 px-8 text-base font-semibold text-white shadow-lg hover:bg-green-700"
            >
              <Link href="#contato">
                Agendar Estratégia Gratuita
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 border-slate-300 px-8 text-base text-slate-700 hover:bg-slate-50"
            >
              <Link href="#como-funciona">Ver como funciona</Link>
            </Button>
          </div>

          {/* Social proof numbers */}
          <div className="mt-16 grid grid-cols-3 divide-x divide-slate-200 rounded-2xl border border-slate-200 bg-slate-50 py-6">
            {[
              { value: '30 dias', label: 'para ver resultado' },
              { value: '60%', label: 'redução média no CPL' },
              { value: '4 países', label: 'atendidos em português' },
            ].map((stat) => (
              <div key={stat.label} className="px-4 text-center md:px-8">
                <div className="text-2xl font-bold text-blue-900 md:text-3xl">{stat.value}</div>
                <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
