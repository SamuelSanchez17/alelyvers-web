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
};
