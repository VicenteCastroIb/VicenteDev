import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate flex flex-col items-center gap-[26px] overflow-hidden bg-[#000409] px-[clamp(20px,6vw,56px)] py-[100px] text-center"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full"
      />

      <Reveal className="text-xs font-bold tracking-[4px] text-accent">QUIÉN SOY</Reveal>

      <Reveal delay={80} className="h-px w-[min(734px,90vw)] bg-white/25" />

      <Reveal delay={140}>
        <p className="m-0 max-w-[680px] font-[var(--font-sora)] text-[clamp(19px,2.6vw,22px)] leading-[1.6] font-light text-quote">
          Soy Vicente Castro, estudiante de Analista Programador y en formación continua
          en 4Geeks Academy. Desarrollo soluciones full-stack: desde bases de datos y
          APIs hasta interfaces que la gente disfruta usar. Combino bases técnicas
          sólidas con aprendizaje constante para construir productos confiables.
        </p>
      </Reveal>

      <Reveal delay={200} className="h-px w-[min(902px,90vw)] bg-white/25" />
    </section>
  );
}
