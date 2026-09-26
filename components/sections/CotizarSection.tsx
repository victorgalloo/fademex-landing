'use client'

import ContactForm from '@/components/ContactForm'
import { Reveal } from '@/lib/hooks'
import { ButtonLink, Container, SectionLabel, WhatsAppIcon, displayClass, headingClass } from '@/components/ui'
import { EMAIL, PHONE_DISPLAY, PHONE_HREF, whatsappUrl } from '@/lib/contact'

const CONTACT_INFO = [
  { label: 'Oficina y Centro de Operaciones', value: 'León, Guanajuato' },
  { label: 'Teléfono', value: PHONE_DISPLAY, href: PHONE_HREF },
  { label: 'Correo', value: EMAIL, href: `mailto:${EMAIL}` },
  { label: 'Horario', value: 'Lun – Vie: 8:00 – 19:00' },
]

export default function CotizarSection({ headingLevel = 'h2' }: { headingLevel?: 'h1' | 'h2' }) {
  const Heading = headingLevel
  return (
    <section id="cotizar" className="py-10 md:py-16 scroll-mt-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel className="mb-8">Cotizar</SectionLabel>
              <Heading className={`${displayClass} mb-6`}>Cotiza paneles solares para tu empresa.</Heading>
              <p className="text-base leading-[1.4] text-carbon/80 mb-8 max-w-sm">
                Cuéntanos tu tarifa y tu consumo. Un ingeniero revisa tu caso y te contacta en
                menos de 24 horas hábiles para agendar una sesión técnica.
              </p>
              <ButtonLink href={whatsappUrl('general')} className="mb-10">
                <WhatsAppIcon />
                Prefiero cotizar por WhatsApp
              </ButtonLink>
              <dl className="border-t border-carbon/20 text-sm">
                {CONTACT_INFO.map((item) => (
                  <div key={item.label} className="flex flex-wrap justify-between gap-x-4 gap-y-1 py-4 border-b border-carbon/20">
                    <dt className="text-mercury">{item.label}</dt>
                    <dd>
                      {item.href ? (
                        <a href={item.href} className="hover:opacity-60 transition-opacity">{item.value}</a>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <div className="bg-white rounded-xl p-[22px] md:p-10">
                <h3 className={`${headingClass} mb-3`}>Cuéntanos de tu planta.</h3>
                <p className="text-sm leading-[1.4] text-carbon/70 mb-8">
                  Mientras más datos compartas (tarifa de CFE, consumo mensual, ubicación), más
                  útil será la primera conversación.
                </p>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
