import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { baseMetadata } from '@/config/metadata'
import { AnalyticsProvider } from '@/providers/analytics-provider'
import { getOrganizationSchema } from '@/lib/structured-data'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = baseMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const orgSchema = getOrganizationSchema()

  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="bg-background text-foreground flex min-h-full flex-col">
        <AnalyticsProvider>{children}</AnalyticsProvider>
      </body>
    </html>
  )
}
