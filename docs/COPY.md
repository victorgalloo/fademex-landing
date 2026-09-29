# Guía de copy del sitio público

Adaptación del flujo [seo-content-writer](https://github.com/Yaroslavle/seo-content-writer-claude-skill)
(JTBD, E-E-A-T, guardarraíles de voz, keywords y CTAs) a una landing B2B.

## JTBD

> Cuando el recibo de CFE de mi empresa sube cada mes, quiero saber cuánto ahorraría
> con paneles solares y qué implica instalarlos, para decidir con números y sin detener
> la operación.

Lector: director de planta, gerente de mantenimiento o director financiero de una
empresa industrial o comercial en tarifa GDMTO/GDMTH, principalmente en el Bajío.

## Ángulo

El producto principal son los paneles solares. Mensaje: tu techo puede producir la
energía que hoy le compras a CFE, y el sistema se dimensiona con tu consumo real
(recibos + medición), no con un paquete estándar.

Las baterías solo aparecen como complemento opcional, en una línea dentro de Servicios
(distribuidores de Fortress Power). No usarlas en titulares, hero, CTAs ni metadatos.

## Voz

Hacer:
- Tutear al lector ("tu planta", "tu recibo").
- Frases cortas, verbos concretos, datos y nombres propios (CFE, UVIE, GDMTH, Fronius).
- Explicar el porqué técnico en una línea, sin tecnicismos innecesarios.
- Todo en español; los términos en inglés solo si el cliente los usa (Tier 1, TOPCon).

No hacer:
- Palabras vacías: "soluciones integrales", "transformar", "innovador", "de vanguardia",
  "sin fricción", "holístico", "360°" (solo como nombre del servicio), "potenciar".
- Subtítulos en inglés ("Seamless Integration", "Generation Performance").
- Guiones largos en exceso; preferir punto o dos puntos.
- Abrir con preguntas retóricas o generalidades ("Todas las empresas…").
- Inventar cifras. Toda cifra nueva necesita fuente o confirmación del cliente.

## Mapa de keywords

| Página | Keyword principal | Secundarias |
|---|---|---|
| Inicio | paneles solares para empresas | paneles solares industriales, energía solar industrial, León Guanajuato |
| Soluciones | financiamiento de paneles solares para empresas | garantía, mantenimiento O&M, trámites CFE |
| Servicios | instalación de paneles solares industriales | paneles solares comerciales, carport solar, interconexión CFE |
| Tecnología | paneles solares Tier 1 | TOPCon, IEC 61215, Código de Red, monitoreo |
| Proyectos | proyectos de energía solar industrial | casos de éxito, León, Aguascalientes, Querétaro |
| Ingeniería | auditoría energética | interconexión CFE, UVIE, NOM-001-SEDE |
| Contacto | cotizar paneles solares para empresa | análisis de consumo |

Regla: keyword principal en el H1, en el primer párrafo y en el `<title>`; nunca más de
dos veces por sección.

## Afirmaciones que el cliente debe confirmar

Estas cifras vienen del sitio anterior. Antes de publicar, confirmar con documentos:

- 8.4 MW instalados, 150+ proyectos, 20+ estados.
- Certificación ISO 9001 (¿de FADEMEX o de los fabricantes?).
- Garantía de producción de 85% a 30 años (normalmente la da el fabricante del panel).
- Financiamiento 0%: condiciones reales (plazo, requisitos).
- Ahorros por caso: 88% (CDMX), 99% (Aguascalientes).
- 24 meses de O&M incluidos en todos los proyectos.
- Distribuidor oficial de Fortress Power (eSpire 280, 279.5 kWh).

## Fuentes de contexto

- Conceptos de la factura GDMTH: https://ontu.mx/como-leer-factura-cfe-gdmth-conceptos/

## Estructura de una sola página y CTAs

La página principal contiene todas las secciones, en este orden:
hero → cifras → el problema → ventajas → CTA → servicios (solar, tipos, marcas, mención breve de baterías)
→ tecnología → proyectos (casos y mapa) → CTA → ingeniería → preguntas frecuentes → cotizar.

Las páginas `/soluciones`, `/servicios`, `/tecnologia`, `/proyectos`, `/ingenieria` y
`/contacto` reutilizan las mismas secciones (`components/sections/`) para SEO; el menú
navega con anclas (`/#servicios`, etc.).

Regla de CTAs: todo botón de conversión lleva a una de dos rutas:
- Formulario de cotización: `/#cotizar` (`QUOTE_HREF`).
- WhatsApp: `whatsappUrl(contexto)` con mensaje prellenado según la sección.

Número y mensajes en `lib/contact.ts`. Confirmar con el cliente que +52 479 136 9896
tiene WhatsApp Business activo.
