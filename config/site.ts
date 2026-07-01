export const siteConfig = {
  name: 'Brazilleads',
  tagline: 'Crescimento pros nossos lá fora',
  description:
    'Especialista em Google Ads para empresários brasileiros nos EUA, Canadá, Austrália e Portugal. Suporte em português. Resultado em 30 dias.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://brazilleads.com',
  ogImage: '/og-image.jpg',
  links: {
    whatsapp: 'https://wa.me/5516997407304',
    linkedin: 'https://linkedin.com/company/brazilleads',
    instagram: 'https://instagram.com/brazilleads',
  },
  contact: {
    email: 'contato@brazilleads.com',
  },
  countries: ['usa', 'canada', 'australia', 'portugal'] as const,
} as const

export type Country = (typeof siteConfig.countries)[number]
