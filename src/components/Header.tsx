"use client";

import { useEffect, useRef, useState } from "react";
import { menu } from "@/content/site";
import { Logo } from "./Logo";

export function Header() {
  const [abierto, setAbierto] = useState(false);
  const botonRef = useRef<HTMLButtonElement>(null);

  // Cerrar con Escape y bloquear el scroll del fondo con el menú abierto.
  useEffect(() => {
    if (!abierto) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setAbierto(false);
        botonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [abierto]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-hueso/10 bg-negro">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-amarillo focus:px-4 focus:py-2 focus:text-negro"
      >
        Ir al contenido
      </a>
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:h-20 lg:px-10">
        <a href="#inicio" aria-label="Fossati, volver al inicio" className="shrink-0">
          <Logo ancho={168} className="h-auto w-[148px] sm:w-[168px] lg:w-[184px]" />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {menu.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[0.95rem] font-semibold text-hueso/85 transition-colors hover:text-amarillo"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contacto"
            className="hidden min-h-11 items-center rounded-full bg-amarillo px-5 text-sm font-semibold text-negro transition-colors hover:bg-hueso sm:inline-flex"
          >
            Hablemos
          </a>
          <button
            ref={botonRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-hueso lg:hidden"
            aria-expanded={abierto}
            aria-controls="menu-movil"
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setAbierto((v) => !v)}
          >
            <span aria-hidden="true" className="relative block h-3.5 w-6">
              <span
                className={`absolute left-0 top-0 h-0.5 w-6 bg-current transition-transform duration-300 ${abierto ? "translate-y-[6px] rotate-45" : ""}`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-6 bg-current transition-transform duration-300 ${abierto ? "-translate-y-[6px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="menu-movil"
        hidden={!abierto}
        className="fixed inset-x-0 bottom-0 top-18 overflow-y-auto bg-negro px-4 pb-10 pt-6 sm:px-6 lg:hidden"
      >
        <nav aria-label="Menú móvil">
          <ul className="flex flex-col">
            {menu.map((item) => (
              <li key={item.href} className="border-b border-hueso/10">
                <a
                  href={item.href}
                  onClick={() => setAbierto(false)}
                  className="block py-5 text-3xl font-extrabold tracking-tight text-hueso hover:text-amarillo"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#contacto"
          onClick={() => setAbierto(false)}
          className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-amarillo px-7 font-semibold text-negro"
        >
          Hablemos
        </a>
      </div>
    </header>
  );
}
