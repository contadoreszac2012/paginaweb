import type { Metadata } from "next";
import { inicio } from "@/data/inicio";
import { servicios } from "@/data/servicios";
import { faq } from "@/data/faq";
import Titulo, { Contenido, Encabezado } from "@/components/Titulo";
import BotonWhatsApp from "@/components/BotonWhatsApp";
import { Revelar } from "@/components/Animar";

export const metadata: Metadata = {
  title: "Normas STPS: NOM-019, 025, 030 y 035",
  description:
    "Implementación y documentación de las normas de la Secretaría del Trabajo en tu centro de trabajo: NOM-019, 025, 030, 035, protocolo de violencia laboral y capacitación. Zacatecas.",
};

/* Desglose de la sección de normas STPS. El contenido sale de data/servicios.ts (área "nom") y data/inicio.ts. */
export default function NormasSTPS() {
  const area = servicios.find((s) => s.slug === "nom")!;
  const preguntas = faq.filter((p) => /STPS|reglamento|contratos/i.test(p.q));

  return (
    <>
      <Titulo etiqueta="Normas STPS" entrada={inicio.stps.texto}>
        {inicio.stps.titulo}
      </Titulo>

      <Contenido className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Revelar>
            <Encabezado etiqueta="Qué revisa una inspección" texto={area.resumen}>
              Las normas que aplican a tu centro de trabajo
            </Encabezado>
          </Revelar>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {inicio.stps.normas.map((n, i) => (
              <Revelar key={n.clave} retraso={i * 0.07}>
                <li className="h-full rounded-2xl border border-borde bg-blanco p-5">
                  <p className="serif text-2xl font-semibold">{n.clave}</p>
                  <p className="mt-1 text-sm text-musgo">{n.nombre}</p>
                </li>
              </Revelar>
            ))}
          </ul>
        </div>
        <Revelar desde="derecha">
          <div className="rounded-2xl bg-esmeralda p-8 text-crema">
            <p className="text-sm font-semibold text-rosa">Lo que hacemos</p>
            <ul className="mt-4 space-y-3">
              {area.incluye.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="mt-[0.7em] h-px w-5 flex-none bg-rosa" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-crema/70">Se apoya en: {area.base}</p>
            <BotonWhatsApp cita texto="Revisar mi centro de trabajo" className="mt-6 !border-crema !bg-crema !text-esmeralda hover:!bg-blanco" />
          </div>
        </Revelar>
      </Contenido>

      {preguntas.length > 0 && (
        <section className="bg-blanco">
          <Contenido>
            <Revelar>
              <Encabezado etiqueta="Dudas frecuentes">Lo que más preguntan los patrones</Encabezado>
            </Revelar>
            <div className="mt-8 max-w-3xl">
              {preguntas.map((item) => (
                <details key={item.q} className="pregunta border-b border-borde">
                  <summary className="flex items-start justify-between gap-6 py-5">
                    <span className="serif text-xl font-semibold leading-snug sm:text-2xl">{item.q}</span>
                  </summary>
                  <p className="max-w-[64ch] pb-6 text-musgo">{item.a}</p>
                </details>
              ))}
            </div>
          </Contenido>
        </section>
      )}
    </>
  );
}
