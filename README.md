# Fossati Relacionamiento y Gestión · Sitio web

Sitio de una sola página hecho con Next.js (App Router), TypeScript y Tailwind CSS. Es 100 % estático: no tiene base de datos ni backend.

## Cómo correrlo

Necesitás Node.js 20 o superior.

```bash
npm install
npm run dev
```

Abrí http://localhost:3000.

Para generar la versión final: `npm run build`. El sitio queda en la carpeta `out/`.

---

## Cómo editar textos y casos

**Todo el contenido está en un solo archivo: `src/content/site.ts`.** No hace falta tocar ningún componente.

| Qué querés cambiar | Dónde, dentro de `site.ts` |
|---|---|
| WhatsApp, mail, Instagram, LinkedIn | `contacto` |
| Título del sitio, descripción para Google, dominio | `sitio` |
| Menú | `menu` |
| Título y botones del inicio | `hero` |
| Servicios ("Qué hacemos") | `servicios.items` |
| Rubros | `rubros.items` |
| Casos de éxito | `casos.items` |
| Marcas del grupo | `unidades.items` |
| Pasos de "Cómo trabajamos" | `proceso.pasos` |
| Bloque "Proyecto en curso" (Catamarca) | `proyectoEnCurso` |
| Textos del bloque de contacto y del formulario | `contactoSeccion` |

### Casos de éxito

Cada caso tiene estos campos:

```ts
{
  cliente: "Nombre del cliente",
  antes: "Cómo estaba la situación",        // opcional: si no está, no se muestra
  queHicimos: "Qué hicimos",
  resultado: "El resultado en texto",       // opcional
  destacado: { numero: "+5.000", texto: "inscriptos en la carrera" }, // opcional: número grande
  enCurso: true,                            // opcional: muestra la etiqueta "En curso"
  publicable: true,                         // false lo oculta del sitio sin borrarlo
}
```

- **Para ocultar un caso:** poné `publicable: false`.
- **Para agregar un caso:** copiá un bloque `{ ... },` completo, pegalo en la lista y cambiale los textos. Se muestran en el mismo orden que en el archivo.
- **Casos con `destacado`:** se muestran a todo el ancho con el número en grande, en amarillo.

### Fotos de los casos

Cada caso puede llevar una foto real del proyecto arriba de la tarjeta.

1. Guardá la foto en `public/casos/`. Por ejemplo, `public/casos/ochentosa.webp`. Conviene que mida unos 1600 px de ancho y pese menos de 300 KB (formato `.webp` o `.jpg`).
2. En el caso correspondiente de `site.ts`, agregá:

   ```ts
   imagen: { src: "/casos/ochentosa.webp", alt: "Corredores en la largada de la Maratón Ochentosa" },
   ```

   El texto `alt` describe la foto para quien no la ve, y también lo usa Google.

Usá fotos propias o con permiso del cliente. Nada de fotos de stock. Si un caso no tiene foto, la tarjeta se ve igual, sin hueco.

### Proyecto en curso (Catamarca)

Está oculto por defecto. Para mostrarlo, cambiá `proyectoEnCurso.publicable` a `true`.

---

## Placeholders pendientes

Los datos que faltan están entre corchetes en `src/content/site.ts`. Buscá `[` en el archivo para encontrarlos. Mientras no los completes, **se ven tal cual en el sitio** (por ejemplo, "[MAIL]").

| Placeholder | Campo en `site.ts` | Formato |
|---|---|---|
| `[WHATSAPP]` | `contacto.whatsapp` | Solo números, con código de país y sin `+`. Ej.: `5491122334455` |
| `[MAIL]` | `contacto.mail` | `hola@dominio.com.ar` |
| `[INSTAGRAM]` | `contacto.instagram` | URL completa: `https://instagram.com/usuario` |
| `[LINKEDIN]` | `contacto.linkedin` | URL completa: `https://www.linkedin.com/company/...` |
| `[LINK DROP]` | `unidades.items` → Drop Experiencias → `link` | URL completa con `https://` |
| `[LINK ACUMEN]` | `unidades.items` → Ácumen → `link` | URL completa con `https://` |
| Dominio | `sitio.dominio` | Hoy: `https://fossati-web.vercel.app`. Cuando tengas dominio propio, reemplazalo (ej.: `https://fossati.com.ar`, sin barra al final). Se usa para Google y para la vista previa al compartir el link |
| `[RESULTADO MOTIVATE]` | `casos.items` → MOTIVATE → `resultado` | Texto. Si todavía no hay resultado, borrá la línea `resultado` o poné `publicable: false` |

---

## Publicarlo en Vercel, conectado a GitHub

1. **Subí el proyecto a GitHub.** Creá un repositorio vacío en github.com (por ejemplo `fossati-web`) y, desde la carpeta del proyecto, corré:

   ```bash
   git init
   git add .
   git commit -m "Primera versión del sitio"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/fossati-web.git
   git push -u origin main
   ```

2. **Importalo en Vercel.** Entrá a [vercel.com](https://vercel.com) con tu cuenta de GitHub, hacé clic en **Add New → Project**, elegí el repositorio y tocá **Deploy**. No hace falta cambiar ninguna opción: Vercel detecta Next.js solo.

3. **Conectá el dominio.** En el proyecto de Vercel andá a **Settings → Domains**, agregá tu dominio y seguí las instrucciones de DNS. Después actualizá `sitio.dominio` en `site.ts`.

4. **A partir de ahí:** cada vez que subas un cambio a GitHub (`git push`), Vercel publica la nueva versión sola en uno o dos minutos.

Para editar sin usar la terminal, podés abrir `src/content/site.ts` directo en github.com (ícono del lápiz), cambiar el texto y guardar con **Commit changes**. Vercel publica solo.

---

## Marca

Las reglas salen del manual de marca de Fossati (v1.0, noviembre 2026).

- **Colores:** solo los cuatro del manual (`negro`, `amarillo`, `hueso`, `piedra`) más blanco. Están definidos en `src/app/globals.css`, y Tailwind no tiene ningún otro color cargado.
- **Amarillo:** nunca sobre blanco o hueso. Va sobre negro, o como fondo con texto negro.
- **Piedra:** solo sobre fondos claros, porque sobre negro no alcanza el contraste mínimo de accesibilidad.
- **Tipografía:** Manrope (800 títulos, 600 etiquetas, 400 textos), con Arial como alternativa.
- **Logos:** están en `public/brand/`. Se vectorizaron a partir del manual de marca, con los colores exactos de la paleta.
  - Cada SVG ya incluye el área de resguardo (el diámetro de una cabeza del símbolo).
  - El componente `Logo` no deja que el horizontal se muestre a menos de 120 px.
  - Si más adelante tenés los SVG originales, reemplazá los archivos con el mismo nombre.
- **Favicon e imágenes para compartir:**
  - `src/app/icon.svg`: favicon, símbolo amarillo sobre círculo negro.
  - `src/app/apple-icon.png`: ícono para iPhone.
  - `src/app/opengraph-image.png`: vista previa al compartir el link por WhatsApp o redes, 1200×630.

## Estructura

```
src/
  content/site.ts        ← TODO el contenido editable
  app/                   ← layout, página, estilos, favicon e imagen para compartir
  components/            ← Header, secciones, formulario, footer
  lib/links.ts           ← armado de links de WhatsApp y helpers
public/brand/            ← logos SVG
```
