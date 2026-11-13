import Link from "next/link";

/*
 * Cabecera de cada sección interior: fondo claro, ruta, título grande con
 * una línea dorada debajo y la entrada a la derecha (composición editorial).
 */
export default function Titulo({
  children,
  entrada,
  etiqueta,
}: {
  children: React.ReactNode;
  entrada?: React.ReactNode;
  etiqueta?: string;
}) {
  return (
    <div className="border-b border-arena-oscura bg-blanco">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <p className="flex items-center gap-2 text-sm text-gris">
            <Link href="/" className="hover:text-verde">
              Inicio
            </Link>
            <span aria-hidden="true">/</span>
            <span>{etiqueta ?? children}</span>
          </p>
          <h1 className="titulo mt-4 max-w-[18ch] text-4xl sm:text-5xl lg:text-6xl">{children}</h1>
          <span aria-hidden="true" className="mt-6 block h-1 w-16 bg-dorado" />
        </div>
        {entrada && <p className="text-lg text-gris sm:text-xl lg:pb-1">{entrada}</p>}
      </div>
    </div>
  );
}

/* Contenedor estándar del contenido de cada sección. */
export function Contenido({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 ${className}`}>{children}</div>;
}

/* Título de sección interna: etiqueta, h2 y texto, con línea dorada debajo del h2. */
export function Encabezado({
  etiqueta,
  children,
  texto,
  claro = false,
  centrado = false,
}: {
  etiqueta?: string;
  children: React.ReactNode;
  texto?: React.ReactNode;
  claro?: boolean;
  centrado?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${centrado ? "mx-auto text-center" : ""}`}>
      {etiqueta && <p className={`text-sm font-semibold ${claro ? "text-dorado" : "text-verde"}`}>{etiqueta}</p>}
      <h2 className="titulo mt-2 text-3xl sm:text-4xl lg:text-[2.75rem]">{children}</h2>
      <span aria-hidden="true" className={`mt-5 block h-1 w-14 bg-dorado ${centrado ? "mx-auto" : ""}`} />
      {texto && <p className={`mt-5 text-lg ${claro ? "text-white/75" : "text-gris"}`}>{texto}</p>}
    </div>
  );
}
