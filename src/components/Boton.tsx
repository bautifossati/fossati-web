import { esExterno } from "@/lib/links";

type Props = {
  href: string;
  children: React.ReactNode;
  variante?: "amarillo" | "contorno-claro" | "negro";
  className?: string;
};

const estilos = {
  // Amarillo con texto negro: botón principal.
  amarillo: "bg-amarillo text-negro hover:bg-hueso",
  // Contorno hueso sobre fondo negro: botón secundario.
  "contorno-claro": "border border-hueso/40 text-hueso hover:border-amarillo hover:text-amarillo",
  // Negro con texto amarillo: para usar sobre fondo amarillo.
  negro: "bg-negro text-amarillo hover:bg-negro/85",
};

export function Boton({ href, children, variante = "amarillo", className = "" }: Props) {
  const externo = esExterno(href);
  return (
    <a
      href={href}
      {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-7 py-3 text-base font-semibold transition-colors duration-200 ${estilos[variante]} ${className}`}
    >
      {children}
      {externo && <span className="sr-only"> (se abre en otra pestaña)</span>}
    </a>
  );
}
