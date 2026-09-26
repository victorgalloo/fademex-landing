'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { QUOTE_HREF, whatsappUrl } from '@/lib/contact'
import { WhatsAppIcon } from '@/components/ui'

// Navigation configuration
// Anclas de la página principal: todo el sitio vive en una sola página
const NAV_ITEMS = [
  { label: 'Ventajas', href: '/#ventajas' },
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Tecnología', href: '/#tecnologia' },
  { label: 'Proyectos', href: '/#proyectos' },
  { label: 'Ingeniería', href: '/#ingenieria' },
  { label: 'Preguntas', href: '/#preguntas' },
] as const

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <>
      {/* Píldora de navegación flotante */}
      <header className="fixed top-4 inset-x-4 md:top-6 md:inset-x-6 z-50 flex justify-end">
        <div className="w-full lg:w-auto flex items-center justify-between gap-8 bg-carbon text-white rounded-2xl pl-5 pr-2 py-2 lg:pl-6 lg:pr-3 lg:py-3">
          <Link href="/" className="flex items-center" aria-label="FADEMEX - Inicio">
            <img
              src="/logos/fademex-claro.svg"
              alt="FADEMEX"
              className="h-7 lg:h-8 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-normal tracking-[0.01em] opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/portal/login"
              className="hidden lg:inline-flex px-3 text-sm leading-none opacity-70 hover:opacity-100 transition-opacity"
            >
              Ingresar
            </Link>
            <a
              href={QUOTE_HREF}
              className="hidden sm:inline-flex items-center rounded-full bg-white text-carbon px-4 py-2.5 text-sm leading-none hover:bg-vellum transition-colors duration-300"
            >
              Cotizar
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden rounded-full border border-white/40 px-4 py-2.5 text-sm leading-none"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? 'Cerrar' : 'Menú'}
            </button>
          </div>
        </div>
      </header>

      {/* Menú móvil */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-carbon text-white flex flex-col justify-end px-6 pb-10 pt-28 overflow-y-auto">
          <nav className="flex flex-col border-t border-white/20">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-4 border-b border-white/20 text-[32px] font-light leading-none"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-8 flex flex-wrap gap-2">
            <a
              href={QUOTE_HREF}
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-full bg-white text-carbon px-[22px] py-[18px] text-sm leading-none"
            >
              Cotizar mi proyecto
            </a>
            <a
              href={whatsappUrl('general')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/60 px-[22px] py-[18px] text-sm leading-none"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
          </div>
          <Link
            href="/portal/login"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-6 text-sm text-white/60"
          >
            Ingresar al portal de clientes
          </Link>
        </div>
      )}
    </>
  )
}
