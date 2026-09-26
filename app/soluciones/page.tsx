'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Reveal } from '@/lib/hooks'
import { ButtonLink, Container, CtaBlock, PageHero, SectionLabel } from '@/components/ui'

const ADVANTAGES = [
  {
    metric: '30 años',
    title: 'Garantía de generación',
    subtitle: 'Generation Performance',
    desc: 'Aseguramos contractualmente que tu sistema producirá energía por encima del 85% incluso después de tres décadas de operación continua.',
  },
  {
    metric: '0%',
    title: 'Financiamiento directo',
    subtitle: 'Direct Capital Access',
    desc: 'Elimina la barrera de entrada. Modelos de financiamiento directo que permiten que el ahorro energético pague la infraestructura.',
  },
  {
    metric: '24 meses',
    title: 'Mantenimiento integral',
    subtitle: 'Full Service O&M',
    desc: 'Dos años de operación y mantenimiento (O&M) incluidos. Limpieza, termografía con drones y ajuste de torque sin costo adicional.',
  },
  {
    metric: '100%',
    title: 'Plug & Play',
    subtitle: 'Seamless Integration',
    desc: 'Interconexión sin fricción con la red de CFE. Nos encargamos de toda la gestoría, trámites y certificación UVIE.',
  },
]

export default function SolucionesPage() {
  return (
    <div className="min-h-screen bg-vellum text-carbon">
      <Navigation />

      <Reveal>
        <PageHero
          label="Ventajas competitivas"
          title={
            <>
              Ingeniería de precisión.
              <br />
              Resultados garantizados.
            </>
          }
          intro="No solo instalamos paneles: desplegamos infraestructura energética crítica diseñada para durar décadas bajo condiciones extremas."
        >
          <ButtonLink href="/contacto">Agenda consultoría</ButtonLink>
          <ButtonLink href="/servicios" variant="ghost">Ver servicios</ButtonLink>
        </PageHero>
      </Reveal>

      {/* Imagen a sangre dentro del contenedor */}
      <section className="pb-12">
        <Container>
          <Reveal>
            <div className="aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-[40px] md:rounded-orb">
              <img
                src="/hero-solar.png"
                alt="Planta industrial con arreglo solar en el techo"
                className="w-full h-full object-cover object-[50%_60%]"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Ventajas como hoja de especificaciones */}
      <section className="py-10 md:py-16">
        <Container>
          <Reveal>
            <SectionLabel className="mb-10">Cuatro compromisos</SectionLabel>
          </Reveal>
          <div className="border-t border-carbon">
            {ADVANTAGES.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 border-b border-carbon">
                  <div className="md:col-span-4 text-[40px] md:text-display font-light leading-none">
                    {item.metric}
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-[20px] md:text-subheading font-normal mb-2">{item.title}</h3>
                    <div className="text-label uppercase text-mercury">{item.subtitle}</div>
                  </div>
                  <p className="md:col-span-5 text-base leading-[1.4] text-carbon/80">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <Reveal>
            <CtaBlock
              title="¿Listo para transformar tu infraestructura energética?"
              text="Agenda una sesión técnica con nuestros ingenieros para evaluar tu consumo y diseñar una solución personalizada."
            >
              <ButtonLink href="/contacto" variant="light">Iniciar proyecto</ButtonLink>
              <ButtonLink href="/proyectos" variant="ghost-light">Ver proyectos realizados</ButtonLink>
            </CtaBlock>
          </Reveal>
        </Container>
      </section>

      <Footer />
    </div>
  )
}
