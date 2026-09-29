'use client'

import { Reveal } from '@/lib/hooks'
import { Container, SectionIntro } from '@/components/ui'

export const ADVANTAGES = [
  {
    metric: '30 años',
    title: 'Garantía de generación',
    subtitle: 'Por contrato',
    desc: 'Tu sistema seguirá produciendo al menos el 85% de su capacidad después de 30 años de operación continua. Queda por escrito.',
  },
  {
    metric: '0%',
    title: 'Financiamiento directo',
    subtitle: 'Sin banco de por medio',
    desc: 'Financiamos el sistema nosotros mismos. El dinero que dejas de pagar a CFE cubre la inversión mes a mes, sin descapitalizar a tu empresa.',
  },
  {
    metric: '24 meses',
    title: 'Mantenimiento incluido',
    subtitle: 'Operación y mantenimiento',
    desc: 'Durante los primeros dos años limpiamos los módulos, hacemos termografía con dron para detectar fallas y reapretamos conexiones. Sin costo adicional.',
  },
  {
    metric: 'Llave en mano',
    title: 'Trámites con CFE',
    subtitle: 'Interconexión y UVIE',
    desc: 'Gestionamos la solicitud de interconexión con CFE, el medidor bidireccional y la verificación de la UVIE. Tú recibes el sistema funcionando.',
  },
]

export default function VentajasSection({ showIntro = true }: { showIntro?: boolean }) {
  return (
    <section id="ventajas" className="py-10 md:py-16 scroll-mt-28">
      <Container>
        {showIntro && (
          <Reveal>
            <SectionIntro
              label="Ventajas"
              title="Financiamiento, garantía y mantenimiento en un solo contrato."
              intro={
                <p>
                  Un sistema solar industrial trabaja 25 años o más. Estos son los cuatro
                  compromisos que firmamos para que tus paneles solares rindan todo ese
                  tiempo.
                </p>
              }
            />
          </Reveal>
        )}
        <div className="border-t border-carbon">
          {ADVANTAGES.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 border-b border-carbon">
                <div className="md:col-span-4 text-[40px] md:text-display font-light leading-none">
                  {item.metric}
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-[20px] md:text-subheading font-normal mb-2">{item.title}</h3>
                  <div className="text-label uppercase text-mercury">{item.subtitle}</div>
                </div>
                <p className="md:col-span-5 text-base leading-[1.4] text-carbon/80">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
