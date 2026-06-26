import { MapPin, Search, Star, Store } from 'lucide-react'

/* ═══════════════════════════════════════════════════════
   Section 02 — A Oportunidade Invisível
   Fundo #F6F8F5. Layout assimétrico: texto leve à esquerda,
   mockup de busca à direita como protagonista visual.
═══════════════════════════════════════════════════════ */
export function ProblemSection() {
  return (
    <section
      id="oportunidade"
      className="relative overflow-hidden"
      style={{ background: '#F6F8F5' }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 60% 50% at 88% 8%, rgba(33,139,82,0.05) 0%, transparent 65%),' +
            'radial-gradient(ellipse 50% 45% at 10% 92%, rgba(15,23,42,0.03) 0%, transparent 60%)',
        }}
      />

      <div className="container-page relative py-[88px] max-lg:py-[64px]">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[44fr_56fr]">
          {/* ─── LEFT — copy ───────────────────────────── */}
          <div className="flex flex-col">
            <p className="reveal mb-6 text-[0.8125rem] font-medium" style={{ color: '#218B52' }}>
              A oportunidade invisível
            </p>

            <h2
              className="reveal font-display mb-6 tracking-tight"
              style={{
                fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
                lineHeight: '1.0',
                color: '#0F2747',
                maxWidth: '520px',
              }}
            >
              Enquanto você espera por indicação, alguém procura pelo{' '}
              <em style={{ color: '#218B52', fontStyle: 'italic' }}>seu serviço agora.</em>
            </h2>

            <div
              className="reveal mb-8 space-y-3 text-[1.0625rem] leading-[1.65]"
              style={{ color: '#475569', maxWidth: '460px' }}
            >
              <p>
                Brasileiros procuram todos os dias por restaurantes, clínicas, salões e dezenas de
                outros serviços.
              </p>
              <p>Na maioria das vezes, escolhem quem apareceu primeiro.</p>
            </div>

            {/* Highlight card */}
            <div
              className="reveal rounded-3xl p-6"
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(15,23,42,0.08)',
                boxShadow: '0 2px 16px rgba(15,23,42,0.04)',
                maxWidth: '460px',
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
                  style={{ background: '#F6F8F5' }}
                >
                  <Store className="h-5 w-5" style={{ color: '#218B52' }} strokeWidth={1.5} />
                </div>
                <div>
                  <p
                    className="font-display mb-1 text-[1.0625rem] leading-snug"
                    style={{ color: '#0F2747' }}
                  >
                    Seu serviço pode ser o melhor.
                  </p>
                  <p className="text-[0.875rem] leading-[1.6]" style={{ color: '#475569' }}>
                    Mas quem aparece primeiro costuma receber o contato.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ─── RIGHT — Google Search mockup ──────────── */}
          <div className="reveal flex items-center justify-center lg:justify-end">
            <div
              className="w-full rounded-[28px] border bg-white"
              style={{
                maxWidth: '500px',
                borderColor: 'rgba(15,23,42,0.08)',
                boxShadow: '0 8px 48px rgba(15,23,42,0.10)',
              }}
            >
              {/* Search field */}
              <div
                className="border-b px-6 pt-6 pb-5"
                style={{ borderColor: 'rgba(15,23,42,0.06)' }}
              >
                <div
                  className="flex items-center gap-3 rounded-[18px] border px-4 py-3"
                  style={{ borderColor: 'rgba(15,23,42,0.12)', background: '#FAFAFA' }}
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
                {/* Result 1 — visible */}
                <div
                  className="rounded-2xl border p-5"
                  style={{ borderColor: 'rgba(15,23,42,0.07)', background: '#fff' }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="h-14 w-14 shrink-0 rounded-xl"
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
                      <div className="mb-1 flex items-center gap-1">
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

                {/* Divider */}
                <div className="flex items-center gap-3 py-4">
                  <div className="h-px flex-1" style={{ background: 'rgba(15,23,42,0.06)' }} />
                  <div className="h-px flex-1" style={{ background: 'rgba(15,23,42,0.06)' }} />
                </div>

                {/* Result 2 — invisible */}
                <div
                  className="rounded-2xl border p-5 opacity-40"
                  style={{ borderColor: 'rgba(15,23,42,0.07)', background: '#f8fafc' }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="h-14 w-14 shrink-0 rounded-xl"
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
                      <div className="mb-1 flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-3 w-3"
                            strokeWidth={0}
                            style={{ fill: '#cbd5e1' }}
                          />
                        ))}
                        <span className="ml-1 text-[0.75rem]" style={{ color: '#cbd5e1' }}>
                          — avaliações
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

              <div className="px-6 pb-5 text-center text-[0.75rem]" style={{ color: '#94a3b8' }}>
                Seu cliente escolhe quem encontrou primeiro.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
