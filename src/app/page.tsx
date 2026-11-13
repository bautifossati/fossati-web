import { contacto } from "@/content/site";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RevealObserver } from "@/components/RevealObserver";
import {
  Casos,
  ComoTrabajamos,
  Contacto,
  Hero,
  ProyectoEnCurso,
  QueHacemos,
  Rubros,
  Unidades,
} from "@/components/Secciones";

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenido">
        <Hero />
        <QueHacemos />
        <Rubros />
        <Casos />
        <Unidades />
        <ComoTrabajamos />
        <ProyectoEnCurso />
        <Contacto mail={contacto.mail} />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
