import type { Metadata } from "next";
import { faq } from "@/data/faq";
import Titulo, { Contenido } from "@/components/Titulo";
import BotonWhatsApp from "@/components/BotonWhatsApp";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description:
    "Respuestas cortas sobre contabilidad, nóminas, contratos, reglamento interior, normas STPS y ley antilavado para empresas.",
};

export default function Preguntas() {
  return (
    <>
      <Titulo entrada="Respuestas cortas a lo que más preguntan las empresas. Para tu caso concreto, agenda una consulta.">
        Preguntas frecuentes
      </Titulo>

      <Contenido>
        <div className="mx-auto max-w-3xl rounded-2xl border border-borde bg-blanco px-6 sm:px-8">
          {faq.map((item) => (
            <details key={item.q} className="pregunta border-b border-borde last:border-b-0">
              <summary className="flex items-start justify-between gap-6 py-5">
                <span className="serif text-xl font-semibold leading-snug sm:text-2xl">{item.q}</span>
              </summary>
              <p className="max-w-[64ch] pb-6 text-musgo">{item.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-10 text-center">
          <BotonWhatsApp cita texto="Agendar consulta" />
        </div>
      </Contenido>
    </>
  );
}
