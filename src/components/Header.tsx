"use client";

import Link from "next/link";
import { navLinks } from "@/lib/data";
import { useLanguage, type Locale } from "@/lib/i18n";

const langToggles: { code: Locale; label: string }[] = [
  { code: "es", label: "Español" },
  { code: "en", label: "English" },
];

export default function Header() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-[76px] items-center justify-between gap-6 border-b border-white/8 bg-[#0a1520]/82 px-[clamp(20px,4vw,56px)] backdrop-blur-[10px]">
      <span className="flex-none font-[var(--font-sora)] text-sm font-semibold tracking-[2px] text-[#eaf2f5]/85 transition-colors duration-300 hover:text-accent">
        VICENTE CASTRO
      </span>

      <nav className="flex flex-wrap justify-center gap-[clamp(20px,3vw,44px)]">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group relative pb-1 text-xs font-semibold tracking-[2px] text-[#eaf2f5]/75 transition-colors duration-200 hover:text-accent focus-visible:text-accent focus-visible:outline-none"
          >
            {t.nav[link.key]}
            <span className="absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100" />
          </Link>
        ))}
      </nav>

      <div className="flex flex-none items-center gap-3.5">
        {langToggles.map((lang) => {
          const isActive = locale === lang.code;
          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => setLocale(lang.code)}
              aria-label={lang.label}
              aria-pressed={isActive}
              className={`flex h-8 w-8 items-center justify-center rounded-full border text-[10px] font-bold tracking-[0.5px] transition-all duration-200 hover:scale-110 hover:border-accent hover:text-accent active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1520] ${
                isActive
                  ? "border-accent text-accent"
                  : "border-white/20 text-[#eaf2f5]/75"
              }`}
            >
              {lang.code.toUpperCase()}
            </button>
          );
        })}
      </div>
    </header>
  );
}
