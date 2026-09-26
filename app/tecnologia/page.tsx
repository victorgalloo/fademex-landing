'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import TecnologiaSection from '@/components/sections/TecnologiaSection'
import { Reveal } from '@/lib/hooks'
import { Container, CtaBlock, CtaButtons, PageHero } from '@/components/ui'

export default function TecnologiaPage() {
  return (
    <div className="min-h-screen bg-vellum text-carbon">
      <Navigation />

      <Reveal>
        <PageHero
          label="Tecnología"
          title="Paneles solares Tier 1 y sus especificaciones."
          intro="Trabajamos con fabricantes de la lista Tier 1 de BloombergNEF. Cada panel, inversor y estructura que instalamos cumple normas IEC y UL."
        >
          <CtaButtons context="tecnologia" />
        </PageHero>
      </Reveal>

      <TecnologiaSection showIntro={false} />

      <section className="py-10 md:py-12">
        <Container>
          <Reveal>
            <CtaBlock
              title="¿Tu equipo técnico necesita las fichas completas?"
              text="Te enviamos las hojas de datos de cada componente o agendamos una revisión con nuestros ingenieros."
              context="tecnologia"
            />
          </Reveal>
        </Container>
      </section>

      <Footer />
    </div>
  )
}
