/*
 * Avisos para patrones y empresas.
 * Es la única parte de la página que cambia seguido. Para publicar un aviso
 * nuevo se agrega un objeto al inicio de la lista `avisos` (el más reciente
 * arriba) y se sube el cambio; Netlify publica solo.
 *
 * Cómo se arma un aviso:
 *   - `slug`:    parte final de la dirección (/avisos#slug). Solo minúsculas y guiones.
 *   - `fecha`:   texto tal como se va a mostrar, ej. "Octubre de 2026".
 *   - `titulo`:  pregunta o frase corta.
 *   - `intro`:   uno o dos renglones de contexto.
 *   - `bloques`: grupos con título y lista de puntos (checklist).
 *   - `alerta`:  opcional; cuadro de sanciones o consecuencias.
 *   - `cierre`:  opcional; frase final (buena noticia, llamado a la acción).
 *   - `fuente`:  de dónde salen los datos.
 *
 * Si algún día la clienta quiere publicar avisos ella misma, este archivo es
 * lo que se sustituye por un CMS (ver README, "Avisos").
 */

export type Aviso = {
  slug: string;
  fecha: string;
  titulo: string;
  intro: string;
  bloques: { titulo: string; puntos: string[] }[];
  alerta?: { titulo: string; datos: { cifra: string; texto: string }[] };
  cierre?: string;
  fuente?: string;
};

export const avisos: Aviso[] = [
  {
    slug: "ley-antilavado",
    fecha: "Noviembre de 2026",
    titulo: "Ley Antilavado: cumplir cuesta menos que no hacerlo",
    intro:
      "Si tu negocio presta dinero, vende inmuebles, autos, joyas u obras de arte, arrienda, recibe donativos, opera activos virtuales o da fe pública, la ley te considera una actividad vulnerable.",
    bloques: [
      {
        titulo: "Lo que debes hacer",
        puntos: [
          "Registrarte ante el SAT como actividad vulnerable.",
          "Identificar a tus clientes e integrar su expediente.",
          "Presentar avisos mensuales, aunque no tengas operaciones que reportar.",
        ],
      },
      {
        titulo: "Lo que arriesgas por no cumplir",
        puntos: [
          "Omitir el registro, no atender un requerimiento o no auditarte: de $234,620 a $1,173,100 (2,000 a 10,000 UMA).",
          "Omitir un aviso o recibir efectivo prohibido: de $1,173,100 a $7,625,150 por operación (10,000 a 65,000 UMA), o del 10 % al 100 % del valor de la operación, lo que sea mayor.",
          "Notarios, corredores y agentes aduanales: revocación o cancelación de la patente o habilitación.",
          "Proporcionar información falsa o revelar un aviso: de 2 a 10 años de prisión.",
        ],
      },
    ],
    alerta: {
      titulo: "Las multas, en pesos",
      datos: [
        { cifra: "$234,620 a $1,173,100", texto: "por omitir el registro, no atender un requerimiento o no auditarte." },
        { cifra: "$1,173,100 a $7,625,150", texto: "por cada aviso omitido o por recibir efectivo prohibido." },
        { cifra: "2 a 10 años", texto: "de prisión por información falsa o por revelar un aviso." },
      ],
    },
    cierre:
      "La buena noticia: quien reconoce y corrige sus faltas antes de que inicie una revisión puede evitar la sanción (art. 55 de la Ley). Revisamos tu situación sin costo.",
    fuente: "LFPIORPI, arts. 53 a 55 y 62. UMA 2026: $117.31 diarios.",
  },
  {
    slug: "documentos-laborales-2026",
    fecha: "Octubre de 2026",
    titulo: "¿Tus documentos laborales ya están actualizados?",
    intro:
      "La Ley Federal del Trabajo cambió entre 2023 y 2026. Revisa si estos tres documentos ya incluyen las nuevas obligaciones.",
    bloques: [
      {
        titulo: "Contratos individuales de trabajo",
        puntos: [
          "Jornada rumbo a 40 horas: 46 horas semanales en 2027 y horas extra de máximo 12 a la semana.",
          "Vacaciones: 12 días desde el primer año.",
          "Puesto bien definido: funciones descritas con precisión.",
        ],
      },
      {
        titulo: "Reglamento interior de trabajo",
        puntos: [
          "Ley Silla: uso de asientos con respaldo y periodos de descanso.",
          "Registro electrónico de jornada, obligatorio desde el 1 de enero de 2027.",
          "Debidamente registrado ante el Centro Federal de Conciliación y Registro Laboral.",
          "Teletrabajo: reglas de home office conforme a la NOM-037-STPS-2023.",
        ],
      },
      {
        titulo: "Políticas internas",
        puntos: [
          "Igualdad salarial: mismo pago por trabajo igual, sin distinción de sexo o género.",
          "Entorno libre de violencias y capacitación del personal (reforma de enero de 2026).",
        ],
      },
    ],
    alerta: {
      titulo: "¿Y si no están actualizados?",
      datos: [
        { cifra: "Hasta $586,550", texto: "Multas de 50 a 5,000 UMA por cada infracción (arts. 994 y 1002 de la LFT)." },
        { cifra: "Por trabajador", texto: "La multa se calcula por cada persona trabajadora afectada (art. 992)." },
        { cifra: "En juicio", texto: "El patrón debe probar contrato, jornada y vacaciones (art. 784)." },
      ],
    },
    fuente: "DOF y LFT vigente. UMA 2026: $117.31 diarios.",
  },
];
