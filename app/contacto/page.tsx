import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";
import Titulo, { Contenido } from "@/components/Titulo";
import BotonWhatsApp from "@/components/BotonWhatsApp";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Agenda una consulta. WhatsApp ${site.whatsappVisible}, oficina ${site.telefonoVisible}. ${site.ciudad}.`,
};

export default function Contacto() {
  return (
    <>
      <Titulo entrada="El camino más corto es WhatsApp: manda el giro de tu empresa y cuántas personas trabajan contigo, y agendamos.">
        Contacto
      </Titulo>

      <Contenido>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-verde-900 p-8 text-white">
            <p className="text-sm font-semibold text-dorado">Agendar consulta</p>
            <p className="mt-2 text-white/75">Por WhatsApp, en el horario que te acomode.</p>
            <p className="mt-4 text-2xl font-bold">{site.whatsappVisible}</p>
            <BotonWhatsApp cita texto="Agendar consulta" className="boton-dorado mt-5 !border-transparent" />
          </div>

          <div className="rounded-2xl border border-arena-oscura bg-blanco p-8">
            <p className="text-sm font-semibold text-verde">Oficina</p>
            <a href={`tel:+${site.telefono}`} className="mt-2 block text-2xl font-bold hover:text-verde">
              {site.telefonoVisible}
            </a>
            {site.horario && <p className="mt-2 text-gris">{site.horario}</p>}
            <p className="mt-3 text-gris">{site.ciudad}</p>
            {site.direccion && <p className="text-gris">{site.direccion}</p>}
          </div>

          <div className="rounded-2xl border border-arena-oscura bg-blanco p-8">
            <p className="text-sm font-semibold text-verde">Correo</p>
            <a href={`mailto:${site.correo}`} className="mt-2 block break-all text-lg font-bold hover:text-verde">
              {site.correo}
            </a>
            <p className="mt-3 text-gris">Para enviar documentos o pedir una cotización por escrito.</p>
          </div>
        </div>

        <p className="mt-10 max-w-[60ch] text-sm text-gris">
          Los datos que compartas por WhatsApp, teléfono o correo se usan solo para atender tu consulta.{" "}
          <Link href="/aviso-de-privacidad" className="underline underline-offset-2 hover:text-verde">
            Aviso de privacidad
          </Link>
          .
        </p>
      </Contenido>
    </>
  );
}
