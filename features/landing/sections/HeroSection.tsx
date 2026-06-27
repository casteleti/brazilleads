'use client'

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
  MapPin,
} from 'lucide-react'
import { track } from '@/lib/tracking'

const tech = [
  { icon: TrendingUp, label: 'Google Ads', bg: '#e8f0fe', color: '#4285F4' },
  { icon: Share2, label: 'Meta Ads', bg: '#e7f0fd', color: '#1877F2' },
  { icon: Activity, label: 'Tracking', bg: '#e0f7fa', color: '#00838f' },
  { icon: Users, label: 'CRM', bg: '#ede7f6', color: '#5e35b1' },
  { icon: MessageCircle, label: 'WhatsApp', bg: '#e8f5e9', color: '#2e7d32' },
]

/* ═══════════════════════════════════════════════════════
   Section 01 — Hero
   Fundo #FCFBF8 — warm white, início do ritmo visual.
   Desktop: 56/44 grid, imagem real à direita.
   Mobile: copy → imagem → tech bar.
═══════════════════════════════════════════════════════ */
export function HeroSection() {
  return (
    <section
      id="hero-section"
      className="relative overflow-hidden"
      style={{ background: '#FCFBF8' }}
    >
      <div className="container-page">
        {/* ── MAIN GRID ─────────────────────────────────── */}
        <div className="grid grid-cols-1 items-center gap-8 py-10 lg:grid-cols-[56fr_44fr] lg:gap-16 lg:py-8">
          {/* ─── LEFT ────────────────────────────────────── */}
          <div className="flex flex-col">
            {/* Eyebrow */}
            <div id="hero-cta-trigger" className="hero-fade-1 mb-5 flex items-center gap-2">
              <ChevronRight
                className="h-3 w-3 shrink-0"
                style={{ color: '#218B52' }}
                strokeWidth={3}
              />
              <span
                className="font-num text-[0.75rem] font-semibold tracking-[0.12em] uppercase"
                style={{ color: '#218B52' }}
              >
                Para brasileiros que empreenderam fora do Brasil
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-display hero-fade-2 mb-5 tracking-tight"
              style={{
                fontSize: 'clamp(2.375rem, 4.5vw, 3rem)',
                lineHeight: '1.05',
                color: '#0F2747',
              }}
            >
              Você saiu do Brasil
              <br className="hidden sm:block" />e construiu um negócio.{' '}
              <em style={{ color: '#218B52', fontStyle: 'italic' }}>
                Agora é hora
                <br className="hidden lg:block" />
                de ser encontrado.
              </em>
            </h1>

            {/* Supporting copy */}
            <div
              className="hero-fade-3 mb-7 space-y-1.5 text-[1.0625rem] leading-[1.6]"
              style={{ color: '#475569', maxWidth: '420px' }}
            >
              <p>Todo dia, brasileiros na sua cidade procuram o que você oferece.</p>
              <p className="font-medium" style={{ color: '#0F2747' }}>
                Nós garantimos que eles encontrem você.
              </p>
            </div>

            {/* CTA Group */}
            <div className="hero-fade-4 mb-4 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#contato"
                onClick={() => track.ctaClick('Quero ser encontrado', 'hero', '#contato')}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl px-7 text-[0.9375rem] font-semibold text-white transition-opacity duration-150 hover:opacity-90 active:scale-[0.98] sm:w-auto lg:min-w-[220px]"
                style={{ background: '#218B52' }}
              >
                Quero ser encontrado
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
              <Link
                href="#como-funciona"
                onClick={() => track.ctaClick('Ver como funciona', 'hero', '#como-funciona')}
                className="flex h-12 w-full items-center justify-center rounded-xl border px-6 text-[0.9375rem] font-medium transition-colors duration-150 sm:w-auto lg:min-w-[180px]"
                style={{
                  borderColor: 'rgba(15,23,42,0.12)',
                  color: '#0F2747',
                  background: 'transparent',
                }}
              >
                Ver como funciona
              </Link>
            </div>

            {/* Microcopy */}
            <div
              className="hero-fade-5 flex items-center gap-1.5 text-[0.8125rem]"
              style={{ color: '#94a3b8' }}
            >
              <ShieldCheck
                className="h-3.5 w-3.5 shrink-0"
                style={{ color: '#218B52' }}
                strokeWidth={2}
              />
              <span>Diagnóstico gratuito · sem compromisso</span>
            </div>
          </div>

          {/* ─── RIGHT — imagem real, desktop ────────────── */}
          <div className="hero-fade-6 hidden lg:block">
            <div
              className="relative h-[440px] w-full overflow-hidden rounded-[28px]"
              style={{
                boxShadow: '0 24px 80px rgba(15,23,42,0.18), 0 4px 16px rgba(15,23,42,0.08)',
              }}
            >
              {/* Imagem principal */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/imgs/negocio-brasileiro-no-exterior.png"
                alt="Restaurante brasileiro em Nova York — negócio brasileiro no exterior"
                width={880}
                height={440}
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: '18% center' }}
              />

              {/* Gradient overlay — bottom vignette suave */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to top, rgba(9,25,48,0.55) 0%, rgba(9,25,48,0.10) 45%, transparent 70%),' +
                    'linear-gradient(to right, rgba(9,25,48,0.12) 0%, transparent 40%)',
                }}
              />

              {/* Floating card 1 — top right */}
              <div
                className="absolute top-4 right-4 rounded-xl border border-white/20 px-3.5 py-2.5 shadow-lg"
                style={{ background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(12px)' }}
              >
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
                    <div
                      className="font-num text-[0.875rem] leading-none font-bold"
                      style={{ color: '#0F2747' }}
                    >
                      Clientes certos
                    </div>
                    <div
                      className="font-num mt-0.5 text-[0.625rem] leading-none"
                      style={{ color: '#94a3b8' }}
                    >
                      no momento certo
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating card 2 — bottom left */}
              <div
                className="absolute bottom-4 left-4 rounded-xl border border-white/20 px-3.5 py-2.5 shadow-lg"
                style={{ background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(12px)' }}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
                    style={{ background: '#ede7f6' }}
                  >
                    <MapPin className="h-3.5 w-3.5" style={{ color: '#5e35b1' }} strokeWidth={2} />
                  </div>
                  <div>
                    <div
                      className="font-num text-[0.875rem] leading-none font-bold"
                      style={{ color: '#0F2747' }}
                    >
                      Crescimento
                    </div>
                    <div
                      className="font-num mt-0.5 text-[0.625rem] leading-none"
                      style={{ color: '#94a3b8' }}
                    >
                      consistente e previsível
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust strip — bottom */}
              <div className="absolute inset-x-0 bottom-0 px-4 pb-4">
                <div className="flex items-center gap-1.5">
                  <span
                    className="block h-1.5 w-1.5 rounded-full"
                    style={{ background: '#4ade80' }}
                  />
                  <span className="font-num text-[0.5625rem] font-medium tracking-wide text-white/60">
                    Brasileiros encontrando negócios como o seu — todos os dias
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── TECH BAR — desktop ──────────────────────────── */}
        <div
          className="hero-fade-6 hidden items-center gap-2 border-t lg:flex"
          style={{ height: '52px', borderColor: 'rgba(15,23,42,0.07)' }}
        >
          <span
            className="font-num mr-4 shrink-0 text-[0.6875rem] font-semibold tracking-widest uppercase"
            style={{ color: '#b0bec5' }}
          >
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
              <span
                className="font-num text-[0.8125rem] font-medium"
                style={{ color: 'rgba(15,39,71,0.55)' }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* ── MOBILE — imagem + tech ───────────────────────── */}
        <div className="pb-10 lg:hidden">
          {/* Imagem mobile — aspect 4/3 */}
          <div
            className="hero-fade-6 relative mt-2 mb-5 overflow-hidden rounded-[20px]"
            style={{
              aspectRatio: '4/3',
              boxShadow: '0 12px 40px rgba(15,23,42,0.14)',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/imgs/negocio-brasileiro-no-exterior.png"
              alt="Restaurante brasileiro no exterior"
              width={800}
              height={600}
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: '18% center' }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to top, rgba(9,25,48,0.45) 0%, transparent 60%)',
              }}
            />
            {/* Floating card mobile */}
            <div
              className="absolute top-3 right-3 rounded-lg border border-white/20 px-3 py-2 shadow-md"
              style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)' }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="flex h-6 w-6 items-center justify-center rounded-md"
                  style={{ background: '#e8f5e9' }}
                >
                  <TrendingUp className="h-3 w-3" style={{ color: '#2e7d32' }} strokeWidth={2} />
                </div>
                <div>
                  <div
                    className="font-num text-[0.8125rem] leading-none font-bold"
                    style={{ color: '#0F2747' }}
                  >
                    Clientes certos
                  </div>
                  <div
                    className="font-num mt-0.5 text-[0.5625rem] leading-none"
                    style={{ color: '#94a3b8' }}
                  >
                    no momento certo
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 px-3 pb-3">
              <div className="flex items-center gap-1.5">
                <span className="block h-1 w-1 rounded-full" style={{ background: '#4ade80' }} />
                <span className="font-num text-[0.5rem] text-white/55">
                  Brasileiros encontrando negócios como o seu — todos os dias
                </span>
              </div>
            </div>
          </div>

          {/* Tech bar mobile */}
          <div className="hero-fade-7 flex [scrollbar-width:none] items-center gap-4 overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden">
            {tech.map(({ icon: Icon, label, bg, color }) => (
              <div key={label} className="flex shrink-0 items-center gap-1.5">
                <div
                  className="flex h-6 w-6 items-center justify-center rounded-md"
                  style={{ background: bg }}
                >
                  <Icon className="h-3.5 w-3.5" strokeWidth={1.5} style={{ color }} />
                </div>
                <span
                  className="font-num text-[0.8125rem] font-medium"
                  style={{ color: 'rgba(15,39,71,0.55)' }}
                >
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
