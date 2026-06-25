import { siteConfig } from '@/config/site'

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
    description: siteConfig.description,
    contactPoint: {
      '@type': 'ContactPoint',
      email: siteConfig.contact.email,
      contactType: 'customer service',
      availableLanguage: ['Portuguese', 'English'],
    },
    sameAs: [siteConfig.links.linkedin, siteConfig.links.instagram],
    areaServed: ['US', 'CA', 'AU', 'PT'],
  }
}

export function getProfessionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    priceRange: '$$$',
    serviceType: 'Digital Marketing',
    areaServed: ['US', 'CA', 'AU', 'PT'],
  }
}

export function getFAQSchema(items: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
}
