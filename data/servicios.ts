/*
 * Áreas de servicio del despacho (/servicios).
 * Texto tomado del documento que entregó la clienta (noviembre de 2026),
 * ordenado y resumido. Cada área se muestra como una tarjeta con su lista.
 *
 * - `icono`: nombre de un ícono de lucide-react (components/Servicios usa el mapa).
 * - `resumen`: una frase que explica qué resuelve.
 * - `incluye`: lista de trabajos concretos.
 * - `base`: leyes o normas en las que se apoya (texto corto).
 * - `nota`: opcional; texto corto que se muestra al final de la tarjeta.
 */

export type Servicio = {
  slug: string;
  icono: "libro" | "calculadora" | "personas" | "casco" | "escudo" | "registro";
  nombre: string;
  resumen: string;
  incluye: string[];
  base: string;
  nota?: string;
};

export const servicios: Servicio[] = [
  {
    slug: "contabilidad",
    icono: "libro",
    nombre: "Contabilidad",
    resumen:
      "Contabilidad mensual de todas tus operaciones, con informes financieros claros para tomar decisiones.",
    incluye: [
      "Atención a personas físicas y personas morales",
      "Contabilidad mensual de todas las transacciones",
      "Preparación de informes y estados financieros",
      "Sistemas de contabilidad a la medida: catálogo de cuentas y controles",
    ],
    base: "Código Fiscal de la Federación y NIF",
  },
  {
    slug: "impuestos",
    icono: "calculadora",
    nombre: "Impuestos",
    resumen:
      "Regularización, determinación de impuestos y consultoría sobre los efectos fiscales de tus operaciones.",
    incluye: [
      "Regularización en materia fiscal y contable",
      "Consultas sobre ISR, IVA, impuesto sobre nóminas, INFONAVIT, SAR, IMSS y PTU",
      "Determinación de impuestos locales y federales, mensuales y anuales",
      "Efectos fiscales de contratos y operaciones: fusión, escisión, compraventa de acciones, incorporación de socios, adquisición de activos",
      "Estudios especiales para evaluar alternativas",
      "Asesoría fiscal patrimonial y devoluciones de impuestos",
    ],
    base: "LISR, LIVA, CFF y leyes locales",
  },
  {
    slug: "laboral",
    icono: "personas",
    nombre: "Laboral y nóminas",
    resumen:
      "Nóminas correctas y documentos laborales en regla: evitan demandas y costos excesivos.",
    incluye: [
      "Elaboración de nóminas con efectos laborales, fiscales y de seguridad social",
      "Impuesto sobre nómina; determinación de cuotas IMSS e INFONAVIT",
      "Contratos individuales de trabajo",
      "Reglamento interior de trabajo y políticas internas",
      "Manejo documental e integración de expedientes de colaboradores",
    ],
    base: "Ley Federal del Trabajo, LSS, Ley del INFONAVIT",
  },
  {
    slug: "nom",
    icono: "casco",
    nombre: "Normas STPS",
    resumen:
      "Implementación de las normas oficiales de la Secretaría del Trabajo y Previsión Social, obligatorias en todos los centros de trabajo sin importar su tamaño.",
    incluye: [
      "Norma 019: comisión de seguridad e higiene",
      "Norma 025: igualdad laboral y no discriminación",
      "Norma 030: seguridad y salud en el trabajo",
      "Norma 035: factores de riesgo psicosocial",
      "Protocolo de violencia laboral",
      "Programa de cumplimiento legal de capacitación y adiestramiento",
    ],
    base: "Normas Oficiales Mexicanas de la STPS",
  },
  {
    slug: "antilavado",
    icono: "escudo",
    nombre: "Prevención de lavado de dinero",
    resumen:
      "Si tu negocio realiza una actividad vulnerable, cumplir con la ley antilavado cuesta mucho menos que no hacerlo.",
    incluye: [
      "Identificación de actividades vulnerables en tu operación",
      "Registro ante el SAT e identificación de clientes",
      "Avisos mensuales, aunque no haya operaciones que reportar",
      "Corrección de omisiones antes de una revisión (art. 55 de la Ley)",
    ],
    base: "LFPIORPI",
    nota: "Revisamos tu situación sin costo.",
  },
  {
    slug: "repse",
    icono: "registro",
    nombre: "Registro y cumplimiento REPSE",
    resumen:
      "Si prestas servicios u obras especializadas con tu personal, necesitas el registro ante la STPS y cumplir con sus informes. Lo gestionamos de principio a fin.",
    incluye: [
      "Diagnóstico de viabilidad: si tu actividad califica como servicio especializado y no cae en subcontratación prohibida; revisión del objeto social",
      "Registro inicial en la plataforma de la STPS: expediente, opinión de cumplimiento positiva ante SAT, IMSS e INFONAVIT, actas, RFC y poderes",
      "Renovación del registro cada 3 años y actualización de datos o actividades",
      "Cumplimiento periódico: informes cuatrimestrales ICSOE (IMSS) y SISUB (INFONAVIT)",
      "Atención a requerimientos, prevenciones o negativas de la STPS",
      "Revisión de contratos conforme a la reforma en subcontratación",
      "Integración de la carpeta de evidencias para tus clientes, como lo señala la ley",
    ],
    base: "Ley Federal del Trabajo, arts. 12 a 15; LSS; Ley del INFONAVIT",
  },
];
