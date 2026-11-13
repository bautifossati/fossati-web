import { contacto, sitio } from "@/content/site";

/** Link de WhatsApp con el mensaje precargado. */
export function whatsappUrl(mensaje = contacto.whatsappMensaje) {
  return `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

/** true si el valor sigue siendo un placeholder del tipo [ALGO]. */
export function esPlaceholder(valor: string) {
  return /^\[.*\]$/.test(valor.trim());
}

/** true si el link sale del sitio (para abrirlo en otra pestaña). */
export function esExterno(href: string) {
  return /^https?:\/\//.test(href);
}

/** URL base para SEO. Mientras el dominio sea placeholder usa localhost. */
export function urlBase() {
  return esPlaceholder(sitio.dominio) ? "http://localhost:3000" : sitio.dominio;
}
