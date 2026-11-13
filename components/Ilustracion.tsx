/*
 * Ilustración propia del despacho, dibujada con formas simples en la paleta:
 * un expediente con pestañas, hojas con renglones, una gráfica de barras y un
 * sello de "en regla". Sin fotos ni imágenes de terceros (decisión de la
 * clienta). Es decorativa: los lectores de pantalla la ignoran.
 */
export default function Ilustracion({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 520 440" className={className} aria-hidden="true" fill="none">
      {/* círculo de fondo */}
      <circle cx="300" cy="230" r="190" fill="#e9a3b4" opacity="0.9" />
      <circle cx="120" cy="90" r="34" fill="#f6dde3" />
      <circle cx="470" cy="60" r="12" fill="#f6dde3" />

      {/* carpeta trasera */}
      <rect x="60" y="150" width="300" height="230" rx="14" fill="#0a3a2e" />
      <path d="M60 164 a14 14 0 0 1 14 -14 h92 l22 22 h158 a14 14 0 0 1 14 14 v12 H60 z" fill="#0a3a2e" />

      {/* hoja grande */}
      <rect x="92" y="128" width="236" height="300" rx="10" fill="#fbf5f1" />
      <rect x="92" y="128" width="236" height="300" rx="10" stroke="#ead6cc" />
      <rect x="116" y="156" width="110" height="12" rx="6" fill="#0f4f3f" />
      <rect x="116" y="184" width="188" height="7" rx="3.5" fill="#ead6cc" />
      <rect x="116" y="202" width="166" height="7" rx="3.5" fill="#ead6cc" />
      <rect x="116" y="220" width="180" height="7" rx="3.5" fill="#ead6cc" />
      {/* renglones con casillas */}
      <g>
        <rect x="116" y="252" width="16" height="16" rx="4" fill="#0f4f3f" />
        <path d="M120 260l3.5 3.5 7-7" stroke="#fbf5f1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="142" y="256" width="120" height="7" rx="3.5" fill="#c2607a" opacity="0.5" />
        <rect x="116" y="282" width="16" height="16" rx="4" fill="#0f4f3f" />
        <path d="M120 290l3.5 3.5 7-7" stroke="#fbf5f1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="142" y="286" width="96" height="7" rx="3.5" fill="#c2607a" opacity="0.5" />
        <rect x="116" y="312" width="16" height="16" rx="4" fill="#0f4f3f" />
        <path d="M120 320l3.5 3.5 7-7" stroke="#fbf5f1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="142" y="316" width="140" height="7" rx="3.5" fill="#c2607a" opacity="0.5" />
      </g>

      {/* tarjeta con gráfica */}
      <rect x="300" y="236" width="170" height="150" rx="12" fill="#ffffff" />
      <rect x="300" y="236" width="170" height="150" rx="12" stroke="#ead6cc" />
      <rect x="320" y="256" width="72" height="8" rx="4" fill="#0f4f3f" />
      <rect x="322" y="322" width="22" height="40" rx="4" fill="#f6dde3" />
      <rect x="352" y="300" width="22" height="62" rx="4" fill="#e9a3b4" />
      <rect x="382" y="284" width="22" height="78" rx="4" fill="#c2607a" />
      <rect x="412" y="262" width="22" height="100" rx="4" fill="#0f4f3f" />
      <path d="M333 316 L363 292 L393 276 L423 252" stroke="#0f4f3f" strokeWidth="2.5" strokeLinecap="round" />

      {/* sello "en regla" */}
      <g transform="rotate(-12 392 140)">
        <circle cx="392" cy="140" r="52" fill="#fbf5f1" />
        <circle cx="392" cy="140" r="52" stroke="#0f4f3f" strokeWidth="4" />
        <circle cx="392" cy="140" r="42" stroke="#0f4f3f" strokeWidth="1.5" />
        <path d="M372 141l12 12 26-28" stroke="#0f4f3f" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* monedas */}
      <ellipse cx="86" cy="396" rx="30" ry="9" fill="#0a3a2e" />
      <ellipse cx="86" cy="388" rx="30" ry="9" fill="#0f4f3f" />
      <ellipse cx="86" cy="380" rx="30" ry="9" fill="#0a3a2e" />
      <ellipse cx="86" cy="372" rx="30" ry="9" fill="#0f4f3f" />
      <ellipse cx="86" cy="372" rx="18" ry="5" fill="#e9a3b4" />
    </svg>
  );
}
