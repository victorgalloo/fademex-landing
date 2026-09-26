'use client'

import Accordion from '@/components/Accordion'
import { Reveal } from '@/lib/hooks'
import { Container, CtaButtons, SectionLabel, SquareList, displayClass, headingClass } from '@/components/ui'

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
  { value: '24 meses', title: 'Operación y mantenimiento', desc: 'Mantenimiento completo incluido en todos nuestros proyectos.' },
  { value: '30 años', title: 'Garantía de producción', desc: 'Tu sistema seguirá produciendo por encima del 85% de su capacidad.' },
  { value: '24/7', title: 'Monitoreo', desc: 'Nuestro Centro de Control revisa tu sistema todo el día y recibe alertas en tiempo real.' },
]

export default function IngenieriaSection({ showIntro = true }: { showIntro?: boolean }) {
  return (
    <section id="ingenieria" className="py-10 md:py-16 scroll-mt-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel className="mb-8">{showIntro ? 'Ingeniería' : 'Nuestro proceso'}</SectionLabel>
              {showIntro ? (
                <h2 className={`${displayClass} mb-6`}>De la auditoría energética al primer kWh.</h2>
              ) : (
                <h2 className={`${headingClass} mb-6`}>Cuatro fases con un ingeniero responsable en cada una.</h2>
              )}
              <p className="text-base leading-[1.4] text-carbon/80 max-w-md mb-8">
                Cuatro fases con un ingeniero responsable en cada una. La auditoría define
                todo lo demás: cuántos paneles necesitas, dónde van y cuánto vas a
                ahorrar. Por eso no cotizamos sin medir.
              </p>
              <CtaButtons context="ingenieria" quoteLabel="Agendar auditoría" />
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

        {/* Garantías */}
        <Reveal>
          <SectionLabel className="mb-8">Garantías y soporte después de la instalación</SectionLabel>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {GUARANTEES.map((g, i) => (
            <Reveal key={g.title} delay={i * 80}>
              <div className="h-full bg-white rounded-xl p-[22px] md:p-8">
                <div className="text-[40px] md:text-display font-light leading-none mb-10">{g.value}</div>
                <h4 className="text-base font-normal mb-2">{g.title}</h4>
                <p className="text-sm leading-[1.4] text-carbon/70">{g.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
