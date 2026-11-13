import type { Metadata } from "next";
import { servicios } from "@/data/servicios";
import Titulo, { Contenido } from "@/components/Titulo";
import BotonWhatsApp from "@/components/BotonWhatsApp";
import IconoServicio from "@/components/IconoServicio";
import { Revelar } from "@/components/Animar";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Contabilidad, impuestos, nóminas, cumplimiento laboral, normas STPS, REPSE y prevención de lavado de dinero para empresas en Zacatecas.",
};

export default function Servicios() {
  return (
    <>
      <Titulo entrada="Todo lo que una empresa necesita tener en orden, atendido en un solo despacho y con el mismo criterio: prevenir.">
        Servicios
      </Titulo>

      <Contenido>
        {/* índice */}
        <ul className="flex flex-wrap gap-2">
          {servicios.map((s) => (
            <li key={s.slug}>
              <a href={`#${s.slug}`} className="chip hover:bg-verde-100">
                {s.nombre}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-12 space-y-8">
          {servicios.map((s, i) => (
            <Revelar key={s.slug}>
              <article
                id={s.slug}
                className="scroll-mt-28 grid gap-8 rounded-2xl border border-arena-oscura bg-blanco p-7 sm:p-10 md:grid-cols-[1fr_1.4fr] md:gap-12"
              >
                <div>
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-verde-900 text-dorado">
                      <IconoServicio nombre={s.icono} className="h-7 w-7" />
                    </span>
                    <span className="titulo text-3xl text-dorado">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h2 className="titulo mt-5 text-3xl">{s.nombre}</h2>
                  <p className="mt-3 text-gris">{s.resumen}</p>
                  <p className="mt-4 text-sm text-gris">
                    <span className="font-semibold text-verde">Se apoya en:</span> {s.base}
                  </p>
                  {s.nota && <p className="chip mt-4">{s.nota}</p>}
                </div>
                <ul className="space-y-3 rounded-2xl bg-arena p-6">
                  {s.incluye.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="mt-[0.45em] inline-flex h-4 w-4 flex-none items-center justify-center rounded-full bg-verde-100">
                        <svg viewBox="0 0 16 16" className="h-2.5 w-2.5 text-verde"><path d="M3 8.5 6.5 12 13 4.5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Revelar>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-5 rounded-2xl bg-verde-900 p-8 text-white sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[52ch] text-white/80">
            ¿No sabes por dónde empezar? Con el giro y el número de personas de tu empresa se define qué revisar primero.
          </p>
          <BotonWhatsApp cita texto="Agendar consulta" className="boton-dorado shrink-0 !border-transparent" />
        </div>
      </Contenido>
    </>
  );
}
