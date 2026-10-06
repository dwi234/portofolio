import { MapPin, Briefcase, Code2, Sparkles } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import { facts, profile } from "@/data/portfolio";
import { Reveal, SectionHeading } from "@/components/Reveal";

const icons = [MapPin, Briefcase, Code2, Sparkles];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 md:py-32">
      <SectionHeading eyebrow="01 — Tentang" title="Desain yang terasa, kode yang rapi." />
      <div className="grid auto-rows-[minmax(140px,auto)] gap-4 md:grid-cols-4">
        <Reveal className="gradient-border overflow-hidden rounded-3xl md:col-span-2 md:row-span-3">
          <img src={profileImg} alt="Foto Dwi Prastowo" width={768} height={960} loading="lazy" className="h-full w-full rounded-3xl object-cover" />
        </Reveal>
        <Reveal delay={0.1} className="glass rounded-3xl p-7 md:col-span-2 md:row-span-2">
          <p className="text-lg leading-relaxed md:text-xl">{profile.bio}</p>
          <p className="mt-4 text-muted-foreground">Di luar kerja, saya suka fotografi jalanan, ngopi di kedai lokal, dan berbagi ilmu di komunitas developer Jogja.</p>
        </Reveal>
        {facts.map((f, i) => {
          const Icon = icons[i]!;
          const status = f.label === "Status";
          return (
            <Reveal key={f.label} delay={0.15 + i * 0.07} className={`glass glow-hover flex flex-col justify-between rounded-3xl p-6 ${i < 2 ? "" : "md:col-span-1"}`}>
              <Icon className={`size-5 ${status ? "text-success" : "text-primary"}`} />
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{f.label}</p>
                <p className={`mt-1 font-display text-lg font-semibold ${status ? "text-success" : ""}`}>{f.value}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
