import type { CollectionContent, CollectionSlug } from "../types/catalog";

const collections: Record<CollectionSlug, CollectionContent> = {
  velas: {
    slug: "velas",
    title: "Velas artesanales",
    subtitle: "Aromas y texturas para rituales cotidianos.",
    badge: "Coleccion velas",
    products: [
      {
        id: "vela-bergamota-musgo",
        name: "Vela Bergamota y Musgo",
        priceLabel: "S/ 35",
        shortDescription: "Notas frescas para tardes tranquilas.",
      },
      {
        id: "vela-citricos-lino",
        name: "Vela Citricos y Lino",
        priceLabel: "S/ 38",
        shortDescription: "Toque limpio para espacios de trabajo.",
      },
      {
        id: "vela-vainilla-canela",
        name: "Vela Vainilla y Canela",
        priceLabel: "S/ 40",
        shortDescription: "Calidez suave para noche de descanso.",
      },
    ],
  },
  resina: {
    slug: "resina",
    title: "Piezas en resina",
    subtitle: "Detalles unicos para decorar y regalar.",
    badge: "Coleccion resina",
    products: [
      {
        id: "resina-colgante-botanico",
        name: "Colgante Botanico",
        priceLabel: "S/ 48",
        shortDescription: "Flores secas encapsuladas a mano.",
      },
      {
        id: "resina-portavaso-aurora",
        name: "Set Portavasos Aurora",
        priceLabel: "S/ 55",
        shortDescription: "Cuatro piezas con acabado cristal.",
      },
      {
        id: "resina-bandeja-minimal",
        name: "Bandeja Minimal",
        priceLabel: "S/ 62",
        shortDescription: "Orden visual para tocador o recibidor.",
      },
    ],
  },
  macetas: {
    slug: "macetas",
    title: "Macetas de yeso",
    subtitle: "Formas limpias para plantas y rincones vivos.",
    badge: "Coleccion macetas",
    products: [
      {
        id: "maceta-aurora",
        name: "Maceta Aurora",
        priceLabel: "S/ 42",
        shortDescription: "Formato mediano con base estable.",
      },
      {
        id: "maceta-oliva",
        name: "Maceta Oliva",
        priceLabel: "S/ 39",
        shortDescription: "Ideal para suculentas y cactus.",
      },
      {
        id: "maceta-luna",
        name: "Maceta Luna",
        priceLabel: "S/ 45",
        shortDescription: "Borde alto para plantas colgantes.",
      },
    ],
  },
};

export const collectionsIndex = [
  {
    slug: "velas" as const,
    title: "Velas",
    description: "Aromas artesanales para cada momento.",
    href: "/velas",
  },
  {
    slug: "resina" as const,
    title: "Resina",
    description: "Objetos decorativos hechos pieza por pieza.",
    href: "/resina",
  },
  {
    slug: "macetas" as const,
    title: "Macetas",
    description: "Diseno funcional para plantas de interior.",
    href: "/macetas",
  },
];

export function getCollectionContent(slug: CollectionSlug): CollectionContent {
  return collections[slug];
}
