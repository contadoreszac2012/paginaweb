import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { pestanas } from "@/data/navegacion";

/* Mapa del sitio para Google: una entrada por pestaña. */
export default function sitemap(): MetadataRoute.Sitemap {
  return pestanas.map((p) => ({
    url: `${site.url}${p.href === "/" ? "" : p.href}`,
    lastModified: new Date(),
  }));
}
