// Canales de conversión del sitio público: WhatsApp y formulario de cotización.

export const PHONE_DISPLAY = '+52 (479) 136-9896'
export const PHONE_HREF = 'tel:+524791369896'
export const EMAIL = 'contacto@fademex.com'

// Número de WhatsApp en formato internacional, sin signos (wa.me)
export const WHATSAPP_NUMBER = '524791369896'

// Ancla del formulario de cotización en la página principal
export const QUOTE_HREF = '/#cotizar'

// Mensaje prellenado según la sección desde la que se abre WhatsApp
export const WHATSAPP_MESSAGES = {
  general: 'Hola FADEMEX, quiero cotizar paneles solares para mi empresa.',
  ahorro: 'Hola FADEMEX, quiero saber cuánto puedo ahorrar con paneles solares en mi planta.',
  servicios: 'Hola FADEMEX, quiero cotizar paneles solares y baterías para mi empresa.',
  baterias: 'Hola FADEMEX, quiero reducir mi cargo por demanda con baterías.',
  tecnologia: 'Hola FADEMEX, quiero las fichas técnicas de los equipos que instalan.',
  proyectos: 'Hola FADEMEX, vi sus proyectos y quiero cotizar uno para mi planta.',
  ingenieria: 'Hola FADEMEX, quiero agendar una auditoría energética para mi planta.',
  grandes: 'Hola FADEMEX, tengo un proyecto de más de 5 MW y quiero hablar con ingeniería.',
} as const

export type WhatsAppContext = keyof typeof WHATSAPP_MESSAGES

export function whatsappUrl(context: WhatsAppContext = 'general') {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGES[context])}`
}
