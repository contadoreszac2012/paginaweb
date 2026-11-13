/*
 * Tarjetas de cifras de la portada (como en la referencia de DHI).
 * Mientras un valor sea null, su tarjeta no se muestra. Si ninguna tiene
 * valor, la fila completa desaparece. Nunca se inventan números.
 */

export const cifras: { valor: string | null; etiqueta: string }[] = [
  { valor: null, etiqueta: "Año de fundación" }, // PENDIENTE: ej. "2012"
  { valor: null, etiqueta: "Clientes activos" }, // PENDIENTE: ej. "40+"
  { valor: null, etiqueta: "Personas en el equipo" }, // PENDIENTE
  { valor: "6", etiqueta: "Áreas de servicio" },
];
