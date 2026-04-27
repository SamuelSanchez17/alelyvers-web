import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingCart, User } from "lucide-react";
import { homeContent } from "../data/home-content";

export function SiteHeader() {
  return (
    <header className="border-b-2 border-[#FDB77E] bg-[#FEFEFE]">
      <nav className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3 md:px-6 md:py-4">
        
        <Link href="/" className="block shrink-0">
          <Image 
            src="/images/AlelyversLogo.svg" 
            alt={homeContent.brandName} 
            width={64} 
            height={64} 
            className="h-14 w-auto md:h-16" 
            priority
          />
        </Link>

        <ul className="order-3 flex w-full justify-center gap-6 overflow-x-auto py-2 text-sm font-medium md:order-2 md:w-auto md:gap-8 md:text-base">
          {homeContent.nav.map((item) => (
            <li key={item.label}>
              <Link 
                className="whitespace-nowrap text-[#030303] transition-all hover:text-[#FEB04B] hover:underline decoration-2 underline-offset-4" 
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="order-2 flex items-center gap-3 md:order-3">
          <Link
            href="/buscar"
            aria-label="Buscar productos"
            className="p-1 text-[#030303] transition-colors hover:text-[#FEB04B]"
          >
            <Search size={20} strokeWidth={1.5} />
          </Link>
          <Link
            href="/login"
            aria-label="Iniciar sesión"
            className="p-1 text-[#030303] transition-colors hover:text-[#FEB04B]"
          >
            <User size={20} strokeWidth={1.5} />
          </Link>
          <Link
            href="/cart"
            aria-label="Ir al carrito"
            className="p-1 text-[#030303] transition-colors hover:text-[#FEB04B]"
          >
            <ShoppingCart size={20} strokeWidth={1.5} />
          </Link>
        </div>
      </nav>
    </header>
  );
}