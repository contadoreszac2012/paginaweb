import Link from "next/link";
import { site, citaUrl } from "@/data/site";
import { pestanas } from "@/data/navegacion";
import { servicios } from "@/data/servicios";
import { IconoWhatsApp } from "./Iconos";

/* Pie en verde profundo con cuatro columnas. */
export default function PiePagina() {
  const anio = new Date().getFullYear();
  return (
    <footer className="bg-verde-900 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-sm font-bold text-dorado">RD</span>
            <div className="leading-tight">
              <p className="font-bold">{site.nombre}</p>
              <p className="text-[13px] text-white/60">{site.titulo}</p>
            </div>
          </div>
          <p className="mt-5 max-w-[36ch] text-white/75">{site.lema}</p>
          <a href={citaUrl} target="_blank" rel="noopener noreferrer" className="boton boton-dorado mt-6">
            <IconoWhatsApp className="h-5 w-5" />
            Agendar consulta
          </a>
        </div>

        <div>
          <p className="text-sm font-semibold text-dorado">Servicios</p>
          <ul className="mt-3 space-y-2 text-[15px]">
            {servicios.map((s) => (
              <li key={s.slug}>
                <Link href={`/servicios#${s.slug}`} className="text-white/75 hover:text-white">
                  {s.nombre}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-dorado">Secciones</p>
          <ul className="mt-3 space-y-2 text-[15px]">
            {pestanas.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="text-white/75 hover:text-white">
                  {p.etiqueta}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/aviso-de-privacidad" className="text-white/75 hover:text-white">
                Aviso de privacidad
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-dorado">Contacto</p>
          <ul className="mt-3 space-y-2 text-[15px] text-white/75">
            <li>WhatsApp {site.whatsappVisible}</li>
            <li>Oficina {site.telefonoVisible}</li>
            <li className="break-all">{site.correo}</li>
            <li>{site.ciudad}</li>
            {site.direccion && <li>{site.direccion}</li>}
            {site.horario && <li>{site.horario}</li>}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {anio} {site.nombre}. Todos los derechos reservados.</p>
          <a href={site.desarrollador.url} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            Sitio por {site.desarrollador.nombre}
          </a>
        </div>
      </div>
    </footer>
  );
}
