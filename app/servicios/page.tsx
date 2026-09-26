'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
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

const SOLAR_SERVICES = [
  'Consultoría energética',
  'Instalación de paneles solares',
  'Monitoreo y sistemas inteligentes',
  'Financiamiento y gestión energética',
]

const PANEL_BRANDS = [
  { name: 'Longi', logo: '/logos/brands/longi-logo-png_seeklogo-448395.png' },
  { name: 'Trina Solar', logo: '/logos/brands/Trina_Solar_logo.svg.png' },
  { name: 'Jinko Solar', logo: '/logos/brands/Jinko_Solar_logo.svg' },
  { name: 'JA Solar', logo: '/logos/brands/JA-solar-vico-export-solar_energy.png' },
  { name: 'Canadian Solar', logo: '/logos/brands/logo-canadian-solar.png' },
  { name: 'First Solar', logo: '/logos/brands/First_Solar_logo.svg.png' },
]

const INVERTER_BRANDS = [
  { name: 'Fronius', logo: '/logos/brands/Fronius-logo.png' },
  { name: 'Huawei', logo: '/logos/brands/Huawei-Logo.wine.png', zoom: true },
  { name: 'SMA', logo: '/logos/brands/Logo_SMA.svg.png' },
]

const BATTERY_USES = [
  {
    title: 'Reducción de picos de demanda',
    meta: 'Peak shaving · Time shifting',
    desc: 'Las baterías almacenan energía en periodos de bajo consumo y la liberan en horarios punta, reduciendo costos operativos y evitando cargos por alta demanda.',
  },
  {
    title: 'Continuidad operativa',
    meta: 'Respaldo inmediato',
    desc: 'Aseguran operación continua al activar energía de respaldo inmediatamente ante cortes, protegiendo procesos sensibles y evitando tiempos de inactividad.',
  },
  {
    title: 'Autonomía y protección ante variaciones',
    meta: 'Estabilidad de voltaje',
    desc: 'Ofrecen respaldo ante fluctuaciones de voltaje, garantizando estabilidad para equipos críticos y prolongando la vida útil de la maquinaria.',
  },
]

function BrandTile({ name, logo, zoom }: { name: string; logo: string; zoom?: boolean }) {
  return (
    <div className="group bg-white rounded-xl h-24 p-5 flex items-center justify-center">
      <img
        src={logo}
        alt={name}
        className={`max-h-full max-w-full object-contain ${zoom ? 'scale-[2.2]' : ''} grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300`}
      />
    </div>
  )
}

function ChapterHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-baseline gap-6 border-t border-carbon pt-6 mb-12">
      <span className="text-label text-mercury">{number}</span>
      <h2 className="text-[40px] md:text-display font-light leading-none">{title}</h2>
    </div>
  )
}

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-vellum text-carbon">
      <Navigation />

      <Reveal>
        <PageHero
          label="Catálogo de soluciones energéticas"
          title={
            <>
              Consultoría y energía
              <br />
              solar 360°.
            </>
          }
          intro="Somos Fademex, una empresa mexicana especializada en paneles solares y consultoría energética: soluciones integrales para optimizar el consumo eléctrico de las empresas y fomentar el uso de energías limpias."
        />
      </Reveal>

      {/* 01. Energía solar */}
      <section className="py-10 md:py-16">
        <Container>
          <Reveal>
            <ChapterHeader number="01" title="Energía solar" />
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Reveal>
              <h3 className={headingClass}>Energía que transforma.</h3>
            </Reveal>
            <Reveal delay={100}>
              <div className="space-y-4 text-base leading-[1.4] text-carbon/80">
                <p>
                  Impulsamos la transición energética de las empresas a través de la
                  venta e instalación de paneles solares de alto rendimiento.
                </p>
                <p>
                  Más que un proveedor, somos una consultoría energética 360° que analiza
                  a fondo el consumo y las oportunidades de cada cliente para diseñar
                  soluciones personalizadas que maximizan el ahorro, optimizan la
                  eficiencia y contribuyen a un futuro más sustentable.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Servicios solares */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-24">
            {SOLAR_SERVICES.map((service, i) => (
              <Reveal key={service} delay={i * 80}>
                <div className="h-full bg-white rounded-xl p-[22px] flex flex-col justify-between min-h-[160px]">
                  <span className="text-label text-mercury">{String(i + 1).padStart(2, '0')}</span>
                  <h4 className="text-base font-normal">{service}</h4>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Marcas */}
          <Reveal>
            <SectionLabel className="mb-8">Nuestras marcas</SectionLabel>
            <h3 className={`${headingClass} max-w-2xl mb-12`}>
              Paneles solares e inversores de fabricantes Tier 1.
            </h3>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
            <Reveal className="lg:col-span-7">
              <div className="text-label uppercase border-b border-carbon pb-4 mb-6">
                Paneles solares de 580 W a 660 W
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {PANEL_BRANDS.map((brand) => (
                  <BrandTile key={brand.name} {...brand} />
                ))}
              </div>
            </Reveal>
            <Reveal delay={100} className="lg:col-span-5">
              <div className="text-label uppercase border-b border-carbon pb-4 mb-6">
                Inversores · Premium partner
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-2">
                {INVERTER_BRANDS.map((brand) => (
                  <BrandTile key={brand.name} {...brand} />
                ))}
              </div>
            </Reveal>
          </div>

          {/* Tipos de instalación */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <Reveal>
              <div className="h-full bg-white rounded-xl p-[22px] md:p-10">
                <SectionLabel className="mb-10">Comercial</SectionLabel>
                <h4 className="text-[20px] md:text-subheading font-normal mb-4">Instalaciones comerciales</h4>
                <p className="text-sm leading-[1.4] text-carbon/70 mb-8">
                  Seleccionamos la planificación de componentes óptima para asegurar la
                  máxima eficiencia y longevidad de tu sistema comercial. Nuestras
                  instalaciones cumplen con nuestros estándares y directrices, respetando
                  las normativas actuales.
                </p>
                <SquareList
                  items={[
                    'Instalaciones en lámina, losa, sin perforaciones y terracería',
                    'Disponible como Carport y BIPV (Building Integrated Photovoltaic)',
                    'Componentes de máxima eficiencia',
                  ]}
                />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="h-full bg-white rounded-xl p-[22px] md:p-10">
                <SectionLabel className="mb-10">Industrial</SectionLabel>
                <h4 className="text-[20px] md:text-subheading font-normal mb-4">Instalaciones industriales</h4>
                <p className="text-sm leading-[1.4] text-carbon/70 mb-8">
                  Seleccionamos la planificación óptima de componentes para asegurar la
                  máxima eficiencia y durabilidad de tu sistema industrial de alta
                  resistencia, conforme a las normativas vigentes.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Fronius Symo', 'SMA CORE1'].map((model) => (
                    <span key={model} className="rounded-full border border-carbon px-3 py-1.5 text-xs leading-none">
                      {model}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 02. Baterías */}
      <section className="py-10 md:py-16">
        <Container>
          <Reveal>
            <ChapterHeader number="02" title="Baterías" />
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <Reveal>
                <h3 className={`${headingClass} mb-10`}>Sistemas de almacenamiento de energía.</h3>
              </Reveal>
              <div className="border-t border-carbon">
                {BATTERY_USES.map((use, i) => (
                  <Reveal key={use.title} delay={i * 80}>
                    <div className="py-6 border-b border-carbon">
                      <div className="text-label uppercase text-mercury mb-2">{use.meta}</div>
                      <h4 className="text-[20px] font-normal mb-3">{use.title}</h4>
                      <p className="text-sm leading-[1.4] text-carbon/70">{use.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal delay={100} className="lg:col-span-5">
              <div className="bg-carbon text-white rounded-xl p-[22px] md:p-10">
                <SectionLabel tone="light" className="mb-12">Distribuidores oficiales de Fortress Power</SectionLabel>
                <div className="text-[40px] md:text-display font-light leading-none mb-2">eSpire 280</div>
                <div className="text-sm text-white/60 mb-12">Energía nominal 279.5 kWh</div>
                <h4 className="text-base font-normal mb-2">Baterías comerciales e industriales</h4>
                <p className="text-sm leading-[1.4] text-white/70 mb-8">
                  Almacenamiento inteligente y limpio para energías renovables.
                </p>
                <SquareList
                  className="text-white/80"
                  items={[
                    'Autonomía y protección ante variaciones',
                    'Continuidad operativa',
                    'Reducción de picos de demanda',
                  ]}
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <Reveal>
            <CtaBlock
              label="Energía · Confianza · Futuro"
              title="Solicita una cotización a la medida."
              text="Nuestros ingenieros analizan tu consumo y te proponen la combinación óptima de generación y almacenamiento."
            >
              <ButtonLink href="/contacto" variant="light">Solicitar cotización</ButtonLink>
            </CtaBlock>
          </Reveal>
        </Container>
      </section>

      <Footer />
    </div>
  )
}
