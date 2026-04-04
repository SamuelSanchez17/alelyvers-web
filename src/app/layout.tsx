import type { Metadata } from "next";
import { Cormorant_Garamond, Nunito_Sans } from "next/font/google";
import { SiteFooter } from "@/domains/content/ui/site-footer";
import { SiteHeader } from "@/domains/content/ui/site-header";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Nunito_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AlelyVers",
  description: "Velas, resina y macetas artesanales para espacios con identidad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${displayFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--brand-mist-50)] text-[var(--brand-ink-900)]">
        <SiteHeader />
        <div className="flex-1 pb-10 md:pb-14">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
