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
  { value: '24/7', unit: '', label: 'Monitoreo NOC' },
]

// Divisores verticales: 2 columnas en móvil, 4 en escritorio
const STAT_DIVIDERS = ['', 'border-l pl-4 lg:pl-6', 'lg:border-l lg:pl-6', 'border-l pl-4 lg:pl-6']

const CERTIFICATIONS = [
  'ISO 9001',
  'Fabricantes Tier 1',
  'Estándares UL',
  'Monitoreo NOC 24/7',
  'Zero Export',
  'Peak Shaving',
]

const ADVANTAGES = [
  {
    metric: '30 años',
    title: 'Garantía de generación',
    desc: 'Aseguramos contractualmente que tu sistema producirá energía por encima del 85% incluso después de tres décadas de operación continua.',
  },
  {
    metric: '0%',
    title: 'Financiamiento directo',
    desc: 'Elimina la barrera de entrada. Modelos de financiamiento directo que permiten que el ahorro energético pague la infraestructura.',
  },
  {
    metric: '24 meses',
    title: 'Mantenimiento integral',
    desc: 'Dos años de operación y mantenimiento (O&M) incluidos. Limpieza, termografía con drones y ajuste de torque sin costo adicional.',
  },
  {
    metric: '100%',
    title: 'Plug & Play',
    desc: 'Interconexión sin fricción con la red de CFE. Nos encargamos de toda la gestoría, trámites y certificación UVIE.',
  },
]

const TECHNOLOGY = [
  {
    title: 'Paneles N-Type TOPCon',
    meta: '22.8%',
    content:
      'Módulos de 580 W a 660 W de fabricantes Tier 1 clasificados por Bloomberg NEF, con degradación anual menor a 0.4% garantizada por 30 años.',
  },
  {
    title: 'Inversores y conversión',
    meta: 'IEC · UL',
    content:
      'Inversores Fronius, Huawei y SMA seleccionados por eficiencia y compatibilidad con Código de Red. Cumplen IEC 61215, IEC 61730 y estándares UL.',
  },
  {
    title: 'Almacenamiento LFP',
    meta: '280 Ah',
    content:
      'Celdas prismáticas LFP para peak shaving, continuidad operativa y protección ante variaciones de voltaje en equipos críticos.',
  },
  {
    title: 'Monitoreo en tiempo real',
    meta: '20 ms',
    content:
      'Centro de control operando 24/7 con alertas automáticas y análisis predictivo de fallas desde nuestro Centro de Operaciones.',
  },
]

const SOLUTIONS = [
  { title: 'Soluciones', desc: 'Garantía de 30 años, financiamiento 0%, mantenimiento integral y plug & play.', href: '/soluciones' },
  { title: 'Servicios', desc: 'Energía solar, baterías, tecnología lumínica y proyectos especiales.', href: '/servicios' },
  { title: 'Tecnología', desc: 'Componentes Tier 1, monitoreo 24/7 y certificaciones internacionales.', href: '/tecnologia' },
  { title: 'Proyectos', desc: 'Proyectos instalados en toda la República Mexicana.', href: '/proyectos' },
  { title: 'Ingeniería', desc: 'Proceso certificado en 4 fases: auditoría, diseño, procura y ejecución.', href: '/ingenieria' },
  { title: 'Contacto', desc: 'Habla con nuestros ingenieros y obtén una propuesta personalizada.', href: '/contacto' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-vellum text-carbon">
      <Navigation />

      {/* Hero: fotografía a sangre con titular abajo a la izquierda */}
      <section id="inicio" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img
          src="/hero-solar.png"
          alt="Instalación solar industrial sobre techo de planta manufacturera"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-3/4 md:h-1/2 bg-gradient-to-t from-onyx/60 md:from-onyx/50 to-transparent" aria-hidden="true" />

        <Container className="relative h-full flex flex-col justify-end pb-10 md:pb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div className="max-w-2xl">
              <Reveal>
                <SectionLabel tone="light" className="mb-6">Energía solar industrial · México</SectionLabel>
              </Reveal>
              <Reveal delay={100}>
                <h1 className={`${displayClass} text-white mb-8`}>
                  Energía que transforma
                  <br />
                  la industria mexicana.
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <div className="flex flex-wrap gap-2">
                  <ButtonLink href="#contacto">Inicia tu proyecto</ButtonLink>
                  <ButtonLink href="/soluciones" variant="ghost-light">Ver soluciones</ButtonLink>
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
      <section className="py-12 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
            <div className="lg:col-span-7">
              <Reveal>
                <SectionLabel className="mb-8">Misión</SectionLabel>
                <h2 className={displayClass}>
                  Ingeniería de precisión.
                  <br />
                  Resultados garantizados.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-5 lg:pt-14">
              <Reveal delay={100}>
                <p className="text-base leading-[1.4] text-carbon/80 mb-6 max-w-md">
                  No solo instalamos paneles: desplegamos infraestructura energética
                  crítica diseñada para durar décadas bajo condiciones extremas.
                </p>
                <ButtonLink href="/soluciones" variant="ghost">Conocer ventajas</ButtonLink>
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
      <section className="py-12 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <Reveal>
              <div className="aspect-[4/5] w-full overflow-hidden rounded-[40px] md:rounded-orb">
                <img
                  src="/hero-solar.png"
                  alt="Arreglo de paneles solares en techo industrial"
                  className="w-full h-full object-cover object-[30%_85%] scale-[1.35]"
                />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <SectionLabel className="mb-8">Tecnología</SectionLabel>
                <h2 className={`${headingClass} mb-6`}>
                  Componentes Tier 1, auditados para cumplir estándares IEC y UL.
                </h2>
                <p className="text-base leading-[1.4] text-carbon/80 mb-10 max-w-md">
                  Cada inversor, panel y estructura se selecciona bajo criterios de
                  eficiencia, durabilidad y certificación internacional.
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
      <section className="py-12 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
            <div className="lg:col-span-7">
              <Reveal>
                <SectionLabel className="mb-8">Nuestras soluciones</SectionLabel>
                <h2 className={displayClass}>Energía solar de grado industrial.</h2>
              </Reveal>
            </div>
            <div className="lg:col-span-5 lg:pt-14">
              <Reveal delay={100}>
                <p className="text-base leading-[1.4] text-carbon/80 max-w-md">
                  Soluciones integrales de energía renovable para empresas que buscan
                  eficiencia y sostenibilidad.
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
      <section className="py-12 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
            <div className="lg:col-span-7">
              <Reveal>
                <SectionLabel className="mb-8">Presencia nacional</SectionLabel>
                <h2 className={displayClass}>Proyectos en toda la República.</h2>
              </Reveal>
            </div>
            <div className="lg:col-span-5 lg:pt-14">
              <Reveal delay={100}>
                <p className="text-base leading-[1.4] text-carbon/80 max-w-md">
                  Proyectos industriales y comerciales a lo largo de México, monitoreados
                  en tiempo real desde nuestro Centro de Operaciones.
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
      <section id="contacto" className="py-12 md:py-24 scroll-mt-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionLabel className="mb-8">Contacto</SectionLabel>
                <h2 className={`${displayClass} mb-6`}>Comienza la transición.</h2>
                <p className="text-base leading-[1.4] text-carbon/80 mb-10 max-w-sm">
                  Agenda una sesión técnica con nuestros ingenieros senior. Respondemos
                  en menos de 24 horas.
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
