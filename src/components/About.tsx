export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center gap-[26px] bg-[#000409] px-[clamp(20px,6vw,56px)] py-[100px] text-center"
    >
      <div className="text-xs font-bold tracking-[4px] text-accent">QUIÉN SOY</div>

      <div className="h-px w-[min(734px,90vw)] bg-white/25" />

      <p className="m-0 max-w-[680px] font-[var(--font-sora)] text-[clamp(19px,2.6vw,22px)] leading-[1.6] font-light text-quote">
        Soy Vicente Castro, estudiante de Analista Programador y en formación continua
        en 4Geeks Academy. Desarrollo soluciones full-stack: desde bases de datos y
        APIs hasta interfaces que la gente disfruta usar. Combino bases técnicas
        sólidas con aprendizaje constante para construir productos confiables.
      </p>

      <div className="h-px w-[min(902px,90vw)] bg-white/25" />
    </section>
  );
}
