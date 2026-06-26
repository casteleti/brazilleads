import Link from 'next/link'
import { ArrowRight, MapPin, Search, Star, Store } from 'lucide-react'

/* ═══════════════════════════════════════════════════════
   Section 02 — "A Oportunidade Invisível"
   Objetivo: identificação emocional. O visitante reconhece
   que está invisível para quem já o procura.
═══════════════════════════════════════════════════════ */
export function ProblemSection() {
  return (
    <section
      id="oportunidade"
      className="relative overflow-hidden"
      style={{ background: '#0f2244' }}
    >
      {/* Radial depth — muito sutil sobre navy */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 60% 50% at 88% 8%, rgba(34,197,94,0.06) 0%, transparent 65%),' +
            'radial-gradient(ellipse 50% 45% at 10% 92%, rgba(255,255,255,0.02) 0%, transparent 60%)',
        }}
      />

      <div className="container-page relative py-[120px] max-lg:py-[72px]">
        <div className="grid grid-cols-1 items-start gap-[72px] lg:grid-cols-[52fr_48fr]">
          {/* ─── LEFT — emoção ─────────────────────────── */}
          <div className="flex flex-col">
            {/* Eyebrow */}
            <p className="reveal mb-7 text-[0.8125rem] font-medium" style={{ color: '#4ade80' }}>
              A oportunidade invisível
            </p>

            {/* Headline */}
            <h2
              className="reveal font-display mb-8 tracking-tight"
              style={{
                fontSize: 'clamp(2.75rem, 4.5vw, 4rem)',
                lineHeight: '0.95',
                color: '#ffffff',
                maxWidth: '620px',
              }}
            >
              Enquanto você espera por indicação, alguém está procurando pelo{' '}
              <em style={{ color: '#4ade80', fontStyle: 'italic' }}>seu serviço.</em>
            </h2>

            {/* Supporting copy */}
            <div
              className="reveal mb-10 space-y-4 text-[1.0625rem] leading-[1.65]"
              style={{ color: 'rgba(255,255,255,0.60)', maxWidth: '520px' }}
            >
              <p>
                Brasileiros procuram todos os dias por restaurantes, clínicas, salões, advogados e
                dezenas de outros serviços.
              </p>
              <p>
                O problema é que nem sempre encontram empresas que falam sua língua ou entendem sua
                cultura.
              </p>
              <p>Na maioria das vezes, encontram apenas quem apareceu primeiro.</p>
            </div>

            {/* Highlight card — branco sobre navy */}
            <div
              className="reveal mb-10 rounded-3xl p-6"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.10)',
              }}
            >
              <div className="flex items-start gap-5">
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
                  style={{ background: 'rgba(255,255,255,0.08)' }}
                >
                  <Store
                    className="h-6 w-6"
                    style={{ color: 'rgba(255,255,255,0.50)' }}
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <p
                    className="font-display mb-1.5 text-[1.1875rem] leading-snug"
                    style={{ color: '#ffffff' }}
                  >
                    Seu serviço pode ser melhor.
                  </p>
                  <p
                    className="text-[0.9375rem] leading-[1.6]"
                    style={{ color: 'rgba(255,255,255,0.55)' }}
                  >
                    Mas quem aparece primeiro costuma receber o contato.
                  </p>
                </div>
              </div>
            </div>

            {/* Closing statement */}
            <p
              className="reveal mb-10 text-[1.0625rem] leading-[1.65]"
              style={{ color: 'rgba(255,255,255,0.75)' }}
            >
              A questão não é trabalhar mais. <br className="hidden lg:block" />É{' '}
              <em className="font-semibold not-italic" style={{ color: '#4ade80' }}>
                ser encontrado
              </em>{' '}
              no momento certo.
            </p>

            {/* CTA */}
            <div className="reveal">
              <Link
                href="#contato"
                className="inline-flex h-14 items-center justify-center gap-2.5 rounded-2xl px-8 text-[0.9375rem] font-semibold text-white transition-colors duration-150 hover:opacity-90 active:scale-[0.98]"
                style={{
                  background: '#218B52',
                  width: 'clamp(100%, 0px, 280px)',
                  maxWidth: '280px',
                }}
              >
                Quero ser encontrado
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
            </div>
          </div>

          {/* ─── RIGHT — Google Search card visual ────── */}
          <div className="reveal flex items-start justify-center lg:justify-end">
            <div
              className="w-full rounded-[28px] border bg-white"
              style={{
                maxWidth: '520px',
                borderColor: 'rgba(255,255,255,0.12)',
                boxShadow: '0 8px 48px rgba(0,0,0,0.35)',
              }}
            >
              {/* Search field */}
              <div
                className="border-b px-6 pt-6 pb-5"
                style={{ borderColor: 'rgba(15,23,42,0.06)' }}
              >
                <div
                  className="flex items-center gap-3 rounded-[18px] border px-4 py-3"
                  style={{
                    borderColor: 'rgba(15,23,42,0.12)',
                    background: '#FAFAFA',
                  }}
                >
                  <Search
                    className="h-4 w-4 shrink-0"
                    style={{ color: '#94a3b8' }}
                    strokeWidth={2}
                  />
                  <span className="text-[0.9375rem]" style={{ color: '#64748b' }}>
                    restaurante brasileiro perto de mim
                  </span>
                </div>

                {/* Tabs placeholder */}
                <div className="mt-4 flex items-center gap-6">
                  {['Tudo', 'Maps', 'Imagens', 'Vídeos', 'Mais'].map((tab, i) => (
                    <span
                      key={tab}
                      className="text-[0.8125rem]"
                      style={{
                        color: i === 0 ? '#218B52' : '#94a3b8',
                        fontWeight: i === 0 ? 600 : 400,
                        borderBottom: i === 0 ? '2px solid #218B52' : '2px solid transparent',
                        paddingBottom: '4px',
                      }}
                    >
                      {tab}
                    </span>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="space-y-0 px-6 py-5">
                {/* ── Result 1 — aparece primeiro ── */}
                <div
                  className="rounded-2xl border p-5"
                  style={{ borderColor: 'rgba(15,23,42,0.07)', background: '#fff' }}
                >
                  <div className="flex items-start gap-4">
                    {/* Image placeholder */}
                    <div
                      className="h-16 w-16 shrink-0 rounded-xl"
                      style={{ background: '#e2e8f0' }}
                    />
                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex flex-wrap items-center gap-2">
                        <span
                          className="text-[0.9375rem] font-semibold"
                          style={{ color: '#0F2747' }}
                        >
                          Restaurante Placeholder
                        </span>
                        <span
                          className="rounded-full px-2.5 py-0.5 text-[0.6875rem] font-semibold"
                          style={{ background: '#dcfce7', color: '#15803d' }}
                        >
                          Apareceu primeiro
                        </span>
                      </div>
                      <div className="mb-1.5 flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-3 w-3"
                            strokeWidth={0}
                            style={{ fill: '#f59e0b' }}
                          />
                        ))}
                        <span className="ml-1 text-[0.75rem]" style={{ color: '#64748b' }}>
                          4.8 · 127 avaliações
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin
                          className="h-3 w-3 shrink-0"
                          style={{ color: '#94a3b8' }}
                          strokeWidth={1.5}
                        />
                        <span className="text-[0.75rem]" style={{ color: '#94a3b8' }}>
                          2.3 km · Aberto agora
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider with spacing */}
                <div className="flex items-center gap-3 py-5">
                  <div className="h-px flex-1" style={{ background: 'rgba(15,23,42,0.06)' }} />
                  <span className="text-[0.6875rem]" style={{ color: '#cbd5e1' }}>
                    32px
                  </span>
                  <div className="h-px flex-1" style={{ background: 'rgba(15,23,42,0.06)' }} />
                </div>

                {/* ── Result 2 — seu negócio (invisível) ── */}
                <div
                  className="rounded-2xl border p-5 opacity-45"
                  style={{ borderColor: 'rgba(15,23,42,0.07)', background: '#f8fafc' }}
                >
                  <div className="flex items-start gap-4">
                    {/* Image placeholder — cinza, apagado */}
                    <div
                      className="h-16 w-16 shrink-0 rounded-xl"
                      style={{ background: '#cbd5e1' }}
                    />
                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex flex-wrap items-center gap-2">
                        <span
                          className="text-[0.9375rem] font-semibold"
                          style={{ color: '#64748b' }}
                        >
                          Seu negócio
                        </span>
                        <span
                          className="rounded-full px-2.5 py-0.5 text-[0.6875rem] font-semibold"
                          style={{ background: '#f1f5f9', color: '#94a3b8' }}
                        >
                          Não encontrado
                        </span>
                      </div>
                      <div className="mb-1.5 flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-3 w-3"
                            strokeWidth={0}
                            style={{ fill: '#cbd5e1' }}
                          />
                        ))}
                        <span className="ml-1 text-[0.75rem]" style={{ color: '#cbd5e1' }}>
                          — · — avaliações
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin
                          className="h-3 w-3 shrink-0"
                          style={{ color: '#cbd5e1' }}
                          strokeWidth={1.5}
                        />
                        <span className="text-[0.75rem]" style={{ color: '#cbd5e1' }}>
                          Posição desconhecida
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div
                className="px-6 pt-1 pb-6 text-center text-[0.75rem]"
                style={{ color: '#94a3b8' }}
              >
                Seu cliente normalmente escolhe quem encontrou primeiro.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
