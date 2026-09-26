'use client'

import MexicoMap from '@/components/MexicoMap'
import { Reveal } from '@/lib/hooks'
import { Container, SectionIntro, SectionLabel } from '@/components/ui'

const STATS = [
  { value: '8.4 MW', label: 'Capacidad instalada' },
  { value: '150+', label: 'Proyectos completados' },
  { value: '20+', label: 'Estados cubiertos' },
]

const HIGHLIGHTS = [
  {
    sector: 'Industrial',
    title: 'Fábrica de cuero y calzado',
    location: 'León, Gto.',
    desc: 'Sistema de 500 kWp sobre la nave de producción, con reducción significativa en costos de energía.',
    tags: ['500 kWp', '−CO₂'],
  },
  {
    sector: 'Comercial',
    title: 'Inmueble comercial',
    location: 'Ciudad de México',
    desc: 'Instalación de 250 kWp que redujo el 88% del costo de energía del inmueble.',
    tags: ['250 kWp', '88% ahorro'],
  },
  {
    sector: 'Industrial',
    title: 'Planta de ensamblaje',
    location: 'Aguascalientes, Ags.',
    desc: 'Sistema de 500 kWp dimensionado sobre el consumo real de la planta: 99% de ahorro en costos de energía.',
    tags: ['500 kWp', '99% ahorro'],
  },
]

export default function ProyectosSection({
  showIntro = true,
  showStats = true,
}: {
  showIntro?: boolean
  showStats?: boolean
}) {
  return (
    <section id="proyectos" className="py-10 md:py-16 scroll-mt-28">
      <Container>
        {showIntro && (
          <Reveal>
            <SectionIntro
              label="Casos de éxito"
              title="Proyectos de energía solar industrial en México."
              intro={
                <p>
                  León, Irapuato, Aguascalientes, Querétaro, Guadalajara, Ciudad de México y
                  Monterrey. Monitoreamos cada sistema en tiempo real desde nuestro Centro de
                  Control en León.
                </p>
              }
            />
          </Reveal>
        )}

        {showStats && (
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-carbon mb-12">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80}>
                <div className={`py-8 border-b md:border-b-0 border-carbon/20 ${i > 0 ? 'md:border-l md:pl-6' : ''}`}>
                  <div className="text-[40px] md:text-display font-light leading-none mb-3">{stat.value}</div>
                  <div className="text-sm text-mercury">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {/* Casos destacados */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-12">
          {HIGHLIGHTS.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <article className="h-full bg-white rounded-xl p-[22px] md:p-8 flex flex-col">
                <div className="flex justify-between gap-4 mb-10">
                  <SectionLabel>{item.sector}</SectionLabel>
                  <span className="text-xs text-mercury">{item.location}</span>
                </div>
                <h3 className="text-[20px] md:text-subheading font-normal mb-3">{item.title}</h3>
                <p className="text-sm leading-[1.4] text-carbon/70 mb-8">{item.desc}</p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-carbon px-3 py-1.5 text-xs leading-none">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Mapa */}
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-4 mb-6">
            <SectionLabel>Mapa de proyectos en operación</SectionLabel>
            <span className="text-xs text-mercury">Toca un punto para ver el proyecto</span>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="w-full h-[460px] md:h-[560px]">
            <MexicoMap />
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
