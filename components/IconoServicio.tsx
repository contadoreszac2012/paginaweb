import { BookOpen, Calculator, Users, HardHat, ShieldCheck, ClipboardCheck } from "lucide-react";
import type { Servicio } from "@/data/servicios";

/* Ícono de cada área de servicio (lucide-react, licencia ISC). */
const mapa = {
  libro: BookOpen,
  calculadora: Calculator,
  personas: Users,
  casco: HardHat,
  escudo: ShieldCheck,
  registro: ClipboardCheck,
};

export default function IconoServicio({
  nombre,
  className = "h-6 w-6",
}: {
  nombre: Servicio["icono"];
  className?: string;
}) {
  const Icono = mapa[nombre];
  return <Icono className={className} strokeWidth={1.75} aria-hidden="true" />;
}
