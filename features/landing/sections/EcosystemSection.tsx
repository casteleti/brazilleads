'use client'

/* ═══════════════════════════════════════════════════════
   Section 06 — Ecossistema de Crescimento
   Layout flex: módulos | conectores animados | hub | conectores | módulos.
   Interações: hover ativa módulo, dimm outros, hub intensifica glow.
   Conectores: CSS repeating-gradient com ecoFlowRight/Left.
   Fundo #F6F8F5 — ritmo visual.
═══════════════════════════════════════════════════════ */

import Link from 'next/link'
import {
  ArrowRight,
  BarChart2,
  FileText,
  MapPin,
  MessageCircle,
  Share2,
  TrendingUp,
} from 'lucide-react'
import { type ElementType, useState } from 'react'

const CARD_H = 88
const CARD_GAP = 14
const HUB_H = CARD_H * 3 + CARD_GAP * 2 // 292

const cy = (i: number) => i * (CARD_H + CARD_GAP) + CARD_H / 2

const DASH_BG =
  'repeating-linear-gradient(to right, rgba(15,23,42,0.11) 0px, rgba(15,23,42,0.11) 5px, transparent 5px, transparent 9px)'

type Module = {
  id: string
  Icon: ElementType
  label: string
  desc: string
  iconBg: string
  iconColor: string
}

const leftModules: Module[] = [
  {
    id: 'google-ads',
    Icon: TrendingUp,
    label: 'Google Ads',
    desc: 'Busca paga com intenção real',
    iconBg: '#eef2ff',
    iconColor: '#4F46E5',
  },
  {
    id: 'meta-ads',
    Icon: Share2,
    label: 'Meta Ads',
    desc: 'Facebook e Instagram',
    iconBg: '#eff6ff',
    iconColor: '#2563EB',
  },
  {
    id: 'google-business',
    Icon: MapPin,
    label: 'Google Business',
    desc: 'Presença local e orgânica',
    iconBg: '#f0fdf4',
    iconColor: '#16A34A',
  },
]

const rightModules: Module[] = [
  {
    id: 'landing-pages',
    Icon: FileText,
    label: 'Landing Pages',
    desc: 'Conversão de visitantes',
    iconBg: '#faf5ff',
    iconColor: '#9333EA',
  },
  {
    id: 'analytics',
    Icon: BarChart2,
    label: 'Analytics',
    desc: 'Dados que guiam decisões',
    iconBg: '#f0f9ff',
    iconColor: '#0284C7',
  },
  {
    id: 'crm',
    Icon: MessageCircle,
    label: 'CRM + WhatsApp',
    desc: 'Relacionamento ativo',
    iconBg: '#f0fdf4',
    iconColor: '#218B52',
  },
]

const allModules = [...leftModules, ...rightModules]

/* ── Module card ── */
function ModuleCard({
  id,
  Icon,
  label,
  desc,
  iconBg,
  iconColor,
  active,
  dimmed,
  onEnter,
  onLeave,
}: Module & { active: boolean; dimmed: boolean; onEnter: () => void; onLeave: () => void }) {
  return (
    <div
      style={{
        height: `${CARD_H}px`,
        background: '#FFFFFF',
        border: `1px solid ${active ? 'rgba(33,139,82,0.4)' : 'rgba(15,23,42,0.07)'}`,
        borderRadius: '16px',
        padding: '0 18px',
        display: 'flex',
        alignItems: 'center',
        gap: '13px',
        boxShadow: active
          ? '0 4px 20px rgba(33,139,82,0.12), 0 1px 4px rgba(15,23,42,0.04)'
          : '0 1px 8px rgba(15,23,42,0.04)',
        transform: active ? 'translateY(-2px)' : 'translateY(0)',
        opacity: dimmed ? 0.5 : 1,
        transition:
          'transform 250ms cubic-bezier(0.16,1,0.3,1), box-shadow 250ms ease, border-color 200ms ease, opacity 200ms ease',
        cursor: 'default',
      }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div
        style={{
          width: '34px',
          height: '34px',
          flexShrink: 0,
          background: iconBg,
          borderRadius: '9px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Icon style={{ width: '15px', height: '15px', color: iconColor }} strokeWidth={1.75} />
      </div>
      <div>
        <p
          style={{
            fontFamily: 'var(--font-dm-serif, Georgia, serif)',
            fontSize: '13.5px',
            color: '#0F2747',
            lineHeight: '1.2',
            margin: 0,
          }}
        >
          {label}
        </p>
        <p style={{ fontSize: '11px', color: '#94A3B8', lineHeight: '1.4', marginTop: '2px' }}>
          {desc}
        </p>
      </div>
    </div>
  )
}

/* ── Connector column ── */
function Connectors({
  modules,
  direction,
  hovered,
}: {
  modules: Module[]
  direction: 'right' | 'left'
  hovered: string | null
}) {
  return (
    <div className="relative flex-shrink-0" style={{ width: '68px', alignSelf: 'stretch' }}>
      {modules.map((mod, i) => {
        const active = hovered === mod.id
        const dimmed = hovered !== null && hovered !== mod.id
        const dotColor = active ? '#218B52' : 'rgba(33,139,82,0.35)'
        const centerY = cy(i)
        return (
          <div
            key={mod.id}
            style={{ position: 'absolute', top: centerY - 3.5, left: 0, right: 0, height: '7px' }}
          >
            {/* Line — overflow:hidden wrapper enables GPU-composited transform animation */}
            <div
              style={{
                position: 'absolute',
                left: 3,
                right: 3,
                top: '2.75px',
                height: '1.5px',
                overflow: 'hidden',
                opacity: dimmed ? 0.15 : 1,
                transition: 'opacity 200ms ease',
              }}
            >
              <div
                className={active ? '' : direction === 'right' ? 'eco-flow-right' : 'eco-flow-left'}
                style={{
                  position: 'absolute',
                  left: -9,
                  right: -9,
                  top: 0,
                  height: '1.5px',
                  background: active ? '#218B52' : undefined,
                  backgroundImage: active ? 'none' : DASH_BG,
                  backgroundSize: '9px 1.5px',
                  backgroundRepeat: 'repeat-x',
                  animationDelay: `${i * 0.4}s`,
                }}
              />
            </div>
            {/* Left dot */}
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: dotColor,
                opacity: dimmed ? 0.15 : 1,
                transition: 'background 200ms ease, opacity 200ms ease',
              }}
            />
            {/* Right dot */}
            <div
              style={{
                position: 'absolute',
                right: 0,
                top: 0,
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: dotColor,
                opacity: dimmed ? 0.15 : 1,
                transition: 'background 200ms ease, opacity 200ms ease',
              }}
            />
          </div>
        )
      })}
    </div>
  )
}

/* ── Section ── */
export function EcosystemSection() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section
      id="ecossistema"
      className="relative overflow-hidden"
      style={{ background: '#F6F8F5' }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(33,139,82,0.04) 0%, transparent 65%)',
        }}
      />

      <div className="container-page relative py-[72px] max-lg:py-[56px]">
        {/* Header */}
        <div className="mx-auto mb-10 text-center" style={{ maxWidth: '620px' }}>
          <p className="reveal mb-4 text-[0.8125rem] font-medium" style={{ color: '#218B52' }}>
            Ecossistema de crescimento
          </p>

          <h2
            className="reveal font-display mb-4 tracking-tight"
            style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', lineHeight: '1.05', color: '#0F2747' }}
          >
            Um sistema integrado.{' '}
            <em style={{ color: '#218B52', fontStyle: 'italic' }}>Não ações isoladas.</em>
          </h2>

          <p className="reveal text-[1rem] leading-[1.65]" style={{ color: '#475569' }}>
            Cada canal tem uma função: atrair, qualificar ou converter. Quando trabalham juntos,
            criam uma operação contínua de aquisição de clientes.
          </p>
        </div>

        {/* ── DESKTOP DIAGRAM ── */}
        <div
          className="reveal mx-auto hidden lg:flex"
          style={{ maxWidth: '1040px', alignItems: 'stretch' }}
        >
          {/* Left column */}
          <div
            className="flex flex-shrink-0 flex-col"
            style={{ width: '230px', gap: `${CARD_GAP}px` }}
          >
            {leftModules.map((mod) => (
              <ModuleCard
                key={mod.id}
                {...mod}
                active={hovered === mod.id}
                dimmed={hovered !== null && hovered !== mod.id}
                onEnter={() => setHovered(mod.id)}
                onLeave={() => setHovered(null)}
              />
            ))}
          </div>

          <Connectors modules={leftModules} direction="right" hovered={hovered} />

          {/* Center hub */}
          <div
            className="relative flex flex-shrink-0 flex-col items-center justify-center overflow-hidden"
            style={{
              width: '444px',
              height: `${HUB_H}px`,
              background: '#FFFFFF',
              border: `1.5px solid ${hovered ? 'rgba(33,139,82,0.4)' : 'rgba(33,139,82,0.2)'}`,
              borderRadius: '24px',
              boxShadow: hovered
                ? '0 8px 48px rgba(33,139,82,0.12), 0 2px 12px rgba(15,23,42,0.06)'
                : '0 4px 32px rgba(15,23,42,0.07), 0 1px 6px rgba(15,23,42,0.04)',
              transition: 'box-shadow 300ms ease, border-color 300ms ease',
            }}
          >
            <div
              aria-hidden
              style={{
                position: 'absolute',
                inset: 0,
                background: hovered
                  ? 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(33,139,82,0.05) 0%, transparent 70%)'
                  : 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(33,139,82,0.02) 0%, transparent 70%)',
                transition: 'background 300ms ease',
                pointerEvents: 'none',
              }}
            />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/imgs/logo_brazilleads.png"
              alt="Brazilleads"
              width={260}
              height={44}
              loading="lazy"
              style={{
                maxWidth: '260px',
                height: 'auto',
                maxHeight: '44px',
                objectFit: 'contain',
                position: 'relative',
              }}
            />

            <p
              style={{
                marginTop: '14px',
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '0.09em',
                textTransform: 'uppercase',
                color: '#94A3B8',
                position: 'relative',
              }}
            >
              Sistema de aquisição
            </p>

            <div style={{ display: 'flex', gap: '6px', marginTop: '18px', position: 'relative' }}>
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    background: hovered ? 'rgba(33,139,82,0.5)' : 'rgba(33,139,82,0.2)',
                    transition: `background 300ms ease ${i * 60}ms`,
                  }}
                />
              ))}
            </div>
          </div>

          <Connectors modules={rightModules} direction="left" hovered={hovered} />

          {/* Right column */}
          <div
            className="flex flex-shrink-0 flex-col"
            style={{ width: '230px', gap: `${CARD_GAP}px` }}
          >
            {rightModules.map((mod) => (
              <ModuleCard
                key={mod.id}
                {...mod}
                active={hovered === mod.id}
                dimmed={hovered !== null && hovered !== mod.id}
                onEnter={() => setHovered(mod.id)}
                onLeave={() => setHovered(null)}
              />
            ))}
          </div>
        </div>

        {/* ── MOBILE ── */}
        <div className="reveal lg:hidden">
          <div
            className="mx-auto mb-6 flex flex-col items-center rounded-3xl border p-7"
            style={{
              maxWidth: '300px',
              borderColor: 'rgba(33,139,82,0.22)',
              background: '#fff',
              boxShadow: '0 4px 24px rgba(15,23,42,0.06)',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/imgs/logo_brazilleads.png"
              alt="Brazilleads"
              width={180}
              height={32}
              loading="lazy"
              style={{ maxWidth: '180px', height: 'auto', maxHeight: '32px', objectFit: 'contain' }}
            />
            <p
              className="mt-3 text-[0.6875rem] font-semibold tracking-widest uppercase"
              style={{ color: '#94A3B8' }}
            >
              Sistema de aquisição
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {allModules.map(({ id, Icon, label, desc, iconBg, iconColor }) => (
              <div
                key={id}
                className="flex flex-col rounded-2xl border bg-white"
                style={{
                  padding: '16px',
                  borderColor: 'rgba(15,23,42,0.07)',
                  boxShadow: '0 1px 8px rgba(15,23,42,0.04)',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    background: iconBg,
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '10px',
                  }}
                >
                  <Icon
                    style={{ width: '14px', height: '14px', color: iconColor }}
                    strokeWidth={1.75}
                  />
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-serif, Georgia, serif)',
                    fontSize: '13px',
                    color: '#0F2747',
                    lineHeight: '1.2',
                    marginBottom: '3px',
                  }}
                >
                  {label}
                </p>
                <p style={{ fontSize: '10.5px', color: '#94A3B8', lineHeight: '1.45' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing + CTA */}
        <div className="reveal mx-auto mt-10 text-center" style={{ maxWidth: '480px' }}>
          <p className="mb-1.5 text-[1rem] font-medium" style={{ color: '#0F2747' }}>
            Nenhum canal gera crescimento sozinho.
          </p>
          <p className="mb-8 text-[1rem] leading-[1.65]" style={{ color: '#475569' }}>
            A estratégia que conecta tudo é o que faz a diferença.
          </p>
          <Link
            href="#contato"
            className="inline-flex h-[52px] items-center justify-center gap-2.5 rounded-2xl px-8 text-[0.9375rem] font-semibold text-white transition-opacity duration-150 hover:opacity-90 active:scale-[0.98] max-sm:w-full"
            style={{ background: '#218B52' }}
          >
            Conhecer o ecossistema
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  )
}
