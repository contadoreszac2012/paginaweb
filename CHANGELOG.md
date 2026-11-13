# Cambios

Formato: fecha, qué cambió, quién. Lo más reciente arriba.

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
