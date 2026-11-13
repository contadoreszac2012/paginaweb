# Diseño

## Dirección (13 de noviembre de 2026): firma contable moderna

Después de dos intentos que la clienta y el desarrollador consideraron planos o poco "de contaduría", el sitio se rehizo tomando como guía las páginas de despachos que ellos mismos señalaron (DHI Contadores, Contadores Medina, AF & Cía, Luna Meza, conta-dor): verde profundo, beige cálido, dorado como acento, tipografía sans limpia, tarjetas con ícono, cifras, proceso en pasos y un botón de "Agendar consulta" siempre visible.

Reglas de contenido que fijó la clienta:
- La página **promociona al despacho y a la Doctora**; no compara con otros despachos ni dice "lo que otros no hacen".
- **Sin fotos** de ella ni de banco. El elemento visual del hero es un tablero de cumplimiento ilustrativo (`components/Tablero.tsx`).
- Los seis servicios se presentan **al mismo nivel**; normas STPS y antilavado son parte de la lista, no una sección aparte.
- Sin cifras inventadas: la fila de cifras aparece solo cuando ella las dé (`data/cifras.ts`).

El rosa de la paleta anterior se sustituyó por dorado/beige, que es lo que usan las referencias. Si la clienta quiere el rosa de vuelta, se cambian los cuatro tokens `dorado*` en `globals.css`.

## Qué lo distingue del sitio de iztac web (misma casa, otro lenguaje)

El desarrollador pidió que no se pareciera a su propio sitio (hero oscuro con brillo y cuadrícula, píldoras, tarjetas iguales, proceso 01–05, marquesina). Por eso aquí: hero **partido** (claro + panel verde), **botones rectangulares**, **líneas doradas** como elemento de identidad, servicios y avisos como **listas editoriales** con número y flecha, proceso como **línea con puntos**, cabeceras y pie **claros**. Fondos oscuros solo en el panel del hero, "Nosotros" y "Compromisos".

## Colores

Definidos en `app/globals.css` dentro de `@theme`. Se usan como clases de Tailwind (`bg-verde-900`, `text-dorado`, `border-arena-oscura`, etc.).

| Token | Valor | Uso |
| --- | --- | --- |
| `verde-900` | `#0b3b2e` | Hero, cabeceras de sección, "Cómo trabajamos", pie |
| `verde-800` | `#0f4a3a` | Tarjetas oscuras |
| `verde` | `#14594a` | Botón primario, enlaces, etiquetas, cierre |
| `verde-100` / `verde-50` | `#dcebe3` / `#eef5f1` | Fondos suaves, chips |
| `arena` | `#f5f1ea` | Fondo general |
| `arena-oscura` | `#ebe4d8` | Bordes |
| `blanco` | `#ffffff` | Tarjetas |
| `dorado` | `#c8a45d` | Acento: líneas de etiqueta, íconos sobre verde, números, botón dorado |
| `dorado-claro` | `#f1e6cc` | Fondos suaves dorados |
| `tinta` | `#142019` | Texto principal |
| `gris` | `#5b6b64` | Texto secundario |

Contraste (WCAG AA): gris sobre arena ≈ 5.6:1; blanco sobre verde ≈ 7.3:1; dorado sobre verde-900 ≈ 6.4:1 (solo en textos de 14 px o más en negrita, y en números grandes).

## Tipografía

Una sola familia: **Plus Jakarta Sans** (variable, paquete `@fontsource-variable/plus-jakarta-sans`). Títulos con la clase `.titulo` (peso 700, interletrado −0.025em). Cuerpo 17 px / 1.6. `tnum` activado para que las cifras alineen.

## Movimiento

Librería `motion` (`components/Animar.tsx`): `Revelar` (aparece al entrar en pantalla, una vez) y `Contador` (cifra que cuenta). CSS: `.aparece` (secuencia de carga del hero), `.entra` (cambio de página), `.flota` (el tablero flota), `.barra-crece` (gráfica del tablero), `.cinta` (términos que se desplazan). El tablero marca sus renglones uno a uno al cargar. Todo se desactiva con `prefers-reduced-motion`.

## Componentes

- `Navegacion`: barra fija con monograma, nombre, menú y botón de agendar; en celular el menú se desplaza de lado.
- `Titulo`: cabecera de sección (verde-900, cuadrícula fina, resplandor dorado, ruta, título, entrada). Exporta `Contenido` y `Encabezado` (etiqueta con línea dorada + h2 + texto).
- `Tablero`: tarjeta del hero.
- `BotonWhatsApp`: botón; con `cita` abre WhatsApp con el mensaje de agendar.
- `IconoServicio`: ícono por área (lucide).
- `PiePagina`: pie en verde-900 con cuatro columnas.

## Qué no hacer

- No comparar con otros despachos ni usar tono de alarma en el inicio.
- No usar fotos de banco ni de terceros.
- No inventar cifras, testimonios ni clientes.
- No meter textos del negocio en componentes: van en `data/` o `content/`.
- No agregar fuentes externas ni scripts de terceros sin actualizar el aviso de privacidad.
