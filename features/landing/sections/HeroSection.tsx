import Link from 'next/link'
import {
  TrendingUp,
  Share2,
  Activity,
  Users,
  MessageCircle,
  ShieldCheck,
  ArrowRight,
  ChevronRight,
  ImageIcon,
  Star,
} from 'lucide-react'

const tech = [
  { icon: TrendingUp, label: 'Google Ads', bg: '#e8f0fe', color: '#4285F4' },
  { icon: Share2, label: 'Meta Ads', bg: '#e7f0fd', color: '#1877F2' },
  { icon: Activity, label: 'Tracking', bg: '#e0f7fa', color: '#00838f' },
  { icon: Users, label: 'CRM', bg: '#ede7f6', color: '#5e35b1' },
  { icon: MessageCircle, label: 'WhatsApp', bg: '#e8f5e9', color: '#2e7d32' },
]

/* ═══════════════════════════════════════════════════════ */
export function HeroSection() {
  return (
    <section
      id="hero-section"
      className="relative overflow-hidden"
      style={{ background: '#FCFBF8' }}
    >
      <div className="container-page">
        {/* ── MAIN GRID ─────────────────────────────────── */}
        {/*
         * Desktop: 56/44, items-center, py-8 (64px total)
         * Image h-[440px] + 64px padding = 504px section height
         * Nav 72px → total 576px → fits 768px viewport
         */}
        <div className="grid grid-cols-1 items-center gap-8 py-10 lg:grid-cols-[56fr_44fr] lg:gap-16 lg:py-8">
          {/* ─── LEFT ────────────────────────────────────── */}
          <div className="flex flex-col">
            {/* Eyebrow */}
            <div id="hero-cta-trigger" className="hero-fade-1 mb-5 flex items-center gap-2">
              <ChevronRight className="text-brand-green h-3 w-3 shrink-0" strokeWidth={3} />
              <span className="font-num text-brand-green text-[0.75rem] font-semibold tracking-[0.12em] uppercase">
                Marketing para a diáspora brasileira
              </span>
            </div>

            {/* Headline — 48px desktop / 38px mobile, 3 linhas */}
            <h1 className="font-display hero-fade-2 text-brand-navy mb-5 text-[2.375rem] leading-[1.05] tracking-tight lg:text-[3rem] lg:leading-[1.0]">
              Você construiu um negócio.{' '}
              <em className="text-brand-green italic lg:block">
                Agora as pessoas certas
                <br className="hidden lg:block" />
                precisam encontrá-lo.
              </em>
            </h1>

            {/* Supporting copy — max 19 words, 2 sentences */}
            <div
              className="hero-fade-3 text-brand-body mb-7 space-y-1.5 text-[1.0625rem] leading-[1.6] lg:text-[1.125rem]"
              style={{ maxWidth: '420px' }}
            >
              <p>Brasileiros no exterior procuram negócios como o seu todos os dias.</p>
              <p className="text-brand-navy font-medium">
                Nós fazemos você aparecer na frente deles primeiro.
              </p>
            </div>

            {/* CTA Group — side by side on desktop */}
            <div className="hero-fade-4 mb-4 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#contato"
                className="bg-brand-green hover:bg-brand-navy flex h-12 w-full items-center justify-center gap-2 rounded-xl px-7 text-[0.9375rem] font-semibold text-white transition-colors duration-150 active:scale-[0.98] sm:w-auto lg:min-w-[220px]"
              >
                Atrair mais clientes
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
              <Link
                href="#como-funciona"
                className="border-brand-border text-brand-navy hover:border-brand-navy/20 hover:bg-brand-navy-tint flex h-12 w-full items-center justify-center rounded-xl border px-6 text-[0.9375rem] font-medium transition-colors duration-150 sm:w-auto lg:min-w-[180px]"
              >
                Ver como funciona
              </Link>
            </div>

            {/* Microcopy */}
            <div className="hero-fade-5 text-brand-muted flex items-center gap-1.5 text-[0.8125rem]">
              <ShieldCheck className="text-brand-green h-3.5 w-3.5 shrink-0" strokeWidth={2} />
              <span>Diagnóstico gratuito · sem compromisso</span>
            </div>
          </div>

          {/* ─── RIGHT — desktop only ────────────────────── */}
          <div className="hero-fade-6 hidden lg:block">
            {/*
             * Image fills the column. Cards live INSIDE (absolute),
             * overflow-hidden keeps them from bleeding out.
             * height 440px + section py-8×2=64px = 504px section
             */}
            <div className="border-brand-navy/[0.07] relative h-[440px] w-full overflow-hidden rounded-[28px] border shadow-2xl">
              {/* Gradient placeholder */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(155deg, #1e3a5f 0%, #0f2244 45%, #091930 100%)',
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    'radial-gradient(ellipse 60% 50% at 28% 25%, rgba(252,232,170,0.09) 0%, transparent 65%),' +
                    'radial-gradient(ellipse 40% 35% at 72% 70%, rgba(26,122,74,0.07) 0%, transparent 55%)',
                }}
              />
              {/* Bottom vignette */}
              <div
                className="absolute inset-x-0 bottom-0 h-[40%]"
                style={{
                  background: 'linear-gradient(to top, rgba(9,25,48,0.75) 0%, transparent 100%)',
                }}
              />

              {/* Image placeholder icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center gap-2 opacity-[0.15]">
                  <ImageIcon className="h-10 w-10 text-white" strokeWidth={1} />
                </div>
              </div>

              {/* ── Floating card 1 — top-right, inside image ── */}
              <div className="absolute top-4 right-4 rounded-xl border border-white/15 bg-white/95 px-3.5 py-2.5 shadow-lg backdrop-blur-sm">
                <div className="flex items-center gap-2.5">
                  <div
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
                    style={{ background: '#e8f5e9' }}
                  >
                    <TrendingUp
                      className="h-3.5 w-3.5"
                      style={{ color: '#2e7d32' }}
                      strokeWidth={2}
                    />
                  </div>
                  <div>
                    <div className="font-num text-brand-navy text-[0.875rem] leading-none font-bold">
                      127
                    </div>
                    <div className="font-num text-brand-muted mt-0.5 text-[0.625rem] leading-none">
                      novos contatos / semana
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Floating card 2 — bottom-left, inside image ── */}
              <div className="absolute bottom-4 left-4 rounded-xl border border-white/15 bg-white/95 px-3.5 py-2.5 shadow-lg backdrop-blur-sm">
                <div className="flex items-center gap-2.5">
                  <div
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
                    style={{ background: '#ede7f6' }}
                  >
                    <Star className="h-3.5 w-3.5" strokeWidth={0} style={{ fill: '#5e35b1' }} />
                  </div>
                  <div>
                    <div className="font-num text-brand-navy text-[0.875rem] leading-none font-bold">
                      4.8
                    </div>
                    <div className="font-num text-brand-muted mt-0.5 text-[0.625rem] leading-none">
                      avaliação média dos clientes
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust strip — bottom of image */}
              <div className="absolute inset-x-0 bottom-0 px-4 pb-4">
                <div className="flex items-center gap-1.5">
                  <span className="bg-brand-green block h-1.5 w-1.5 rounded-full" />
                  <span className="font-num text-[0.5625rem] font-medium tracking-wide text-white/55">
                    4.382 brasileiros alcançados por semana
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── TECH BAR — desktop, below grid ─────────────── */}
        {/* h-[52px] border-top strip */}
        <div
          className="hero-fade-6 border-brand-border hidden items-center gap-2 border-t lg:flex"
          style={{ height: '52px' }}
        >
          <span className="font-num text-brand-faint mr-4 shrink-0 text-[0.6875rem] font-semibold tracking-widest uppercase">
            Integramos com
          </span>
          {tech.map(({ icon: Icon, label, bg, color }) => (
            <div key={label} className="flex shrink-0 items-center gap-1.5">
              <div
                className="flex h-6 w-6 items-center justify-center rounded-md"
                style={{ background: bg }}
              >
                <Icon className="h-3.5 w-3.5" strokeWidth={1.5} style={{ color }} />
              </div>
              <span className="font-num text-brand-navy/60 text-[0.8125rem] font-medium">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* ── MOBILE ONLY — image + tech + trust ──────────── */}
        <div className="pb-10 lg:hidden">
          {/* Image — 4/3 aspect, less tall than 4/5 */}
          <div
            className="hero-fade-6 border-brand-navy/[0.07] relative mt-2 mb-5 overflow-hidden rounded-[20px] border shadow-xl"
            style={{ aspectRatio: '4/3' }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(155deg, #1e3a5f 0%, #0f2244 45%, #091930 100%)',
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="opacity-[0.15]">
                <ImageIcon className="h-8 w-8 text-white" strokeWidth={1} />
              </div>
            </div>
            {/* Single small metric card inside */}
            <div className="absolute top-3 right-3 rounded-lg border border-white/15 bg-white/95 px-3 py-2 shadow-md">
              <div className="flex items-center gap-2">
                <div
                  className="flex h-6 w-6 items-center justify-center rounded-md"
                  style={{ background: '#e8f5e9' }}
                >
                  <TrendingUp className="h-3 w-3" style={{ color: '#2e7d32' }} strokeWidth={2} />
                </div>
                <div>
                  <div className="font-num text-brand-navy text-[0.8125rem] leading-none font-bold">
                    127
                  </div>
                  <div className="font-num text-brand-muted mt-0.5 text-[0.5625rem] leading-none">
                    contatos / semana
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 px-3 pb-3">
              <div className="flex items-center gap-1.5">
                <span className="bg-brand-green block h-1 w-1 rounded-full" />
                <span className="font-num text-[0.5rem] text-white/50">
                  4.382 brasileiros alcançados por semana
                </span>
              </div>
            </div>
          </div>

          {/* Tech bar mobile — scrollable */}
          <div className="hero-fade-7 flex [scrollbar-width:none] items-center gap-4 overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden">
            {tech.map(({ icon: Icon, label, bg, color }) => (
              <div key={label} className="flex shrink-0 items-center gap-1.5">
                <div
                  className="flex h-6 w-6 items-center justify-center rounded-md"
                  style={{ background: bg }}
                >
                  <Icon className="h-3.5 w-3.5" strokeWidth={1.5} style={{ color }} />
                </div>
                <span className="font-num text-brand-navy/60 text-[0.8125rem] font-medium">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
