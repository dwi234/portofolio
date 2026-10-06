import { Layout, Server, Wrench } from "lucide-react";
import { marqueeTech, skillGroups } from "@/data/portfolio";
import { Reveal, SectionHeading } from "@/components/Reveal";

const icons = [Layout, Server, Wrench];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5"><SectionHeading eyebrow="02 — Skill" title="Alat yang saya pakai setiap hari." /></div>
      <div className="relative mb-14 overflow-hidden py-2 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="animate-marquee flex w-max gap-4 hover:[animation-play-state:paused]">
          {[...marqueeTech, ...marqueeTech].map((t, i) => (
            <span key={i} aria-hidden={i >= marqueeTech.length} className="glass whitespace-nowrap rounded-full px-6 py-3 font-display text-lg text-muted-foreground">{t}</span>
          ))}
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl gap-4 px-5 md:grid-cols-3">
        {skillGroups.map((g, i) => {
          const Icon = icons[i]!;
          return (
            <Reveal key={g.title} delay={i * 0.1} className="glass glow-hover rounded-3xl p-7">
              <div className="mb-6 flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-gradient-accent text-primary-foreground"><Icon className="size-5" /></span>
                <h3 className="text-xl font-semibold">{g.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((s) => <li key={s} className="rounded-full border px-3 py-1 text-sm text-muted-foreground">{s}</li>)}
              </ul>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
