type Props = { numero?: string; children: React.ReactNode; className?: string };

/** Etiqueta de sección en mayúscula, como "03 · LOGOTIPO" en el manual. */
export function Etiqueta({ numero, children, className = "" }: Props) {
  return (
    <p className={`etiqueta ${className}`}>
      {numero && <span aria-hidden="true">{numero} · </span>}
      {children}
    </p>
  );
}
