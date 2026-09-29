'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import VentajasSection from '@/components/sections/VentajasSection'
import { Reveal } from '@/lib/hooks'
import { Container, CtaBlock, CtaButtons, PageHero } from '@/components/ui'

export default function SolucionesPage() {
  return (
    <div className="min-h-screen bg-vellum text-carbon">
      <Navigation />

      <Reveal>
        <PageHero
          label="Ventajas"
          title="Financiamiento, garantía y mantenimiento en un solo contrato."
          intro="Un sistema solar industrial trabaja 25 años o más. Estos son los cuatro compromisos que firmamos para que tus paneles solares rindan todo ese tiempo."
        >
          <CtaButtons context="ahorro" />
        </PageHero>
      </Reveal>

      <section className="pb-6">
        <Container>
          <Reveal>
            <div className="aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-[40px] md:rounded-orb">
              <img
                src="/hero-techo-solar.jpg"
                alt="Vista aérea de paneles solares sobre el techo de una planta industrial"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <VentajasSection showIntro={false} />

      <section className="py-10 md:py-12">
        <Container>
          <Reveal>
            <CtaBlock
              title="¿Cuánto puedes ahorrar en tu planta?"
              text="Con tus recibos de CFE calculamos el tamaño del sistema, el ahorro mensual y el retorno de inversión. Luego decides."
              context="ahorro"
            />
          </Reveal>
        </Container>
      </section>

      <Footer />
    </div>
  )
}
