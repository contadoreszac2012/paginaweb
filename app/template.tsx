/*
 * Se vuelve a montar en cada cambio de página, lo que dispara la animación
 * de entrada (clase .entra en globals.css).
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="entra">{children}</div>;
}
