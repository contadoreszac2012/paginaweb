"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

/*
 * Piezas de movimiento del sitio (librería `motion`).
 * - Revelar: el bloque aparece al entrar en pantalla (una sola vez).
 * - Contador: una cifra que cuenta desde cero al entrar en pantalla.
 * Todas respetan "reducir movimiento" del sistema.
 */

export function Revelar({
  children,
  retraso = 0,
  className = "",
  desde = "abajo",
}: {
  children: React.ReactNode;
  retraso?: number;
  className?: string;
  desde?: "abajo" | "izquierda" | "derecha";
}) {
  const reducido = useReducedMotion();
  const inicial =
    desde === "izquierda" ? { opacity: 0, x: -28 } : desde === "derecha" ? { opacity: 0, x: 28 } : { opacity: 0, y: 24 };
  return (
    <motion.div
      className={className}
      initial={reducido ? false : inicial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: retraso, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Contador({
  hasta,
  prefijo = "",
  sufijo = "",
  duracion = 1.6,
  className = "",
}: {
  hasta: number;
  prefijo?: string;
  sufijo?: string;
  duracion?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useInView(ref, { once: true, margin: "-60px" });
  const reducido = useReducedMotion();
  const [valor, setValor] = useState(reducido ? hasta : 0);

  useEffect(() => {
    if (!visible || reducido) return;
    const inicio = performance.now();
    let id = 0;
    const paso = (t: number) => {
      const p = Math.min(1, (t - inicio) / (duracion * 1000));
      const suave = 1 - Math.pow(1 - p, 3);
      setValor(Math.round(hasta * suave));
      if (p < 1) id = requestAnimationFrame(paso);
    };
    id = requestAnimationFrame(paso);
    return () => cancelAnimationFrame(id);
  }, [visible, hasta, duracion, reducido]);

  return (
    <span ref={ref} className={className}>
      {prefijo}
      {valor.toLocaleString("es-MX")}
      {sufijo}
    </span>
  );
}
