import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import { homeContent } from "../data/home-content";

export function SiteFooter() {
  const socialIcons = {
    Instagram,
    Facebook,
  };

  return (
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
  );
}
