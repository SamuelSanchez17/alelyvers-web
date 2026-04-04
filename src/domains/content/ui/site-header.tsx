import Link from "next/link";
import { Search, ShoppingCart, User } from "lucide-react";
import { homeContent } from "../data/home-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-black/10 bg-[var(--brand-mist-100)]/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4 md:px-8">
        <Link href="/" className="font-display text-3xl tracking-wide">
          {homeContent.brandName}
        </Link>

        <ul className="order-3 flex w-full items-center gap-5 overflow-x-auto text-xs uppercase tracking-[0.16em] md:order-2 md:w-auto md:text-sm">
          {homeContent.nav.map((item) => (
            <li key={item.label}>
              <Link className="whitespace-nowrap transition-colors hover:text-[var(--brand-honey-amber)]" href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="order-2 flex items-center gap-2 md:order-3">
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
        </div>
      </nav>
    </header>
  );
}
