/*
 * Texto de la pestaña "El despacho".
 * Misión, visión y valores: redactados por la clienta (versión del 5 de
 * noviembre de 2026), sin cambios de fondo.
 * Lo que falta por confirmar está en docs/FICHA.md ("Pendientes") y aquí
 * aparece como `null` para que la página no lo muestre.
 */

export const despacho = {
  intro: [
    "Martha Gabriela Robles Delgado es Doctora en Impuestos y dirige un despacho que atiende a empresas y patrones de Zacatecas en contabilidad, impuestos, nóminas, cumplimiento laboral, normas STPS y prevención de lavado de dinero.",
    "El enfoque es preventivo: es más barato tener la contabilidad, los contratos, el reglamento y los avisos en regla que defenderse en una inspección, un juicio o una revisión del SAT cuando ya no se puede corregir nada.",
  ],

  /* Razones para elegir el despacho; se muestran en la tarjeta del inicio. */
  porQue: [
    "Un solo despacho para contabilidad, impuestos, nóminas y cumplimiento",
    "Dirigido por una Doctora en Impuestos",
    "Enfoque preventivo: cada obligación completa y a tiempo",
    "Explicaciones claras, sin tecnicismos",
  ],

  mision:
    "Acompañar a patrones y empresas en su contabilidad, impuestos, nóminas, cumplimiento laboral y obligaciones en materia de prevención de lavado de dinero (LFPIORPI), con un enfoque preventivo: identificar a tiempo qué le aplica a cada negocio, explicarlo con claridad y mantenerlo en regla ante el SAT, el IMSS, la STPS y la UIF, para que opere con tranquilidad y se concentre en crecer.",

  vision:
    "Ser el despacho de confianza para empresas de todo el país en materia contable, fiscal, laboral y de prevención de lavado de dinero: un equipo que se adelanta a los cambios en la ley, protege el patrimonio de sus clientes y los acompaña a crecer sin sobresaltos.",

  valores: [
    { nombre: "Prevención", texto: "Preferimos evitar el problema antes que corregirlo. Revisamos antes de que llegue el requerimiento, la visita o la sanción." },
    { nombre: "Cumplimiento", texto: "Conocemos las obligaciones de cada actividad, incluidas las actividades vulnerables de la LFPIORPI, y ayudamos a cumplirlas completas y a tiempo." },
    { nombre: "Claridad", texto: "Explicamos sin tecnicismos. El cliente entiende qué paga, por qué y qué sigue." },
    { nombre: "Confidencialidad", texto: "La información de cada empresa y de sus operaciones se trata con reserva absoluta, dentro y fuera del despacho." },
    { nombre: "Responsabilidad", texto: "Cumplimos fechas y avisos como si fueran nuestros, porque para el cliente lo son." },
    { nombre: "Integridad", texto: "Trabajamos dentro de la ley y decimos lo que el cliente necesita oír, no solo lo que quiere oír." },
  ],

  /* Datos que faltan por confirmar. Mientras sean null no se muestran. */
  aniosExperiencia: null as number | null, // PENDIENTE
  formacion: null as string[] | null, // PENDIENTE: licenciatura, maestría, doctorado (institución)
  afiliaciones: null as string[] | null, // PENDIENTE: colegio de contadores, IMCP, etc.
  foto: null as string | null, // La clienta decidió no publicar su foto (13 nov 2026). Si cambia de opinión: ruta en /public, ej. "/foto-martha.jpg"
};
