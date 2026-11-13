# Cambios

Formato: fecha, qué cambió, quién. Lo más reciente arriba.

## 2026-11-13 — Ajuste para no parecerse al sitio de iztac web

- Hero partido: texto sobre fondo claro a la izquierda y panel verde con el tablero a la derecha (en lugar de hero oscuro con brillo y cuadrícula).
- Botones rectangulares; sin etiqueta en píldora, sin marquesina.
- Servicios como lista editorial numerada con flecha (no cuadrícula de tarjetas); avisos igual.
- Proceso como línea con puntos y "Paso n" (no tarjetas 01–05).
- Cabeceras de sección y pie en claro con línea dorada.

## 2026-11-13 — Rediseño completo: firma contable moderna (iztac web)

- Se rehízo el sitio con las páginas de despachos que dio la clienta como guía: verde profundo, beige y dorado; Plus Jakarta Sans; barra fija con botón de agendar; hero con tablero de cumplimiento ilustrativo; sellos de confianza; servicios en tarjetas; misión y visión; proceso; avisos; preguntas; cierre; pie en columnas.
- Se eliminó la comparación "lo que todo despacho hace / lo que nos distingue" y las páginas /normas-stps y /antilavado: los seis servicios van al mismo nivel.
- "El despacho" pasa a llamarse "Nosotros" (misma ruta /despacho).
- Movimiento: aparición al bajar, tablero que marca renglones y gráfica que crece, cinta de términos, cambio de página.
- Documentación de diseño reescrita (`docs/DISENO.md`).

## 2026-11-13 — Inicio construido alrededor de lo que distingue al despacho (iztac web)

- La clienta señaló que contabilidad e impuestos los ofrece cualquier despacho y que lo inusual es normas STPS y actividades vulnerables. El inicio ahora abre con eso: titular "La contabilidad que todo despacho lleva. Y el cumplimiento que casi ninguno revisa", un "balance" de dos columnas (lo común / lo que distingue), sección de Normas STPS, sección de antilavado, la base (contabilidad, impuestos, nóminas) y el proceso.
- Dos secciones nuevas con su propia página y entrada en el menú: `/normas-stps` y `/antilavado`.
- Movimiento (librería `motion`, respeta "reducir movimiento"): aparición de bloques al bajar, cifras que cuentan, casillas que se marcan solas, sello que flota, cinta de términos contables que se desplaza al fondo del hero, renglones que se dibujan.
- Textos del inicio en `data/inicio.ts`.

## 2026-11-13 — Rediseño del inicio y las cabeceras (iztac web)

- La clienta y el desarrollador consideraron plana la primera versión. Mismos colores, más capas: hero esmeralda con trama e ilustración propia, tarjeta flotante de razones, servicios como tarjetas numeradas con ícono, proceso como línea de tiempo, franja del lema con comilla, bloque de avisos y cierre.
- Cabeceras de sección rediseñadas: trama, formas rosas, ruta y título a la izquierda.
- Pie de página en esmeralda oscuro con columnas.
- Página de servicios con tarjetas más amplias (ícono, número y lista en fondo crema).
- Nuevo componente `Ilustracion` y texturas `.trama`, `.renglones`, `.comilla` en `globals.css`.
- Tomado de otras páginas de despachos que pasó el desarrollador: sección "Nuestros compromisos" (`data/compromisos.ts`, provisional), estructura de equipo sin fotos (`data/equipo.ts`, oculta hasta llenarse) y cuatro preguntas frecuentes nuevas (documentos, costo, cambio de contador, carta del SAT).

## 2026-11-13 — Enfoque promocional y sin foto (iztac web)

- Inicio: nuevo titular ("Contabilidad, impuestos, nóminas y cumplimiento, con un solo criterio: prevenir, no corregir") y texto que presenta al despacho en lugar de advertir sobre revisiones y multas.
- Se retira la foto del inicio y de El despacho por decisión de la clienta; en su lugar, el lema y las razones para elegir el despacho (`data/despacho.ts`, `porQue`).
- La franja de avisos del inicio se presenta como "Avisos para empresas", sin tono de alarma.

## 2026-11-05 — Diseño elegido por la clienta y contenido definitivo (iztac web)

- Nuevo diseño "Rosa y esmeralda" (opción 23 del catálogo): crema, verde esmeralda y rosa; Cormorant Garamond + DM Sans. Sustituye al diseño "libro mayor".
- Estructura: barra con menú y botón "Agendar consulta"; franja de título por sección (referencia conta-dor).
- Inicio: hero con arco y foto, fila de cifras (oculta hasta tener datos), servicios en tarjetas, "Cómo trabajamos" (5 pasos, provisional) y aviso reciente.
- Servicios: seis áreas con el texto del documento de la clienta: Contabilidad, Impuestos, Laboral y nóminas, Normas STPS, Prevención de lavado de dinero y Registro y cumplimiento REPSE (detallado por ella).
- El despacho: misión, visión y valores de la clienta (referencia buencontador).
- Avisos: nuevo aviso "Ley Antilavado: cumplir cuesta menos que no hacerlo" con las multas en pesos.
- Preguntas frecuentes actualizadas a los nuevos servicios.
- Documentación actualizada: README, FICHA (pendientes y preguntas enviadas), DISENO.
- Misión, visión y valores sustituidos por la versión definitiva de la clienta (6 valores). Se retiró la frase "despacho formado por mujeres" a petición suya.

## 2026-11-03 — Versión inicial (iztac web)

- Estructura multipágina con pestañas: Portada, Servicios, Avisos, El despacho, Preguntas, Contacto y Aviso de privacidad.
- Diseño "expediente / libro contable" (ver `docs/DISENO.md`).
- Contenido separado en `data/` y `content/`.
- Primer aviso: "¿Tus documentos laborales ya están actualizados?" (reformas LFT 2023–2026).
- Sitemap, robots, favicon, página 404, metadatos por página.
- Documentación: README, ficha, diseño y guía de publicación.
- Pendientes con la clienta listados en `docs/FICHA.md`.

## 2026-11-03 — Actualización de seguridad

- Next.js 16.4.0 → 16.4.5 (corrige dos avisos críticos y uno alto en el optimizador de imágenes, `use cache` y Server Actions). Sin cambios en el código.
