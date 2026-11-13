import Link from "next/link";
import { site } from "@/data/site";

export default function PiePagina() {
  const anio = new Date().getFullYear();
  return (
    <footer className="border-t border-borde">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-musgo sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {anio} {site.nombre}. {site.ciudad}
        </p>
        <p className="flex flex-wrap gap-x-4">
          <Link href="/aviso-de-privacidad" className="underline-offset-2 hover:text-esmeralda hover:underline">
            Aviso de privacidad
          </Link>
          <a
            href={site.desarrollador.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-2 hover:text-esmeralda hover:underline"
          >
            Sitio por {site.desarrollador.nombre}
          </a>
        </p>
      </div>
    </footer>
  );
}
