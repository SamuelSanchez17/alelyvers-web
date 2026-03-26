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

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

export type HomeFooter = {
  seenOn: string[];
  newsletterTitle: string;
  newsletterPlaceholder: string;
  newsletterCtaLabel: string;
  socialHandle: string;
  columns: FooterColumn[];
  socialLinks: FooterLink[];
};

export type HomeContent = {
  brandName: string;
  nav: Array<{ label: string; href: string }>;
  hero: HeroContent;
  collections: CollectionCard[];
  featured: FeaturedProduct[];
  footer: HomeFooter;
};
