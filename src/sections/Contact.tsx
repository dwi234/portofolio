import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowUp, Send } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { socials } from "./Hero";

const schema = z.object({
  name: z.string().trim().min(2, "Nama minimal 2 karakter").max(80),
  email: z.string().trim().email("Format email tidak valid").max(160),
  message: z.string().trim().min(10, "Pesan minimal 10 karakter").max(1000),
});
type Values = z.infer<typeof schema>;

const field = "w-full rounded-2xl border bg-background/40 px-4 py-3.5 outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary";

export function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<Values>({ resolver: zodResolver(schema) });
  const onSubmit = async (v: Values) => {
    await new Promise((r) => setTimeout(r, 800));
    toast.success(`Terima kasih, ${v.name.split(" ")[0]}!`, { description: "Pesanmu sudah terkirim. Saya akan membalas dalam 1–2 hari." });
    reset();
  };
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 md:py-32">
      <SectionHeading eyebrow="06 — Kontak" title="Mari bikin sesuatu yang keren." />
      <div className="grid gap-6 md:grid-cols-[1fr_1.3fr]">
        <Reveal className="flex flex-col justify-between gap-8">
          <p className="text-lg text-muted-foreground">Punya ide proyek, tawaran kerja, atau sekadar ingin menyapa? Kotak masuk saya selalu terbuka.</p>
          <a href={`mailto:${profile.email}`} className="font-display text-2xl font-semibold text-gradient md:text-3xl">{profile.email}</a>
          <ul className="flex gap-2">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}><a href={href} target="_blank" rel="noreferrer" aria-label={label} className="glass glow-hover grid size-11 place-items-center rounded-full"><Icon className="size-4" /></a></li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="glass space-y-4 rounded-3xl p-6 md:p-8">
            {([
              ["name", "Nama", "Nama lengkapmu"],
              ["email", "Email", "kamu@email.com"],
            ] as const).map(([k, l, ph]) => (
              <div key={k}>
                <label htmlFor={k} className="mb-1.5 block text-sm font-medium">{l}</label>
                <input id={k} type={k === "email" ? "email" : "text"} placeholder={ph} aria-invalid={!!errors[k]} {...register(k)} className={field} />
                {errors[k] && <p className="mt-1.5 text-sm text-destructive">{errors[k]?.message}</p>}
              </div>
            ))}
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Pesan</label>
              <textarea id="message" rows={5} placeholder="Ceritakan sedikit tentang proyekmu…" aria-invalid={!!errors.message} {...register("message")} className={`${field} resize-none`} />
              {errors.message && <p className="mt-1.5 text-sm text-destructive">{errors.message.message}</p>}
            </div>
            <button type="submit" disabled={isSubmitting} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-accent px-6 py-3.5 font-medium text-primary-foreground transition-transform hover:scale-[1.02] active:scale-95 disabled:opacity-60">
              {isSubmitting ? "Mengirim…" : <>Kirim Pesan <Send className="size-4" /></>}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl items-center justify-between border-t px-5 py-8 text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} Dwi Prastowo. Dibuat dengan ☕ di Jogja.</p>
      <a href="#top" aria-label="Kembali ke atas" className="glass glow-hover grid size-10 place-items-center rounded-full text-foreground"><ArrowUp className="size-4" /></a>
    </footer>
  );
}
