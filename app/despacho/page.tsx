import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/data/site";
import { despacho } from "@/data/despacho";
import Titulo, { Contenido } from "@/components/Titulo";
import BotonWhatsApp from "@/components/BotonWhatsApp";

export const metadata: Metadata = {
  title: "El despacho",
  description: `${site.nombre}, ${site.titulo}. Misión, visión y valores del despacho. Contabilidad, impuestos y cumplimiento para empresas en Zacatecas.`,
};

/* Misión y visión como bloques con etiqueta corta y párrafo (referencia buencontador). */
export default function Despacho() {
  return (
    <>
      <Titulo entrada={site.equipo ? `${site.equipo}, dirigido por una ${site.titulo}.` : site.lema}>
        El despacho
      </Titulo>

      <Contenido className="grid gap-12 md:grid-cols-[1.3fr_1fr] md:gap-16">
        <div className="space-y-10">
          <div className="space-y-5 text-lg leading-relaxed">
            {despacho.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <section className="border-t-2 border-rosa pt-6">
            <h2 className="text-sm font-semibold tracking-wide text-rosa-texto">Misión</h2>
            <p className="serif mt-2 text-2xl leading-snug">{despacho.mision}</p>
          </section>

          <section className="border-t-2 border-rosa pt-6">
            <h2 className="text-sm font-semibold tracking-wide text-rosa-texto">Visión</h2>
            <p className="serif mt-2 text-2xl leading-snug">{despacho.vision}</p>
          </section>

          <section className="border-t-2 border-rosa pt-6">
            <h2 className="text-sm font-semibold tracking-wide text-rosa-texto">Valores</h2>
            <dl className="mt-4 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {despacho.valores.map((v) => (
                <div key={v.nombre}>
                  <dt className="font-semibold">{v.nombre}</dt>
                  <dd className="text-[15px] text-musgo">{v.texto}</dd>
                </div>
              ))}
            </dl>
          </section>

          {despacho.formacion && (
            <section className="border-t-2 border-rosa pt-6">
              <h2 className="text-sm font-semibold tracking-wide text-rosa-texto">Formación</h2>
              <ul className="mt-2 space-y-1">
                {despacho.formacion.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </section>
          )}

          {despacho.afiliaciones && (
            <section className="border-t-2 border-rosa pt-6">
              <h2 className="text-sm font-semibold tracking-wide text-rosa-texto">Afiliaciones</h2>
              <ul className="mt-2 space-y-1">
                {despacho.afiliaciones.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </section>
          )}

          <BotonWhatsApp cita texto="Agendar consulta" />
        </div>

        <aside className="space-y-6">
          <div className="relative aspect-[4/5] overflow-hidden rounded-b-3xl rounded-t-[200px] bg-rosa">
            {despacho.foto ? (
              <Image src={despacho.foto} alt={site.nombre} fill sizes="(min-width: 768px) 400px, 100vw" className="object-cover" />
            ) : (
              <div className="flex h-full items-end justify-center p-6 text-center text-sm text-rosa-oscuro">
                Foto de la Dra. Robles Delgado o del equipo
              </div>
            )}
          </div>
          <div className="rounded-2xl border border-borde bg-blanco p-6">
            <h2 className="serif text-2xl font-semibold">Especialidades</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {site.especialidades.map((e) => (
                <li key={e} className="chip">
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </Contenido>
    </>
  );
}
