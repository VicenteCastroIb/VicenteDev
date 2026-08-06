import Link from "next/link";
import { footerColumns, socialLinks, contact } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="border-t border-white/8 bg-[#000409] pt-20 px-[clamp(20px,6vw,56px)]"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-11 pb-14">
        <div className="flex flex-col gap-4">
          <div className="font-[var(--font-sora)] text-[17px] font-extrabold">
            [<span className="text-accent">VC</span>]
          </div>
          <p className="m-0 max-w-[240px] text-[13px] leading-[1.8] text-[#eaf2f5]/55">
            Desarrollador full-stack construyendo productos web rápidos, escalables y
            bien diseñados.
          </p>
        </div>

        {footerColumns.map((column) => (
          <div key={column.heading} className="flex flex-col gap-3.5">
            <div className="mb-1.5 text-xs font-bold tracking-[2px] text-white">
              {column.heading}
            </div>
            {column.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[13px] text-[#eaf2f5]/55 transition-colors duration-200 hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}

        <div className="flex flex-col gap-3.5">
          <div className="mb-1.5 text-xs font-bold tracking-[2px] text-white">
            CONTACTO
          </div>
          <a
            href={`mailto:${contact.email}`}
            className="text-[13px] text-[#eaf2f5]/55 transition-colors duration-200 hover:text-accent"
          >
            {contact.email}
          </a>
          <a
            href={contact.phoneHref}
            className="text-[13px] text-[#eaf2f5]/55 transition-colors duration-200 hover:text-accent"
          >
            {contact.phoneDisplay}
          </a>
          <span className="text-[13px] text-[#eaf2f5]/40">{contact.location}</span>
          <div className="mt-1.5 flex gap-2.5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.ariaLabel}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-[9px] font-bold text-[#eaf2f5]/70 transition-colors duration-200 hover:border-accent hover:text-accent"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-3 border-t border-white/8 px-[clamp(20px,6vw,56px)] py-[22px] text-xs text-[#eaf2f5]/40">
        <span>© {year} Vicente Castro. Todos los derechos reservados.</span>
        <div className="flex gap-[18px]">
          <Link href="#" className="text-[#eaf2f5]/40 transition-colors duration-200 hover:text-accent">
            Términos de Uso
          </Link>
          <Link href="#" className="text-[#eaf2f5]/40 transition-colors duration-200 hover:text-accent">
            Privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
