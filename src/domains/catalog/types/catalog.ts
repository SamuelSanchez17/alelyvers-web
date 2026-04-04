export type CollectionSlug = "velas" | "resina" | "macetas";

export interface CatalogProduct {
  id: string;
  name: string;
  priceLabel: string;
  shortDescription: string;
}

export interface CollectionContent {
  slug: CollectionSlug;
  title: string;
  subtitle: string;
  badge: string;
  products: CatalogProduct[];
}
