import type { HomeContent } from "../types/home";

export const homeContent: HomeContent = {
  brandName: "AlelyVers",
  nav: [
    { label: "Inicio", href: "/" },
    { label: "Velas", href: "/velas" },
    { label: "Resina", href: "/resina" },
    { label: "Macetas", href: "/macetas" },
    { label: "Sobre nosotros", href: "/sobre-nosotros" },
  ],
  hero: {
    title: "Hecho a mano con amor y magia natural",
    subtitle:
      "Piezas artesanales para iluminar y decorar tu espacio con estilo propio.",
    ctaLabel: "Explorar colecciones",
    ctaHref: "/colecciones",
  },
  collections: [
    {
      title: "Velas sostenibles",
      description: "Aromas calidos para momentos cotidianos.",
      href: "/velas",
      tone: "cream",
    },
    {
      title: "Creaciones de resina",
      description: "Detalles unicos hechos pieza por pieza.",
      href: "/resina",
      tone: "meadow",
    },
    {
      title: "Macetas de yeso",
      description: "Formas limpias para plantas y rincones vivos.",
      href: "/macetas",
      tone: "sky",
    },
  ],
  featured: [
    {
      name: "Vela Bergamota y Musgo",
      priceLabel: "S/ 35",
      category: "Velas",
    },
    {
      name: "Colgante Botanico",
      priceLabel: "S/ 48",
      category: "Resina",
    },
    {
      name: "Maceta Terracota Aurora",
      priceLabel: "S/ 42",
      category: "Macetas",
    },
  ],
  footer: {
    seenOn: ["AD", "Destino Central", "Elle Decor", "Revista 192"],
    newsletterTitle: "Suscribete para recibir tips y promociones artesanales",
    newsletterPlaceholder: "Tu correo electronico",
    newsletterCtaLabel: "Suscribirme",
    socialHandle: "@alelyvers",
    columns: [
      {
        title: "Atencion al cliente",
        links: [
          { label: "FAQ", href: "/faq" },
          { label: "Envios y devoluciones", href: "/envios" },
          { label: "Contacto", href: "/contacto" },
        ],
      },
      {
        title: "Nosotros",
        links: [
          { label: "Sobre AlelyVers", href: "/sobre-nosotros" },
          { label: "Aviso de privacidad", href: "/privacidad" },
          { label: "Terminos y condiciones", href: "/terminos" },
        ],
      },
      {
        title: "Productos",
        links: [
          { label: "Velas", href: "/velas" },
          { label: "Resina", href: "/resina" },
          { label: "Macetas", href: "/macetas" },
        ],
      },
      {
        title: "Herramientas",
        links: [{ label: "Blog", href: "/blog" }],
      },
    ],
    socialLinks: [
      { label: "Instagram", href: "https://instagram.com/alelyvers" },
      { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61580853162022" },
    ],
  },
};
