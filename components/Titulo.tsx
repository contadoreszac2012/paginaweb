/*
 * Franja de título de cada sección (como en la referencia conta-dor):
 * banda verde esmeralda con el título centrado y, opcionalmente, una entrada.
 */
export default function Titulo({
  children,
  entrada,
}: {
  children: React.ReactNode;
  entrada?: React.ReactNode;
}) {
  return (
    <div className="bg-esmeralda text-crema">
      <div className="mx-auto max-w-6xl px-4 py-12 text-center sm:px-6 sm:py-16">
        <h1 className="serif text-4xl font-semibold leading-tight sm:text-5xl">{children}</h1>
        {entrada && <p className="mx-auto mt-4 max-w-2xl text-lg text-crema/80">{entrada}</p>}
      </div>
    </div>
  );
}

/* Contenedor estándar del contenido de cada sección. */
export function Contenido({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 ${className}`}>{children}</div>;
}
