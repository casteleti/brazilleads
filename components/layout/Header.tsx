'use client'

import Link from 'next/link'
import { ArrowRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Método', href: '#como-funciona' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Ecossistema', href: '#ecossistema' },
  { label: 'Segmentos', href: '#segmentos' },
  { label: 'FAQ', href: '#faq' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <header
        className="sticky top-0 z-50"
        style={{
          background: scrolled ? 'rgba(252,251,248,0.92)' : 'rgba(252,251,248,0.98)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(15,23,42,0.08)' : '1px solid transparent',
          boxShadow: scrolled ? '0 1px 20px rgba(15,23,42,0.06)' : 'none',
          transition: 'border-color 200ms ease, box-shadow 200ms ease, background 200ms ease',
        }}
      >
        <div className="container-page flex h-[68px] items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/imgs/logo_brazilleads.png"
              alt="Brazilleads"
              style={{ height: '30px', width: 'auto', objectFit: 'contain' }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
            {navLinks.map(({ label, href }) => (
              <Link key={label} href={href} className="nav-link text-[0.875rem] font-medium">
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="#contato"
            className="hidden h-10 items-center gap-2 rounded-xl px-5 text-[0.875rem] font-semibold text-white transition-opacity duration-150 hover:opacity-90 active:scale-[0.98] md:inline-flex"
            style={{ background: '#218B52' }}
          >
            Falar com especialista
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-xl md:hidden"
            aria-label="Abrir menu"
            style={{ color: '#0F2747' }}
          >
            <Menu className="h-5 w-5" strokeWidth={2} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className="fixed inset-0 z-[60] md:hidden"
        onClick={close}
        aria-hidden={!menuOpen}
        style={{
          background: 'rgba(15,23,42,0.4)',
          backdropFilter: 'blur(4px)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 280ms ease',
        }}
      />

      {/* Mobile drawer */}
      <div
        className="fixed top-0 right-0 bottom-0 z-[70] flex w-[288px] flex-col md:hidden"
        style={{
          background: '#FCFBF8',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 300ms cubic-bezier(0.16, 1, 0.3, 1)',
          boxShadow: '-12px 0 48px rgba(15,23,42,0.14)',
        }}
      >
        {/* Drawer header */}
        <div
          className="flex items-center justify-between px-6 py-5"
          style={{ borderBottom: '1px solid rgba(15,23,42,0.07)' }}
        >
          <div className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/imgs/logo_brazilleads.png"
              alt="Brazilleads"
              style={{ height: '26px', width: 'auto', objectFit: 'contain' }}
            />
          </div>
          <button
            onClick={close}
            className="flex h-8 w-8 items-center justify-center rounded-lg"
            aria-label="Fechar menu"
            style={{ background: 'rgba(15,23,42,0.06)', color: '#0F2747' }}
          >
            <X className="h-4 w-4" strokeWidth={2} />
          </button>
        </div>

        {/* Drawer links */}
        <nav className="flex flex-1 flex-col gap-1 px-4 pt-6 pb-4">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={close}
              className="flex h-11 items-center rounded-xl px-4 text-[0.9375rem] font-medium transition-colors duration-150"
              style={{ color: '#475569' }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Drawer CTA */}
        <div className="px-4 pb-10">
          <Link
            href="#contato"
            onClick={close}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl text-[0.9375rem] font-semibold text-white"
            style={{ background: '#218B52' }}
          >
            Falar com especialista
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </>
  )
}
