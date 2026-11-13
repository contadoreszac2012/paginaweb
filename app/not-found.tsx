import Link from "next/link";
import Titulo, { Contenido } from "@/components/Titulo";

export default function NoEncontrada() {
  return (
    <>
      <Titulo entrada="La dirección que abriste no existe o cambió de lugar.">Página no encontrada</Titulo>
      <Contenido>
        <Link href="/" className="boton boton-secundario">
          Ir al inicio
        </Link>
      </Contenido>
    </>
  );
}
