'use client'

import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import MexicoMap from '@/components/MexicoMap'
import Accordion from '@/components/Accordion'
import { Reveal } from '@/lib/hooks'
import {
  SectionLabel,
  ButtonLink,
  Container,
  displayClass,
  headingClass,
} from '@/components/ui'

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
  'Peak shaving',
]

const ADVANTAGES = [
  {
    metric: '30 años',
    title: 'Garantía de generación',
    desc: 'Tu sistema seguirá produciendo al menos el 85% de su capacidad después de 30 años de operación. Queda por escrito en el contrato.',
  },
  {
    metric: '0%',
    title: 'Financiamiento directo',
    desc: 'Financiamos el sistema nosotros mismos, para que lo que dejas de pagar a CFE cubra la inversión mes a mes.',
  },
  {
    metric: '24 meses',
    title: 'Mantenimiento incluido',
    desc: 'Dos años de operación y mantenimiento sin costo: limpieza de módulos, termografía con dron y reapriete de conexiones.',
  },
  {
    metric: 'Llave en mano',
    title: 'Trámites con CFE',
    desc: 'Gestionamos la interconexión con CFE y la verificación de la UVIE. Tú no haces filas ni llenas formatos.',
  },
]

const TECHNOLOGY = [
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
    title: 'Baterías LFP',
    meta: 'Peak shaving',
    content:
      'Baterías de litio ferrofosfato que recortan tus picos de demanda, respaldan equipos críticos ante cortes y estabilizan el voltaje.',
  },
  {
    title: 'Monitoreo en tiempo real',
    meta: '24/7',
    content:
      'Vemos la producción de tu sistema minuto a minuto y recibimos alertas si algo baja su rendimiento, antes de que lo notes en el recibo.',
  },
]

const SOLUTIONS = [
  { title: 'Soluciones', desc: 'Garantía de 30 años, financiamiento directo y dos años de mantenimiento incluidos.', href: '/soluciones' },
  { title: 'Servicios', desc: 'Instalación de paneles solares comerciales e industriales, y baterías para reducir la demanda.', href: '/servicios' },
  { title: 'Tecnología', desc: 'Paneles N-Type TOPCon, inversores y monitoreo: especificaciones y certificaciones.', href: '/tecnologia' },
  { title: 'Proyectos', desc: 'Plantas en León, Aguascalientes, Querétaro, Monterrey y más, con su capacidad y su ahorro.', href: '/proyectos' },
  { title: 'Ingeniería', desc: 'Cuatro fases: auditoría energética, diseño, procura e instalación con interconexión a CFE.', href: '/ingenieria' },
  { title: 'Contacto', desc: 'Cuéntanos tu consumo y agenda una sesión técnica con un ingeniero.', href: '/contacto' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-vellum text-carbon">
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
                  Paneles solares industriales
                  que bajan tu recibo de CFE.
                </h1>
              </Reveal>
              <Reveal delay={150}>
                <p className="text-base leading-[1.4] text-white/80 max-w-lg mb-8">
                  Diseñamos, instalamos y operamos sistemas solares y baterías para
                  plantas en el Bajío y todo México. Primero medimos tu consumo;
                  después te decimos cuánto vas a ahorrar.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div className="flex flex-wrap gap-2">
                  <ButtonLink href="#contacto" variant="light">Solicitar análisis de consumo</ButtonLink>
                  <ButtonLink href="/proyectos" variant="ghost-light">Ver proyectos</ButtonLink>
                </div>
              </Reveal>
            </div>

            {/* Tarjeta de caso de éxito */}
            <Reveal delay={300} className="hidden md:block">
              <Link
                href="/proyectos"
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

      {/* Misión y ventajas */}
      <section className="py-10 md:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
            <div className="lg:col-span-7">
              <Reveal>
                <SectionLabel className="mb-8">El problema</SectionLabel>
                <h2 className={displayClass}>
                  Tu recibo tiene dos cargos.
                  Los paneles solo bajan uno.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-5 lg:pt-14">
              <Reveal delay={100}>
                <p className="text-base leading-[1.4] text-carbon/80 mb-4 max-w-md">
                  En tarifa GDMTH pagas la energía que consumes (kWh) y tu demanda
                  máxima (kW). Los paneles solares reducen los kWh durante el día, pero
                  el cargo por demanda se fija en tus picos, que a menudo no coinciden
                  con las horas de sol.
                </p>
                <p className="text-base leading-[1.4] text-carbon/80 mb-6 max-w-md">
                  Por eso diseñamos generación solar y baterías juntas, a partir de tus
                  recibos y de mediciones en tu planta.
                </p>
                <ButtonLink href="/ingenieria" variant="ghost">Ver cómo trabajamos</ButtonLink>
              </Reveal>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {ADVANTAGES.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="h-full bg-white rounded-xl p-[22px] md:p-8">
                  <div className="text-[32px] font-light leading-none mb-10">{item.metric}</div>
                  <h3 className="text-base font-normal mb-2">{item.title}</h3>
                  <p className="text-sm leading-[1.4] text-carbon/70">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Tecnología: imagen + acordeón */}
      <section className="py-10 md:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <Reveal>
              <div className="aspect-[4/5] w-full overflow-hidden rounded-[40px] md:rounded-orb">
                <img
                  src="/hero-solar.png"
                  alt="Paneles solares N-Type instalados en el techo de una nave industrial"
                  className="w-full h-full object-cover object-left-bottom scale-[1.9] origin-bottom-left"
                />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <SectionLabel className="mb-8">Tecnología</SectionLabel>
                <h2 className={`${headingClass} mb-6`}>
                  Paneles solares Tier 1 y baterías con certificación IEC y UL.
                </h2>
                <p className="text-base leading-[1.4] text-carbon/80 mb-10 max-w-md">
                  Elegimos cada panel, inversor y estructura por su historial de
                  rendimiento en campo, no por ser el más barato del catálogo.
                </p>
              </Reveal>
              <Reveal delay={100}>
                <Accordion items={TECHNOLOGY} />
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-8">
                  <ButtonLink href="/tecnologia" variant="ghost">Especificaciones técnicas</ButtonLink>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Índice de soluciones */}
      <section className="py-10 md:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
            <div className="lg:col-span-7">
              <Reveal>
                <SectionLabel className="mb-8">Qué hacemos</SectionLabel>
                <h2 className={displayClass}>Energía solar para empresas, de la auditoría a la operación.</h2>
              </Reveal>
            </div>
            <div className="lg:col-span-5 lg:pt-14">
              <Reveal delay={100}>
                <p className="text-base leading-[1.4] text-carbon/80 max-w-md">
                  Cada sección explica una parte del proyecto. Empieza por la que más
                  te preocupa: el costo, la tecnología o el proceso.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="border-t border-carbon">
            {SOLUTIONS.map((item, i) => (
              <Reveal key={item.href} delay={i * 60}>
                <Link
                  href={item.href}
                  className="group grid grid-cols-12 gap-4 items-baseline py-6 border-b border-carbon"
                >
                  <span className="col-span-2 md:col-span-1 text-label text-mercury">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="col-span-10 md:col-span-4 text-[20px] md:text-subheading font-normal">
                    {item.title}
                  </span>
                  <span className="col-start-3 col-span-10 md:col-start-auto md:col-span-5 text-sm leading-[1.4] text-carbon/70">
                    {item.desc}
                  </span>
                  <span className="hidden md:block md:col-span-2 text-right text-sm opacity-60 group-hover:opacity-100 transition-opacity">
                    Explorar →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Presencia nacional */}
      <section className="py-10 md:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
            <div className="lg:col-span-7">
              <Reveal>
                <SectionLabel className="mb-8">Presencia nacional</SectionLabel>
                <h2 className={displayClass}>Proyectos de energía solar industrial en México.</h2>
              </Reveal>
            </div>
            <div className="lg:col-span-5 lg:pt-14">
              <Reveal delay={100}>
                <p className="text-base leading-[1.4] text-carbon/80 max-w-md">
                  León, Irapuato, Aguascalientes, Querétaro, Guadalajara, Ciudad de México
                  y Monterrey. Monitoreamos cada sistema desde nuestro Centro de
                  Operaciones en León.
                </p>
              </Reveal>
            </div>
          </div>
          <Reveal delay={100}>
            <div className="w-full h-[460px] md:h-[600px]">
              <MexicoMap />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-10 md:py-16 scroll-mt-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionLabel className="mb-8">Contacto</SectionLabel>
                <h2 className={`${displayClass} mb-6`}>Calcula tu ahorro con datos reales.</h2>
                <p className="text-base leading-[1.4] text-carbon/80 mb-10 max-w-sm">
                  Cuéntanos tu tarifa y tu consumo. Un ingeniero revisa tu caso y te
                  contacta en menos de 24 horas para agendar una sesión técnica.
                </p>
                <dl className="border-t border-carbon/20 text-sm">
                  {[
                    ['Oficina', 'León, Guanajuato'],
                    ['Teléfono', '+52 (479) 136-9896'],
                    ['Correo', 'contacto@fademex.com'],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4 py-4 border-b border-carbon/20">
                      <dt className="text-mercury">{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={100}>
                <div className="bg-white rounded-xl p-[22px] md:p-10">
                  <ContactForm />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  )
}
