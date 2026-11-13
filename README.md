# Sitio web: Martha Gabriela Robles Delgado, Doctora en Impuestos

Página informativa del despacho (asesoría fiscal, cumplimiento laboral, normas STPS y prevención de lavado de dinero) en Zacatecas.

Este README está escrito para que **cualquier desarrollador** pueda tomar el proyecto sin haber hablado con quien lo hizo. Si algo no está aquí, está en la carpeta `docs/`.

| Documento | Qué tiene |
| --- | --- |
| `README.md` (este) | Cómo correr, editar y publicar el sitio |
| `docs/FICHA.md` | Cliente, cuentas, dominio, decisiones y pendientes |
| `docs/DISENO.md` | Concepto visual, colores y tipografía, y por qué |
| `docs/PUBLICAR.md` | Paso a paso para crear las cuentas y publicar en Netlify |
| `CHANGELOG.md` | Qué cambió y cuándo |

## Tecnología

- [Next.js](https://nextjs.org) 16 (App Router) con React 19 y TypeScript
- [Tailwind CSS](https://tailwindcss.com) 4 (tokens de color en `app/globals.css`)
- Fuentes autoalojadas con paquetes [fontsource](https://fontsource.org) (sin llamadas a Google Fonts)
- Sin base de datos, sin formularios, sin variables de entorno. Todo es estático.
- Publicación en Netlify (ver `docs/PUBLICAR.md`)

## Correr en tu computadora

Necesitas Node.js 20 o más reciente y Git.

```bash
npm install      # solo la primera vez
npm run dev      # abre http://localhost:3000
```

Otros comandos:

```bash
npm run build    # compila como lo hará Netlify; si falla aquí, fallará allá
npm run lint     # revisa el código
```

## Cómo está organizado

```
app/                    Una carpeta por sección (página). Cada una tiene su page.tsx.
  layout.tsx            Estructura común: navegación, contenido y pie.
  template.tsx          Animación de entrada al cambiar de página.
  globals.css           Tokens de color (diseño "Rosa y esmeralda"), tipografía, botones y chips.
  page.tsx              Inicio: hero, cifras, servicios en resumen, cómo trabajamos, aviso reciente.
  servicios/  avisos/  despacho/  preguntas/  contacto/  aviso-de-privacidad/
  sitemap.ts  robots.ts  icon.svg  not-found.tsx
components/             Piezas visuales reutilizables (no contienen textos del negocio).
data/                   TEXTOS Y DATOS del sitio. Aquí se edita casi todo.
  site.ts               Nombre, título, lema, teléfonos, correo, ciudad, horario, dominio.
  navegacion.ts         Las secciones del menú y su orden.
  servicios.ts          Las seis áreas de servicio (texto de la clienta).
  cifras.ts             Tarjetas de cifras del inicio (ocultas mientras falten datos).
  proceso.ts            Pasos de "Cómo trabajamos".
  despacho.ts           Texto de "El despacho": intro, misión, visión, valores, foto.
  faq.ts                Preguntas frecuentes.
content/
  avisos.ts             Avisos para patrones (lo que más cambia).
public/                 Archivos que se sirven tal cual (fotos, PDF).
docs/                   Documentación del proyecto y material de referencia.
```

Regla del proyecto: **el contenido vive en `data/` y `content/`; los componentes solo lo muestran.** Para cambiar un texto no hace falta tocar ningún componente.

## Cambios frecuentes

### Cambiar teléfono, correo, horario o dirección

Edita `data/site.ts`. Ahí también están los dos mensajes con los que se abre WhatsApp (`mensajeWhatsApp` y `mensajeCita`). Los campos `direccion` y `horario` están en `null` porque la clienta no los ha confirmado; al ponerles texto aparecen solos en Contacto y en el aviso de privacidad.

### Publicar un aviso nuevo

1. Abre `content/avisos.ts`.
2. Copia el objeto del aviso existente y pégalo **al inicio** de la lista (el más reciente va arriba).
3. Cambia `slug` (único, en minúsculas y con guiones), `fecha`, `titulo`, `intro`, los `bloques` y, si aplica, `alerta` y `fuente`.
4. `npm run dev` para verlo en `/avisos`. El aviso más reciente aparece solo al final del inicio.
5. Sube el cambio a GitHub (`git push`). Netlify publica solo en uno o dos minutos.

Si el aviso viene como imagen o PDF, guárdalo en `public/avisos/` y enlázalo desde el texto del aviso con `/avisos/nombre-del-archivo.pdf`.

### Agregar la foto de la clienta

Guarda la imagen en `public/` (por ejemplo `public/foto-martha.jpg`, cuadrada o 4:5, al menos 1000 px de ancho; se usa en el inicio dentro de un círculo y en El despacho) y en `data/despacho.ts` cambia `foto: null` por `foto: "/foto-martha.jpg"`.

### Agregar o quitar una sección

1. Crea la carpeta en `app/` con su `page.tsx` (copia una existente).
2. Agrégala a `data/navegacion.ts` en la posición que quieras. El sitemap se actualiza solo.

### Cambiar el dominio

En `data/site.ts`, campo `url`. Se usa para el sitemap, robots y las vistas previas al compartir.

## Antes de publicar un cambio

- `npm run build` sin errores.
- Revisar en celular (en `npm run dev`, abre la dirección que muestra la terminal desde el teléfono en la misma red, o usa el modo responsivo del navegador).
- Si cambiaste cifras legales, confirmar la fuente con la clienta.

## Si en el futuro se quiere un panel para que la clienta publique sola

El sitio se diseñó para que eso sea posible sin rediseñar: `content/avisos.ts` es el único archivo que un CMS sustituiría. La ruta sería conectar [Sanity](https://www.sanity.io) (o Keystatic) y cambiar `app/avisos/page.tsx` para leer de ahí en lugar de importar `content/avisos.ts`. El tipo `Aviso` en ese archivo describe exactamente los campos que el panel debe tener.

## Licencia y propiedad

El sitio se desarrolló por encargo para la clienta; la propiedad del código se transfiere conforme al contrato de prestación de servicios (ver `docs/FICHA.md`). Las librerías de terceros conservan sus propias licencias (MIT y OFL para las fuentes).
