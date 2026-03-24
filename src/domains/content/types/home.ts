export type HeroContent = {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
};

export type CollectionCard = {
  title: string;
  description: string;
  href: string;
  tone: "cream" | "meadow" | "sky";
};

export type FeaturedProduct = {
  name: string;
  priceLabel: string;
  category: string;
};

export type HomeContent = {
  brandName: string;
  nav: Array<{ label: string; href: string }>;
  hero: HeroContent;
  collections: CollectionCard[];
  featured: FeaturedProduct[];
};
