'use client'

import { Reveal } from '@/lib/hooks'
import { whatsappUrl } from '@/lib/contact'
import {
  Container,
  CtaButtons,
  SectionIntro,
  SectionLabel,
  SquareList,
  headingClass,
} from '@/components/ui'

const SOLAR_SERVICES = [
  { title: 'Consultoría energética', desc: 'Revisamos tus recibos y medimos tu consumo real.' },
  { title: 'Instalación de paneles solares', desc: 'Estructura, cableado e inversores con personal certificado.' },
  { title: 'Monitoreo y sistemas inteligentes', desc: 'Producción y alertas en tiempo real, las 24 horas.' },
  { title: 'Financiamiento y gestión energética', desc: 'Financiamiento directo y trámites con CFE.' },
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

function BrandTile({ name, logo, zoom }: { name: string; logo: string; zoom?: boolean }) {
  return (
    <div className="group bg-white rounded-xl h-24 p-5 flex items-center justify-center overflow-hidden">
      <img
        src={logo}
        alt={name}
        loading="lazy"
        className={`max-h-full max-w-full object-contain ${zoom ? 'scale-[2.2]' : ''} grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300`}
      />
    </div>
  )
}

export default function ServiciosSection({ showIntro = true }: { showIntro?: boolean }) {
  return (
    <section id="servicios" className="py-10 md:py-16 scroll-mt-28">
      <Container>
        {showIntro && (
          <Reveal>
            <SectionIntro
              label="Servicios · Consultoría energética 360°"
              title="Instalación de paneles solares comerciales e industriales."
              intro={
                <p>
                  Somos una consultoría energética mexicana con sede en León, Guanajuato.
                  Medimos cómo consume tu empresa y diseñamos el sistema de paneles solares
                  que más reduce tu recibo de CFE.
                </p>
              }
            />
          </Reveal>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          <Reveal>
            <h4 className={headingClass}>Primero el análisis, después los paneles.</h4>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-4 text-base leading-[1.4] text-carbon/80">
              <p>
                Antes de proponerte un solo panel revisamos tus recibos de CFE, medimos tu
                consumo en sitio y estudiamos el techo. Con eso dimensionamos el sistema que
                se paga más rápido, no el más grande.
              </p>
              <p>
                Después lo instalamos, tramitamos la interconexión con CFE y lo monitoreamos.
                Un solo responsable de principio a fin.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-16">
          {SOLAR_SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 80}>
              <div className="h-full bg-white rounded-xl p-[22px] flex flex-col justify-between gap-8 min-h-[180px]">
                <span className="text-label text-mercury">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h5 className="text-base font-normal mb-2">{service.title}</h5>
                  <p className="text-sm leading-[1.4] text-carbon/70">{service.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Tipos de instalación */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mb-16">
          <Reveal>
            <div className="h-full bg-white rounded-xl p-[22px] md:p-10">
              <SectionLabel className="mb-8">Comercial</SectionLabel>
              <h5 className="text-[20px] md:text-subheading font-normal mb-4">Instalaciones comerciales</h5>
              <p className="text-sm leading-[1.4] text-carbon/70 mb-8">
                Para plazas, oficinas, bodegas y estacionamientos. Adaptamos la estructura a tu
                techo o a tu estacionamiento, sin comprometer la impermeabilización ni la
                operación del inmueble.
              </p>
              <SquareList
                items={[
                  'Instalaciones en lámina, losa, sin perforaciones y terracería',
                  'Disponible como Carport y BIPV (Building Integrated Photovoltaic)',
                  'Paneles N-Type TOPCon de 580 W a 660 W',
                ]}
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full bg-white rounded-xl p-[22px] md:p-10">
              <SectionLabel className="mb-8">Industrial</SectionLabel>
              <h5 className="text-[20px] md:text-subheading font-normal mb-4">Instalaciones industriales</h5>
              <p className="text-sm leading-[1.4] text-carbon/70 mb-8">
                Para naves y plantas con consumo alto en media tensión. Estructuras calculadas
                para la carga del techo e inversores trifásicos que cumplen el Código de Red y
                la NOM-001-SEDE.
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

        {/* Marcas */}
        <Reveal>
          <SectionLabel className="mb-6">Nuestras marcas</SectionLabel>
          <h4 className={`${headingClass} max-w-2xl mb-10`}>Paneles e inversores de fabricantes Tier 1.</h4>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-20">
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

        <Reveal>
          <CtaButtons context="servicios" quoteLabel="Cotizar paneles solares" className="mb-12" />
        </Reveal>

        {/* Complemento opcional, mención breve */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-carbon/20 pt-6">
            <p className="text-sm leading-[1.4] text-carbon/70 max-w-2xl">
              ¿Tu planta también paga cargos altos por demanda? Podemos complementar tu
              sistema solar con baterías; somos distribuidores oficiales de Fortress Power.
            </p>
            <a
              href={whatsappUrl('baterias')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline underline-offset-4 decoration-carbon/30 hover:decoration-carbon whitespace-nowrap"
            >
              Preguntar por WhatsApp
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
