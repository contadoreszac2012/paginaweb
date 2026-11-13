import type { Metadata } from "next";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/500-italic.css";
import "@fontsource-variable/dm-sans";
import "./globals.css";
import { site } from "@/data/site";
import Navegacion from "@/components/Navegacion";
import PiePagina from "@/components/PiePagina";

/*
 * Estructura común de todas las páginas: navegación, contenido y pie.
 * Las fuentes se autoalojan (paquetes fontsource), así la página no hace
 * llamadas a Google al cargar.
 */

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.nombre} | ${site.titulo} en Zacatecas`,
    template: `%s | ${site.nombreCorto}, ${site.titulo}`,
  },
  description: site.descripcion,
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: `${site.nombre}, ${site.titulo}`,
    title: `${site.nombre} | ${site.titulo} en Zacatecas`,
    description: site.descripcion,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-MX" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <Navegacion />
        <main className="flex-1" id="contenido">
          {children}
        </main>
        <PiePagina />
      </body>
    </html>
  );
}
