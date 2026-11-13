import {
  casos,
  contactoSeccion,
  hero,
  proceso,
  proyectoEnCurso,
  rubros,
  servicios,
  unidades,
  type Caso,
} from "@/content/site";
import { esExterno, whatsappUrl } from "@/lib/links";
import { Boton } from "./Boton";
import { ContactForm } from "./ContactForm";
import { Etiqueta } from "./Etiqueta";

const contenedor = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10";
const tituloSeccion =
  "text-[2.25rem] leading-[1.05] sm:text-5xl lg:text-[4rem] lg:leading-[1.02]";

function delay(i: number) {
  return { "--reveal-delay": `${Math.min(i, 5) * 80}ms` } as React.CSSProperties;
}

/* ── 2. Hero ─────────────────────────────────────────────── */
export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[88svh] items-end bg-negro pb-16 pt-32 sm:pb-24 lg:min-h-[92svh] lg:pb-32"
    >
      <div className={contenedor}>
        <Etiqueta className="text-amarillo">{hero.etiqueta}</Etiqueta>
        <h1 className="mt-6 max-w-[14ch] text-[3.1rem] leading-[0.98] text-blanco sm:text-7xl lg:text-[7.5rem] lg:leading-[0.95]">
          {hero.titulo}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-hueso/80 sm:text-xl">
          {hero.bajada}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Boton href={whatsappUrl()} variante="amarillo">
            {hero.botonPrincipal}
          </Boton>
          <Boton href="#casos" variante="contorno-claro">
            {hero.botonSecundario}
          </Boton>
        </div>
      </div>
    </section>
  );
}

/* ── 3. Qué hacemos ──────────────────────────────────────── */
export function QueHacemos() {
  return (
    <section id="que-hacemos" className="sobre-claro bg-hueso py-20 text-negro sm:py-28 lg:py-36">
      <div className={contenedor}>
        <div data-reveal className="max-w-3xl">
          <Etiqueta numero="01" className="text-piedra">
            {servicios.etiqueta}
          </Etiqueta>
          <h2 className={`mt-5 ${tituloSeccion}`}>{servicios.titulo}</h2>
        </div>
        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-negro/10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {servicios.items.map((s, i) => (
            <li
              key={s.titulo}
              data-reveal
              style={delay(i)}
              className="flex flex-col bg-blanco p-7 sm:p-9 lg:min-h-80"
            >
              <span className="text-sm font-extrabold tabular-nums text-negro" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-10 text-2xl leading-tight lg:mt-auto lg:pt-12">{s.titulo}</h3>
              <p className="mt-3 leading-relaxed text-piedra">{s.texto}</p>
            </li>
          ))}
          {/* Celda de cierre para completar la grilla de 3 columnas. */}
          <li className="hidden flex-col justify-end bg-negro p-9 sm:flex" aria-hidden="true">
            <p className="text-2xl font-extrabold leading-tight text-blanco">
              Sabemos qué puerta <span className="text-amarillo">tocar.</span>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

/* ── 4. Rubros ───────────────────────────────────────────── */
export function Rubros() {
  return (
    <section aria-label={rubros.etiqueta} className="border-y border-hueso/10 bg-negro py-8 sm:py-10">
      <div className={`${contenedor} flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-12`}>
        <Etiqueta className="shrink-0 text-amarillo">{rubros.etiqueta}</Etiqueta>
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-lg font-semibold text-hueso sm:text-xl">
          {rubros.items.map((r, i) => (
            <li key={r} className="flex items-center gap-4">
              {i > 0 && (
                <span aria-hidden="true" className="text-amarillo">
                  ·
                </span>
              )}
              {r}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── 5. Casos de éxito ───────────────────────────────────── */
function BloqueCaso({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="etiqueta text-hueso/60">{titulo}</dt>
      <dd className="mt-2 leading-relaxed text-hueso/90">{children}</dd>
    </div>
  );
}

function TarjetaCaso({ caso, grande }: { caso: Caso; grande: boolean }) {
  return (
    <article
      className={`flex h-full flex-col rounded-2xl bg-negro p-7 text-hueso sm:p-9 ${grande ? "lg:p-12" : ""}`}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-2xl leading-tight text-blanco sm:text-[1.75rem]">{caso.cliente}</h3>
        {caso.enCurso && (
          <span className="etiqueta shrink-0 rounded-full border border-amarillo px-3 py-1.5 text-amarillo">
            En curso
          </span>
        )}
      </div>

      <div className={grande ? "mt-8 lg:grid lg:grid-cols-[1.1fr_1fr] lg:gap-14" : "mt-8"}>
        {caso.destacado && (
          <p className="mb-8 lg:mb-0">
            <span className="block text-[4.5rem] font-extrabold leading-none tracking-tight text-amarillo sm:text-8xl lg:text-[9rem]">
              {caso.destacado.numero}
            </span>
            <span className="mt-3 block text-lg font-semibold text-hueso">
              {caso.destacado.texto}
            </span>
          </p>
        )}

        <dl className="flex flex-col gap-6">
          {caso.antes && <BloqueCaso titulo="Antes">{caso.antes}</BloqueCaso>}
          <BloqueCaso titulo={caso.queHicimosTitulo ?? "Qué hicimos"}>{caso.queHicimos}</BloqueCaso>
          {caso.resultado && !caso.destacado && (
            <div className="border-t border-hueso/15 pt-6">
              <dt className="etiqueta text-amarillo">Resultado</dt>
              <dd className="mt-3 text-xl font-semibold leading-snug text-blanco sm:text-2xl">
                {caso.resultado}
              </dd>
            </div>
          )}
          {/* Con número destacado, el número ya es el resultado: no se repite. */}
        </dl>
      </div>
    </article>
  );
}

export function Casos() {
  const visibles = casos.items.filter((c) => c.publicable);
  if (visibles.length === 0) return null;
  return (
    <section id="casos" className="sobre-claro bg-hueso py-20 text-negro sm:py-28 lg:py-36">
      <div className={contenedor}>
        <div data-reveal className="max-w-3xl">
          <Etiqueta numero="02" className="text-piedra">
            {casos.etiqueta}
          </Etiqueta>
          <h2 className={`mt-5 ${tituloSeccion}`}>{casos.titulo}</h2>
        </div>
        <ul className="mt-14 grid gap-4 sm:gap-5 lg:mt-20 lg:grid-cols-2">
          {visibles.map((caso, i) => {
            // Los casos con número destacado ocupan todo el ancho.
            const grande = Boolean(caso.destacado);
            return (
              <li
                key={caso.cliente}
                data-reveal
                style={delay(i % 2)}
                className={grande ? "lg:col-span-2" : ""}
              >
                <TarjetaCaso caso={caso} grande={grande} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ── 6. Unidades de negocio ──────────────────────────────── */
export function Unidades() {
  return (
    <section id="unidades" className="bg-negro py-20 sm:py-28 lg:py-36">
      <div className={contenedor}>
        <div data-reveal className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <Etiqueta numero="03" className="text-amarillo">
              {unidades.etiqueta}
            </Etiqueta>
            <h2 className={`mt-5 text-blanco ${tituloSeccion}`}>{unidades.titulo}</h2>
          </div>
          <p className="self-end text-lg leading-relaxed text-hueso/80 sm:text-xl">{unidades.texto}</p>
        </div>
        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-hueso/15 md:grid-cols-3 lg:mt-20">
          {unidades.items.map((u, i) => {
            const externo = esExterno(u.link);
            return (
              <li key={u.nombre} data-reveal style={delay(i)} className="flex flex-col bg-negro p-7 sm:p-9">
                <h3 className="text-2xl text-blanco">{u.nombre}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-hueso/75">{u.texto}</p>
                <a
                  href={u.link}
                  {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group mt-8 inline-flex min-h-11 items-center gap-2 self-start font-semibold text-amarillo"
                >
                  {u.linkTexto}
                  <span className="sr-only">: {u.nombre}{externo ? " (se abre en otra pestaña)" : ""}</span>
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ── 7. Cómo trabajamos ──────────────────────────────────── */
export function ComoTrabajamos() {
  return (
    <section id="como-trabajamos" className="sobre-claro bg-hueso py-20 text-negro sm:py-28 lg:py-36">
      <div className={contenedor}>
        <div data-reveal className="max-w-3xl">
          <Etiqueta numero="04" className="text-piedra">
            {proceso.etiqueta}
          </Etiqueta>
          <h2 className={`mt-5 ${tituloSeccion}`}>{proceso.titulo}</h2>
        </div>
        <ol className="mt-14 lg:mt-20">
          {proceso.pasos.map((paso, i) => (
            <li
              key={paso}
              data-reveal
              style={delay(i)}
              className="grid grid-cols-[3.5rem_1fr] items-baseline gap-4 border-t border-negro/15 py-7 last:border-b sm:grid-cols-[6rem_1fr] sm:py-9 lg:grid-cols-[10rem_1fr]"
            >
              <span className="text-3xl font-extrabold tabular-nums sm:text-5xl" aria-hidden="true">
                {i + 1}
              </span>
              <p className="text-xl font-semibold leading-snug sm:text-3xl">
                <span className="sr-only">Paso {i + 1}: </span>
                {paso}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ── 8. Proyecto en curso (opcional) ─────────────────────── */
export function ProyectoEnCurso() {
  if (!proyectoEnCurso.publicable) return null;
  return (
    <section aria-labelledby="proyecto-titulo" className="bg-negro py-16 sm:py-20">
      <div className={contenedor}>
        <div
          data-reveal
          className="flex flex-col gap-6 rounded-2xl border border-amarillo/40 p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="max-w-2xl">
            <Etiqueta className="text-amarillo">{proyectoEnCurso.etiqueta}</Etiqueta>
            <h2 id="proyecto-titulo" className="mt-3 text-3xl text-blanco">
              {proyectoEnCurso.titulo}
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-hueso/80">{proyectoEnCurso.texto}</p>
          </div>
          <Boton
            href={whatsappUrl(`Hola, quiero saber más sobre el proyecto: ${proyectoEnCurso.titulo}`)}
            variante="amarillo"
            className="shrink-0"
          >
            {proyectoEnCurso.boton}
          </Boton>
        </div>
      </div>
    </section>
  );
}

/* ── 9. Contacto ─────────────────────────────────────────── */
export function Contacto({ mail }: { mail: string }) {
  return (
    <section id="contacto" className="sobre-claro bg-amarillo py-20 text-negro sm:py-28 lg:py-36">
      <div className={`${contenedor} grid gap-14 lg:grid-cols-2 lg:gap-20`}>
        <div data-reveal>
          <Etiqueta numero="05">{contactoSeccion.etiqueta}</Etiqueta>
          <h2 className="mt-5 text-[4rem] leading-none sm:text-8xl lg:text-[clamp(5rem,7.4vw,8rem)]">
            {contactoSeccion.titulo}
          </h2>
          <p className="mt-8 max-w-md text-lg leading-relaxed">{contactoSeccion.bajada}</p>
          <div className="mt-10 flex flex-col items-start gap-6">
            <Boton href={whatsappUrl()} variante="negro">
              {contactoSeccion.botonWhatsapp}
            </Boton>
            <a
              href={`mailto:${mail}`}
              className="text-lg font-semibold underline decoration-2 underline-offset-[6px] hover:decoration-4"
            >
              {mail}
            </a>
          </div>
        </div>
        <div data-reveal style={delay(1)}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
