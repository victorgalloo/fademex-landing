import Link from 'next/link'
import FloatingContact from '@/components/FloatingContact'
import { EMAIL, PHONE_DISPLAY, PHONE_HREF, QUOTE_HREF, whatsappUrl } from '@/lib/contact'

const COLUMNS = [
  {
    title: 'Servicios',
    links: [
      { label: 'Paneles solares industriales', href: '/servicios' },
      { label: 'Paneles solares comerciales', href: '/servicios' },
      { label: 'Financiamiento y garantías', href: '/soluciones' },
      { label: 'Especificaciones técnicas', href: '/tecnologia' },
    ],
  },
  {
    title: 'Compañía',
    links: [
      { label: 'Casos de éxito', href: '/proyectos' },
      { label: 'Auditoría energética', href: '/ingenieria' },
      { label: 'Preguntas frecuentes', href: '/#preguntas' },
      { label: 'Portal de clientes', href: '/portal/login' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-onyx text-white pt-20 pb-[30px] mt-12">
      <div className="mx-auto w-full max-w-page px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/15">
          <div className="md:col-span-5">
            <img
              src="/logos/fademex-claro.svg"
              alt="FADEMEX"
              className="h-10 w-auto mb-8"
            />
            <p className="text-sm leading-[1.4] text-white/60 max-w-xs">
              Soluciones de ingeniería energética para el sector industrial y
              comercial de México.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="text-label uppercase text-white/50 mb-6">{col.title}</h4>
              <ul className="space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white/80 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-3">
            <h4 className="text-label uppercase text-white/50 mb-6">Contacto</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>León, Guanajuato</li>
              <li>
                <a href={PHONE_HREF} className="hover:text-white transition-colors">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">
                  {EMAIL}
                </a>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-6">
              <a href={QUOTE_HREF} className="rounded-full bg-white text-carbon px-4 py-2.5 text-sm leading-none hover:bg-vellum transition-colors">
                Cotizar
              </a>
              <a
                href={whatsappUrl('general')}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/40 px-4 py-2.5 text-sm leading-none hover:bg-white hover:text-carbon transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} FADEMEX Energy Systems. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-white transition-colors">Privacidad</Link>
            <Link href="/" className="hover:text-white transition-colors">Términos</Link>
            <Link href="/" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
      <FloatingContact />
    </footer>
  )
}
