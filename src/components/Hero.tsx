"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/lib/i18n";

const HEADER_OFFSET = 70;

function scrollToProjects() {
  const target = document.getElementById("projects");
  if (!target) return;
  const top = target.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[80vh] flex-col items-center justify-center px-[clamp(20px,6vw,50px)] pt-[150px] pb-[90px] text-center"
    >
      <Image
        src="/hero-photo.jpg"
        alt="Cordillera nevada al anochecer"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,21,32,.5) 40%, rgba(10,21,32,.72) 90%, rgba(0,0,0,.92) 100%)",
        }}
      />

      <Reveal delay={100} className="relative z-10 flex max-w-[840px] flex-col items-center gap-[22px]">
        <h1 className="m-0 font-[var(--font-sora)] leading-[1.05]">
          <span className="block text-[clamp(34px,6vw,64px)] font-light tracking-[1px] text-[#eaf2f5]">
            {t.hero.lineTop}
          </span>
          <span className="block text-[clamp(44px,8vw,84px)] font-extrabold tracking-[1px] text-white">
            {t.hero.lineBottom}
          </span>
        </h1>

        <p className="mt-1 mb-1.5 max-w-[560px] text-base leading-[1.7] font-normal text-white/70">
          {t.hero.subtitle}
        </p>

        <button
          type="button"
          onClick={scrollToProjects}
          className="mt-2 cursor-pointer rounded-[2px] border border-white/35 bg-transparent px-10 py-4 text-xs font-bold tracking-[3px] text-[#eaf2f5] transition-all duration-300 hover:scale-105 hover:border-accent hover:bg-accent hover:text-[#08141d] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#08141d]"
        >
          {t.hero.cta}
        </button>

        <button
          type="button"
          onClick={scrollToProjects}
          aria-label={t.hero.scrollAria}
          className="animate-bounce-cue mt-[30px] cursor-pointer text-[#eaf2f5]/60 transition-[color,transform] duration-300 hover:scale-125 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#08141d]"
        >
          <div className="h-3.5 w-3.5 rotate-45 border-r-2 border-b-2 border-current" />
        </button>
      </Reveal>
    </section>
  );
}
