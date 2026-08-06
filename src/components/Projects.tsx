"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { projects, DEFAULT_PROJECT_IMAGE_POSITION, type Project } from "@/lib/data";

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={project.href}
      className="hex-clip group relative block h-[222px] w-[252px] shrink-0 overflow-hidden shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[inset_0_0_0_1px_var(--color-accent)] focus-visible:-translate-y-1.5 focus-visible:shadow-[inset_0_0_0_1px_var(--color-accent)] focus-visible:outline-none"
    >
      <Image
        src={project.image}
        alt={project.name}
        fill
        sizes="252px"
        quality={100}
        style={{ objectPosition: project.imagePosition ?? DEFAULT_PROJECT_IMAGE_POSITION }}
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-110 group-focus-visible:scale-110"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,21,32,.1) 0%, rgba(10,21,32,.8) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 52%, rgba(6,13,20,.65) 100%)",
        }}
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-end gap-3 p-[22px] text-center">
        <div className="font-[var(--font-sora)] text-sm font-bold tracking-[1.5px] text-white">
          {project.name}
        </div>
        <div className="border border-white/50 px-[18px] py-2 text-[10px] font-bold tracking-[2px] text-white transition-all duration-300 group-hover:scale-105 group-hover:border-accent group-hover:bg-accent group-hover:text-[#08141d] group-focus-visible:border-accent group-focus-visible:bg-accent group-focus-visible:text-[#08141d]">
          LEARN MORE
        </div>
      </div>
    </Link>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center px-[clamp(20px,6vw,56px)] pt-[110px] pb-[130px]"
      style={{ background: "linear-gradient(180deg, #000000, #17273C, #000409)" }}
    >
      <Reveal className="mb-16 text-center">
        <div className="mb-3.5 text-xs font-bold tracking-[4px] text-accent">
          EXPLORA MI TRABAJO
        </div>
        <h2 className="m-0 font-[var(--font-sora)] text-[clamp(26px,4vw,38px)] font-bold text-white">
          Proyectos &amp; Capacidades
        </h2>
      </Reveal>

      <div className="flex max-w-[900px] flex-wrap justify-center gap-[26px]">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={index * 120}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
