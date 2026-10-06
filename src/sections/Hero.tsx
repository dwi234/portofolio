import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, Download, Github, Linkedin, Mail, Dribbble } from "lucide-react";
import { toast } from "sonner";
import { profile } from "@/data/portfolio";

function useTyping(words: string[]) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = words[i % words.length]!;
    const t = setTimeout(() => {
      if (!del && text === word) return setDel(true);
      if (del && text === "") { setDel(false); return setI((v) => v + 1); }
      setText(word.slice(0, text.length + (del ? -1 : 1)));
    }, !del && text === word ? 1600 : del ? 40 : 85);
    return () => clearTimeout(t);
  }, [text, del, i, words]);
  return text;
}

const line = { hidden: { y: "110%" }, show: (i: number) => ({ y: 0, transition: { duration: 1, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] as const } }) };

export const socials = [
  { href: profile.github, label: "GitHub", Icon: Github },
  { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: profile.dribbble, label: "Dribbble", Icon: Dribbble },
  { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
];

export function Hero() {
  const typed = useTyping(profile.roles);
  return (
    <section id="top" className="noise relative flex min-h-[100svh] items-center overflow-hidden px-5 pt-28 pb-16">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="animate-aurora absolute -left-[10%] top-[5%] size-[55vw] rounded-full bg-violet opacity-30 blur-[120px]" />
        <div className="animate-aurora-slow absolute -right-[10%] top-[25%] size-[45vw] rounded-full bg-cyan opacity-25 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--background)_80%)]" />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
          className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-muted-foreground">
          <span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-75" /><span className="relative size-2 rounded-full bg-success" /></span>
          Tersedia untuk proyek baru
        </motion.div>

        <h1 className="font-display text-[clamp(3rem,11vw,9.5rem)] font-bold leading-[0.9]">
          {["Dwi", "Prastowo."].map((w, i) => (
            <span key={w} className="block overflow-hidden pb-2">
              <motion.span custom={i} variants={line} initial="hidden" animate="show" className={`block ${i === 1 ? "text-gradient" : ""}`}>{w}</motion.span>
            </span>
          ))}
        </h1>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-xl">
            <p className="font-display text-2xl md:text-3xl" aria-live="polite">
              {typed}<span className="animate-blink ml-0.5 text-primary">|</span>
            </p>
            <p className="mt-4 text-lg text-muted-foreground">{profile.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-gradient-accent px-6 py-3.5 font-medium text-primary-foreground transition-transform hover:scale-[1.03] active:scale-95">
                Lihat Proyek <ArrowDownRight className="size-4 transition-transform group-hover:rotate-[-45deg]" />
              </a>
              <button onClick={() => toast("CV sedang disiapkan", { description: "Hubungi saya lewat email untuk versi terbaru." })}
                className="glass glow-hover inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-medium">
                <Download className="size-4" /> Unduh CV
              </button>
            </div>
          </div>
          <ul className="flex gap-2 md:flex-col">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noreferrer" aria-label={label}
                  className="glass glow-hover grid size-11 place-items-center rounded-full text-muted-foreground hover:text-foreground">
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
