import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useMotionValue } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

export const navItems = [
  { id: "about", label: "Tentang" },
  { id: "skills", label: "Skill" },
  { id: "projects", label: "Proyek" },
  { id: "experience", label: "Pengalaman" },
  { id: "contact", label: "Kontak" },
];

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  return <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-accent" />;
}

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [active, setActive] = useState("");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    navItems.forEach((n) => { const el = document.getElementById(n.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-3"
    >
      <nav aria-label="Navigasi utama" className="glass flex items-center gap-1 rounded-full p-1.5 shadow-2xl">
        <a href="#top" className="px-3 font-display text-sm font-bold">DP<span className="text-gradient">.</span></a>
        <ul className="hidden items-center sm:flex">
          {navItems.map((n) => (
            <li key={n.id} className="relative">
              <a href={`#${n.id}`} className={`relative z-10 block rounded-full px-3.5 py-2 text-sm transition-colors ${active === n.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                {n.label}
              </a>
              {active === n.id && (
                <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-secondary" transition={{ type: "spring", bounce: 0.2, duration: 0.5 }} />
              )}
            </li>
          ))}
        </ul>
        <a href="#contact" className="rounded-full px-3 py-2 text-sm text-muted-foreground sm:hidden">Kontak</a>
        <button onClick={toggle} aria-label={theme === "dark" ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
          className="grid size-9 place-items-center rounded-full bg-secondary text-foreground transition-transform hover:scale-105">
          {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </button>
      </nav>
    </motion.header>
  );
}

export function CursorFollower() {
  const x = useMotionValue(-100), y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 300, damping: 30 }), sy = useSpring(y, { stiffness: 300, damping: 30 });
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);
    const move = (e: MouseEvent) => {
      x.set(e.clientX); y.set(e.clientY);
      setHover(!!(e.target as HTMLElement).closest("a,button,input,textarea,[role=tab]"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;
  return (
    <motion.div aria-hidden style={{ x: sx, y: sy }} className="pointer-events-none fixed left-0 top-0 z-[70] hidden md:block">
      <motion.div animate={{ scale: hover ? 1.8 : 1 }} className="-ml-4 -mt-4 size-8 rounded-full border border-primary/70 bg-primary/10 backdrop-blur-[2px]" />
    </motion.div>
  );
}
