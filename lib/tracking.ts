/**
 * Tracking helper — camada centralizada de eventos.
 *
 * Todos os componentes chamam apenas as funções deste módulo.
 * Nenhum componente chama gtag() ou fbq() diretamente.
 *
 * Preparado para:
 *  - GA4 (gtag)
 *  - Meta Pixel (fbq)
 *  - Meta Conversions API (server-side — adicionar chamada ao endpoint aqui)
 *  - Google Ads (adicionar gtag('event', 'conversion', ...) aqui)
 *  - GTM Server Side (via dataLayer)
 */

// ─── Tipos ────────────────────────────────────────────────────────────────────

export type TrackEventParams = {
  /** Nome canônico do evento (ex: "cta_click", "form_start") */
  event: string
  /** Categoria principal (ex: "engagement", "form", "navigation") */
  category?: string
  /** Seção ou componente de origem (ex: "hero", "final_cta") */
  section?: string
  /** Label legível (ex: "Quero ser encontrado") */
  label?: string
  /** Propriedades adicionais enviadas ao GA4 como parâmetros extras */
  extra?: Record<string, string | number | boolean>
}

// ─── Guards ───────────────────────────────────────────────────────────────────

function hasGtag(): boolean {
  return typeof window !== 'undefined' && typeof window.gtag === 'function'
}

function hasFbq(): boolean {
  return typeof window !== 'undefined' && typeof window.fbq === 'function'
}

// ─── Helper principal ─────────────────────────────────────────────────────────

/**
 * Envia um evento simultaneamente para GA4 e Meta Pixel.
 * Mapeamento GA4↔Meta definido internamente.
 */
export function trackEvent({
  event,
  category = 'engagement',
  section,
  label,
  extra,
}: TrackEventParams): void {
  if (typeof window === 'undefined') return

  const ga4Params: Record<string, string | number | boolean | undefined> = {
    event_category: category,
    ...(section && { event_section: section }),
    ...(label && { event_label: label }),
    ...extra,
  }

  // ── GA4 ──────────────────────────────────────────────────────────────────
  if (hasGtag()) {
    window.gtag('event', GA4_EVENT_MAP[event] ?? event, ga4Params)
  }

  // ── Meta Pixel ────────────────────────────────────────────────────────────
  const pixelMapping = META_EVENT_MAP[event]
  if (hasFbq() && pixelMapping) {
    const { type, name, data } = pixelMapping
    const pixelData = {
      ...(section && { content_category: section }),
      ...(label && { content_name: label }),
      ...data,
    }
    if (type === 'track') {
      window.fbq('track', name, pixelData)
    } else {
      window.fbq('trackCustom', name, pixelData)
    }
  }
}

// ─── Mapeamento GA4 ───────────────────────────────────────────────────────────

/** Converte nomes internos de eventos para nomes canônicos GA4. */
const GA4_EVENT_MAP: Record<string, string> = {
  page_view: 'page_view',
  view_content: 'view_item',
  lead: 'generate_lead',
  contact: 'contact',
  cta_click: 'select_content',
  form_start: 'form_start',
  form_complete: 'form_submit',
  scroll_25: 'scroll',
  scroll_50: 'scroll',
  scroll_75: 'scroll',
  scroll_100: 'scroll',
}

// ─── Mapeamento Meta Pixel ────────────────────────────────────────────────────

type MetaEventMapping = {
  type: 'track' | 'trackCustom'
  name: string
  data?: Record<string, string | number>
}

/** Converte nomes internos de eventos para eventos Meta Pixel. */
const META_EVENT_MAP: Record<string, MetaEventMapping> = {
  page_view: { type: 'track', name: 'PageView' },
  view_content: { type: 'track', name: 'ViewContent' },
  lead: { type: 'track', name: 'Lead' },
  contact: { type: 'trackCustom', name: 'Contact' },
  cta_click: { type: 'trackCustom', name: 'CTAClick' },
  form_start: { type: 'trackCustom', name: 'FormStart' },
  form_complete: { type: 'track', name: 'Lead' },
  scroll_25: { type: 'trackCustom', name: 'Scroll25' },
  scroll_50: { type: 'trackCustom', name: 'Scroll50' },
  scroll_75: { type: 'trackCustom', name: 'Scroll75' },
  scroll_100: { type: 'trackCustom', name: 'Scroll100' },
}

// ─── Eventos de alto nível (API pública) ──────────────────────────────────────

export const track = {
  pageView() {
    trackEvent({ event: 'page_view', category: 'navigation' })
  },

  viewContent() {
    trackEvent({ event: 'view_content', category: 'engagement' })
  },

  lead(section?: string) {
    trackEvent({ event: 'lead', category: 'conversion', section })
  },

  contact(label: string, section: string) {
    trackEvent({ event: 'contact', category: 'conversion', section, label })
  },

  ctaClick(label: string, section: string, destination?: string) {
    trackEvent({
      event: 'cta_click',
      category: 'engagement',
      section,
      label,
      extra: destination ? { destination } : undefined,
    })
  },

  formStart(section?: string) {
    trackEvent({ event: 'form_start', category: 'form', section })
  },

  formComplete(section?: string) {
    trackEvent({ event: 'form_complete', category: 'form', section })
  },

  scroll(percent: 25 | 50 | 75 | 100) {
    trackEvent({
      event: `scroll_${percent}`,
      category: 'engagement',
      extra: { percent_scrolled: percent },
    })
  },
}
