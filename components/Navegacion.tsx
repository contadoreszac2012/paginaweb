"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { site, citaUrl } from "@/data/site";
import { pestanas } from "@/data/navegacion";
import { IconoWhatsApp } from "./Iconos";

/*
 * Barra de navegación: nombre a la izquierda, secciones y botón de WhatsApp
 * a la derecha (como en la referencia conta-dor). En celular las secciones
 * se desplazan de lado y la activa se centra sola.
 */
export default function Navegacion() {
  const ruta = usePathname();
  const activa = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    activa.current?.scrollIntoView({ block: "nearest", inline: "center" });
  }, [ruta]);

  return (
    <header className="border-b border-borde bg-crema/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="block leading-tight">
          <span className="serif block text-[1.3rem] font-semibold sm:text-2xl">{site.nombre}</span>
          <span className="block text-[13px] font-medium text-rosa-texto">
            {site.titulo} · Zacatecas
          </span>
        </Link>

        <a
          href={citaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="boton boton-primario shrink-0 !px-4 !py-2.5 text-sm"
        >
          <IconoWhatsApp className="h-4 w-4" />
          <span className="hidden sm:inline">Agendar consulta</span>
          <span className="sm:hidden">Agendar</span>
        </a>
      </div>

      <nav aria-label="Secciones" className="nav-scroll overflow-x-auto">
        <ul className="mx-auto flex max-w-6xl gap-6 px-4 pb-1 text-[15px] sm:px-6">
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
