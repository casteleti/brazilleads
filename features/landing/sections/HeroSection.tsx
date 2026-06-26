import Link from 'next/link'
import {
  TrendingUp,
  Share2,
  Activity,
  Users,
  MessageCircle,
  ShieldCheck,
  ArrowRight,
  Star,
  MapPin,
} from 'lucide-react'

const tech = [
  { icon: TrendingUp, label: 'Google Ads' },
  { icon: Share2, label: 'Meta Ads' },
  { icon: Activity, label: 'Tracking' },
  { icon: Users, label: 'CRM' },
  { icon: MessageCircle, label: 'WhatsApp' },
]

/* ─────────────────────────────────────────
   Visual composition — reused in both
   desktop right-column and mobile block
───────────────────────────────────────── */
function VisualCard() {
  return (
    /* wrapper padding creates space for overflowing floating cards */
    <div className="relative px-5 pt-5 pb-6">
      {/* Ambient glow behind the card */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(ellipse 80% 65% at 50% 45%, rgba(26,122,74,0.10) 0%, transparent 70%)',
        }}
      />

      {/* ── Main image card ── */}
      <div
        className="border-brand-navy/[0.08] relative overflow-hidden rounded-3xl border shadow-2xl"
        style={{ aspectRatio: '4 / 5' }}
      >
        {/* Base gradient — swap this div for <Image fill … priority /> when photo is ready */}
        {/*
         * Photo brief: one Brazilian business owner inside their restaurant / salon /
         * bakery / clinic. Natural smile, eye contact, warm lighting, premium feel.
         * Visitor should think: "That could be me."
         * Usage: <Image src="/images/hero-owner.jpg" alt="…" fill className="object-cover" priority />
         */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(155deg, #1e3a5f 0%, #0f2244 42%, #091930 100%)',
          }}
        />
        {/* Warm highlight — evokes interior lighting */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 60% 48% at 28% 28%, rgba(248,230,175,0.11) 0%, transparent 65%),' +
              'radial-gradient(ellipse 40% 32% at 72% 68%, rgba(26,122,74,0.07) 0%, transparent 55%)',
          }}
        />
        {/* Bottom vignette */}
        <div
          className="absolute inset-x-0 bottom-0 h-2/5"
          style={{ background: 'linear-gradient(to top, rgba(9,25,48,0.75) 0%, transparent 100%)' }}
        />

        {/* Placeholder label — invisible in production with real photo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="px-8 text-center text-[0.5625rem] leading-relaxed text-white/18">
            Foto: empresário(a) brasileiro(a) no seu negócio
          </p>
        </div>

        {/* Bottom info strip */}
        <div className="absolute right-0 bottom-0 left-0 px-4 pb-4">
          <div className="flex items-center gap-2">
            <span className="bg-brand-green block h-1.5 w-1.5 rounded-full" />
            <span className="font-num text-[0.625rem] font-medium tracking-wide text-white/60">
              Resultados reais · Negócios reais
            </span>
          </div>
        </div>

        {/* Trust badge — Brasil → exterior */}
        <div className="absolute right-4 bottom-4 flex items-center gap-1.5 rounded-full border border-white/15 bg-white/12 px-3 py-1.5 backdrop-blur-sm">
          <MapPin className="h-3 w-3 text-white/70" strokeWidth={2} />
          <span className="font-num text-[0.625rem] font-semibold text-white/80">
            Brasil → exterior
          </span>
        </div>
      </div>

      {/* ── Floating card 1 — top right ── */}
      <div className="border-brand-border absolute top-0 right-0 rounded-2xl border bg-white px-4 py-3 shadow-lg">
        <div className="flex items-center gap-2.5">
          <div className="bg-brand-green-tint flex h-7 w-7 shrink-0 items-center justify-center rounded-lg">
            <span className="bg-brand-green block h-2 w-2 rounded-full" />
          </div>
          <div>
            <div className="font-num text-brand-navy text-[0.8125rem] leading-tight font-bold">
              127 novos contatos
            </div>
            <div className="font-num text-brand-muted text-[0.6875rem] leading-tight">
              esta semana
            </div>
          </div>
        </div>
      </div>

      {/* ── Floating card 2 — bottom left ── */}
      <div className="border-brand-border absolute bottom-0 left-0 rounded-2xl border bg-white px-4 py-3 shadow-lg">
        <div className="flex items-center gap-2.5">
          <div className="bg-brand-gold-tint flex h-7 w-7 shrink-0 items-center justify-center rounded-lg">
            <Star
              className="h-3.5 w-3.5"
              strokeWidth={2}
              style={{ fill: '#9a7209', color: '#9a7209' }}
            />
          </div>
          <div>
            <div className="font-num text-brand-navy text-[0.8125rem] leading-tight font-bold">
              4.382 brasileiros
            </div>
            <div className="font-num text-brand-muted text-[0.6875rem] leading-tight">
              alcançados na região
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────
   Main Hero Section
───────────────────────────────────────── */
export function HeroSection() {
  return (
    <section id="hero-section" className="bg-brand-warm-white relative overflow-hidden">
      {/* Subtle page-level glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 80% 40%, rgba(15,34,68,0.035) 0%, transparent 60%),' +
            'radial-gradient(ellipse 50% 40% at 15% 60%, rgba(26,122,74,0.025) 0%, transparent 55%)',
        }}
      />

      <div className="container-page relative">
        {/* ═══════════════════════════════════════════
            TWO-COLUMN GRID (single column on mobile)
        ════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 items-center gap-8 py-12 lg:min-h-[calc(100vh-72px)] lg:grid-cols-[55fr_45fr] lg:gap-16 lg:py-0 xl:gap-20">
          {/* ─── LEFT COLUMN ─── */}
          <div className="flex flex-col lg:py-20">
            {/* Eyebrow */}
            <div id="hero-cta-trigger" className="hero-fade-1 mb-6">
              <span className="font-num text-brand-green text-[0.8125rem] font-semibold">
                🇧🇷 Marketing para brasileiros que empreendem no exterior
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display hero-fade-2 text-brand-navy mb-6 text-[2.625rem] leading-[1.08] tracking-tight lg:text-[4.25rem] lg:leading-[1.0] xl:text-[4.625rem]">
              Você construiu <span className="lg:block">um negócio.</span>{' '}
              <em className="text-brand-green italic">
                Agora falta <span className="lg:block">as pessoas certas</span>
              </em>{' '}
              encontrarem você.
            </h1>

            {/* Supporting copy */}
            <div className="hero-fade-3 text-brand-body mb-8 max-w-[32ch] space-y-3 text-[1.0625rem] leading-[1.65] lg:max-w-[46ch]">
              <p>
                Todos os dias, brasileiros procuram restaurantes, salões, clínicas, advogados,
                contadores e outros serviços na sua cidade.
              </p>
              <p className="text-brand-navy font-semibold">
                Nós fazemos com que eles encontrem o seu negócio primeiro.
              </p>
            </div>

            {/* CTA group */}
            <div className="hero-fade-4 mb-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="#contato"
                className="bg-brand-green hover:bg-brand-navy flex h-14 w-full items-center justify-center gap-2 rounded-xl px-8 text-[1rem] font-semibold text-white transition-colors duration-150 active:scale-[0.98] sm:w-auto"
              >
                Quero atrair mais clientes
                <ArrowRight className="h-5 w-5" strokeWidth={2} />
              </Link>
              <Link
                href="#como-funciona"
                className="border-brand-border text-brand-navy hover:border-brand-navy/25 hover:bg-brand-navy-tint flex h-12 w-full items-center justify-center rounded-xl border px-6 text-[0.9375rem] font-medium transition-colors duration-150 sm:w-auto"
              >
                Veja como funciona
              </Link>
            </div>

            {/* Microcopy */}
            <div className="hero-fade-5 text-brand-muted mb-8 flex items-center gap-2 text-[0.875rem]">
              <ShieldCheck className="text-brand-green h-4 w-4 shrink-0" strokeWidth={2} />
              <span>Diagnóstico estratégico inicial sem compromisso.</span>
            </div>

            {/* Tech bar — desktop: compact row below microcopy */}
            <div className="hero-fade-5 hidden lg:block">
              <p className="font-num text-brand-faint mb-2.5 text-[0.6875rem] font-semibold tracking-widest uppercase">
                Trabalhamos com
              </p>
              <div className="flex items-center gap-5">
                {tech.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-1.5">
                    <Icon className="text-brand-navy/45 h-3.5 w-3.5" strokeWidth={1.5} />
                    <span className="font-num text-brand-navy/65 text-[0.75rem] font-medium">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ─── RIGHT COLUMN (desktop only) ─── */}
          <div className="hero-fade-6 hidden lg:flex lg:flex-col lg:justify-center lg:py-16">
            <VisualCard />
            {/* Trust statement */}
            <div className="text-brand-muted mt-2 flex items-center gap-2 pl-5 text-[0.875rem]">
              <ShieldCheck className="text-brand-green h-4 w-4 shrink-0" strokeWidth={2} />
              <span>Especialistas em conectar brasileiros a brasileiros no exterior.</span>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            MOBILE ONLY — visual + tech bar + trust
        ════════════════════════════════════════════ */}
        <div className="pb-12 lg:hidden">
          {/* Visual card */}
          <div className="hero-fade-6 mb-4">
            <VisualCard />
          </div>

          {/* Tech bar */}
          <div className="hero-fade-7 border-brand-border mb-6 overflow-hidden rounded-xl border bg-white px-5 py-3.5">
            <div className="flex [scrollbar-width:none] items-center gap-5 overflow-x-auto [&::-webkit-scrollbar]:hidden">
              {tech.map(({ icon: Icon, label }) => (
                <div key={label} className="flex shrink-0 items-center gap-1.5">
                  <Icon className="text-brand-navy/55 h-4 w-4" strokeWidth={1.5} />
                  <span className="font-num text-brand-navy text-[0.8125rem] font-medium">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Trust statement */}
          <div className="hero-fade-7 text-brand-muted flex items-center gap-2 text-[0.875rem]">
            <ShieldCheck className="text-brand-green h-4 w-4 shrink-0" strokeWidth={2} />
            <span>Especialistas em conectar brasileiros a brasileiros no exterior.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
