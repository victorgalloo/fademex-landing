'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Reveal } from '@/lib/hooks'
import { ButtonLink, Container, CtaBlock, PageHero, SectionLabel } from '@/components/ui'

const ADVANTAGES = [
  {
    metric: '30 años',
    title: 'Garantía de generación',
    subtitle: 'Por contrato',
    desc: 'Tu sistema seguirá produciendo al menos el 85% de su capacidad después de 30 años de operación continua. Queda por escrito.',
  },
  {
    metric: '0%',
    title: 'Financiamiento directo',
    subtitle: 'Sin banco de por medio',
    desc: 'Financiamos el sistema nosotros mismos. El dinero que dejas de pagar a CFE cubre la inversión mes a mes, sin descapitalizar a tu empresa.',
  },
  {
    metric: '24 meses',
    title: 'Mantenimiento incluido',
    subtitle: 'Operación y mantenimiento',
    desc: 'Durante los primeros dos años limpiamos los módulos, hacemos termografía con dron para detectar fallas y reapretamos conexiones. Sin costo adicional.',
  },
  {
    metric: 'Llave en mano',
    title: 'Trámites con CFE',
    subtitle: 'Interconexión y UVIE',
    desc: 'Gestionamos la solicitud de interconexión con CFE, el medidor bidireccional y la verificación de la UVIE. Tú recibes el sistema funcionando.',
  },
]

export default function SolucionesPage() {
  return (
    <div className="min-h-screen bg-vellum text-carbon">
      <Navigation />

      <Reveal>
        <PageHero
          label="Ventajas"
          title={
            <>
              Financiamiento, garantía
              y mantenimiento en un contrato.
            </>
          }
          intro="Un sistema solar industrial trabaja 25 años o más. Estos son los cuatro compromisos que firmamos para que tus paneles solares rindan todo ese tiempo."
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
                alt="Planta industrial con paneles solares instalados en el techo"
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
            <SectionLabel className="mb-10">Lo que firmamos contigo</SectionLabel>
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
              title="¿Cuánto puedes ahorrar en tu planta?"
              text="Con tus recibos de CFE calculamos el tamaño del sistema, el ahorro mensual y el retorno de inversión. Luego decides."
            >
              <ButtonLink href="/contacto" variant="light">Solicitar análisis de consumo</ButtonLink>
              <ButtonLink href="/proyectos" variant="ghost-light">Ver proyectos realizados</ButtonLink>
            </CtaBlock>
          </Reveal>
        </Container>
      </section>

      <Footer />
    </div>
  )
}
