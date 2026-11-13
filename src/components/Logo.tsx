/**
 * Logo horizontal de Fossati.
 * Los SVG ya incluyen el área de resguardo (X = diámetro de una cabeza
 * del símbolo) dentro del viewBox, así que no hace falta sumar margen.
 * Ancho mínimo del logo visible: 120 px → el archivo nunca baja de 131 px.
 */
type Props = {
  variante?: "color-sobre-negro" | "negro";
  className?: string;
  ancho?: number;
};

const RATIO = 566 / 2220;

export function Logo({ variante = "color-sobre-negro", className, ancho = 180 }: Props) {
  const w = Math.max(ancho, 131);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/brand/fossati-horizontal-${variante}.svg`}
      alt="Fossati Relacionamiento y Gestión"
      width={w}
      height={Math.round(w * RATIO)}
      className={className}
      style={{ minWidth: 131 }}
    />
  );
}
