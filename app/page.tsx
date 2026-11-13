import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";
import { servicios } from "@/data/servicios";
import { cifras } from "@/data/cifras";
import { proceso } from "@/data/proceso";
import { despacho } from "@/data/despacho";
import { avisos } from "@/content/avisos";
import BotonWhatsApp from "@/components/BotonWhatsApp";
import IconoServicio from "@/components/IconoServicio";
import { Contenido } from "@/components/Titulo";

/*
 * Inicio: hero (diseño "Rosa y esmeralda"), cifras, cómo trabajamos,
 * servicios en resumen y el aviso más reciente.
 */
export default function Inicio() {
  const cifrasVisibles = cifras.filter((c) => c.valor);
  const reciente = avisos[0];
  const retraso = (s: string) => ({ "--retraso": s }) as React.CSSProperties;

  return (
    <>
      {/* ===== Hero ===== */}
      <section className="overflow-hidden">
        <Contenido className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-20">
          <div>
            <h1
              className="serif aparece text-[2.75rem] font-medium leading-[1.02] sm:text-6xl lg:text-[4.5rem]"
              style={retraso("0s")}
            >
              {site.equipo ? (
                <>
                  {site.equipo}.{" "}
                  <span className="italic text-rosa-texto">Tu empresa en regla.</span>
                </>
              ) : (
                <>
                  Tu empresa en regla, <span className="italic text-rosa-texto">antes de que alguien la revise.</span>
                </>
              )}
            </h1>
            <p className="aparece mt-6 max-w-[48ch] text-lg text-musgo sm:text-xl" style={retraso("0.12s")}>
              Contabilidad, impuestos, nóminas, cumplimiento laboral, normas STPS y prevención de lavado de
              dinero. Revisamos antes de que lo haga la autoridad y te lo explicamos con calma y con el artículo
              en la mano.
            </p>
            <div className="aparece mt-8 flex flex-wrap gap-3" style={retraso("0.22s")}>
              <BotonWhatsApp cita texto="Agendar consulta" />
              <Link href="/servicios" className="boton boton-secundario">
                Ver servicios
              </Link>
            </div>
            <ul className="aparece mt-8 flex flex-wrap gap-2" style={retraso("0.3s")}>
              {servicios.map((s) => (
                <li key={s.slug}>
                  <Link href={`/servicios#${s.slug}`} className="chip hover:bg-rosa/60">
                    {s.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Arco rosa con la foto y el lema */}
          <div className="aparece relative mx-auto w-full max-w-[440px]" style={retraso("0.26s")}>
            <div className="relative aspect-[440/560] w-full rounded-b-3xl rounded-t-[220px] bg-rosa">
              <div className="absolute left-1/2 top-[8%] aspect-square w-[78%] -translate-x-1/2 overflow-hidden rounded-full border-8 border-crema bg-esmeralda">
                {despacho.foto ? (
                  <Image src={despacho.foto} alt={site.nombre} fill sizes="400px" className="object-cover" />
                ) : (
                  <div className="flex h-full items-center justify-center p-8 text-center text-sm text-crema/90">
                    Foto de la Dra. Robles Delgado o del equipo
                  </div>
                )}
              </div>
              <blockquote className="absolute inset-x-4 bottom-4 rounded-2xl bg-crema p-5 shadow-lg shadow-esmeralda/10">
                <p className="serif text-lg italic leading-snug sm:text-xl">“{site.lema}”</p>
                <footer className="mt-1 text-sm text-musgo">Dra. {site.nombre}</footer>
              </blockquote>
            </div>
          </div>
        </Contenido>
      </section>

      {/* ===== Cifras ===== */}
      {cifrasVisibles.length >= 2 && (
        <section className="bg-esmeralda text-crema">
          <Contenido className="grid grid-cols-2 gap-6 !py-10 md:grid-cols-4">
            {cifrasVisibles.map((c) => (
              <div key={c.etiqueta} className="text-center">
                <p className="serif text-5xl font-semibold leading-none">{c.valor}</p>
                <p className="mt-2 text-sm text-crema/80">{c.etiqueta}</p>
              </div>
            ))}
          </Contenido>
        </section>
      )}

      {/* ===== Servicios en resumen ===== */}
      <section className="bg-blanco">
        <Contenido>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="serif text-4xl font-semibold">Conoce nuestros servicios</h2>
            <Link href="/servicios" className="font-medium underline decoration-rosa-texto underline-offset-4">
              Ver todos los servicios
            </Link>
          </div>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {servicios.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/servicios#${s.slug}`}
                  className="flex h-full flex-col gap-3 rounded-2xl border border-borde bg-crema p-6 transition hover:border-rosa-texto"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-rosa-claro text-rosa-oscuro">
                    <IconoServicio nombre={s.icono} />
                  </span>
                  <span className="serif text-2xl font-semibold leading-tight">{s.nombre}</span>
                  <span className="text-[15px] text-musgo">{s.resumen}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Contenido>
      </section>

      {/* ===== Cómo trabajamos ===== */}
      <section>
        <Contenido>
          <h2 className="serif text-4xl font-semibold">Cómo trabajamos</h2>
          <p className="mt-3 max-w-[60ch] text-musgo">
            Un proceso claro desde la primera consulta hasta el seguimiento mensual, para que siempre sepas en
            qué va tu empresa.
          </p>
          <ol className="mt-10 grid gap-6 md:grid-cols-5">
            {proceso.map((p, i) => (
              <li key={p.titulo} className="relative border-t-2 border-rosa pt-5">
                <span className="serif text-3xl font-semibold text-rosa-texto">{i + 1}</span>
                <h3 className="mt-2 text-lg font-semibold">{p.titulo}</h3>
                <p className="mt-1 text-[15px] text-musgo">{p.texto}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <BotonWhatsApp cita texto="Agendar consulta" />
          </div>
        </Contenido>
      </section>

      {/* ===== Aviso reciente ===== */}
      {reciente && (
        <section className="bg-rosa-claro">
          <Contenido className="flex flex-col gap-6 !py-10 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-rosa-oscuro">Aviso reciente · {reciente.fecha}</p>
              <h2 className="serif mt-1 text-3xl font-semibold leading-tight">{reciente.titulo}</h2>
            </div>
            <Link href={`/avisos#${reciente.slug}`} className="boton boton-primario shrink-0">
              Leer el aviso
            </Link>
          </Contenido>
        </section>
      )}
    </>
  );
}
