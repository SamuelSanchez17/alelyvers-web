"use client";

import { usePathname } from "next/navigation";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type AppChromeProps = Readonly<{
  children: React.ReactNode;
}>;

export function AppChrome({ children }: AppChromeProps) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");

  if (isAdminRoute) {
    return children;
  }

  return (
    <>
      <SiteHeader />
      <div className="flex-1 pb-10 md:pb-14">{children}</div>
      <SiteFooter />
    </>
  );
}