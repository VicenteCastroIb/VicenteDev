"use client";

import Image from "next/image";
import type { MouseEvent } from "react";

const HEADER_OFFSET = 70;

function scrollToProjects(e: MouseEvent) {
  e.preventDefault();
  const target = document.getElementById("projects");
  if (!target) return;
  const top = target.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[80vh] flex-col items-center justify-center px-[clamp(20px,6vw,50px)] pt-[150px] pb-[90px] text-center"
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
            "linear-gradient(180deg, rgba(10,21,32,.5) 0%, rgba(10,21,32,.72) 55%, rgba(0,0,0,.92) 100%)",
        }}
      />

      <div className="relative z-10 flex max-w-[840px] flex-col items-center gap-[22px]">
        <h1 className="m-0 font-[var(--font-sora)] leading-[1.05]">
          <span className="block text-[clamp(34px,6vw,64px)] font-light tracking-[1px] text-[#eaf2f5]">
            SOLUCIONES
          </span>
          <span className="block text-[clamp(44px,8vw,84px)] font-extrabold tracking-[1px] text-white">
            DIGITALES
          </span>
        </h1>

        <p className="mt-1 mb-1.5 max-w-[560px] text-base leading-[1.7] font-normal text-white/70">
          Desarrollador full-stack. Diseño y construyo productos web robustos, de un
          backend escalable a la interfaz pulida, con foco en rendimiento y detalle.
        </p>

        <a
          href="#projects"
          onClick={scrollToProjects}
          className="mt-2 cursor-pointer rounded-[2px] border border-white/35 bg-transparent px-10 py-4 text-xs font-bold tracking-[3px] text-[#eaf2f5] transition-[background,border-color,color] duration-250 hover:border-accent hover:bg-accent hover:text-[#08141d]"
        >
          LEARN MORE
        </a>

        <div
          onClick={scrollToProjects}
          role="button"
          tabIndex={0}
          aria-label="scroll down"
          className="animate-bounce-cue mt-[30px] cursor-pointer text-[#eaf2f5]/60"
        >
          <div className="h-3.5 w-3.5 rotate-45 border-r-2 border-b-2 border-current" />
        </div>
      </div>
    </section>
  );
}
