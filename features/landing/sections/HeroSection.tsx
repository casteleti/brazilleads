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
  ChevronRight,
  Play,
  ImageIcon,
} from 'lucide-react'

/* ── Brand-colored tech items ─────────────────────────── */
const tech = [
  { icon: TrendingUp, label: 'Google Ads', bg: '#e8f0fe', color: '#4285F4' },
  { icon: Share2, label: 'Meta Ads', bg: '#e7f0fd', color: '#1877F2' },
  { icon: Activity, label: 'Tracking', bg: '#e0f7fa', color: '#00838f' },
  { icon: Users, label: 'CRM', bg: '#ede7f6', color: '#5e35b1' },
  { icon: MessageCircle, label: 'WhatsApp', bg: '#e8f5e9', color: '#2e7d32' },
]

/* ── Visual composition card ───────────────────────────── */
function VisualCard() {
  return (
    <div className="relative px-6 pt-6 pb-7">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(ellipse 85% 70% at 50% 48%, rgba(26,122,74,0.11) 0%, transparent 70%)',
        }}
      />

      {/* ── Image card ── */}
      <div
        className="border-brand-navy/[0.07] relative overflow-hidden rounded-[28px] border shadow-2xl"
        style={{ aspectRatio: '4 / 5' }}
      >
        {/* Gradient placeholder — swap for <Image fill priority> when photo is ready */}
        {/*
         * Photo brief: Brazilian business owner in their own restaurant / salon /
         * bakery / clinic. Natural smile, direct eye contact, warm lighting.
         * <Image src="/images/hero-owner.jpg" alt="Empresário brasileiro no seu negócio"
         *   fill className="object-cover object-center" priority />
         */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(155deg, #1e3a5f 0%, #0f2244 42%, #091930 100%)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 62% 50% at 30% 28%, rgba(252,232,170,0.10) 0%, transparent 65%),' +
              'radial-gradient(ellipse 42% 34% at 70% 68%, rgba(26,122,74,0.07) 0%, transparent 55%)',
          }}
        />
        {/* Bottom vignette */}
        <div
          className="absolute inset-x-0 bottom-0 h-[45%]"
          style={{ background: 'linear-gradient(to top, rgba(9,25,48,0.80) 0%, transparent 100%)' }}
        />

        {/* Placeholder icon — hidden when real photo replaces gradient */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-2 opacity-20">
            <ImageIcon className="h-12 w-12 text-white" strokeWidth={1} />
            <p className="text-center text-[0.5625rem] text-white">
              Foto do empresário
              <br />
              no seu negócio
            </p>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="absolute inset-x-0 bottom-0 px-4 pb-4">
          <div className="flex items-center gap-2">
            <span className="bg-brand-green block h-1.5 w-1.5 rounded-full" />
            <span className="font-num text-[0.5625rem] font-medium tracking-wide text-white/55">
              Resultados reais · Negócios reais
            </span>
          </div>
        </div>

        {/* Trust badge */}
        <div className="absolute right-4 bottom-4 flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-sm">
          <MapPin className="h-2.5 w-2.5 text-white/70" strokeWidth={2} />
          <span className="font-num text-[0.5625rem] font-semibold text-white/75">
            Brasil → exterior
          </span>
        </div>
      </div>

      {/* ── Floating card 1 — top right ── */}
      <div className="border-brand-border absolute top-0 right-0 rounded-2xl border bg-white px-4 py-3 shadow-lg">
        <div className="flex items-center gap-3">
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
            style={{ background: '#e8f5e9' }}
          >
            <Star
              className="h-4 w-4"
              strokeWidth={2}
              style={{ fill: '#2e7d32', color: '#2e7d32' }}
            />
          </div>
          <div>
            <div className="font-num text-brand-navy text-[0.9375rem] leading-tight font-bold">
              127
            </div>
            <div className="font-num text-brand-muted text-[0.6875rem] leading-tight">
              novos contatos
              <br />
              esta semana
            </div>
          </div>
        </div>
      </div>

      {/* ── Floating card 2 — bottom left ── */}
      <div className="border-brand-border absolute bottom-0 left-0 rounded-2xl border bg-white px-4 py-3 shadow-lg">
        <div className="flex items-center gap-3">
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
            style={{ background: '#ede7f6' }}
          >
            <Users className="h-4 w-4" strokeWidth={2} style={{ color: '#5e35b1' }} />
          </div>
          <div>
            <div className="font-num text-brand-navy text-[0.9375rem] leading-tight font-bold">
              4.382
            </div>
            <div className="font-num text-brand-muted text-[0.6875rem] leading-tight">
              brasileiros
              <br />
              alcançados na região
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Tech bar — shared between desktop (full-width) and mobile ── */
function TechBar({ className }: { className?: string }) {
  return (
    <div className={className}>
      {tech.map(({ icon: Icon, label, bg, color }) => (
        <div key={label} className="flex shrink-0 items-center gap-2">
          <div
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
            style={{ background: bg }}
          >
            <Icon className="h-4 w-4" strokeWidth={1.5} style={{ color }} />
          </div>
          <span className="font-num text-brand-navy/70 text-[0.8125rem] font-medium">{label}</span>
        </div>
      ))}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════
   Main Hero Section
═══════════════════════════════════════════════════════ */
export function HeroSection() {
  return (
    <section id="hero-section" className="bg-brand-warm-white relative overflow-hidden">
      {/* Page-level ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 65% 55% at 78% 42%, rgba(15,34,68,0.04) 0%, transparent 60%),' +
            'radial-gradient(ellipse 45% 38% at 18% 62%, rgba(26,122,74,0.03) 0%, transparent 55%)',
        }}
      />

      <div className="container-page relative">
        {/* ═══════════════════════════════════════════
            TWO-COLUMN GRID
            Desktop: 58% left / 42% right
            Mobile: single column
        ════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 items-center gap-10 pt-12 lg:min-h-[640px] lg:grid-cols-[58fr_42fr] lg:gap-16 lg:pt-0 xl:gap-20">
          {/* ─── LEFT COLUMN ──────────────────────── */}
          <div className="flex flex-col lg:py-16">
            {/* Eyebrow */}
            <div id="hero-cta-trigger" className="hero-fade-1 mb-6">
              <div className="flex items-center gap-2">
                <ChevronRight className="text-brand-green h-3.5 w-3.5" strokeWidth={2.5} />
                <span className="font-num text-brand-green text-[0.8125rem] font-semibold tracking-widest uppercase">
                  Marketing para brasileiros que empreendem no exterior
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="font-display hero-fade-2 text-brand-navy mb-6 text-[2.625rem] leading-[1.08] tracking-tight lg:text-[4.25rem] lg:leading-[1.05] xl:text-[4.5rem]">
              Você construiu <span className="lg:block">um negócio.</span>{' '}
              <em className="text-brand-green italic">
                Agora falta <span className="lg:block">as pessoas certas</span>
              </em>{' '}
              encontrarem você.
            </h1>

            {/* Supporting copy */}
            <div className="hero-fade-3 text-brand-body mb-8 space-y-3 text-[1.0625rem] leading-[1.6] lg:max-w-[44ch]">
              <p className="max-w-[33ch] lg:max-w-none">
                Todos os dias, brasileiros procuram restaurantes, salões, clínicas, advogados,
                contadores e outros serviços na sua cidade.
              </p>
              <p className="text-brand-navy max-w-[33ch] font-semibold lg:max-w-none">
                Nós fazemos com que eles encontrem o seu negócio primeiro.
              </p>
            </div>

            {/* CTA group */}
            <div className="hero-fade-4 mb-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="#contato"
                className="bg-brand-green hover:bg-brand-navy flex h-14 w-full items-center justify-center gap-2.5 rounded-xl px-8 text-[1rem] font-semibold text-white transition-colors duration-150 active:scale-[0.98] sm:w-auto"
              >
                Quero atrair mais clientes
                <ArrowRight className="h-[1.125rem] w-[1.125rem]" strokeWidth={2.5} />
              </Link>
              <Link
                href="#como-funciona"
                className="border-brand-border text-brand-navy hover:border-brand-navy/25 hover:bg-brand-navy-tint flex h-12 w-full items-center justify-center gap-2 rounded-xl border px-6 text-[0.9375rem] font-medium transition-colors duration-150 sm:h-14 sm:w-auto"
              >
                Veja como funciona
                <div className="border-brand-navy/20 flex h-5 w-5 items-center justify-center rounded-full border">
                  <Play className="fill-brand-navy text-brand-navy h-2.5 w-2.5" strokeWidth={0} />
                </div>
              </Link>
            </div>

            {/* Microcopy */}
            <div className="hero-fade-5 text-brand-muted flex items-center gap-2 text-[0.875rem]">
              <ShieldCheck className="text-brand-green h-4 w-4 shrink-0" strokeWidth={2} />
              <span>Diagnóstico estratégico inicial sem compromisso.</span>
            </div>
          </div>

          {/* ─── RIGHT COLUMN (desktop only) ─────── */}
          <div className="hero-fade-6 hidden lg:flex lg:flex-col lg:justify-center lg:py-10">
            <VisualCard />
            {/* Trust statement — desktop: below visual */}
            <div className="text-brand-muted mt-1 flex items-center gap-2 pl-6 text-[0.875rem]">
              <ShieldCheck className="text-brand-green h-4 w-4 shrink-0" strokeWidth={2} />
              <span>Especialistas em conectar brasileiros a brasileiros no exterior.</span>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            DESKTOP TECH BAR — full width below grid
        ════════════════════════════════════════════ */}
        <div className="hero-fade-6 border-brand-border hidden border-t lg:block">
          <div className="flex items-center justify-between py-5">
            <p className="font-num text-brand-faint text-[0.75rem] font-semibold tracking-widest uppercase">
              Trabalhamos com
            </p>
            <TechBar className="flex items-center gap-8" />
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            MOBILE ONLY — tech bar → visual → trust
        ════════════════════════════════════════════ */}
        <div className="pb-12 lg:hidden">
          {/* Tech bar mobile */}
          <div className="hero-fade-6 border-brand-border mt-8 mb-6 overflow-hidden rounded-xl border bg-white px-5 py-4">
            <TechBar className="flex [scrollbar-width:none] items-center gap-5 overflow-x-auto [&::-webkit-scrollbar]:hidden" />
          </div>

          {/* Visual card */}
          <div className="hero-fade-7 mb-5">
            <VisualCard />
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
