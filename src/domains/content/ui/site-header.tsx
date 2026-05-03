"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, ShoppingCart, User } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useAuth } from "@/lib/supabase/hooks/useAuth";
import { homeContent } from "../data/home-content";

export function SiteHeader() {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const supabase = useMemo(() => createClient(), []);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [signOutError, setSignOutError] = useState<string | null>(null);

  const displayName = user?.user_metadata?.full_name ?? user?.email ?? "Usuario";

  const handleSignOut = async () => {
    if (isSigningOut) return;
    setIsSigningOut(true);
    setSignOutError(null);

    try {
      const { error } = await supabase.auth.signOut({ scope: "local" });

      if (error) {
        setSignOutError("No se pudo cerrar sesion.");
        return;
      }

      router.push("/");
      router.refresh();
    } finally {
      setIsSigningOut(false);
    }
  };

  return (
    <header className="bg-[#FEFEFE] h-20 md:h-24">
      <nav className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3 md:px-6 md:py-4">
        
        <Link href="/" className="block shrink-0">
          <Image 
            src="/images/AlelyversLogo.svg" 
            alt={homeContent.brandName} 
            width={64} 
            height={64} 
            className="h-14 w-auto md:h-20" 
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
          {!isLoading && user ? (
            <div className="flex items-center gap-3">
              <span className="hidden text-sm font-semibold text-[#030303] md:inline">
                {displayName}
              </span>
              <button
                type="button"
                onClick={handleSignOut}
                disabled={isSigningOut}
                className="rounded-full border border-black/15 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[#030303] transition-colors hover:text-[#FEB04B] disabled:opacity-60"
              >
                {isSigningOut ? "Saliendo..." : "Cerrar sesion"}
              </button>
            </div>
          ) : (
            <Link
              href="/auth/login"
              aria-label="Iniciar sesión"
              className="p-1 text-[#030303] transition-colors hover:text-[#FEB04B]"
            >
              <User size={20} strokeWidth={1.5} />
            </Link>
          )}
          {signOutError ? (
            <span className="text-xs text-[#b42318]" role="status" aria-live="polite">
              {signOutError}
            </span>
          ) : null}
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