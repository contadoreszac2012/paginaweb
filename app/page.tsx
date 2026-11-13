import type { Metadata } from "next";
import { site } from "@/data/site";
import Titulo, { Contenido } from "@/components/Titulo";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description: `Aviso de privacidad de ${site.nombre}.`,
  robots: { index: false },
};

/*
 * Aviso de privacidad integral (LFPDPPP, ley vigente desde marzo de 2025).
 * La página no tiene formularios: los datos llegan por WhatsApp, teléfono y
 * correo, y el aviso cubre ese tratamiento. Los puntos marcados como
 * PENDIENTE en docs/FICHA.md (domicilio) deben completarse antes de publicar.
 */
export default function AvisoPrivacidad() {
  const domicilio = site.direccion ?? site.ciudad;

  return (
    <>
      <Titulo entrada="Cómo se usan los datos que compartes con el despacho.">Aviso de privacidad</Titulo>

      <Contenido className="!max-w-3xl space-y-6 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold">Responsable</h2>
          <p className="mt-2">
            {site.nombre}, con domicilio en {domicilio}, es responsable del tratamiento de tus datos
            personales. Contacto: {site.correo}.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">Datos que se recaban</h2>
          <p className="mt-2">
            Este sitio no tiene formularios ni guarda información de quien lo visita. Cuando te
            comunicas por WhatsApp, teléfono o correo, se reciben los datos que tú decidas compartir:
            nombre, teléfono, correo electrónico, nombre y giro de tu empresa, y los documentos que
            envíes para su revisión. No se solicitan datos personales sensibles; si los documentos que
            compartes los contienen, se tratan con la misma confidencialidad.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">Para qué se usan</h2>
          <p className="mt-2">
            Para atender tu consulta, preparar una propuesta de servicios y, si contratas, prestar el
            servicio y cumplir las obligaciones legales que de él deriven. No se usan para publicidad
            ni se comparten con terceros, salvo cuando una autoridad lo requiera conforme a la ley.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">Conservación</h2>
          <p className="mt-2">
            Si no se contrata un servicio, los datos de tu consulta se eliminan en un plazo máximo de
            doce meses. Si se contrata, se conservan durante la relación y el plazo que exigen las
            leyes fiscales aplicables.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">Tus derechos</h2>
          <p className="mt-2">
            Puedes acceder, rectificar, cancelar u oponerte al uso de tus datos (derechos ARCO), así
            como limitar su uso, escribiendo a {site.correo} con tu nombre y la solicitud. Se te
            responderá por el mismo medio.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold">Cambios al aviso</h2>
          <p className="mt-2">
            Cualquier cambio a este aviso se publicará en esta misma página. Última actualización:
            noviembre de 2026.
          </p>
        </section>
      </Contenido>
    </>
  );
}
