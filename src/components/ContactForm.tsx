"use client";

import { useState } from "react";
import { contacto, contactoSeccion } from "@/content/site";

const f = contactoSeccion.formulario;

const campo =
  "mt-2 block w-full rounded-none border-0 border-b-2 border-negro/70 bg-transparent px-0 py-3 text-lg text-negro placeholder:text-negro/50 focus:border-negro";

/** Formulario sin backend: arma un mail con los datos y abre el cliente de correo. */
export function ContactForm() {
  const [error, setError] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const datos = new FormData(e.currentTarget);
    const nombre = String(datos.get("nombre") ?? "").trim();
    const empresa = String(datos.get("empresa") ?? "").trim();
    const mensaje = String(datos.get("mensaje") ?? "").trim();
    if (!nombre || !mensaje) {
      setError("Completá tu nombre y qué necesitás.");
      return;
    }
    setError("");
    const cuerpo = [
      `Nombre: ${nombre}`,
      empresa ? `Empresa: ${empresa}` : null,
      "",
      "Qué necesito:",
      mensaje,
    ]
      .filter((l) => l !== null)
      .join("\n");
    window.location.href = `mailto:${contacto.mail}?subject=${encodeURIComponent(
      f.asunto,
    )}&body=${encodeURIComponent(cuerpo)}`;
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl bg-hueso p-7 sm:p-10">
      <h3 className="text-2xl">{f.titulo}</h3>
      <div className="mt-8 flex flex-col gap-7">
        <label className="block">
          <span className="etiqueta">{f.nombre}</span>
          <input name="nombre" type="text" autoComplete="name" required className={campo} />
        </label>
        <label className="block">
          <span className="etiqueta">{f.empresa}</span>
          <input name="empresa" type="text" autoComplete="organization" className={campo} />
        </label>
        <label className="block">
          <span className="etiqueta">{f.mensaje}</span>
          <textarea name="mensaje" rows={4} required className={`${campo} resize-y`} />
        </label>
      </div>
      <p role="alert" aria-live="polite" className="mt-4 min-h-6 font-semibold">
        {error}
      </p>
      <button
        type="submit"
        className="mt-2 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-negro px-7 font-semibold text-amarillo transition-colors hover:bg-negro/85 sm:w-auto"
      >
        {f.enviar}
      </button>
      <p className="mt-4 text-sm text-piedra">{f.aviso}</p>
    </form>
  );
}
