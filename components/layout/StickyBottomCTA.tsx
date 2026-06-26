'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { track } from '@/lib/tracking'

export function StickyBottomCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const trigger = document.getElementById('hero-cta-trigger')
    const contact = document.getElementById('contato')

    if (!trigger || !contact) return

    // Show sticky CTA when the hero badge scrolls out of viewport (user scrolled ~20-25% of hero)
    const triggerObserver = new IntersectionObserver(
      ([entry]) => {
        // Only show when scrolling down past the trigger (not on initial load)
        if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
          setVisible(true)
        } else if (entry.isIntersecting) {
          setVisible(false)
        }
      },
      { threshold: 0 }
    )

    // Hide sticky CTA when the contact section starts entering the viewport
    const contactObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(false)
      },
      { threshold: 0.05 }
    )

    triggerObserver.observe(trigger)
    contactObserver.observe(contact)

    return () => {
      triggerObserver.disconnect()
      contactObserver.disconnect()
    }
  }, [])

  return (
    <div
      role="complementary"
      aria-label="Agendar conversa"
      className={`fixed right-0 bottom-0 left-0 z-40 transition-transform duration-300 ease-out md:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      aria-hidden={!visible}
    >
      <Link
        href="#contato"
        tabIndex={visible ? 0 : -1}
        className="bg-brand-green active:bg-brand-navy duration-fast flex h-14 w-full items-center justify-center text-[15px] font-semibold text-white shadow-lg transition-colors"
        onClick={() => {
          setVisible(false)
          track.ctaClick('Agendar conversa', 'sticky_cta_mobile', '#contato')
        }}
      >
        Agendar conversa →
      </Link>
    </div>
  )
}
