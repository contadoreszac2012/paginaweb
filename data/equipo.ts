/*
 * Equipo del despacho (como en la referencia de Contadores Medina, pero sin
 * fotos). Mientras la lista esté vacía, la sección no se muestra.
 * PENDIENTE: nombres, puesto, cédula profesional (si quieren mostrarla) y
 * área de cada persona.
 */

export type Persona = {
  nombre: string;
  puesto: string;
  cedula?: string;
  areas?: string;
};

export const equipo: Persona[] = [
  // { nombre: "Martha Gabriela Robles Delgado", puesto: "Doctora en Impuestos · Dirección", cedula: "PENDIENTE", areas: "Impuestos, cumplimiento laboral, PLD" },
];
