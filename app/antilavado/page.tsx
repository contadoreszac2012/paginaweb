import type { Metadata } from "next";
import Link from "next/link";
import { inicio } from "@/data/inicio";
import { servicios } from "@/data/servicios";
import { avisos } from "@/content/avisos";
import Titulo, { Contenido, Encabezado } from "@/components/Titulo";
import BotonWhatsApp from "@/components/BotonWhatsApp";
import { Revelar, Contador } from "@/components/Animar";

export const metadata: Metadata = {
  title: "Prevención de lavado de dinero (LFPIORPI)",
  description:
    "Actividades vulnerables: alta ante el SAT, identificación de clientes, avisos mensuales y corrección de omisiones antes de una revisión. Zacatecas.",
};

/* Desglose de la sección de antilavado. Contenido de data/servicios.ts (área "antilavado"), data/inicio.ts y el aviso correspondiente. */
export default function Antilavado() {
  const area = servicios.find((s) => s.slug === "antilavado")!;
  const aviso = avisos.find((a) => a.slug === "ley-antilavado");

  return (
    <>
      <Titulo etiqueta="Antilavado" entrada={inicio.pld.texto}>
        {inicio.pld.titulo}
      </Titulo>

      <Contenido className="grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <Revelar>
            <Encabezado etiqueta="Actividades vulnerables" texto="Si tu giro está aquí, la LFPIORPI te aplica aunque nunca hayas tenido una operación sospechosa.">
              ¿Está tu giro en la lista?
            </Encabezado>
          </Revelar>
          <ul className="mt-6 flex flex-wrap gap-2">
            {inicio.pld.giros.map((g) => (
              <li key={g} className="rounded-full border border-rosa bg-blanco px-4 py-2 text-sm font-semibold text-rosa-oscuro">
                {g}
              </li>
            ))}
          </ul>
          <Revelar className="mt-10">
            <h3 className="serif text-2xl font-semibold">Lo que hacemos</h3>
            <ul className="mt-4 space-y-3">
              {area.incluye.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="mt-[0.7em] h-px w-5 flex-none bg-rosa-texto" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {area.nota && <p className="chip mt-5">{area.nota}</p>}
          </Revelar>
        </div>

        <Revelar desde="derecha" className="relative overflow-hidden rounded-3xl bg-esmeralda p-9 text-crema">
          <div className="trama absolute inset-0" aria-hidden="true" />
          <div className="relative">
            <p className="text-sm font-semibold text-rosa">{inicio.pld.multa.etiqueta}</p>
            <p className="serif mt-2 text-4xl font-semibold leading-tight text-rosa sm:text-5xl">
              <Contador hasta={inicio.pld.multa.desde} prefijo="$" /> a <Contador hasta={inicio.pld.multa.hasta} prefijo="$" duracion={2.2} />
            </p>
            <p className="mt-4 text-crema/85">{inicio.pld.multa.texto}</p>
            {aviso?.alerta && (
              <dl className="mt-8 space-y-4 border-t border-crema/20 pt-6">
                {aviso.alerta.datos.map((d) => (
                  <div key={d.cifra}>
                    <dt className="serif text-2xl font-semibold">{d.cifra}</dt>
                    <dd className="text-sm text-crema/75">{d.texto}</dd>
                  </div>
                ))}
              </dl>
            )}
            <BotonWhatsApp texto="Revisar mi situación" className="mt-8 !border-crema !bg-crema !text-esmeralda hover:!bg-blanco" />
            {aviso && (
              <p className="mt-4 text-sm text-crema/70">
                <Link href={`/avisos#${aviso.slug}`} className="underline underline-offset-2 hover:text-crema">
                  Leer el aviso completo
                </Link>
              </p>
            )}
          </div>
        </Revelar>
      </Contenido>
    </>
  );
}
