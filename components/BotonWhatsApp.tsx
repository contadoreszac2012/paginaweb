import { whatsappUrl, citaUrl } from "@/data/site";
import { IconoWhatsApp } from "./Iconos";

/*
 * Botón de contacto. Abre WhatsApp con uno de los mensajes definidos en
 * data/site.ts: `cita` usa el mensaje de agendar consulta; si no, el general.
 */
export default function BotonWhatsApp({
  texto = "Escribir por WhatsApp",
  cita = false,
  secundario = false,
  className = "",
}: {
  texto?: string;
  cita?: boolean;
  secundario?: boolean;
  className?: string;
}) {
  return (
    <a
      href={cita ? citaUrl : whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`boton ${secundario ? "boton-secundario" : "boton-primario"} ${className}`}
    >
      <IconoWhatsApp className="h-5 w-5" />
      {texto}
    </a>
  );
}
