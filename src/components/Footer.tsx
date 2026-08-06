"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { footerColumns, socialLinks, contact } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

const linkClass =
  "text-[13px] text-[#eaf2f5]/55 transition-all duration-200 hover:translate-x-0.5 hover:text-accent focus-visible:translate-x-0.5 focus-visible:text-accent focus-visible:outline-none";

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer
      id="contact"
      className="border-t border-white/8 bg-[#000409] pt-20 px-[clamp(20px,6vw,56px)]"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-11 pb-14">
        <Reveal className="flex flex-col gap-4">
          <div className="font-[var(--font-sora)] text-[17px] font-extrabold">
            [<span className="text-accent">VC</span>]
          </div>
          <p className="m-0 max-w-[240px] text-[13px] leading-[1.8] text-[#eaf2f5]/55">
            {t.footer.tagline}
          </p>
        </Reveal>

        {footerColumns.map((column, index) => (
          <Reveal
            key={column.headingKey}
            delay={(index + 1) * 80}
            className="flex flex-col gap-3.5"
          >
            <div className="mb-1.5 text-xs font-bold tracking-[2px] text-white">
              {t.footer[column.headingKey]}
            </div>
            {column.links.map((link) => (
              <Link key={link.key} href={link.href} className={linkClass}>
                {t.footer[column.linksKey][link.key as keyof (typeof t.footer)[typeof column.linksKey]]}
              </Link>
            ))}
          </Reveal>
        ))}

        <Reveal delay={(footerColumns.length + 1) * 80} className="flex flex-col gap-3.5">
          <div className="mb-1.5 text-xs font-bold tracking-[2px] text-white">
            {t.footer.contactHeading}
          </div>
          <a
            href={contact.emailHref}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            {contact.email}
          </a>
          <a href={contact.phoneHref} className={linkClass}>
            {contact.phoneDisplay}
          </a>
          <span className="text-[13px] text-[#eaf2f5]/40">{t.contact.location}</span>
          <div className="mt-1.5 flex gap-2.5">
            {socialLinks.map((social) => {
              const isExternal = social.href.startsWith("http");
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.ariaLabel}
                  {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-[9px] font-bold text-[#eaf2f5]/70 transition-all duration-200 hover:scale-110 hover:border-accent hover:text-accent active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#000409]"
                >
                  {social.label}
                </a>
              );
            })}
          </div>
        </Reveal>
      </div>

      <div className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-3 border-t border-white/8 px-[clamp(20px,6vw,56px)] py-[22px] text-xs text-[#eaf2f5]/40">
        <span>
          © {year} Vicente Castro. {t.footer.rights}
        </span>
        <div className="flex gap-[18px]">
          <Link href="#" className="text-[#eaf2f5]/40 transition-colors duration-200 hover:text-accent focus-visible:text-accent focus-visible:outline-none">
            {t.footer.terms}
          </Link>
          <Link href="#" className="text-[#eaf2f5]/40 transition-colors duration-200 hover:text-accent focus-visible:text-accent focus-visible:outline-none">
            {t.footer.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
}
