import { motion, type HTMLMotionProps } from "framer-motion";

export function Reveal({ delay = 0, ...props }: HTMLMotionProps<"div"> & { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    />
  );
}

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <p className="mb-3 font-display text-sm uppercase tracking-[0.25em] text-gradient">{eyebrow}</p>
      <h2 className="text-4xl font-bold md:text-6xl">{title}</h2>
    </Reveal>
  );
}
