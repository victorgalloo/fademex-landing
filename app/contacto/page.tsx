'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import { Reveal } from '@/lib/hooks'
import { ButtonLink, Container, CtaBlock, PageHero, SectionLabel, headingClass } from '@/components/ui'

const CONTACT_INFO = [
  { label: 'Oficina principal', value: 'León, Guanajuato', note: 'Centro de Operaciones' },
  { label: 'Teléfono', value: '+52 (479) 136-9896', note: 'Lunes a viernes', href: 'tel:+524791369896' },
  { label: 'Correo', value: 'contacto@fademex.com', note: 'Respuesta en 24 horas', href: 'mailto:contacto@fademex.com' },
  { label: 'Horario', value: 'Lun – Vie: 8:00 – 19:00' },
]

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-vellum text-carbon">
      <Navigation />

      <Reveal>
        <PageHero
          label="Contacto directo"
          title={
            <>
              Comienza la
              <br />
              transición.
            </>
          }
          intro="Agenda una sesión técnica con nuestros ingenieros senior. Te responderemos en menos de 24 horas."
        />
      </Reveal>

      <section className="py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Información de contacto */}
            <div className="lg:col-span-5">
              <Reveal>
                <SectionLabel className="mb-8">Información de contacto</SectionLabel>
                <dl className="border-t border-carbon">
                  {CONTACT_INFO.map((item) => (
                    <div key={item.label} className="py-5 border-b border-carbon">
                      <dt className="text-xs text-mercury mb-2">{item.label}</dt>
                      <dd className="text-[20px] font-light">
                        {item.href ? (
                          <a href={item.href} className="hover:opacity-60 transition-opacity">{item.value}</a>
                        ) : (
                          item.value
                        )}
                      </dd>
                      {item.note && <dd className="text-sm text-carbon/60 mt-1">{item.note}</dd>}
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            {/* Formulario */}
            <div className="lg:col-span-7">
              <Reveal delay={100}>
                <div className="bg-white rounded-xl p-[22px] md:p-10">
                  <h2 className={`${headingClass} mb-3`}>Solicita una consultoría.</h2>
                  <p className="text-sm leading-[1.4] text-carbon/70 mb-10">
                    Completa el formulario y un ingeniero se pondrá en contacto contigo.
                  </p>
                  <ContactForm />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <Reveal>
            <CtaBlock
              label="Proyectos de gran escala"
              title="¿Tienes un proyecto grande o necesitas soporte técnico?"
              text="Para proyectos de más de 5 MW o soporte técnico urgente, contacta directamente al departamento de ingeniería."
            >
              <ButtonLink href="tel:+524791369896" variant="light">Llamar ahora</ButtonLink>
              <ButtonLink href="mailto:contacto@fademex.com" variant="ghost-light">Escribir a ingeniería</ButtonLink>
            </CtaBlock>
          </Reveal>
        </Container>
      </section>

      <Footer />
    </div>
  )
}
