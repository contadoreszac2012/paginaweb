"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { inicio } from "@/data/inicio";

/*
 * Tarjeta del hero: un "estado de cumplimiento" ilustrativo con renglones
 * que se van marcando y una gráfica de barras que crece. Da el aspecto de
 * tablero contable sin usar fotos. Decorativa.
 */
export default function Tablero() {
  const reducido = useReducedMotion();
  const total = inicio.tablero.renglones.length;
  const [marcados, setMarcados] = useState(reducido ? total : 0);

  useEffect(() => {
    if (reducido) return;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setMarcados(i);
      if (i >= total) clearInterval(id);
    }, 500);
    return () => clearInterval(id);
  }, [reducido, total]);

  return (
    <div className="flota relative mx-auto w-full max-w-[440px]" aria-hidden="true">
      <div className="rounded-lg bg-white p-6 text-tinta shadow-2xl shadow-black/30">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[13px] font-semibold text-gris">{inicio.tablero.titulo}</p>
            <p className="text-lg font-bold">{inicio.tablero.empresa}</p>
          </div>
          <span className="rounded-full bg-verde-50 px-3 py-1 text-[12.5px] font-semibold text-verde">En regla</span>
        </div>

        <ul className="mt-5 divide-y divide-arena-oscura">
          {inicio.tablero.renglones.map((r, i) => {
            const ok = i < marcados;
            return (
              <li key={r.nombre} className="flex items-center justify-between py-2.5 text-[14.5px]">
                <span className="flex items-center gap-3">
                  <span
                    className={`inline-flex h-5 w-5 items-center justify-center rounded-full transition-colors duration-300 ${
                      ok ? "bg-verde text-white" : "bg-arena-oscura"
                    }`}
                  >
                    <svg viewBox="0 0 16 16" className={`h-3 w-3 transition-opacity ${ok ? "opacity-100" : "opacity-0"}`}>
                      <path d="M3 8.5 6.5 12 13 4.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className={ok ? "" : "text-gris"}>{r.nombre}</span>
                </span>
                <span className={`text-[12.5px] font-semibold transition-colors ${ok ? "text-verde" : "text-gris/60"}`}>{r.estado}</span>
              </li>
            );
          })}
        </ul>

        <div className="mt-5 rounded-2xl bg-arena p-4">
          <div className="flex items-center justify-between text-[12.5px] text-gris">
            <span>Obligaciones cubiertas</span>
            <span className="font-semibold text-verde">Mes a mes</span>
          </div>
          <div className="mt-3 flex h-16 items-end gap-2">
            {inicio.tablero.barras.map((v, i) => (
              <span
                key={i}
                className={`barra-crece flex-1 rounded-t-md ${i === inicio.tablero.barras.length - 1 ? "bg-dorado" : "bg-verde"}`}
                style={{ height: `${v}%`, "--retraso": `${0.2 + i * 0.08}s` } as React.CSSProperties}
              />
            ))}
          </div>
        </div>
      </div>
      {/* tarjeta secundaria detrás */}
      <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-lg border border-dorado/60" />
    </div>
  );
}
