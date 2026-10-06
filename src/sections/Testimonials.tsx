import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/portfolio";
import { SectionHeading } from "@/components/Reveal";

export function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, [paused]);
  const t = testimonials[i]!;
  return (
    <section className="mx-auto max-w-4xl px-5 py-24 md:py-32" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <SectionHeading eyebrow="05 — Testimoni" title="Kata mereka." />
      <div className="glass relative min-h-[280px] overflow-hidden rounded-3xl p-8 md:p-12" aria-live="polite">
        <Quote className="mb-6 size-8 text-primary" />
        <AnimatePresence mode="wait">
          <motion.figure key={i} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.45 }}>
            <blockquote className="font-display text-2xl leading-snug md:text-3xl">"{t.quote}"</blockquote>
            <figcaption className="mt-6"><span className="font-semibold">{t.name}</span> <span className="text-muted-foreground">— {t.role}</span></figcaption>
          </motion.figure>
        </AnimatePresence>
        <div className="mt-8 flex gap-2">
          {testimonials.map((_, k) => (
            <button key={k} aria-label={`Testimoni ${k + 1}`} onClick={() => setI(k)}
              className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-gradient-accent" : "w-3 bg-border"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
