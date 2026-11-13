/*
 * Textos del inicio. Promociona al despacho y a la Doctora; los servicios se
 * presentan todos al mismo nivel (sin comparar con otros despachos).
 */

export const inicio = {
  etiqueta: "Despacho contable y fiscal · Zacatecas",
  titular: "Tu empresa en orden, con una Doctora en Impuestos al frente.",
  texto:
    "Contabilidad, impuestos, nóminas, cumplimiento laboral, normas STPS, REPSE y prevención de lavado de dinero. Un solo despacho, con enfoque preventivo y explicaciones claras, para que tú te concentres en crecer.",

  /* Tarjeta del hero: estado de cumplimiento de una empresa (ilustrativo). */
  tablero: {
    titulo: "Estado de cumplimiento",
    empresa: "Tu empresa",
    renglones: [
      { nombre: "Contabilidad mensual", estado: "Al día" },
      { nombre: "Declaraciones SAT", estado: "Presentadas" },
      { nombre: "Nómina · IMSS · INFONAVIT", estado: "Al día" },
      { nombre: "Normas STPS", estado: "Implementadas" },
      { nombre: "Avisos antilavado", estado: "En tiempo" },
    ],
    barras: [38, 52, 46, 64, 58, 72, 80],
  },

  /* Sellos de confianza bajo el hero (sin cifras inventadas). */
  sellos: [
    { titulo: "Doctora en Impuestos", texto: "Formación de posgrado al frente de cada expediente." },
    { titulo: "Enfoque preventivo", texto: "Cada obligación completa y a tiempo." },
    { titulo: "Un solo despacho", texto: "Contable, fiscal, laboral y antilavado." },
    { titulo: "Atención directa", texto: "Respuestas claras, sin tecnicismos." },
  ],

  /* Cinta de términos que se desplaza (decorativa). */
  cinta: ["ISR", "IVA", "CFDI 4.0", "IMSS", "INFONAVIT", "PTU", "DIOT", "NOM-035", "NOM-019", "REPSE", "LFPIORPI", "UIF", "STPS", "SAT"],
};
