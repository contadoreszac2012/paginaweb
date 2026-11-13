import type { Metadata } from "next";
import { avisos } from "@/content/avisos";
import Titulo, { Contenido } from "@/components/Titulo";
import BotonWhatsApp from "@/components/BotonWhatsApp";
import { Revelar } from "@/components/Animar";

export const metadata: Metadata = {
  title: "Avisos para empresas",
  description:
    "Lo que cambia en la ley y en las obligaciones de tu empresa, traducido a una lista de lo que hay que revisar: reformas laborales, ley antilavado y más.",
};

export default function Avisos() {
  return (
    <>
      <Titulo entrada="Lo que cambia en la ley, traducido a una lista de lo que hay que revisar en tu empresa. Esta página se actualiza con cada reforma.">
        Avisos para empresas
      </Titulo>

      <Contenido className="space-y-10">
        {avisos.map((aviso) => (
          <Revelar key={aviso.slug}>
            <article id={aviso.slug} className="scroll-mt-28 rounded-2xl border border-arena-oscura bg-blanco p-7 sm:p-10">
              <p className="text-sm font-semibold text-dorado">{aviso.fecha}</p>
              <h2 className="titulo mt-2 max-w-[26ch] text-3xl sm:text-4xl">{aviso.titulo}</h2>
              <p className="mt-4 max-w-[64ch] text-lg text-gris">{aviso.intro}</p>

              <div className={`mt-8 grid gap-5 ${aviso.bloques.length > 2 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
                {aviso.bloques.map((bloque) => (
                  <section key={bloque.titulo} className="rounded-2xl bg-arena p-6">
                    <h3 className="text-lg font-bold">{bloque.titulo}</h3>
                    <ul className="mt-3 space-y-2.5">
                      {bloque.puntos.map((punto) => (
                        <li key={punto} className="flex gap-3">
                          <span aria-hidden="true" className="mt-[0.45em] h-4 w-4 flex-none rounded border-2 border-verde" />
                          <span className="text-[15px] leading-snug">{punto}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>

              {aviso.alerta && (
                <aside className="mt-8 rounded-2xl bg-verde-900 p-7 text-white">
                  <h3 className="text-xl font-bold">{aviso.alerta.titulo}</h3>
                  <dl className="mt-5 grid gap-6 sm:grid-cols-3">
                    {aviso.alerta.datos.map((d) => (
                      <div key={d.cifra}>
                        <dt className="titulo text-2xl text-dorado sm:text-3xl">{d.cifra}</dt>
                        <dd className="mt-1 text-sm text-white/70">{d.texto}</dd>
                      </div>
                    ))}
                  </dl>
                </aside>
              )}

              {aviso.cierre && <p className="mt-6 max-w-[64ch] text-lg">{aviso.cierre}</p>}
              {aviso.fuente && <p className="mt-4 text-sm text-gris">Fuente: {aviso.fuente}</p>}

              <div className="mt-8 flex flex-col items-start gap-4 border-t border-arena-oscura pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-[46ch] text-gris">Te ayudamos a revisarlo. Manda tus documentos actuales y te decimos qué les falta.</p>
                <BotonWhatsApp texto="Revisar mi situación" />
              </div>
            </article>
          </Revelar>
        ))}
      </Contenido>
    </>
  );
}
