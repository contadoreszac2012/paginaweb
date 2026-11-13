"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { site, citaUrl } from "@/data/site";
import { pestanas } from "@/data/navegacion";
import { IconoWhatsApp } from "./Iconos";

/*
 * Barra superior: monograma + nombre, menú y botón de agendar (como en las
 * referencias DHI y Contadores Medina). Fija arriba. En celular el menú se
 * desplaza de lado y la sección activa se centra sola.
 */
export default function Navegacion() {
  const ruta = usePathname();
  const activa = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    activa.current?.scrollIntoView({ block: "nearest", inline: "center" });
  }, [ruta]);

  return (
    <header className="sticky top-0 z-40 border-b border-arena-oscura bg-arena/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-verde-900 text-sm font-bold text-dorado">
            RD
          </span>
          <span className="leading-tight">
            <span className="block text-[15px] font-bold">{site.nombre}</span>
            <span className="block text-[12.5px] text-gris">{site.titulo} · Zacatecas</span>
          </span>
        </Link>

        <nav aria-label="Secciones" className="nav-scroll hidden overflow-x-auto lg:block">
          <ul className="flex gap-7 text-[15px]">
            {pestanas.map((p) => {
              const actual = p.href === "/" ? ruta === "/" : ruta.startsWith(p.href);
              return (
                <li key={p.href}>
                  <Link href={p.href} className="nav-enlace" aria-current={actual ? "page" : undefined}>
                    {p.etiqueta}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <a href={citaUrl} target="_blank" rel="noopener noreferrer" className="boton boton-primario shrink-0 !px-4 !py-2.5">
          <IconoWhatsApp className="h-4 w-4" />
          <span className="hidden sm:inline">Agendar consulta</span>
          <span className="sm:hidden">Agendar</span>
        </a>
      </div>

      {/* menú en celular y tablet */}
      <nav aria-label="Secciones" className="nav-scroll overflow-x-auto border-t border-arena-oscura lg:hidden">
        <ul className="mx-auto flex max-w-6xl gap-6 px-4 text-[15px] sm:px-6">
          {pestanas.map((p) => {
            const actual = p.href === "/" ? ruta === "/" : ruta.startsWith(p.href);
            return (
              <li key={p.href}>
                <Link
                  href={p.href}
                  ref={actual ? activa : undefined}
                  className="nav-enlace"
                  aria-current={actual ? "page" : undefined}
                >
                  {p.etiqueta}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
