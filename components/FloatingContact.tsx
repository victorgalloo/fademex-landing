'use client'

import { useEffect, useState } from 'react'
import { QUOTE_HREF, whatsappUrl } from '@/lib/contact'
import { WhatsAppIcon } from '@/components/ui'

// Accesos fijos de conversión: píldora de WhatsApp en escritorio y barra
// inferior con Cotizar + WhatsApp en móvil. Aparecen al pasar el hero.
export default function FloatingContact() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const state = visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'

  return (
    <>
      <a
        href={whatsappUrl('general')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir a FADEMEX por WhatsApp"
        className={`hidden lg:inline-flex fixed bottom-6 right-6 z-40 items-center gap-2 rounded-full bg-carbon text-white px-5 py-4 text-sm leading-none hover:bg-onyx transition-all duration-300 ${state}`}
      >
        <WhatsAppIcon className="w-5 h-5" />
        WhatsApp
      </a>

      <div className={`lg:hidden fixed inset-x-0 bottom-0 z-40 bg-carbon px-4 pt-3 pb-[max(12px,env(safe-area-inset-bottom))] grid grid-cols-2 gap-2 transition-all duration-300 ${state}`}>
        <a
          href={QUOTE_HREF}
          className="flex items-center justify-center rounded-full bg-white text-carbon py-3.5 text-sm leading-none"
        >
          Cotizar
        </a>
        <a
          href={whatsappUrl('general')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-full border border-white/60 text-white py-3.5 text-sm leading-none"
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
      </div>
      {/* Espacio para que la barra móvil no tape el final de la página */}
      <div className="h-20 lg:hidden bg-onyx" aria-hidden="true" />
    </>
  )
}
