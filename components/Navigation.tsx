'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Navigation configuration
const NAV_ITEMS = [
  { label: 'Inicio', href: '/' },
  { label: 'Soluciones', href: '/soluciones' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Tecnología', href: '/tecnologia' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Ingeniería', href: '/ingenieria' },
  { label: 'Contacto', href: '/contacto' },
] as const

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

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
            {NAV_ITEMS.slice(1).map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-normal tracking-[0.01em] transition-opacity duration-300 ${active ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/portal/login"
              className="hidden lg:inline-flex items-center rounded-full border border-white/40 px-4 py-2.5 text-sm leading-none hover:bg-white hover:text-carbon transition-colors duration-300"
            >
              Ingresar
            </Link>

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
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-4 border-b border-white/20 text-[32px] font-light leading-none"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/portal/login"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-8 self-start rounded-full bg-white text-carbon px-[22px] py-[18px] text-sm leading-none"
          >
            Ingresar al portal
          </Link>
        </div>
      )}
    </>
  )
}
