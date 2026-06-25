import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StickyBottomCTA } from '@/components/layout/StickyBottomCTA'
import { HeroSection } from '@/features/landing/sections/HeroSection'
import { ProblemSection } from '@/features/landing/sections/ProblemSection'
import { PositioningSection } from '@/features/landing/sections/PositioningSection'
import { MethodologySection } from '@/features/landing/sections/MethodologySection'
import { SocialProofSection } from '@/features/landing/sections/SocialProofSection'
import { FAQSection } from '@/features/landing/sections/FAQSection'
import { PricingSection } from '@/features/landing/sections/PricingSection'
import { ContactSection } from '@/features/landing/sections/ContactSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brazilleads | Crescimento para Brasileiros no Exterior',
  description:
    'Especialista em Google Ads para empresários brasileiros nos EUA, Canadá, Austrália e Portugal. Suporte em português. Resultado em 30 dias.',
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <PositioningSection />
        <MethodologySection />
        <SocialProofSection />
        <FAQSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
      <StickyBottomCTA />
    </>
  )
}
