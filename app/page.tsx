import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StickyBottomCTA } from '@/components/layout/StickyBottomCTA'
import { ScrollReveal } from '@/components/layout/ScrollReveal'
import { HeroSection } from '@/features/landing/sections/HeroSection'
import { ProblemSection } from '@/features/landing/sections/ProblemSection'
import { PositioningSection } from '@/features/landing/sections/PositioningSection'
import { MethodologySection } from '@/features/landing/sections/MethodologySection'
import { WhySection } from '@/features/landing/sections/WhySection'
import { EcosystemSection } from '@/features/landing/sections/EcosystemSection'
import { BusinessesSection } from '@/features/landing/sections/BusinessesSection'
import { FAQSection } from '@/features/landing/sections/FAQSection'
import { FinalCTASection } from '@/features/landing/sections/FinalCTASection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brazilleads | Crescimento para Brasileiros no Exterior',
  description:
    'Especialista em marketing digital para empresários brasileiros nos EUA, Canadá, Austrália e Portugal. Suporte em português.',
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* 01 */}
        <HeroSection />
        {/* 02 */}
        <ProblemSection />
        {/* 03 */}
        <PositioningSection />
        {/* 04 */}
        <MethodologySection />
        {/* 05 */}
        <WhySection />
        {/* 06 */}
        <EcosystemSection />
        {/* 07 */}
        <BusinessesSection />
        {/* 08 */}
        <FAQSection />
        {/* 09 */}
        <FinalCTASection />
      </main>
      <Footer />
      <StickyBottomCTA />
      <ScrollReveal />
    </>
  )
}
