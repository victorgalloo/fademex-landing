'use client'

import Accordion from '@/components/Accordion'
import { Reveal } from '@/lib/hooks'
import { Container, CtaButtons, SectionLabel, displayClass } from '@/components/ui'

export const FAQS = [
  {
    q: '¿Cuánto cuesta un sistema de paneles solares para una empresa?',
    a: 'Depende de tu consumo, tu tarifa de CFE y el espacio disponible en techo o terreno. Por eso cotizamos después de revisar tus recibos: te entregamos el tamaño del sistema, la inversión y el ahorro mensual estimado.',
  },
  {
    q: '¿En cuánto tiempo se recupera la inversión?',
    a: 'Depende de tu tarifa y de cuánta energía consumes durante el día. En media tensión (GDMTO y GDMTH) la energía es más cara, así que el retorno suele ser más rápido. Lo calculamos con tus datos antes de que tomes cualquier decisión.',
  },
  {
    q: '¿Cuántos paneles solares necesita mi empresa?',
    a: 'Depende de tu consumo mensual y del espacio disponible. Con tus recibos de CFE y una visita técnica calculamos la potencia del sistema, el número de módulos y dónde conviene instalarlos.',
  },
  {
    q: '¿Qué pasa en días nublados o de noche?',
    a: 'El sistema queda interconectado con CFE: cuando los paneles no producen, tu planta toma energía de la red como siempre. En sistemas de generación distribuida (hasta 500 kW), la energía que produces de más se compensa en tu recibo.',
  },
  {
    q: '¿Tengo que detener la operación de mi planta durante la instalación?',
    a: 'Normalmente no. Planeamos la obra por zonas y programamos la conexión final en un horario acordado contigo para no afectar tu producción.',
  },
  {
    q: '¿Quién hace los trámites con CFE?',
    a: 'Nosotros. Gestionamos la solicitud de interconexión, la verificación de la UVIE y el cambio a medidor bidireccional. Tú recibes el sistema funcionando.',
  },
  {
    q: '¿Qué mantenimiento necesita el sistema?',
    a: 'Limpieza periódica de los módulos y revisiones eléctricas. Los primeros 24 meses de operación y mantenimiento están incluidos: limpieza, termografía con dron y reapriete de conexiones.',
  },
  {
    q: '¿Ofrecen financiamiento?',
    a: 'Sí. Ofrecemos financiamiento directo para que lo que dejas de pagar a CFE cubra la inversión mes a mes, sin que tengas que tramitar un crédito con un banco.',
  },
]

export default function PreguntasSection() {
  return (
    <section id="preguntas" className="py-10 md:py-16 scroll-mt-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel className="mb-8">Preguntas frecuentes</SectionLabel>
              <h2 className={`${displayClass} mb-6`}>Lo que nos preguntan antes de cotizar.</h2>
              <p className="text-base leading-[1.4] text-carbon/80 max-w-md mb-8">
                Si tu duda no está aquí, escríbenos. Un ingeniero te responde, no un
                vendedor.
              </p>
              <CtaButtons />
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <Accordion items={FAQS.map((f) => ({ title: f.q, content: <p>{f.a}</p> }))} />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
