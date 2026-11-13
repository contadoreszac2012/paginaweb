import Link from "next/link";

/*
 * Cabecera de cada sección interior: fondo verde profundo con cuadrícula fina
 * y resplandor dorado; ruta, título grande y entrada.
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
    <div className="relative overflow-hidden bg-verde-900 text-white">
      <div className="cuadricula absolute inset-0" aria-hidden="true" />
      <div className="resplandor absolute -right-40 -top-40 h-[520px] w-[520px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="flex items-center gap-2 text-sm text-white/60">
          <Link href="/" className="hover:text-white">
            Inicio
          </Link>
          <span aria-hidden="true">/</span>
          <span>{etiqueta ?? children}</span>
        </p>
        <h1 className="titulo mt-4 max-w-[20ch] text-4xl sm:text-5xl lg:text-6xl">{children}</h1>
        {entrada && <p className="mt-5 max-w-2xl text-lg text-white/75 sm:text-xl">{entrada}</p>}
      </div>
    </div>
  );
}

/* Contenedor estándar del contenido de cada sección. */
export function Contenido({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 ${className}`}>{children}</div>;
}

/* Título de sección interna: etiqueta con línea dorada, h2 y texto. */
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
      {etiqueta && (
        <p className={`flex items-center gap-3 text-sm font-semibold ${claro ? "text-dorado" : "text-verde"} ${centrado ? "justify-center" : ""}`}>
          <span aria-hidden="true" className="h-px w-8 bg-dorado" />
          {etiqueta}
        </p>
      )}
      <h2 className="titulo mt-3 text-3xl sm:text-4xl lg:text-[2.75rem]">{children}</h2>
      {texto && <p className={`mt-4 text-lg ${claro ? "text-white/75" : "text-gris"}`}>{texto}</p>}
    </div>
  );
}
