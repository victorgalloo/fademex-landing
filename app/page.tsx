'use client'

import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import VentajasSection from '@/components/sections/VentajasSection'
import ServiciosSection from '@/components/sections/ServiciosSection'
import TecnologiaSection from '@/components/sections/TecnologiaSection'
import ProyectosSection from '@/components/sections/ProyectosSection'
import IngenieriaSection from '@/components/sections/IngenieriaSection'
import PreguntasSection, { FAQS } from '@/components/sections/PreguntasSection'
import CotizarSection from '@/components/sections/CotizarSection'
import { Reveal } from '@/lib/hooks'
import {
  ButtonLink,
  Container,
  CtaBlock,
  CtaButtons,
  SectionLabel,
  WhatsAppIcon,
  displayClass,
} from '@/components/ui'
import { EMAIL, PHONE_DISPLAY, QUOTE_HREF, whatsappUrl } from '@/lib/contact'

const STATS = [
  { value: '8.4', unit: 'MW', label: 'Capacidad instalada' },
  { value: '150+', unit: '', label: 'Proyectos completados' },
  { value: '30', unit: 'años', label: 'Garantía de generación' },
  { value: '24/7', unit: '', label: 'Monitoreo de cada sistema' },
]

// Divisores verticales: 2 columnas en móvil, 4 en escritorio
const STAT_DIVIDERS = ['', 'border-l pl-4 lg:pl-6', 'lg:border-l lg:pl-6', 'border-l pl-4 lg:pl-6']

const CERTIFICATIONS = [
  'ISO 9001',
  'Fabricantes Tier 1 BNEF',
  'Normas IEC y UL',
  'Interconexión CFE',
  'Zero Export',
  'Generación distribuida',
]

// Datos estructurados para buscadores: negocio local y preguntas frecuentes
const STRUCTURED_DATA = [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'FADEMEX',
    description:
      'Paneles solares industriales y comerciales para empresas. Auditoría energética, instalación, trámites con CFE y monitoreo.',
    telephone: PHONE_DISPLAY,
    email: EMAIL,
    address: { '@type': 'PostalAddress', addressLocality: 'León', addressRegion: 'Guanajuato', addressCountry: 'MX' },
    areaServed: 'MX',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-vellum text-carbon">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
      />
      <Navigation />

      {/* Hero: fotografía a sangre con titular abajo a la izquierda */}
      <section id="inicio" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img
          src="/hero-techo-solar.jpg"
          alt="Vista aérea de paneles solares sobre el techo de una planta industrial"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-3/4 md:h-2/3 bg-gradient-to-t from-onyx/80 via-onyx/35 to-transparent" aria-hidden="true" />

        <Container className="relative h-full flex flex-col justify-end pb-10 md:pb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div className="max-w-2xl">
              <Reveal>
                <SectionLabel tone="light" className="mb-6">Energía solar industrial · León, Gto.</SectionLabel>
              </Reveal>
              <Reveal delay={100}>
                <h1 className={`${displayClass} text-white mb-6`}>
                  Paneles solares industriales que bajan tu recibo de CFE.
                </h1>
              </Reveal>
              <Reveal delay={150}>
                <p className="text-base leading-[1.4] text-white/80 max-w-lg mb-8">
                  Diseñamos, instalamos y damos mantenimiento a sistemas de paneles solares
                  para empresas en el Bajío y todo México. Primero medimos tu consumo;
                  después te decimos cuánto vas a ahorrar.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div className="flex flex-wrap gap-2">
                  <ButtonLink href={QUOTE_HREF} variant="light">Solicitar análisis de consumo</ButtonLink>
                  <ButtonLink href={whatsappUrl('ahorro')} variant="ghost-light">
                    <WhatsAppIcon />
                    Escribir por WhatsApp
                  </ButtonLink>
                </div>
              </Reveal>
            </div>

            {/* Tarjeta de caso de éxito */}
            <Reveal delay={300} className="hidden md:block">
              <Link
                href="/#proyectos"
                className="block w-full max-w-[340px] bg-carbon text-white rounded-xl p-4 hover:bg-onyx transition-colors"
              >
                <div className="text-label uppercase text-white/60 mb-3">Caso de éxito</div>
                <p className="text-sm leading-[1.3] mb-4">
                  Planta de ensamblaje en Aguascalientes: 500 kWp y 99% de ahorro en costos de energía.
                </p>
                <div className="flex items-baseline justify-between text-xs text-white/60">
                  <span>Aguascalientes, Ags.</span>
                  <span>Ver proyectos</span>
                </div>
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Cifras y certificaciones */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-carbon">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80}>
                <div className={`h-full pt-6 pb-8 pr-4 border-carbon/20 ${STAT_DIVIDERS[i]}`}>
                  <div className="text-[40px] md:text-display font-light leading-none mb-3">
                    {stat.value}
                    {stat.unit && <span className="text-base font-normal ml-2">{stat.unit}</span>}
                  </div>
                  <div className="text-sm text-mercury">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 pt-6 border-t border-carbon/20">
            {CERTIFICATIONS.map((c) => (
              <SectionLabel key={c} tone="muted">{c}</SectionLabel>
            ))}
          </div>
        </Container>
      </section>

      {/* El problema */}
      <section id="problema" className="py-10 md:py-16 scroll-mt-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-7">
              <Reveal>
                <SectionLabel className="mb-8">Tu recibo de CFE</SectionLabel>
                <h2 className={displayClass}>
                  Tu techo puede producir la energía que hoy le compras a CFE.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-5 lg:pt-14">
              <Reveal delay={100}>
                <p className="text-base leading-[1.4] text-carbon/80 mb-4 max-w-md">
                  En tarifas comerciales e industriales (GDMTO y GDMTH), la energía que
                  consumes es una de las partidas más caras del recibo. Un sistema de paneles
                  solares la genera en tu propio techo durante el día, justo cuando tu
                  operación consume más.
                </p>
                <p className="text-base leading-[1.4] text-carbon/80 mb-8 max-w-md">
                  Por eso empezamos midiendo: tu consumo real define cuántos paneles
                  necesitas y cuánto vas a ahorrar cada mes.
                </p>
                <CtaButtons context="ahorro" quoteLabel="Revisar mi recibo" />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <VentajasSection />

      <section className="py-10 md:py-12">
        <Container>
          <Reveal>
            <CtaBlock
              label="Análisis de consumo"
              title="¿Cuánto puedes ahorrar en tu planta?"
              text="Con tus recibos de CFE calculamos el tamaño del sistema, el ahorro mensual y el retorno de inversión. Luego decides."
              context="ahorro"
              quoteLabel="Solicitar análisis de consumo"
            />
          </Reveal>
        </Container>
      </section>

      <ServiciosSection />
      <TecnologiaSection />
      <ProyectosSection showStats={false} />

      <section className="py-10 md:py-12">
        <Container>
          <Reveal>
            <CtaBlock
              label="Tu proyecto"
              title="Tu planta puede ser el siguiente caso."
              text="Más de 150 empresas ya generan parte de su energía con FADEMEX. Empezamos por revisar tus recibos de CFE."
              context="proyectos"
            />
          </Reveal>
        </Container>
      </section>

      <IngenieriaSection />
      <PreguntasSection />
      <CotizarSection />

      <Footer />
    </div>
  )
}
