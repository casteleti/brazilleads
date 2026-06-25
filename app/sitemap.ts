import type { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/usa`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/canada`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    {
      url: `${base}/australia`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/portugal`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]
}
