import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { inicio } from "@/data/inicio";
import { servicios } from "@/data/servicios";
import { proceso } from "@/data/proceso";
import { cifras } from "@/data/cifras";
import { despacho } from "@/data/despacho";
import { faq } from "@/data/faq";
import { avisos } from "@/content/avisos";
import BotonWhatsApp from "@/components/BotonWhatsApp";
import IconoServicio from "@/components/IconoServicio";
import Tablero from "@/components/Tablero";
import { Contenido, Encabezado } from "@/components/Titulo";
import { Revelar } from "@/components/Animar";

/*
 * Inicio: hero partido (texto sobre claro, panel verde con el tablero),
 * banda de confianza, servicios en lista editorial, nosotros, proceso en
 * línea, avisos, preguntas y cierre.
 */
export default function Inicio() {
  const cifrasVisibles = cifras.filter((c) => c.valor);
  const retraso = (s: string) => ({ "--retraso": s }) as React.CSSProperties;

  return (
    <>
      {/* ===== Hero partido ===== */}
      <section className="relative">
        <div className="mx-auto grid max-w-6xl lg:grid-cols-[1.1fr_0.9fr]">
          <div className="px-4 py-16 sm:px-6 lg:py-28 lg:pr-16">
            <p className="aparece text-sm font-semibold text-verde" style={retraso("0s")}>
              {inicio.etiqueta}
            </p>
            <h1 className="titulo aparece mt-5 max-w-[16ch] text-[2.5rem] sm:text-[3.2rem] lg:text-[3.8rem]" style={retraso("0.06s")}>
              {inicio.titular}
            </h1>
            <span aria-hidden="true" className="aparece mt-7 block h-1 w-20 bg-dorado" style={retraso("0.1s")} />
            <p className="aparece mt-7 max-w-[52ch] text-lg text-gris sm:text-xl" style={retraso("0.14s")}>
              {inicio.texto}
            </p>
            <div className="aparece mt-9 flex flex-wrap gap-3" style={retraso("0.22s")}>
              <BotonWhatsApp cita texto="Agendar consulta" />
              <Link href="/servicios" className="boton boton-secundario">
                Conocer los servicios
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <dl className="aparece mt-12 grid grid-cols-2 gap-x-8 gap-y-4 border-t border-arena-oscura pt-6 text-sm sm:grid-cols-3" style={retraso("0.3s")}>
              <div>
                <dt className="text-gris">WhatsApp</dt>
                <dd className="font-semibold">{site.whatsappVisible}</dd>
              </div>
              <div>
                <dt className="text-gris">Oficina</dt>
                <dd className="font-semibold">{site.telefonoVisible}</dd>
              </div>
              <div>
                <dt className="text-gris">Ciudad</dt>
                <dd className="font-semibold">{site.ciudad}</dd>
              </div>
            </dl>
          </div>
          <div className="relative flex items-center bg-verde-900 px-4 py-14 sm:px-10 lg:py-20">
            <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1.5 bg-dorado" />
            <div className="aparece w-full" style={retraso("0.2s")}>
              <Tablero />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Banda de confianza ===== */}
      <section className="border-y border-arena-oscura bg-blanco">
        <dl className="mx-auto grid max-w-6xl divide-y divide-arena-oscura px-4 sm:px-6 md:grid-cols-4 md:divide-x md:divide-y-0">
          {inicio.sellos.map((s) => (
            <div key={s.titulo} className="py-6 md:px-6 md:first:pl-0 md:last:pr-0">
              <dt className="flex items-center gap-2 font-bold">
                <span aria-hidden="true" className="h-2 w-2 rounded-sm bg-dorado" />
                {s.titulo}
              </dt>
              <dd className="mt-1 text-[14.5px] text-gris">{s.texto}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ===== Cifras (cuando la clienta las dé) ===== */}
      {cifrasVisibles.length >= 2 && (
        <section>
          <Contenido className="grid grid-cols-2 gap-6 !py-12 md:grid-cols-4">
            {cifrasVisibles.map((c) => (
              <Revelar key={c.etiqueta}>
                <p className="titulo text-5xl text-verde">{c.valor}</p>
                <p className="mt-2 text-sm text-gris">{c.etiqueta}</p>
              </Revelar>
            ))}
          </Contenido>
        </section>
      )}

      {/* ===== Servicios: lista editorial ===== */}
      <section>
        <Contenido className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Revelar>
            <div className="lg:sticky lg:top-28">
              <Encabezado etiqueta="Servicios" texto="Todo lo que una empresa necesita tener en orden, atendido en un solo despacho.">
                Soluciones contables, fiscales y de cumplimiento
              </Encabezado>
              <Link href="/servicios" className="boton boton-secundario mt-8">
                Ver todos los servicios
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Revelar>
          <ol className="border-t border-arena-oscura">
            {servicios.map((s, i) => (
              <Revelar key={s.slug} retraso={i * 0.05}>
                <li>
                  <Link
                    href={`/servicios#${s.slug}`}
                    className="group grid grid-cols-[auto_1fr_auto] items-start gap-5 border-b border-arena-oscura py-6 transition hover:bg-blanco sm:gap-7 sm:px-4"
                  >
                    <span className="titulo pt-1 text-2xl text-dorado">{String(i + 1).padStart(2, "0")}</span>
                    <span>
                      <span className="flex items-center gap-3 text-xl font-bold">
                        <IconoServicio nombre={s.icono} className="h-5 w-5 text-verde" />
                        {s.nombre}
                      </span>
                      <span className="mt-2 block max-w-[56ch] text-[15px] text-gris">{s.resumen}</span>
                    </span>
                    <ArrowRight className="mt-2 h-5 w-5 text-arena-oscura transition group-hover:translate-x-1 group-hover:text-verde" aria-hidden="true" />
                  </Link>
                </li>
              </Revelar>
            ))}
          </ol>
        </Contenido>
      </section>

      {/* ===== Nosotros ===== */}
      <section className="bg-verde-900 text-white">
        <Contenido className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <Revelar>
            <Encabezado etiqueta="Nosotros" claro>
              Un despacho dirigido por una Doctora en Impuestos
            </Encabezado>
            <div className="mt-6 space-y-4 text-lg text-white/75">
              {despacho.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <Link href="/despacho" className="boton boton-dorado mt-8">
              Conocer el despacho
            </Link>
          </Revelar>
          <div className="grid gap-px overflow-hidden rounded-lg bg-white/15">
            <Revelar desde="derecha">
              <div className="bg-verde-900 p-8">
                <p className="text-sm font-semibold text-dorado">Misión</p>
                <p className="mt-2 leading-relaxed text-white/85">{despacho.mision}</p>
              </div>
            </Revelar>
            <Revelar desde="derecha" retraso={0.1}>
              <div className="bg-verde-900 p-8">
                <p className="text-sm font-semibold text-dorado">Visión</p>
                <p className="mt-2 leading-relaxed text-white/85">{despacho.vision}</p>
              </div>
            </Revelar>
          </div>
        </Contenido>
      </section>

      {/* ===== Cómo trabajamos: línea de pasos ===== */}
      <section className="bg-blanco">
        <Contenido>
          <Revelar>
            <Encabezado etiqueta="Proceso de seguimiento" texto="Un proceso claro desde la primera consulta hasta el seguimiento mensual.">
              Cómo trabajamos
            </Encabezado>
          </Revelar>
          <ol className="relative mt-14 grid gap-10 md:grid-cols-5 md:gap-6">
            <span aria-hidden="true" className="absolute left-0 right-0 top-[7px] hidden h-px bg-arena-oscura md:block" />
            {proceso.map((p, i) => (
              <Revelar key={p.titulo} retraso={i * 0.1}>
                <li className="relative pl-6 md:pl-0 md:pt-8">
                  <span aria-hidden="true" className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-dorado bg-blanco md:top-0" />
                  <span className="text-sm font-semibold text-dorado">Paso {i + 1}</span>
                  <h3 className="mt-1 text-lg font-bold">{p.titulo}</h3>
                  <p className="mt-2 text-[15px] text-gris">{p.texto}</p>
                </li>
              </Revelar>
            ))}
          </ol>
        </Contenido>
      </section>

      {/* ===== Avisos ===== */}
      <section>
        <Contenido className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Revelar>
            <Encabezado etiqueta="Avisos para empresas" texto="Lo que cambia en la ley, explicado en una lista de lo que conviene revisar.">
              Mantente al día
            </Encabezado>
            <Link href="/avisos" className="boton boton-secundario mt-8">
              Ver todos los avisos
            </Link>
          </Revelar>
          <ul className="divide-y divide-arena-oscura border-y border-arena-oscura">
            {avisos.map((a, i) => (
              <Revelar key={a.slug} retraso={i * 0.08}>
                <li>
                  <Link href={`/avisos#${a.slug}`} className="group flex items-start justify-between gap-6 py-6 transition hover:bg-blanco sm:px-4">
                    <span>
                      <span className="text-sm font-semibold text-dorado">{a.fecha}</span>
                      <span className="mt-1 block text-xl font-bold leading-tight group-hover:text-verde">{a.titulo}</span>
                      <span className="mt-2 block max-w-[60ch] text-[15px] text-gris">{a.intro}</span>
                    </span>
                    <ArrowRight className="mt-2 h-5 w-5 flex-none text-arena-oscura transition group-hover:translate-x-1 group-hover:text-verde" aria-hidden="true" />
                  </Link>
                </li>
              </Revelar>
            ))}
          </ul>
        </Contenido>
      </section>

      {/* ===== Preguntas ===== */}
      <section className="bg-blanco">
        <Contenido className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Revelar>
            <Encabezado etiqueta="Preguntas frecuentes" texto="Respuestas cortas a lo que más preguntan las empresas.">
              ¿Tienes dudas?
            </Encabezado>
            <Link href="/preguntas" className="boton boton-secundario mt-8">
              Ver todas las preguntas
            </Link>
          </Revelar>
          <Revelar desde="derecha">
            <div className="border-t border-arena-oscura">
              {faq.slice(0, 4).map((item) => (
                <details key={item.q} className="pregunta border-b border-arena-oscura">
                  <summary className="flex items-start justify-between gap-6 py-5">
                    <span className="text-lg font-semibold leading-snug">{item.q}</span>
                  </summary>
                  <p className="max-w-[64ch] pb-6 text-gris">{item.a}</p>
                </details>
              ))}
            </div>
          </Revelar>
        </Contenido>
      </section>

      {/* ===== Cierre ===== */}
      <section className="border-t-4 border-dorado bg-verde text-white">
        <Contenido className="flex flex-col items-start gap-6 !py-16 md:flex-row md:items-center md:justify-between">
          <Revelar>
            <h2 className="titulo text-3xl sm:text-4xl">¿Hablamos de tu empresa?</h2>
            <p className="mt-3 max-w-[54ch] text-white/80">
              Agenda una consulta por WhatsApp con el giro de tu empresa y cuántas personas trabajan contigo. Con eso se hace el diagnóstico.
            </p>
          </Revelar>
          <BotonWhatsApp cita texto="Agendar consulta" className="boton-dorado shrink-0 !border-transparent" />
        </Contenido>
      </section>
    </>
  );
}
