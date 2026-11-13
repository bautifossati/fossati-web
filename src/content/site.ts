/**
 * ─────────────────────────────────────────────────────────────
 *  CONTENIDO DEL SITIO · FOSSATI RELACIONAMIENTO Y GESTIÓN
 * ─────────────────────────────────────────────────────────────
 *  Todo el texto del sitio vive acá. Editá este archivo y guardá:
 *  no hace falta tocar ningún componente.
 *
 *  Los datos que faltan están entre corchetes, por ejemplo [MAIL].
 *  Buscá "[" en este archivo para encontrarlos todos (el README
 *  tiene la lista completa).
 *
 *  Tono de marca: voseo, frases cortas, resultados concretos.
 *  Nunca: "conocemos a todo el mundo", "todo se puede", "lo arreglamos".
 * ─────────────────────────────────────────────────────────────
 */

// ── Datos de contacto y redes ────────────────────────────────
export const contacto = {
  /** Número en formato internacional, solo dígitos. Ej.: 5491122334455 */
  whatsapp: "[WHATSAPP]",
  /** Mensaje que aparece precargado al abrir WhatsApp. */
  whatsappMensaje: "Hola, quiero hacer una consulta",
  mail: "[MAIL]",
  instagram: "[INSTAGRAM]", // URL completa: https://instagram.com/...
  linkedin: "[LINKEDIN]", // URL completa: https://linkedin.com/company/...
};

// ── SEO y datos generales ────────────────────────────────────
export const sitio = {
  nombre: "Fossati Relacionamiento y Gestión",
  /** Dominio final con https, sin barra al final. Ej.: https://fossati.com.ar */
  dominio: "https://fossati-web.vercel.app",
  titulo: "Fossati Relacionamiento y Gestión · Sabemos qué puerta tocar.",
  descripcion:
    "Conectamos empresas, personas e instituciones con quien puede resolver lo que necesitan, y acompañamos cada caso hasta que se concreta.",
  lema: "Sabemos qué puerta tocar.",
  copyright: "© 2026 Fossati Relacionamiento y Gestión",
};

// ── Menú ─────────────────────────────────────────────────────
export const menu = [
  { label: "Qué hacemos", href: "#que-hacemos" },
  { label: "Casos", href: "#casos" },
  { label: "Unidades", href: "#unidades" },
  { label: "Cómo trabajamos", href: "#como-trabajamos" },
  { label: "Contacto", href: "#contacto" },
];

// ── Hero ─────────────────────────────────────────────────────
export const hero = {
  etiqueta: "Relacionamiento y gestión",
  titulo: "Sabemos qué puerta tocar.",
  bajada:
    "Conectamos empresas, personas e instituciones con quien puede resolver lo que necesitan, y acompañamos cada caso hasta que se concreta.",
  botonPrincipal: "Hablemos por WhatsApp",
  botonSecundario: "Ver casos",
};

// ── Qué hacemos ──────────────────────────────────────────────
export const servicios = {
  etiqueta: "Qué hacemos",
  titulo: "Cinco formas de llegar a un resultado.",
  items: [
    {
      titulo: "Gestión de medios",
      texto:
        "Planificamos la pauta, compramos los espacios en TV, radio, vía pública, medios digitales y redes, y reportamos resultados.",
    },
    {
      titulo: "Conexión de negocios",
      texto:
        "Identificamos quién decide, preparamos a las dos partes y acompañamos hasta el acuerdo.",
    },
    {
      titulo: "Desarrollo de proyectos",
      texto:
        "Hacemos que algo complejo arranque: socios, inversores, operadores y proveedores.",
    },
    {
      titulo: "Relación con el Estado",
      texto:
        "Acompañamos a empresas a ser proveedoras del Estado, a vincularse con municipios y provincias, y conectamos inversores con proyectos provinciales. Siempre por canales formales.",
    },
    {
      titulo: "Resolución a medida",
      texto:
        "Resolvemos necesidades puntuales e importantes de personas y familias.",
    },
  ],
};

// ── Rubros ───────────────────────────────────────────────────
export const rubros = {
  etiqueta: "Rubros",
  items: ["Empresas", "Minería", "Inmobiliaria", "Gobiernos y organismos", "Personas"],
};

// ── Casos de éxito ───────────────────────────────────────────
/**
 * Cada caso puede tener:
 *  - antes        (opcional) cómo estaba la situación
 *  - queHicimos   lo que hizo Fossati
 *  - resultado    el resultado en texto
 *  - destacado    (opcional) número grande + contexto. Ej.: { numero: "+5.000", texto: "inscriptos" }
 *  - enCurso      (opcional) true muestra la etiqueta "En curso"
 *  - imagen       (opcional) foto real del proyecto. Guardala en public/casos/ y poné:
 *                 imagen: { src: "/casos/ochentosa.webp", alt: "Corredores en la largada de la Maratón Ochentosa" }
 *                 Usá fotos propias o con permiso del cliente. Nada de fotos de stock.
 *  - publicable   true lo muestra en el sitio, false lo oculta
 */
export type Caso = {
  cliente: string;
  antes?: string;
  queHicimos: string;
  /** Título del bloque "Qué hicimos". Para casos en curso conviene "Qué hacemos". */
  queHicimosTitulo?: string;
  resultado?: string;
  destacado?: { numero: string; texto: string };
  enCurso?: boolean;
  /** Foto del proyecto. `alt` describe la foto para quien no la ve. */
  imagen?: { src: string; alt: string };
  publicable: boolean;
};

export const casos = {
  etiqueta: "Casos de éxito",
  titulo: "Lo que logramos, caso por caso.",
  items: [
    {
      cliente: "Maratón Ochentosa",
      queHicimos:
        "Conseguimos influencers, le dimos visibilidad a la carrera y armamos la difusión.",
      resultado: "Más de 5.000 inscriptos.",
      destacado: { numero: "+5.000", texto: "inscriptos en la carrera" },
      publicable: true,
    },
    {
      cliente: "Gobierno de San Luis",
      antes: "La pauta de turismo de la provincia no tenía un manejo ordenado.",
      queHicimos:
        "Ordenamos y manejamos toda la pauta, llevándola a medios como Infobae y el programa de Mario Pergolini.",
      resultado:
        "Una comunicación del turismo de San Luis mucho más eficiente, sobre todo en la provincia de Buenos Aires.",
      publicable: true,
    },
    {
      cliente: "Drop Experiencias",
      antes: "Vendía paquetes por WhatsApp.",
      queHicimos:
        "Armamos la estructura de una agencia de turismo con CRM y administrador.",
      resultado: "Todas las consultas y operaciones quedan registradas.",
      publicable: true,
    },
    {
      cliente: "Ácumen",
      queHicimos:
        "Armamos una red de aliados y franquicias en Latinoamérica que promocionan el método Ácumen.",
      resultado:
        "Presencia en toda Latinoamérica y una gran red de instituciones y deportistas que comparten sus valores.",
      publicable: true,
    },
    {
      cliente: "Croppers / Maní Agro",
      queHicimosTitulo: "Qué hacemos",
      queHicimos:
        "Damos a conocer el producto en el rugby y el hockey de Buenos Aires, con acciones en los terceros tiempos de los clubes.",
      enCurso: true,
      publicable: true,
    },
    {
      cliente: "Barritas Lecker",
      queHicimos:
        "Un método para que jóvenes que buscaban un ingreso extra vendan barritas con un objetivo económico propio.",
      resultado: "Mucha más distribución del producto en todo Buenos Aires.",
      publicable: true,
    },
    {
      cliente: "MOTIVATE",
      queHicimos:
        "Un método para que chicos y jóvenes se planteen objetivos económicos y generen ingresos vendiendo productos recurrentes.",
      resultado: "[RESULTADO MOTIVATE]",
      publicable: true,
    },
  ] satisfies Caso[] as Caso[],
};

// ── Unidades de negocio ──────────────────────────────────────
/** Si `link` empieza con "#" lleva a una sección de esta misma página. */
export const unidades = {
  etiqueta: "Nuestro ecosistema",
  titulo: "Unidades de negocio.",
  texto:
    "Trabajamos en red con nuestras propias marcas: cuando un cliente necesita un viaje, una experiencia deportiva o pauta, lo resolvemos dentro del grupo.",
  items: [
    {
      nombre: "Fossati Medios",
      texto:
        "Gestión de pautas publicitarias en medios tradicionales y digitales (TV, radio, vía pública, redes sociales).",
      link: "#que-hacemos",
      linkTexto: "Ver servicio",
    },
    {
      nombre: "Drop Experiencias",
      texto: "Agencia de turismo deportivo con red en toda Latinoamérica.",
      link: "[LINK DROP]",
      linkTexto: "Visitar sitio",
    },
    {
      nombre: "Ácumen",
      texto:
        "Método, red de aliados y franquicias en Latinoamérica para el deporte y el bienestar.",
      link: "[LINK ACUMEN]",
      linkTexto: "Visitar sitio",
    },
  ],
};

// ── Cómo trabajamos ──────────────────────────────────────────
export const proceso = {
  etiqueta: "Cómo trabajamos",
  titulo: "Cinco pasos. Todo por escrito.",
  pasos: [
    "Escuchamos qué necesitás.",
    "Diagnosticamos a quién hay que llegar y cómo.",
    "Acordamos por escrito el alcance y los honorarios.",
    "Abrimos la puerta y estamos en la primera reunión.",
    "Acompañamos cada semana hasta el resultado.",
  ],
};

// ── Proyecto en curso (bloque opcional) ──────────────────────
export const proyectoEnCurso = {
  publicable: false,
  etiqueta: "Proyecto en curso",
  titulo: "Minería en Catamarca",
  texto:
    "Estamos buscando inversores para un proyecto de exploración de litio y cobre de 25.000 hectáreas.",
  boton: "Quiero saber más",
};

// ── Contacto ─────────────────────────────────────────────────
export const contactoSeccion = {
  etiqueta: "Contacto",
  titulo: "Hablemos.",
  bajada: "Contanos qué necesitás. Te respondemos y, si no lo podemos hacer, te explicamos por qué.",
  botonWhatsapp: "Escribinos por WhatsApp",
  formulario: {
    titulo: "O dejanos tu consulta",
    nombre: "Nombre",
    empresa: "Empresa (opcional)",
    mensaje: "Qué necesitás",
    enviar: "Enviar por mail",
    asunto: "Consulta desde el sitio web",
    aviso: "Se abre tu programa de mail con los datos cargados.",
  },
};
