'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ProyectosSection from '@/components/sections/ProyectosSection'
import { Reveal } from '@/lib/hooks'
import { Container, CtaBlock, CtaButtons, PageHero } from '@/components/ui'

export default function ProyectosPage() {
  return (
    <div className="min-h-screen bg-vellum text-carbon">
      <Navigation />

      <Reveal>
        <PageHero
          label="Casos de éxito"
          title="Proyectos de energía solar industrial en México."
          intro="Plantas y comercios en el Bajío, el norte y el centro de México. Monitoreamos cada sistema en tiempo real desde nuestro Centro de Control en León."
        >
          <CtaButtons context="proyectos" />
        </PageHero>
      </Reveal>

      <ProyectosSection showIntro={false} />

      <section className="py-10 md:py-12">
        <Container>
          <Reveal>
            <CtaBlock
              title="Tu planta puede ser el siguiente caso."
              text="Más de 150 empresas ya generan parte de su energía con FADEMEX. Empezamos por revisar tus recibos de CFE."
              context="proyectos"
            />
          </Reveal>
        </Container>
      </section>

      <Footer />
    </div>
  )
}
