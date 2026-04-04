import Link from "next/link";
import type { CollectionContent } from "../types/catalog";

interface CollectionPageProps {
  content: CollectionContent;
}

export function CollectionPage({ content }: CollectionPageProps) {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-10 md:px-8 md:py-14">
      <div className="rounded-3xl border border-black/10 bg-white p-6 md:p-10">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand-honey-amber)]">{content.badge}</p>
        <h1 className="mt-3 font-display text-4xl leading-tight md:text-5xl">{content.title}</h1>
        <p className="mt-3 max-w-2xl text-sm text-[var(--brand-ink-700)] md:text-base">{content.subtitle}</p>
      </div>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {content.products.map((product) => (
          <article key={product.id} className="rounded-2xl border border-black/10 bg-[var(--brand-mist-100)] p-5">
            <h2 className="font-display text-2xl leading-tight">{product.name}</h2>
            <p className="mt-3 text-sm text-[var(--brand-ink-700)]">{product.shortDescription}</p>
            <p className="mt-4 text-lg font-semibold">{product.priceLabel}</p>
            <button
              type="button"
              className="mt-5 rounded-full border border-black/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors hover:bg-white"
            >
              Agregar al carrito
            </button>
          </article>
        ))}
      </section>

      <div className="mt-9">
        <Link
          href="/colecciones"
          className="inline-flex rounded-full border border-black/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors hover:bg-[var(--brand-mist-100)]"
        >
          Ver otras colecciones
        </Link>
      </div>
    </main>
  );
}
