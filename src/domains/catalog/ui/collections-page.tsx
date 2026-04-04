import Link from "next/link";
import { collectionsIndex } from "../data/catalog-content";

export function CollectionsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-10 md:px-8 md:py-14">
      <div className="rounded-3xl border border-black/10 bg-white p-6 md:p-10">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand-honey-amber)]">Mapa de colecciones</p>
        <h1 className="mt-3 font-display text-4xl leading-tight md:text-5xl">Explora por categoria</h1>
        <p className="mt-3 max-w-2xl text-sm text-[var(--brand-ink-700)] md:text-base">
          Elegimos piezas clave por tipo de producto para que navegues rapido.
        </p>
      </div>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {collectionsIndex.map((collection) => (
          <article key={collection.slug} className="rounded-2xl border border-black/10 bg-[var(--brand-mist-100)] p-5">
            <h2 className="font-display text-2xl leading-tight">{collection.title}</h2>
            <p className="mt-3 text-sm text-[var(--brand-ink-700)]">{collection.description}</p>
            <Link
              href={collection.href}
              className="mt-5 inline-flex rounded-full border border-black/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors hover:bg-white"
            >
              Ver productos
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
