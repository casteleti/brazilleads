// Global type declarations for analytics scripts loaded via Script tags

interface Window {
  gtag: (
    command: 'config' | 'event' | 'js' | 'set',
    targetIdOrEventName: string | Date,
    params?: Record<string, string | number | boolean | undefined>
  ) => void
  dataLayer: unknown[]
  fbq: (
    command: 'track' | 'trackCustom' | 'init' | 'set',
    eventNameOrPixelId: string,
    data?: Record<string, string | number | boolean>
  ) => void
  _fbq: typeof Window.prototype.fbq
}
