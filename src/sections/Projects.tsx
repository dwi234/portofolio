import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects, type Category } from "@/data/portfolio";
import { SectionHeading } from "@/components/Reveal";

const filters: ("Semua" | Category)[] = ["Semua", "Web App", "Mobile", "Design System"];

function ProjectCard({ p }: { p: (typeof projects)[number] }) {
  const ref = useRef<HTMLElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const onMove = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    setTilt({ x: ((e.clientY - r.top) / r.height - 0.5) * -8, y: ((e.clientX - r.left) / r.width - 0.5) * 8 });
  };
  return (
    <motion.article ref={ref} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }} onMouseMove={onMove} onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{ transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      className="glass glow-hover group flex flex-col overflow-hidden rounded-3xl">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={p.image} alt={`Tampilan proyek ${p.title}`} width={1024} height={768} loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs uppercase tracking-widest text-primary">{p.category}</p>
        <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">{p.tags.map((t) => <li key={t} className="rounded-full bg-secondary px-2.5 py-1 text-xs">{t}</li>)}</ul>
        <div className="mt-5 flex gap-2">
          <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-gradient-accent px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"><ExternalLink className="size-3.5" /> Live Demo</a>
          <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm transition-colors hover:bg-secondary"><Github className="size-3.5" /> GitHub</a>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Semua");
  const list = filter === "Semua" ? projects : projects.filter((p) => p.category === filter);
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 md:py-32">
      <SectionHeading eyebrow="03 — Proyek" title="Karya pilihan." />
      <div role="tablist" aria-label="Filter kategori" className="glass mb-10 inline-flex flex-wrap gap-1 rounded-full p-1.5">
        {filters.map((f) => (
          <button key={f} role="tab" aria-selected={filter === f} onClick={() => setFilter(f)}
            className={`relative rounded-full px-4 py-2 text-sm transition-colors ${filter === f ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>
            {filter === f && <motion.span layoutId="filter-pill" className="absolute inset-0 rounded-full bg-gradient-accent" />}
            <span className="relative">{f}</span>
          </button>
        ))}
      </div>
      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">{list.map((p) => <ProjectCard key={p.title} p={p} />)}</AnimatePresence>
      </motion.div>
    </section>
  );
}
