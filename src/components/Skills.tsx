import Reveal from "@/components/Reveal";
import { stackSkills, certifications } from "@/lib/data";

const CHIP_STAGGER_MS = 40;
const CHIP_STAGGER_CAP_MS = 400;

function ChipGroup({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="flex flex-col items-center gap-10">
      <Reveal className="text-xs font-bold tracking-[4px] text-accent">{label}</Reveal>
      <div className="flex max-w-[900px] flex-wrap justify-center gap-3.5">
        {items.map((item, index) => (
          <Reveal key={item} delay={Math.min(index * CHIP_STAGGER_MS, CHIP_STAGGER_CAP_MS)}>
            <span className="inline-block cursor-default rounded-[20px] border border-white/15 px-5 py-2.5 text-xs font-semibold tracking-[1.5px] text-[#eaf2f5]/80 transition-all duration-200 hover:scale-105 hover:border-accent hover:text-accent active:scale-95">
              {item}
            </span>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col items-center gap-14 px-[clamp(20px,6vw,56px)] pt-[70px] pb-[90px]"
      style={{ background: "linear-gradient(180deg, #000409, #17273C, #000409)" }}
    >
      <ChipGroup label="STACK PRINCIPAL" items={stackSkills} />
      <div className="h-px w-[146px] bg-white/20" />
      <ChipGroup label="CERTIFICACIONES" items={certifications} />
    </section>
  );
}
