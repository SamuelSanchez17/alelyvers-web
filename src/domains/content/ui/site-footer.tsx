import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";
import { homeContent } from "../data/home-content";

export function SiteFooter() {
  const socialIcons = {
    Instagram,
    Facebook,
  };

  return (
     <footer className="bg-[#FEFEFE] px-4 py-8 md:px-6 md:py-10">
      <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[1.2fr_3fr_auto]">
        
        <div>
          <Image 
            src="/images/AlelyversLogo.svg" 
            alt={homeContent.brandName} 
            width={70} 
            height={70} 
            className="h-16 w-auto md:h-20" 
          />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {homeContent.footer.columns.map((column) => (
            <div key={column.title}>
              <p className="mb-3 text-sm font-semibold text-[#030303]">
                {column.title}
              </p>
              <ul className="space-y-2 text-sm text-[#4a4a4a]">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      className="transition-colors hover:text-[#FEB04B] hover:underline underline-offset-2" 
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex items-start gap-4">
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
                className="text-[#030303] transition-colors hover:text-[#FEB04B]"
              >
                <Icon size={22} strokeWidth={1.5} />
              </Link>
            );
          })}
        </div>
      </div>
      
      <div className="mx-auto mt-8 max-w-6xl pt-6 text-center text-xs text-[#4a4a4a]">
        <p>© {new Date().getFullYear()} {homeContent.brandName} · Hecho a mano con Amor</p>
      </div>
    </footer>
  );
}