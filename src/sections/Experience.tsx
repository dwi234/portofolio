import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { experiences } from "@/data/portfolio";
import { Reveal, SectionHeading } from "@/components/Reveal";

export function Experience() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  return (
    <section id="experience" className="mx-auto max-w-4xl scroll-mt-24 px-5 py-24 md:py-32">
      <SectionHeading eyebrow="04 — Perjalanan" title="Pengalaman & pendidikan." />
      <ol ref={ref} className="relative space-y-10 pl-8 md:pl-12">
        <span aria-hidden className="absolute left-[7px] top-2 bottom-2 w-px bg-border md:left-[11px]" />
        <motion.span aria-hidden style={{ scaleY: scrollYProgress }} className="absolute left-[7px] top-2 bottom-2 w-px origin-top bg-gradient-accent md:left-[11px]" />
        {experiences.map((e, i) => (
          <li key={e.title} className="relative">
            <span aria-hidden className="absolute -left-8 top-1.5 size-4 rounded-full border-2 border-primary bg-background md:-left-12 md:size-6" />
            <Reveal delay={i * 0.05} className="glass glow-hover rounded-3xl p-6">
              <p className="text-sm text-primary">{e.period}</p>
              <h3 className="mt-1 text-xl font-semibold">{e.title}</h3>
              <p className="text-muted-foreground">{e.org}</p>
              <p className="mt-3 text-sm text-muted-foreground">{e.desc}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
