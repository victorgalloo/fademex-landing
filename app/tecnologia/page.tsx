'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Reveal } from '@/lib/hooks'
import { ButtonLink, Container, CtaBlock, PageHero, SectionLabel, headingClass } from '@/components/ui'

const TECHNICAL_SPECS = [
  { label: 'Eficiencia panel', val: '22.8%', desc: 'N-Type TOPCon Technology' },
  { label: 'Degradación anual', val: '<0.4%', desc: 'Garantizada por 30 años' },
  { label: 'Latencia monitoreo', val: '20 ms', desc: 'Actualización en tiempo real' },
  { label: 'Densidad batería', val: '280 Ah', desc: 'LFP Prismatic Cells' },
]

const CERTIFICATIONS = [
  'ISO 9001',
  'Fabricantes Tier 1',
  'Monitoreo NOC 24/7',
  'Zero Export',
  'Peak Shaving',
  'Estándares UL',
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
          label="Tecnología de vanguardia"
          title={
            <>
              Especificaciones
              <br />
              técnicas.
            </>
          }
          intro="Utilizamos componentes Tier 1 clasificados por Bloomberg NEF. Cada inversor, panel y estructura es auditado para cumplir con estándares internacionales IEC y UL."
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

      <section className="py-12 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Tabla de especificaciones */}
            <div className="lg:col-span-5">
              <Reveal>
                <SectionLabel className="mb-8">Componentes</SectionLabel>
                <h2 className={`${headingClass} mb-6`}>Seleccionados bajo criterios rigurosos.</h2>
                <p className="text-base leading-[1.4] text-carbon/80 mb-10">
                  Eficiencia, durabilidad y certificación internacional en cada componente.
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
                      Sistema de monitoreo 24/7 con alertas automáticas y análisis predictivo de fallas.
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={400}>
                  <div className="h-full bg-white rounded-xl p-[22px] md:p-8">
                    <h3 className="text-base font-normal mb-3">Certificaciones internacionales</h3>
                    <p className="text-sm leading-[1.4] text-carbon/70">
                      Todos nuestros componentes cumplen con IEC 61215, IEC 61730 y estándares UL.
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
              title="¿Quieres conocer más detalles técnicos?"
              text="Solicita nuestras especificaciones técnicas completas o agenda una sesión con nuestros ingenieros."
            >
              <ButtonLink href="/contacto" variant="light">Consultar con un ingeniero</ButtonLink>
              <ButtonLink href="/servicios" variant="ghost-light">Ver catálogo de servicios</ButtonLink>
            </CtaBlock>
          </Reveal>
        </Container>
      </section>

      <Footer />
    </div>
  )
}
