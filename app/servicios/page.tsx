'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ServiciosSection from '@/components/sections/ServiciosSection'
import { Reveal } from '@/lib/hooks'
import { Container, CtaBlock, CtaButtons, PageHero } from '@/components/ui'

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-vellum text-carbon">
      <Navigation />

      <Reveal>
        <PageHero
          label="Servicios · Consultoría energética 360°"
          title="Instalación de paneles solares comerciales e industriales."
          intro="Somos una consultoría energética mexicana con sede en León, Guanajuato. Medimos cómo consume tu empresa y diseñamos el sistema de paneles solares que más reduce tu recibo de CFE."
        >
          <CtaButtons context="servicios" />
        </PageHero>
      </Reveal>

      <ServiciosSection showIntro={false} />

      <section className="py-10 md:py-12">
        <Container>
          <Reveal>
            <CtaBlock
              title="Cotiza el sistema que tu planta necesita."
              text="Te decimos cuántos paneles necesitas, cuánto vas a ahorrar al mes y en cuánto tiempo recuperas la inversión."
              context="servicios"
            />
          </Reveal>
        </Container>
      </section>

      <Footer />
    </div>
  )
}
