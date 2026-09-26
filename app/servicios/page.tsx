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
          title="Instalación de paneles solares industriales y baterías."
          intro="Somos una consultoría energética mexicana con sede en León, Guanajuato. Medimos cómo consume tu empresa y diseñamos lo que más reduce tu recibo: paneles, baterías o ambos."
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
              text="Te decimos qué combinación de paneles y baterías reduce más tu recibo, con el retorno de inversión calculado."
              context="servicios"
            />
          </Reveal>
        </Container>
      </section>

      <Footer />
    </div>
  )
}
