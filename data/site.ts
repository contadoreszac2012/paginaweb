/*
 * Datos generales del despacho.
 * Todo lo que aparece en el encabezado, el pie de página y la sección de
 * contacto sale de aquí. Si cambia un teléfono o el correo, se cambia en este
 * archivo y en ningún otro lado.
 *
 * Los campos marcados con `null` todavía no los confirma la clienta; la
 * página los oculta hasta que tengan valor (ver docs/FICHA.md, "Pendientes").
 */

export const site = {
  /* Identidad */
  nombre: "Martha Gabriela Robles Delgado",
  nombreCorto: "Robles Delgado",
  titulo: "Doctora en Impuestos",
  lema: "Cumplimiento, prevención y certeza para tu empresa.",
  /* Frase corta sobre el equipo para el hero (ej. "Un despacho formado por
   * mujeres"). La clienta pidió no usarla (5 nov 2026); se deja en null. */
  equipo: null as string | null,
  especialidades: [
    "Contabilidad",
    "Impuestos",
    "Cumplimiento laboral y nóminas",
    "Normas STPS",
    "Prevención de lavado de dinero",
    "REPSE",
  ],

  /* Contacto */
  whatsapp: "524921273602", // formato internacional, sin signos (para el enlace wa.me)
  whatsappVisible: "492 127 3602",
  telefono: "524929275430",
  telefonoVisible: "492 927 5430",
  correo: "contadoreszac2012@hotmail.com",
  ciudad: "Zacatecas, Zac.",
  direccion: null as string | null, // PENDIENTE: calle, número y colonia de la oficina
  horario: null as string | null, // PENDIENTE: ej. "Lunes a viernes, 9:00 a 18:00"

  /* Mensajes con los que se abre WhatsApp según el botón */
  mensajeWhatsApp:
    "Hola, vi su página y quiero revisar los documentos de mi empresa.",
  mensajeCita:
    "Hola, quiero agendar una consulta. Mi empresa es de [giro] y somos [número] personas.",

  /* Sitio */
  url: "https://PENDIENTE-dominio.com", // PENDIENTE: dominio definitivo (ver docs/FICHA.md)
  descripcion:
    "Contabilidad, impuestos, nóminas, cumplimiento laboral, normas STPS y prevención de lavado de dinero para empresas en Zacatecas. Doctora en Impuestos.",

  /* Crédito en el pie de página */
  desarrollador: {
    nombre: "iztac web",
    url: "https://PENDIENTE-iztac-web.com", // PENDIENTE: dirección del sitio de iztac web
  },
};

const wa = (texto: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(texto)}`;

/* Enlaces listos para usar en los botones de WhatsApp */
export const whatsappUrl = wa(site.mensajeWhatsApp);
export const citaUrl = wa(site.mensajeCita);
