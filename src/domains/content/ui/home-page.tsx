import Link from "next/link";
import { Facebook, Instagram, Search, ShoppingCart, User } from "lucide-react";
import { homeContent } from "../data/home-content";

const collectionToneClass: Record<string, string> = {
  cream: "bg-[var(--brand-wave-cream)]",
  meadow: "bg-[var(--brand-wave-meadow)]",
  sky: "bg-[var(--brand-wave-sky)]",
};

export function HomePage() {
  const socialIcons = {
    Instagram: Instagram,
    Facebook: Facebook,
  };

  return (
    <div className="bg-[var(--brand-mist-50)] text-[var(--brand-ink-900)]">
      <header className="sticky top-0 z-20 border-b border-black/10 bg-[var(--brand-mist-100)]/90 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <p className="font-display text-3xl tracking-wide">{homeContent.brandName}</p>
          <ul className="hidden items-center gap-6 text-sm uppercase tracking-[0.16em] md:flex">
            {homeContent.nav.map((item) => (
              <li key={item.label}>
                <Link className="transition-colors hover:text-[var(--brand-honey-amber)]" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <Link
              href="/buscar"
              aria-label="Buscar productos"
              className="rounded-full border border-black/15 p-2 transition-colors hover:bg-white"
            >
              <Search size={18} />
            </Link>
            <Link
              href="/login"
              aria-label="Iniciar sesion"
              className="rounded-full border border-black/15 p-2 transition-colors hover:bg-white"
            >
              <User size={18} />
            </Link>
            <Link
              href="/cart"
              aria-label="Ir al carrito"
              className="rounded-full border border-black/15 p-2 transition-colors hover:bg-white"
            >
              <ShoppingCart size={18} />
            </Link>
            <button
              type="button"
              className="ml-1 rounded-full border border-black/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] md:hidden"
              aria-label="Abrir menu"
            >
              Menu
            </button>
          </div>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-5 py-8 md:gap-16 md:px-8">
        <section className="relative overflow-hidden rounded-[2.2rem] border border-black/10 bg-[radial-gradient(circle_at_25%_20%,#f5b24855,transparent_55%),linear-gradient(135deg,#1d1915_0%,#2b241d_42%,#4c3d32_100%)] px-6 py-16 text-[var(--brand-mist-50)] md:px-12 md:py-24">
          <div className="fade-up relative z-10 max-w-2xl">
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[var(--brand-wave-cream)]">
              Creaciones artesanales
            </p>
            <h1 className="font-display text-4xl leading-tight md:text-6xl">
              {homeContent.hero.title}
            </h1>
            <p className="mt-5 max-w-xl text-sm text-white/85 md:text-base">
              {homeContent.hero.subtitle}
            </p>
            <Link
              href={homeContent.hero.ctaHref}
              className="mt-8 inline-flex rounded-full bg-[var(--brand-candle-gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.13em] text-[var(--brand-ink-900)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              {homeContent.hero.ctaLabel}
            </Link>
          </div>
          <div className="pointer-events-none absolute -bottom-8 -right-10 h-40 w-40 rounded-full bg-[var(--brand-wave-orchid)]/40 blur-2xl" />
          <div className="pointer-events-none absolute -top-8 right-28 h-24 w-24 rounded-full bg-[var(--brand-candle-gold)]/35 blur-2xl" />
        </section>

        <section className="space-y-5">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-3xl md:text-4xl">Colecciones destacadas</h2>
            <Link href="/colecciones" className="text-sm font-semibold uppercase tracking-[0.13em] hover:underline">
              Ver todas
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {homeContent.collections.map((collection, index) => (
              <article
                key={collection.title}
                className="fade-up overflow-hidden rounded-3xl border border-black/10 bg-[var(--brand-mist-100)]"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className={`h-36 w-full ${collectionToneClass[collection.tone]} bg-opacity-70`} />
                <div className="space-y-3 p-5">
                  <h3 className="font-display text-2xl leading-tight">{collection.title}</h3>
                  <p className="text-sm text-[var(--brand-ink-700)]">{collection.description}</p>
                  <Link href={collection.href} className="inline-block text-xs font-semibold uppercase tracking-[0.14em] underline">
                    Ver mas
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="font-display text-3xl md:text-4xl">Favoritos de la semana</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {homeContent.featured.map((product, index) => (
              <article
                key={product.name}
                className="fade-up rounded-2xl border border-black/10 bg-white p-5"
                style={{ animationDelay: `${120 + index * 120}ms` }}
              >
                <p className="text-xs uppercase tracking-[0.14em] text-[var(--brand-honey-amber)]">{product.category}</p>
                <h3 className="mt-2 font-display text-2xl leading-tight">{product.name}</h3>
                <p className="mt-3 text-lg font-semibold">{product.priceLabel}</p>
                <button
                  type="button"
                  className="mt-4 rounded-full border border-black/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors hover:bg-[var(--brand-mist-100)]"
                >
                  Agregar
                </button>
              </article>
            ))}
          </div>
        </section>

      </main>

      <footer className="border-t border-black/10 bg-[#e3e0df] px-5 py-10 md:px-8">
        <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[1.2fr_3fr_auto]">
          <div>
            <p className="font-display text-5xl leading-none">AlelyVers</p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[var(--brand-ink-700)]">
              Creaciones artesanales
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {homeContent.footer.columns.map((column) => (
              <div key={column.title} className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.12em]">{column.title}</p>
                <ul className="space-y-1.5 text-sm text-[var(--brand-ink-700)]">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link className="hover:text-[var(--brand-ink-900)] hover:underline" href={link.href}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex items-start gap-3">
            {homeContent.footer.socialLinks.map((item) => {
              const Icon = socialIcons[item.label as keyof typeof socialIcons];
              if (!Icon) return null;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="rounded-full border border-black/15 p-2 transition-colors hover:bg-[var(--brand-mist-100)]"
                >
                  <Icon size={16} />
                </Link>
              );
            })}
          </div>
        </div>
      </footer>
    </div>
  );
}
