import Link from "next/link";
import { navLinks } from "@/lib/data";

const langToggles = [
  { code: "ESP", label: "Español" },
  { code: "ENG", label: "English" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-[76px] items-center justify-between gap-6 border-b border-white/8 bg-[#0a1520]/82 px-[clamp(20px,4vw,56px)] backdrop-blur-[10px]">
      <span className="flex-none font-[var(--font-sora)] text-sm font-semibold tracking-[2px] text-[#eaf2f5]/85">
        VICENTE CASTRO
      </span>

      <nav className="flex flex-wrap justify-center gap-[clamp(20px,3vw,44px)]">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="border-b border-transparent pb-1 text-xs font-semibold tracking-[2px] text-[#eaf2f5]/75 transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex flex-none items-center gap-3.5">
        {langToggles.map((lang) => (
          <a
            key={lang.code}
            href="#"
            aria-label={lang.label}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-[10px] font-bold tracking-[0.5px] text-[#eaf2f5]/75 transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            {lang.code}
          </a>
        ))}
      </div>
    </header>
  );
}
