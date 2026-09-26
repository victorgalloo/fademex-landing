'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import MexicoMap from '@/components/MexicoMap'
import { Reveal } from '@/lib/hooks'
import { ButtonLink, Container, CtaBlock, PageHero, SectionLabel, headingClass } from '@/components/ui'

const STATS = [
  { value: 'Gran escala', label: 'Capacidad instalada' },
  { value: '150+', label: 'Proyectos completados' },
  { value: '20+', label: 'Estados cubiertos' },
]

const HIGHLIGHTS = [
  {
    sector: 'Industrial',
    title: 'Industria de cuero y calzado',
    location: 'León, Gto.',
    desc: 'Sistema de 500 kWp con reducción significativa en costos energéticos.',
    tags: ['500 kWp', '−CO₂'],
  },
  {
    sector: 'Comercial',
    title: 'Proyecto comercial',
    location: 'Ciudad de México',
    desc: 'Instalación de 250 kWp con encendido inmediato, ahorrando el 88% en costos de energía.',
    tags: ['250 kWp', '88% ahorro'],
  },
  {
    sector: 'Industrial',
    title: 'Planta de ensamblaje',
    location: 'Aguascalientes, Ags.',
    desc: 'Planta de ensamblaje con 500 kWp, logrando un ahorro del 99% en costos de energía.',
    tags: ['500 kWp', '99% ahorro'],
  },
]

export default function ProyectosPage() {
  return (
    <div className="min-h-screen bg-vellum text-carbon">
      <Navigation />

      <Reveal>
        <PageHero
          label="Cobertura nacional"
          title={
            <>
              Red de proyectos
              <br />
              activos.
            </>
          }
          intro="Monitoreamos nuestros proyectos en tiempo real desde nuestro Centro de Control."
        />
      </Reveal>

      {/* Cifras */}
      <section className="pb-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-carbon">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80}>
                <div className={`py-8 border-b md:border-b-0 border-carbon/20 ${i > 0 ? 'md:border-l md:pl-6' : ''}`}>
                  <div className="text-[40px] md:text-display font-light leading-none mb-3">{stat.value}</div>
                  <div className="text-sm text-mercury">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Mapa */}
      <section className="py-12 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-end">
            <Reveal className="lg:col-span-7">
              <SectionLabel className="mb-8">Mapa de proyectos en operación</SectionLabel>
              <h2 className={headingClass}>
                Distribuidos estratégicamente en todo México, con monitoreo continuo.
              </h2>
            </Reveal>
            <Reveal delay={100} className="lg:col-span-5 lg:justify-self-end">
              <SectionLabel tone="muted">Proyectos activos</SectionLabel>
            </Reveal>
          </div>
          <Reveal delay={100}>
            <div className="w-full h-[460px] md:h-[600px]">
              <MexicoMap />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Casos destacados */}
      <section className="py-12 md:py-24">
        <Container>
          <Reveal>
            <SectionLabel className="mb-10">Casos de éxito</SectionLabel>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {HIGHLIGHTS.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <article className="h-full bg-white rounded-xl p-[22px] md:p-8 flex flex-col">
                  <div className="flex justify-between gap-4 mb-12">
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
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <Reveal>
            <CtaBlock
              title="¿Listo para ser parte de nuestra red?"
              text="Únete a más de 150 empresas que ya confiaron en FADEMEX para transformar su infraestructura energética."
            >
              <ButtonLink href="/contacto" variant="light">Iniciar mi proyecto</ButtonLink>
              <ButtonLink href="/ingenieria" variant="ghost-light">Ver metodología</ButtonLink>
            </CtaBlock>
          </Reveal>
        </Container>
      </section>

      <Footer />
    </div>
  )
}
