import type { Metadata } from 'next'
import { Inter, DM_Serif_Display, Space_Grotesk } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { baseMetadata } from '@/config/metadata'
import { AnalyticsProvider } from '@/providers/analytics-provider'
import { getOrganizationSchema } from '@/lib/structured-data'

const GTM_ID = 'GTM-WKRQ6332'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const dmSerifDisplay = DM_Serif_Display({
  variable: '--font-dm-serif',
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
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
    <html
      lang="pt-BR"
      className={`${inter.variable} ${dmSerifDisplay.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        {/* End Google Tag Manager */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="bg-background text-foreground flex min-h-full flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <AnalyticsProvider>{children}</AnalyticsProvider>
      </body>
    </html>
  )
}
