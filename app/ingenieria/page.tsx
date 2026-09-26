'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import IngenieriaSection from '@/components/sections/IngenieriaSection'
import { Reveal } from '@/lib/hooks'
import { Container, CtaBlock, CtaButtons, PageHero } from '@/components/ui'

export default function IngenieriaPage() {
  return (
    <div className="min-h-screen bg-vellum text-carbon">
      <Navigation />

      <Reveal>
        <PageHero
          label="Ingeniería"
          title="De la auditoría energética al primer kWh."
          intro="Cuatro fases con entregables claros y un ingeniero responsable en cada una. Siempre sabes en qué punto está tu proyecto y qué sigue."
        >
          <CtaButtons context="ingenieria" />
        </PageHero>
      </Reveal>

      <IngenieriaSection showIntro={false} />

      <section className="py-10 md:py-12">
        <Container>
          <Reveal>
            <CtaBlock
              title="Empieza por la auditoría."
              text="Agenda una sesión técnica. Revisamos tus recibos de CFE y planeamos la visita de medición a tu planta."
              context="ingenieria"
            />
          </Reveal>
        </Container>
      </section>

      <Footer />
    </div>
  )
}
