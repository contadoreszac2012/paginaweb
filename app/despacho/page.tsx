import type { Metadata } from "next";
import { site } from "@/data/site";
import { despacho } from "@/data/despacho";
import { equipo } from "@/data/equipo";
import { compromisos } from "@/data/compromisos";
import Titulo, { Contenido, Encabezado } from "@/components/Titulo";
import BotonWhatsApp from "@/components/BotonWhatsApp";
import { Revelar } from "@/components/Animar";

export const metadata: Metadata = {
  title: "Nosotros",
  description: `${site.nombre}, ${site.titulo}. Misión, visión y valores del despacho. Contabilidad, impuestos y cumplimiento para empresas en Zacatecas.`,
};

export default function Despacho() {
  return (
    <>
      <Titulo etiqueta="Nosotros" entrada={site.lema}>
        Un despacho dirigido por una Doctora en Impuestos
      </Titulo>

      {/* Presentación */}
      <Contenido className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <Revelar>
          <div className="space-y-5 text-lg leading-relaxed">
            {despacho.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <BotonWhatsApp cita texto="Agendar consulta" className="mt-8" />
        </Revelar>
        <Revelar desde="derecha">
          <div className="rounded-2xl bg-verde-900 p-8 text-white">
            <p className="text-sm font-semibold text-dorado">{site.titulo}</p>
            <p className="titulo mt-2 text-3xl">{site.nombre}</p>
            <p className="mt-2 text-white/70">{site.ciudad}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {site.especialidades.map((e) => (
                <li key={e} className="rounded-full bg-white/10 px-3 py-1.5 text-[13.5px] font-semibold">
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </Revelar>
      </Contenido>

      {/* Misión y visión */}
      <section className="bg-blanco">
        <Contenido>
          <Revelar>
            <Encabezado etiqueta="Misión y visión">Lo que nos mueve</Encabezado>
          </Revelar>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Revelar>
              <div className="h-full rounded-2xl bg-verde-900 p-8 text-white">
                <p className="text-sm font-semibold text-dorado">Misión</p>
                <p className="mt-3 text-lg leading-relaxed">{despacho.mision}</p>
              </div>
            </Revelar>
            <Revelar retraso={0.1}>
              <div className="h-full rounded-2xl border border-arena-oscura bg-arena p-8">
                <p className="text-sm font-semibold text-verde">Visión</p>
                <p className="mt-3 text-lg leading-relaxed text-gris">{despacho.vision}</p>
              </div>
            </Revelar>
          </div>
        </Contenido>
      </section>

      {/* Valores */}
      <Contenido>
        <Revelar>
          <Encabezado etiqueta="Valores">Cómo trabajamos con cada cliente</Encabezado>
        </Revelar>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {despacho.valores.map((v, i) => (
            <Revelar key={v.nombre} retraso={(i % 3) * 0.08}>
              <li className="h-full rounded-2xl border border-arena-oscura bg-blanco p-7">
                <span className="titulo text-3xl text-dorado">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-xl font-bold">{v.nombre}</h3>
                <p className="mt-2 text-[15px] text-gris">{v.texto}</p>
              </li>
            </Revelar>
          ))}
        </ul>
      </Contenido>

      {/* Equipo (solo cuando haya datos) */}
      {equipo.length > 0 && (
        <section className="bg-blanco">
          <Contenido>
            <Revelar>
              <Encabezado etiqueta="Equipo">Quiénes atienden tu empresa</Encabezado>
            </Revelar>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {equipo.map((p) => (
                <li key={p.nombre} className="rounded-2xl border border-arena-oscura bg-arena p-6">
                  <p className="text-xl font-bold">{p.nombre}</p>
                  <p className="text-[15px] text-gris">{p.puesto}</p>
                  {p.cedula && <p className="mt-1 text-sm text-gris">Cédula {p.cedula}</p>}
                  {p.areas && <p className="mt-2 text-sm">{p.areas}</p>}
                </li>
              ))}
            </ul>
          </Contenido>
        </section>
      )}

      {/* Compromisos (provisionales, ver data/compromisos.ts) */}
      <section className="relative overflow-hidden bg-verde-900 text-white">
        <div className="cuadricula absolute inset-0" aria-hidden="true" />
        <Contenido className="relative">
          <Revelar>
            <Encabezado etiqueta="Nuestros compromisos" texto="Promesas concretas, no adjetivos." claro>
              Lo que puedes esperar
            </Encabezado>
          </Revelar>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {compromisos.map((c, i) => (
              <Revelar key={c.titulo} retraso={(i % 2) * 0.08}>
                <li className="h-full rounded-2xl border border-white/10 bg-white/5 p-7">
                  <h3 className="text-xl font-bold">{c.titulo}</h3>
                  <p className="mt-2 text-[15px] text-white/70">{c.texto}</p>
                </li>
              </Revelar>
            ))}
          </ul>
        </Contenido>
      </section>
    </>
  );
}
