/*
 * Preguntas frecuentes (/preguntas).
 * Respuestas cortas y generales; para el caso concreto la página siempre
 * manda a WhatsApp. Hay que pedirle a la clienta que las revise y agregue
 * las que más le preguntan.
 */

export type Pregunta = { q: string; a: string };

export const faq: Pregunta[] = [
  {
    q: "¿Cada cuánto debo revisar mis contratos y mi reglamento interior?",
    a: "Cada vez que hay una reforma a la Ley Federal del Trabajo. Entre 2023 y 2026 cambiaron las vacaciones, la jornada, el uso de asientos (Ley Silla), el teletrabajo y las políticas contra la violencia laboral. Si tus documentos son de antes de 2023, casi seguro necesitan actualización.",
  },
  {
    q: "¿Las normas de la STPS aplican a una empresa pequeña?",
    a: "Sí. Las normas oficiales de la Secretaría del Trabajo son obligatorias en todos los centros de trabajo sin importar su tamaño. Lo que cambia son los requisitos: por ejemplo, la NOM-035 pide menos a quien tiene hasta 15 personas que a quien tiene más de 50.",
  },
  {
    q: "¿Qué pasa si mi reglamento interior no está registrado?",
    a: "Un reglamento que no se depositó ante el Centro Federal de Conciliación y Registro Laboral no se puede hacer valer frente a los trabajadores: las sanciones disciplinarias que se basen en él pierden fuerza en un juicio. Registrarlo es lo que lo convierte en una herramienta real para el patrón.",
  },
  {
    q: "¿Mi negocio tiene que cumplir con la ley antilavado?",
    a: "Si presta dinero, vende inmuebles, autos, joyas u obras de arte, arrienda, recibe donativos, opera activos virtuales o da fe pública, la ley lo considera una actividad vulnerable: debe registrarse ante el SAT, identificar a sus clientes y presentar avisos mensuales, aunque no tenga operaciones que reportar. Si se corrige antes de que inicie una revisión, se puede evitar la sanción.",
  },
  {
    q: "¿Llevan la contabilidad y la nómina completas, o solo asesoría?",
    a: "Las dos cosas. El despacho lleva la contabilidad mensual, los informes financieros, las nóminas con sus cuotas de IMSS e INFONAVIT y las declaraciones; y también atiende consultas puntuales sobre operaciones específicas.",
  },
  {
    q: "¿Qué documentos necesito para empezar con un contador?",
    a: "Lo básico: constancia de situación fiscal, e.firma o contraseña del SAT, estados de cuenta bancarios de los últimos meses, facturas emitidas y recibidas, y, si tienes personal, la nómina y los registros ante el IMSS. En la primera consulta se te da la lista exacta según tu giro.",
  },
  {
    q: "¿Cuánto cuesta llevar la contabilidad de mi empresa?",
    a: "Depende del régimen, del volumen de operaciones y de si hay personal. Por eso no hay precio único: primero se revisa tu situación y después se te entrega una cotización por escrito con el alcance definido, antes de empezar.",
  },
  {
    q: "¿Puedo cambiar de contador a mitad del año?",
    a: "Sí. Se pide al contador anterior la información y los papeles de trabajo, se revisa que las declaraciones presentadas estén correctas y se continúa desde ahí. Un cambio bien hecho no genera problemas con el SAT.",
  },
  {
    q: "¿Qué hago si me llegó una carta invitación o un requerimiento del SAT?",
    a: "No la ignores: tiene plazo. Mándala por WhatsApp y se revisa qué está pidiendo la autoridad y cómo responder. Muchas se resuelven con una aclaración o una declaración complementaria a tiempo.",
  },
  {
    q: "¿Cómo empiezo?",
    a: "Agenda una consulta por WhatsApp con el giro de tu empresa y el número de personas que trabajan contigo. Con eso se hace un diagnóstico y se te propone un plan de trabajo.",
  },
];
