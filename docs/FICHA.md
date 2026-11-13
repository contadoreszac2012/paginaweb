# Ficha del proyecto

Última actualización: 5 de noviembre de 2026.

## Cliente

| | |
| --- | --- |
| Nombre | Martha Gabriela Robles Delgado |
| Título | Doctora en Impuestos |
| Giro | Despacho contable: contabilidad, impuestos, nóminas y cumplimiento laboral, normas STPS, REPSE, prevención de lavado de dinero |
| Ciudad | Zacatecas, Zac. |
| Contacto | WhatsApp 492 127 3602 · Oficina 492 927 5430 · contadoreszac2012@hotmail.com |
| Contacto que aprueba | La propia clienta |
| Desarrolla | iztac web (Luis Obed Aranda) |

## Objetivo del sitio

Que un patrón o dueño de empresa que llega por recomendación, por un flyer o por Google entienda en un minuto qué resuelve el despacho y escriba por WhatsApp. Secundario: tener dónde publicar avisos sobre reformas (como el de documentos laborales 2026) para compartirlos por WhatsApp.

## Decisiones tomadas

| Decisión | Qué se decidió | Por qué |
| --- | --- | --- |
| Stack | Next.js 16 + Tailwind 4, estático | Mismo stack que iztac web; sin costo de hosting; rápido y seguro |
| Hosting | Netlify (plan gratuito) | El plan gratuito de Vercel prohíbe uso comercial |
| Estructura | Multipágina: Inicio, Servicios, Avisos, Nosotros, Preguntas, Contacto (+ aviso de privacidad) | Petición del desarrollador (no una sola página con scroll) y referencia conta-dor que dio la clienta; cada sección tiene su URL |
| Identidad | Firma contable moderna: verde profundo, beige y dorado (13 nov 2026) | La clienta eligió verde/rosa de un catálogo el 5 nov, pero las dos primeras versiones se vieron planas; se rehízo con sus páginas de referencia como guía. El rosa se cambió por dorado; se puede regresar. Ver `DISENO.md` |
| Logo | No se usa el logo actual; favicon tipográfico provisional | El logo actual está guardado en `docs/material/logo-actual.png` por si se decide volver a usarlo. PENDIENTE: ¿quiere logo nuevo acorde a los colores? |
| Contenido | Separado en `data/` y `content/` | Para que cambiar textos no requiera tocar componentes y para poder conectar un CMS después |
| CMS | No por ahora | La clienta no ha dicho que quiera publicar ella misma; `content/avisos.ts` es el punto de conexión si lo pide |
| Fuentes | Autoalojadas (fontsource) | Sin llamadas a Google al cargar; mejor para privacidad |
| Formularios | Ninguno; "Agendar consulta" abre WhatsApp con un mensaje de cita | Menos datos que tratar, sin backend; el aviso de privacidad cubre esos canales |
| Contenido | Texto de servicios y antilavado tomado del documento `pagina_internet.docx` de la clienta; misión, visión y valores en su versión definitiva del 5 nov 2026. La clienta pidió no mencionar que el despacho está formado por mujeres | Es su voz; lo que iztac web propuso está marcado como PROVISIONAL en el código |
| Analítica | Ninguna | Si se agrega, actualizar el aviso de privacidad |

## Cuentas y servicios (todo a nombre de la clienta)

| Recurso | Titular | Estado | Acceso del desarrollador |
| --- | --- | --- | --- |
| Repositorio GitHub | Clienta (su correo) | PENDIENTE: crear | Colaborador |
| Netlify | Clienta | PENDIENTE: crear y conectar al repo | Ninguno directo; publica vía GitHub |
| Dominio | Clienta, en registrador independiente (Cloudflare o Namecheap) | PENDIENTE: elegir nombre y comprar | Configura DNS una vez |
| Google Search Console | Clienta | PENDIENTE: después de publicar | — |
| Perfil de Negocio de Google | Clienta | PENDIENTE: verificar si existe | — |

Costos recurrentes previstos: dominio (~US$11–17 al año). Hosting: US$0 mientras el sitio se mantenga dentro del plan gratuito de Netlify (300 créditos al mes; cada publicación gasta 15).

## Pendientes con la clienta

Lo que la página necesita y todavía no se ha confirmado. Mientras tanto, el sitio los omite (campos en `null`) o usa texto provisional.

Preguntas enviadas el 5 de noviembre de 2026:

- [ ] **Norma 025**: en su documento dice "igualdad laboral y no discriminación" (eso es la NMX-R-025-SCFI-2015); la NOM-025-STPS es de iluminación. Confirmar cuál ofrece y corregir `data/servicios.ts`.
- [ ] **Cifras** del inicio: año de fundación, clientes activos, personas en el equipo (`data/cifras.ts`). Si no las da, la fila sigue oculta.
- [ ] **Proceso "Cómo trabajamos"**: confirmar o corregir los 5 pasos propuestos (`data/proceso.ts`).
- [ ] **Compromisos** (`data/compromisos.ts`, hoy no se muestran; listos por si se quieren en El despacho): información mensual, calendario de entregas, respuesta en un día hábil, honorarios transparentes. Son promesas; confirmar o cambiar cada una.
- [ ] **Equipo** (`data/equipo.ts`): nombres, puesto y, si quieren, cédula. Sin fotos. Mientras esté vacío no se muestra.
- [ ] **"Revisamos tu situación sin costo"**: ¿solo antilavado o cualquier primera revisión? (`data/servicios.ts`, `nota`).
- [x] **REPSE**: confirmado y detallado por la clienta el 5 de noviembre (`data/servicios.ts`).

Material y datos:

- [x] Foto: la clienta decidió **no publicar su foto** (13 nov 2026). El inicio y El despacho ya no la necesitan; si cambia de opinión, `data/despacho.ts`, `foto`.
- [ ] Dirección de la oficina (`data/site.ts`, `direccion`). También la pide el aviso de privacidad.
- [ ] Horario de atención (`data/site.ts`, `horario`).
- [ ] Dominio: nombre y compra (`data/site.ts`, `url`).
- [ ] Formación y afiliaciones que quiera mostrar (`data/despacho.ts`).
- [ ] Revisar las preguntas frecuentes (`data/faq.ts`) y agregar las que más le hacen.
- [ ] Redes sociales a enlazar, si tiene.
- [ ] ¿Logo nuevo acorde a los colores, o seguir sin logo (solo el nombre)?
- [ ] Dirección del sitio de iztac web para el crédito del pie (`data/site.ts`, `desarrollador.url`).
- [ ] Enfoque del contenido: la clienta pidió (13 nov 2026) promocionar el despacho y todo lo que hace, no las multas ni las reformas. El inicio se reescribió con ese criterio; los avisos siguen como sección secundaria.
- [ ] Aprobación del diseño por escrito.
- [ ] Aprobación del contenido final por escrito.

## Checklist de publicación (resumen de la guía de iztac web)

- [ ] Aviso de privacidad completo (domicilio real).
- [ ] `npm run build` sin errores.
- [ ] Probado en iPhone, Android y computadora.
- [ ] Dominio conectado; www y sin www a una sola versión; HTTPS activo.
- [ ] Title y description por página (ya en cada `page.tsx`), sitemap y robots (ya generados).
- [ ] 2FA activo en GitHub y Netlify de la clienta.
- [ ] Search Console y Perfil de Negocio de Google.
- [ ] Acta de entrega, hoja de accesos y lista de servicios con fechas de renovación.

## Vencimientos

| Qué | Cuándo | Quién paga |
| --- | --- | --- |
| Dominio | Anual, PENDIENTE fecha | Clienta (renovación automática con su tarjeta) |
