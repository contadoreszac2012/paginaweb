import type { Metadata } from "next";
import { servicios } from "@/data/servicios";
import Titulo, { Contenido } from "@/components/Titulo";
import BotonWhatsApp from "@/components/BotonWhatsApp";
import IconoServicio from "@/components/IconoServicio";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Contabilidad, impuestos, nóminas, cumplimiento laboral, normas STPS, REPSE y prevención de lavado de dinero para empresas en Zacatecas.",
};

export default function Servicios() {
  return (
    <>
      <Titulo entrada="Seis áreas que una empresa necesita tener en orden al mismo tiempo, atendidas en un solo despacho.">
        Servicios
      </Titulo>

      <Contenido className="space-y-8">
        {servicios.map((s) => (
          <article
            key={s.slug}
            id={s.slug}
            className="scroll-mt-24 grid gap-6 rounded-2xl border border-borde bg-blanco p-6 sm:p-8 md:grid-cols-[1fr_1.4fr] md:gap-10"
          >
            <div>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-rosa-claro text-rosa-oscuro">
                <IconoServicio nombre={s.icono} className="h-6 w-6" />
              </span>
              <h2 className="serif mt-4 text-3xl font-semibold leading-tight">{s.nombre}</h2>
              <p className="mt-3 text-musgo">{s.resumen}</p>
              <p className="mt-4 text-sm text-musgo">
                <span className="font-semibold text-esmeralda">Se apoya en:</span> {s.base}
              </p>
              {s.nota && <p className="chip mt-4">{s.nota}</p>}
            </div>
            <ul className="space-y-2.5 md:pt-2">
              {s.incluye.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="mt-[0.7em] h-px w-5 flex-none bg-rosa-texto" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}

        <div className="flex flex-col items-start gap-4 rounded-2xl bg-rosa-claro p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <p className="max-w-[48ch] text-rosa-oscuro">
            ¿No sabes por dónde empezar? Con el giro y el número de personas de tu empresa se define qué revisar
            primero.
          </p>
          <BotonWhatsApp cita texto="Agendar consulta" />
        </div>
      </Contenido>
    </>
  );
}
