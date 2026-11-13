# Diseño

## Concepto: "Rosa y esmeralda" (opción 23 del catálogo)

La clienta eligió esta dirección de un catálogo de 24 portadas (5 de noviembre de 2026). Resumen: crema de fondo, **verde esmeralda** para texto, botones y franjas, **rosa** como forma grande y acento. Cálido y femenino sin dejar de verse como despacho: la seriedad la ponen la serif de los títulos, el orden y las listas con base legal.

Tres referencias que ella señaló y cómo se tradujeron:

| Referencia | Qué le gustó | Dónde quedó |
| --- | --- | --- |
| DHI Contadores | Botón "Agenda una consulta" al inicio, sección de proceso de seguimiento, tarjetas de cifras, servicios con ícono | Botón "Agendar consulta" en la barra y en el hero; "Cómo trabajamos" (5 pasos); fila de cifras (oculta hasta tener datos); tarjetas de servicios con ícono |
| conta-dor.com | Encabezado limpio con menú visible y una franja de color con el título de cada sección | Barra con nombre + menú + botón; componente `Titulo` = franja esmeralda con el título centrado |
| buencontador.com | Misión y visión como bloques de etiqueta corta + párrafo | Sección "El despacho": Misión, Visión y Valores como bloques con línea rosa arriba |

Se descartó el diseño anterior ("libro mayor": hoja rayada, margen rojo, cuenta T). Sus archivos ya no existen en el proyecto.

## Colores

Definidos en `app/globals.css` dentro de `@theme`. Se usan como clases de Tailwind (`bg-crema`, `text-esmeralda`, `border-borde`, etc.).

| Token | Valor | Uso |
| --- | --- | --- |
| `crema` | `#fbf5f1` | Fondo general |
| `blanco` | `#ffffff` | Tarjetas |
| `borde` | `#ead6cc` | Líneas y bordes |
| `esmeralda` | `#0f4f3f` | Texto principal, botones, franjas de título |
| `esmeralda-oscuro` | `#0a3a2e` | Hover de botones |
| `musgo` | `#4f6b62` | Texto secundario |
| `rosa` | `#e9a3b4` | Formas grandes (arco de la foto), líneas de sección |
| `rosa-claro` | `#f6dde3` | Chips, fondos suaves, cuadro de sanciones |
| `rosa-texto` | `#c2607a` | Énfasis en texto, subrayado del menú, números del proceso |
| `rosa-oscuro` | `#8a3a52` | Texto sobre rosa claro |

Contraste (WCAG AA): musgo sobre crema ≈ 5.5:1; rosa-oscuro sobre rosa-claro ≈ 5.9:1; crema sobre esmeralda ≈ 9:1; rosa-texto sobre crema ≈ 4.6:1 (solo en textos de 15 px o más y en negrita).

Regla: el verde manda, el rosa acompaña. Nunca texto rosa pequeño sobre crema, nunca botones rosa.

## Tipografía

| Familia | Uso | Por qué |
| --- | --- | --- |
| Cormorant Garamond (500, 600, 500 cursiva) | Títulos, misión y visión, lema, números del proceso | Serif elegante que da el tono "despacho"; la cursiva rosa es el acento del hero |
| DM Sans (variable) | Texto, botones, menú, chips | Sans redonda y legible en celular; `tnum` activado para que las cifras alineen |

Se cargan desde paquetes `@fontsource/*` (archivos servidos por Next). No hay dependencia de Google Fonts.

Escala: cuerpo 17 px / 1.55. Franja de título 2.25–3 rem; hero 2.75–4.5 rem. Lectura limitada a ~60–64 caracteres por línea.

## Movimiento

Solo dos movimientos, los dos cortos: la carga del inicio (`.aparece`, piezas en orden) y la entrada de cada página (`.entra`, vía `app/template.tsx`). Ambos se desactivan con `prefers-reduced-motion`. Sin animaciones al hacer scroll; los hovers solo cambian color o borde.

## Componentes

- `Navegacion`: nombre y título, botón "Agendar consulta", menú de secciones con subrayado rosa en la activa. Cliente (necesita la ruta). En celular el menú se desplaza de lado.
- `Titulo`: franja esmeralda con el título de la sección y entrada opcional. Exporta también `Contenido`, el contenedor estándar (ancho máximo 72 rem, relleno vertical).
- `BotonWhatsApp`: botón primario/secundario. Con `cita` abre WhatsApp con el mensaje de agendar consulta; sin `cita`, con el mensaje general.
- `IconoServicio`: mapa de íconos lucide por área.
- `PiePagina`: copyright, aviso de privacidad, crédito.

## Qué no hacer

- No usar el rosa en botones ni en texto pequeño.
- No agregar gradientes ni sombras fuertes; la única sombra es la de la cita en el hero.
- No meter textos del negocio en componentes; van en `data/` o `content/`.
- No inventar cifras para las tarjetas del inicio: siguen ocultas hasta que la clienta las dé.
- No agregar fuentes externas ni scripts de terceros sin actualizar el aviso de privacidad.
