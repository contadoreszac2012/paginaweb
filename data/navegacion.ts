/*
 * Secciones del menú principal.
 * El orden aquí es el orden en pantalla. Cada una es una página en /app.
 */

export const pestanas = [
  { href: "/", etiqueta: "Inicio" },
  { href: "/servicios", etiqueta: "Servicios" },
  { href: "/avisos", etiqueta: "Avisos" },
  { href: "/despacho", etiqueta: "El despacho" },
  { href: "/preguntas", etiqueta: "Preguntas" },
  { href: "/contacto", etiqueta: "Contacto" },
] as const;
