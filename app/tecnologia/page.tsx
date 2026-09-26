'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Reveal } from '@/lib/hooks'
import { ButtonLink, Container, CtaBlock, PageHero, SectionLabel, headingClass } from '@/components/ui'

const TECHNICAL_SPECS = [
  { label: 'Eficiencia del panel', val: '22.8%', desc: 'Celdas N-Type TOPCon' },
  { label: 'Degradación anual', val: '<0.4%', desc: 'Garantizada por 30 años' },
  { label: 'Latencia del monitoreo', val: '20 ms', desc: 'Lecturas en tiempo real' },
  { label: 'Capacidad de celda', val: '280 Ah', desc: 'Celdas prismáticas LFP' },
]

const CERTIFICATIONS = [
  'ISO 9001',
  'Fabricantes Tier 1 BNEF',
  'IEC 61215 · IEC 61730',
  'Estándares UL',
  'Código de Red',
  'Zero Export',
]

// Curva de generación diaria (valores fijos para evitar diferencias de hidratación)
const GENERATION = [
  8, 10, 14, 19, 26, 34, 43, 52, 61, 69, 76, 82, 87, 91, 94, 96, 97, 95, 92, 88,
  82, 75, 67, 58, 49, 40, 31, 23, 16, 11,
]

const LIVE_READINGS = [
  { label: 'Frecuencia de red', value: '60.02 Hz' },
  { label: 'Factor de potencia', value: '0.98 PF' },
  { label: 'Temperatura', value: '32 °C' },
]

export default function TecnologiaPage() {
  return (
    <div className="min-h-screen bg-vellum text-carbon">
      <Navigation />

      <Reveal>
        <PageHero
          label="Tecnología"
          title={
            <>
              Paneles solares Tier 1
              y sus especificaciones.
            </>
          }
          intro="Trabajamos con fabricantes de la lista Tier 1 de BloombergNEF. Cada panel, inversor y estructura que instalamos cumple normas IEC y UL."
        />
      </Reveal>

      {/* Certificaciones */}
      <section className="pb-12">
        <Container>
          <div className="flex flex-wrap gap-x-8 gap-y-3 pt-6 border-t border-carbon/20">
            {CERTIFICATIONS.map((c) => (
              <SectionLabel key={c} tone="muted">{c}</SectionLabel>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 md:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Tabla de especificaciones */}
            <div className="lg:col-span-5">
              <Reveal>
                <SectionLabel className="mb-8">Componentes</SectionLabel>
                <h2 className={`${headingClass} mb-6`}>Lo que instalamos en tu techo.</h2>
                <p className="text-base leading-[1.4] text-carbon/80 mb-10">
                  Valores de referencia de los equipos que especificamos con más frecuencia.
                  Cada proyecto recibe las fichas técnicas de sus componentes.
                </p>
              </Reveal>
              <Reveal delay={100}>
                <dl className="border-t border-carbon">
                  {TECHNICAL_SPECS.map((spec) => (
                    <div key={spec.label} className="flex items-end justify-between gap-6 py-5 border-b border-carbon">
                      <div>
                        <dt className="text-base">{spec.label}</dt>
                        <dd className="text-xs text-mercury mt-1">{spec.desc}</dd>
                      </div>
                      <dd className="text-[32px] font-light leading-none">{spec.val}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            {/* Vista del panel de monitoreo */}
            <div className="lg:col-span-7">
              <Reveal delay={200}>
                <div className="bg-white rounded-xl p-[22px] md:p-8">
                  <div className="flex items-center justify-between gap-4 pb-6 mb-8 border-b border-carbon/15">
                    <SectionLabel>Monitoreo en vivo</SectionLabel>
                    <span className="text-xs text-mercury">dashboard.fademex.cloud/live-view</span>
                  </div>
                  <div className="flex items-end justify-between h-48 gap-1 mb-8" aria-hidden="true">
                    {GENERATION.map((value, i) => (
                      <div
                        key={i}
                        className="w-full rounded-t-[2px] bg-carbon/15 hover:bg-carbon transition-colors"
                        style={{ height: `${value}%` }}
                      />
                    ))}
                  </div>
                  <div className="grid grid-cols-3 border-t border-carbon/15">
                    {LIVE_READINGS.map((r, i) => (
                      <div key={r.label} className={`pt-5 ${i > 0 ? 'pl-4 border-l border-carbon/15' : ''}`}>
                        <div className="text-xs text-mercury mb-2">{r.label}</div>
                        <div className="text-[20px] md:text-subheading font-light">{r.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                <Reveal delay={300}>
                  <div className="h-full bg-white rounded-xl p-[22px] md:p-8">
                    <h3 className="text-base font-normal mb-3">Monitoreo en tiempo real</h3>
                    <p className="text-sm leading-[1.4] text-carbon/70">
                      Vemos la producción de tu sistema las 24 horas y recibimos alertas si algo baja su rendimiento.
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={400}>
                  <div className="h-full bg-white rounded-xl p-[22px] md:p-8">
                    <h3 className="text-base font-normal mb-3">Certificaciones internacionales</h3>
                    <p className="text-sm leading-[1.4] text-carbon/70">
                      Paneles certificados IEC 61215 e IEC 61730; inversores y estructuras bajo estándares UL.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <Reveal>
            <CtaBlock
              title="¿Tu equipo técnico necesita las fichas completas?"
              text="Te enviamos las hojas de datos de cada componente o agendamos una revisión con nuestros ingenieros."
            >
              <ButtonLink href="/contacto" variant="light">Solicitar fichas técnicas</ButtonLink>
              <ButtonLink href="/servicios" variant="ghost-light">Ver catálogo de servicios</ButtonLink>
            </CtaBlock>
          </Reveal>
        </Container>
      </section>

      <Footer />
    </div>
  )
}
