import Image from "next/image";
import Link from "next/link";
import { projects, type Project } from "@/lib/data";

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={project.href}
      className="hex-clip group relative block h-[222px] w-[252px] shrink-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[inset_0_0_0_1px_var(--color-accent)]"
    >
      <Image
        src={project.image}
        alt={project.name}
        fill
        sizes="252px"
        className="object-cover object-top"
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
        <div className="border border-white/50 px-[18px] py-2 text-[10px] font-bold tracking-[2px] text-white transition-[background,border-color,color] duration-250 group-hover:border-accent group-hover:bg-accent group-hover:text-[#08141d]">
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
      <div className="mb-16 text-center">
        <div className="mb-3.5 text-xs font-bold tracking-[4px] text-accent">
          EXPLORA MI TRABAJO
        </div>
        <h2 className="m-0 font-[var(--font-sora)] text-[clamp(26px,4vw,38px)] font-bold text-white">
          Proyectos &amp; Capacidades
        </h2>
      </div>

      <div className="flex max-w-[900px] flex-wrap justify-center gap-[26px]">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
