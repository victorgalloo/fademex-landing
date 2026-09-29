'use client'

import Accordion from '@/components/Accordion'
import { Reveal } from '@/lib/hooks'
import { Container, CtaButtons, SectionIntro, SectionLabel, headingClass } from '@/components/ui'

const COMPONENTS = [
  {
    title: 'Paneles N-Type TOPCon',
    meta: '22.8%',
    content:
      'Módulos de 580 W a 660 W de fabricantes Tier 1 de BloombergNEF, certificados IEC 61215 e IEC 61730, con degradación anual menor a 0.4%.',
  },
  {
    title: 'Inversores',
    meta: 'Código de Red',
    content:
      'Inversores Fronius, Huawei y SMA que cumplen los requisitos del Código de Red y convierten la energía de los paneles con pérdidas mínimas.',
  },
  {
    title: 'Estructuras de montaje',
    meta: 'Lámina · losa · carport',
    content:
      'Estructuras calculadas para la carga de tu techo o estacionamiento, con fijaciones que no comprometen la impermeabilización.',
  },
  {
    title: 'Monitoreo en tiempo real',
    meta: '24/7',
    content:
      'Vemos la producción de tu sistema minuto a minuto y recibimos alertas si algo baja su rendimiento, antes de que lo notes en el recibo.',
  },
]

const TECHNICAL_SPECS = [
  { label: 'Eficiencia del panel', val: '22.8%', desc: 'Celdas N-Type TOPCon' },
  { label: 'Degradación anual', val: '<0.4%', desc: 'Garantizada por 30 años' },
  { label: 'Latencia del monitoreo', val: '20 ms', desc: 'Lecturas en tiempo real' },
  { label: 'Potencia por módulo', val: '660 W', desc: 'Módulos de 580 W a 660 W' },
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

export default function TecnologiaSection({ showIntro = true }: { showIntro?: boolean }) {
  return (
    <section id="tecnologia" className="py-10 md:py-16 scroll-mt-28">
      <Container>
        {showIntro && (
          <Reveal>
            <SectionIntro
              label="Tecnología"
              title="Paneles solares Tier 1 con certificación IEC y UL."
              intro={
                <p>
                  Trabajamos con fabricantes de la lista Tier 1 de BloombergNEF. Elegimos cada
                  panel, inversor y estructura por su historial de rendimiento en campo, no
                  por ser el más barato del catálogo.
                </p>
              }
            />
          </Reveal>
        )}

        {/* Imagen + componentes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16">
          <Reveal>
            <div className="aspect-[4/5] w-full overflow-hidden rounded-[40px] md:rounded-orb">
              <img
                src="/hero-solar.png"
                alt="Paneles solares N-Type instalados en el techo de una nave industrial"
                loading="lazy"
                className="w-full h-full object-cover object-left-bottom scale-[1.9] origin-bottom-left"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <SectionLabel className="mb-6">Qué instalamos en tu techo</SectionLabel>
            </Reveal>
            <Reveal delay={100}>
              <Accordion items={COMPONENTS} />
            </Reveal>
            <Reveal delay={150}>
              <div className="flex flex-wrap gap-x-6 gap-y-3 mt-8">
                {CERTIFICATIONS.map((c) => (
                  <SectionLabel key={c} tone="muted">{c}</SectionLabel>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Especificaciones + monitoreo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <h3 className={`${headingClass} mb-4`}>Especificaciones de referencia.</h3>
              <p className="text-base leading-[1.4] text-carbon/80 mb-8">
                Valores de los equipos que especificamos con más frecuencia. Cada proyecto
                recibe las fichas técnicas de sus componentes.
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
            <Reveal>
              <CtaButtons context="tecnologia" quoteLabel="Solicitar fichas técnicas" className="mt-8" />
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={200}>
              <div className="bg-white rounded-xl p-[22px] md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-carbon/15">
                  <SectionLabel>Monitoreo en vivo</SectionLabel>
                  <span className="text-xs text-mercury">Producción diaria de un sistema de referencia</span>
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
                      <div className="text-[18px] md:text-subheading font-light">{r.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
              <Reveal delay={300}>
                <div className="h-full bg-white rounded-xl p-[22px] md:p-8">
                  <h4 className="text-base font-normal mb-3">Monitoreo en tiempo real</h4>
                  <p className="text-sm leading-[1.4] text-carbon/70">
                    Vemos la producción de tu sistema las 24 horas y recibimos alertas si algo baja su rendimiento.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={400}>
                <div className="h-full bg-white rounded-xl p-[22px] md:p-8">
                  <h4 className="text-base font-normal mb-3">Certificaciones internacionales</h4>
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
  )
}
