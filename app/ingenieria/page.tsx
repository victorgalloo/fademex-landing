'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Accordion from '@/components/Accordion'
import { Reveal } from '@/lib/hooks'
import {
  ButtonLink,
  Container,
  CtaBlock,
  PageHero,
  SectionLabel,
  SquareList,
  headingClass,
} from '@/components/ui'

const PHASES = [
  {
    step: '01',
    title: 'Auditoría energética',
    desc: 'Análisis de patrones de consumo (Código de Red 2.0), termografía y modelado de sombras.',
    details: [
      'Análisis histórico de recibos CFE',
      'Medición en sitio con analizadores de red',
      'Estudio de sombreado con drones',
      'Modelado 3D de la instalación',
    ],
  },
  {
    step: '02',
    title: 'Ingeniería y diseño',
    desc: 'Diseño CAD/BIM de la estructura, selección de inversores y cálculo del retorno de inversión.',
    details: [
      'Diseño estructural certificado',
      'Selección óptima de componentes',
      'Simulación de producción energética',
      'Análisis financiero y ROI',
    ],
  },
  {
    step: '03',
    title: 'Procura y logística',
    desc: 'Importamos directo de fabricantes Tier 1: sin intermediarios y con la garantía del fabricante intacta.',
    details: [
      'Importación directa de fabricantes Tier 1',
      'Control de calidad en origen',
      'Logística especializada',
      'Seguro de mercancía incluido',
    ],
  },
  {
    step: '04',
    title: 'Instalación y puesta en marcha',
    desc: 'Instalación conforme a la NOM-001-SEDE, pruebas de aislamiento y encendido supervisado.',
    details: [
      'Instalación por personal certificado',
      'Pruebas eléctricas completas',
      'Interconexión con CFE',
      'Capacitación al cliente',
    ],
  },
]

const GUARANTEES = [
  { value: '24 meses', title: 'O&M incluido', desc: 'Operación y mantenimiento completo incluido en todos nuestros proyectos.' },
  { value: '30 años', title: 'Garantía de producción', desc: 'Garantizamos que tu sistema producirá energía por encima del 85%.' },
  { value: '24/7', title: 'Monitoreo', desc: 'Nuestro Centro de Control revisa tu sistema todo el día y recibe alertas en tiempo real.' },
]

export default function IngenieriaPage() {
  return (
    <div className="min-h-screen bg-vellum text-carbon">
      <Navigation />

      <Reveal>
        <PageHero
          label="Ingeniería"
          title={
            <>
              De la auditoría energética
              al primer kWh.
            </>
          }
          intro="Cuatro fases con entregables claros y un ingeniero responsable en cada una. Siempre sabes en qué punto está tu proyecto y qué sigue."
        />
      </Reveal>

      {/* Fases */}
      <section className="py-10 md:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionLabel className="mb-8">Nuestro proceso</SectionLabel>
                <h2 className={`${headingClass} mb-6`}>Cómo instalamos un sistema solar industrial.</h2>
                <p className="text-base leading-[1.4] text-carbon/80 max-w-md">
                  La auditoría define todo lo demás: el tamaño del sistema, si necesitas
                  baterías y cuánto vas a ahorrar. Por eso no cotizamos sin medir.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={100}>
                <Accordion
                  items={PHASES.map((phase) => ({
                    title: phase.title,
                    meta: phase.step,
                    content: (
                      <>
                        <p className="mb-6">{phase.desc}</p>
                        <SquareList items={phase.details} />
                      </>
                    ),
                  }))}
                />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Garantías */}
      <section className="py-10 md:py-16">
        <Container>
          <Reveal>
            <SectionLabel className="mb-10">Garantías y soporte post-instalación</SectionLabel>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {GUARANTEES.map((g, i) => (
              <Reveal key={g.title} delay={i * 80}>
                <div className="h-full bg-white rounded-xl p-[22px] md:p-8">
                  <div className="text-[40px] md:text-display font-light leading-none mb-12">{g.value}</div>
                  <h3 className="text-base font-normal mb-2">{g.title}</h3>
                  <p className="text-sm leading-[1.4] text-carbon/70">{g.desc}</p>
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
              title="Empieza por la auditoría."
              text="Agenda una sesión técnica. Revisamos tus recibos de CFE y planeamos la visita de medición a tu planta."
            >
              <ButtonLink href="/contacto" variant="light">Agendar consultoría</ButtonLink>
              <ButtonLink href="/proyectos" variant="ghost-light">Ver proyectos realizados</ButtonLink>
            </CtaBlock>
          </Reveal>
        </Container>
      </section>

      <Footer />
    </div>
  )
}
