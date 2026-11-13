import { contacto, menu, sitio } from "@/content/site";
import { esExterno } from "@/lib/links";
import { Logo } from "./Logo";

export function Footer() {
  const redes = [
    { label: "Instagram", href: contacto.instagram },
    { label: "LinkedIn", href: contacto.linkedin },
  ];
  return (
    <footer className="bg-negro py-16 text-hueso sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Logo ancho={220} className="h-auto w-[200px] sm:w-[240px]" />
            <p className="mt-6 text-2xl font-extrabold text-blanco sm:text-3xl">{sitio.lema}</p>
          </div>
          <nav aria-label="Pie de página" className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <ul className="flex flex-col gap-3">
              {menu.map((m) => (
                <li key={m.href}>
                  <a href={m.href} className="text-hueso/80 hover:text-amarillo">
                    {m.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-3">
              {redes.map((r) => (
                <li key={r.label}>
                  <a
                    href={r.href}
                    {...(esExterno(r.href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="font-semibold text-hueso hover:text-amarillo"
                  >
                    {r.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-14 border-t border-hueso/10 pt-8 text-sm text-hueso/70">{sitio.copyright}</p>
      </div>
    </footer>
  );
}
