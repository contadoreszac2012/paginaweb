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
          <div className="rounded-2xl bg-esmeralda p-6 text-crema sm:p-8">
            <h2 className="serif text-2xl font-semibold">Agendar consulta</h2>
            <p className="mt-2 text-crema/80">Por WhatsApp, en el horario que te acomode.</p>
            <p className="mt-4 text-2xl">{site.whatsappVisible}</p>
            <BotonWhatsApp cita texto="Agendar consulta" className="mt-5 !border-crema !bg-crema !text-esmeralda hover:!bg-blanco" />
          </div>

          <div className="rounded-2xl border border-borde bg-blanco p-6 sm:p-8">
            <h2 className="serif text-2xl font-semibold">Oficina</h2>
            <a href={`tel:+${site.telefono}`} className="mt-3 block text-2xl hover:text-rosa-texto">
              {site.telefonoVisible}
            </a>
            {site.horario && <p className="mt-2 text-musgo">{site.horario}</p>}
            <p className="mt-3 text-musgo">{site.ciudad}</p>
            {site.direccion && <p className="text-musgo">{site.direccion}</p>}
          </div>

          <div className="rounded-2xl border border-borde bg-blanco p-6 sm:p-8">
            <h2 className="serif text-2xl font-semibold">Correo</h2>
            <a href={`mailto:${site.correo}`} className="mt-3 block break-all text-lg hover:text-rosa-texto">
              {site.correo}
            </a>
            <p className="mt-3 text-musgo">Para enviar documentos o pedir una cotización por escrito.</p>
          </div>
        </div>

        <p className="mt-10 max-w-[60ch] text-sm text-musgo">
          Los datos que compartas por WhatsApp, teléfono o correo se usan solo para atender tu consulta.{" "}
          <Link href="/aviso-de-privacidad" className="underline underline-offset-2 hover:text-esmeralda">
            Aviso de privacidad
          </Link>
          .
        </p>
      </Contenido>
    </>
  );
}
