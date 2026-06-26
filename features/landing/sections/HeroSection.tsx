import Link from 'next/link'
import {
  TrendingUp,
  Share2,
  Activity,
  Users,
  MessageCircle,
  ShieldCheck,
  Star,
  ArrowRight,
} from 'lucide-react'

const tech = [
  { icon: TrendingUp, label: 'Google Ads' },
  { icon: Share2, label: 'Meta Ads' },
  { icon: Activity, label: 'Tracking' },
  { icon: Users, label: 'CRM' },
  { icon: MessageCircle, label: 'WhatsApp' },
]

export function HeroSection() {
  return (
    <section id="hero-section" className="bg-brand-warm-white pt-8">
      <div className="container-page">
        {/* ── Eyebrow ── */}
        <div id="hero-cta-trigger" className="hero-fade-1 mb-6">
          <span className="font-num text-brand-green text-[0.8125rem] font-semibold">
            🇧🇷 Marketing para brasileiros que empreendem no exterior
          </span>
        </div>

        {/* ── Headline ── */}
        <h1 className="font-display hero-fade-2 text-brand-navy mb-6 text-[2.25rem] leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
          Você construiu um negócio.{' '}
          <em className="text-brand-green italic">Agora falta as pessoas certas</em> encontrarem
          você.
        </h1>

        {/* ── Supporting copy ── */}
        <div className="hero-fade-3 text-brand-body mb-8 max-w-[32ch] space-y-3 text-[1.0625rem] leading-[1.65] sm:max-w-[40ch]">
          <p>
            Todos os dias, brasileiros procuram restaurantes, salões, clínicas, advogados,
            contadores e outros serviços na sua cidade.
          </p>
          <p className="text-brand-navy font-semibold">
            Nós fazemos com que eles encontrem o seu negócio primeiro.
          </p>
        </div>

        {/* ── Primary CTA ── */}
        <Link
          href="#contato"
          className="hero-fade-4 bg-brand-green hover:bg-brand-navy mb-5 flex h-14 w-full items-center justify-center gap-2 rounded-xl px-6 text-[1rem] font-semibold text-white transition-colors duration-150 active:scale-[0.98] sm:w-auto sm:px-10"
        >
          Quero atrair mais clientes
          <ArrowRight className="h-5 w-5" strokeWidth={2} />
        </Link>

        {/* ── Secondary CTA ── */}
        <Link
          href="#como-funciona"
          className="hero-fade-4 border-brand-border text-brand-navy hover:border-brand-navy/30 hover:bg-brand-navy-tint mb-6 flex h-12 w-full items-center justify-center rounded-xl border text-[0.9375rem] font-medium transition-colors duration-150 sm:w-auto sm:px-8"
        >
          Veja como funciona
        </Link>

        {/* ── Microcopy ── */}
        <div className="hero-fade-5 text-brand-muted mb-6 flex items-center gap-2 text-[0.875rem]">
          <ShieldCheck className="text-brand-green h-4 w-4 shrink-0" strokeWidth={2} />
          <span>Diagnóstico estratégico inicial sem compromisso.</span>
        </div>

        {/* ── Technology bar ── */}
        <div className="hero-fade-5 border-brand-border mb-8 overflow-hidden rounded-xl border bg-white px-5 py-3.5">
          <div className="flex [scrollbar-width:none] items-center gap-6 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {tech.map(({ icon: Icon, label }) => (
              <div key={label} className="flex shrink-0 items-center gap-1.5">
                <Icon className="text-brand-navy/60 h-4 w-4" strokeWidth={1.5} />
                <span className="font-num text-brand-navy text-[0.8125rem] font-medium">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Hero image ── */}
        <div
          className="hero-fade-6 relative mb-6 overflow-hidden rounded-2xl"
          style={{ aspectRatio: '4 / 3' }}
        >
          {/*
           * SWAP: replace the gradient below with a real photo
           * <Image src="/images/hero-owner.jpg" alt="Empresário brasileiro no seu negócio"
           *   fill className="object-cover object-center" priority />
           *
           * Photo brief: Brazilian business owner inside their own restaurant / salon /
           * bakery / clinic. Natural smile, eye contact, warm lighting.
           * The visitor should think: "That could be me."
           */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(160deg, #1a3460 0%, #0f2244 50%, #0a1628 100%)',
            }}
          />
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                'radial-gradient(ellipse 70% 55% at 35% 45%, rgba(248,247,245,0.18) 0%, transparent 70%)',
            }}
          />
          <div className="absolute inset-0 flex items-end justify-center pb-10">
            <p className="px-8 text-center text-[0.625rem] leading-relaxed text-white/25">
              Foto: empresário(a) brasileiro(a) no seu negócio
            </p>
          </div>

          {/* Floating card 1 — top right */}
          <div className="absolute top-3 right-3 rounded-xl border border-white/15 bg-white/90 px-3 py-2.5 shadow-md backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <span className="bg-brand-green block h-1.5 w-1.5 shrink-0 rounded-full" />
              <span className="font-num text-brand-navy text-[0.6875rem] leading-tight font-semibold">
                127 novos contatos esta semana
              </span>
            </div>
          </div>

          {/* Floating card 2 — bottom left */}
          <div className="absolute bottom-3 left-3 rounded-xl border border-white/15 bg-white/90 px-3 py-2.5 shadow-md backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <Star
                className="h-3.5 w-3.5 shrink-0"
                strokeWidth={2}
                style={{ fill: '#9a7209', color: '#9a7209' }}
              />
              <span className="font-num text-brand-navy text-[0.6875rem] leading-tight font-semibold">
                4.382 brasileiros alcançados
              </span>
            </div>
          </div>
        </div>

        {/* ── Trust statement ── */}
        <div className="hero-fade-7 text-brand-muted flex items-center gap-2 pb-14 text-[0.875rem]">
          <ShieldCheck className="text-brand-green h-4 w-4 shrink-0" strokeWidth={2} />
          <span>Especialistas em conectar brasileiros a brasileiros no exterior.</span>
        </div>
      </div>
    </section>
  )
}
