import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { sitio } from "@/content/site";
import { urlBase } from "@/lib/links";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  display: "swap",
  variable: "--font-manrope",
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(urlBase()),
  title: sitio.titulo,
  description: sitio.descripcion,
  applicationName: sitio.nombre,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: sitio.nombre,
    title: sitio.titulo,
    description: sitio.descripcion,
  },
  twitter: {
    card: "summary_large_image",
    title: sitio.titulo,
    description: sitio.descripcion,
  },
};

export const viewport: Viewport = {
  themeColor: "#16151A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" className={manrope.variable} suppressHydrationWarning>
      <head>
        {/* Marca que hay JS para activar las animaciones de aparición. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
