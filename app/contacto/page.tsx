'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CotizarSection from '@/components/sections/CotizarSection'
import PreguntasSection from '@/components/sections/PreguntasSection'
import { Reveal } from '@/lib/hooks'
import { Container, CtaBlock } from '@/components/ui'

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-vellum text-carbon">
      <Navigation />

      <div className="pt-24 md:pt-32">
        <CotizarSection headingLevel="h1" />
      </div>

      <PreguntasSection />

      <section className="py-10 md:py-12">
        <Container>
          <Reveal>
            <CtaBlock
              label="Proyectos de gran escala"
              title="¿Tu proyecto supera los 5 MW?"
              text="Para parques solares o plantas con varias naves, habla directo con el departamento de ingeniería."
              context="grandes"
              quoteLabel="Cotizar por formulario"
            />
          </Reveal>
        </Container>
      </section>

      <Footer />
    </div>
  )
}
