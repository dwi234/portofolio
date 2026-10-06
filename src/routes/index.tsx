import { createFileRoute } from "@tanstack/react-router";
import { MotionConfig } from "framer-motion";
import { Toaster } from "sonner";
import { CursorFollower, Navbar, ScrollProgress } from "@/components/Chrome";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Testimonials } from "@/sections/Testimonials";
import { Contact, Footer } from "@/sections/Contact";

const title = "Dwi Prastowo — Frontend Developer & UI/UX Designer";
const description = "Portofolio Dwi Prastowo, frontend developer dan UI/UX designer di Yogyakarta yang membangun antarmuka web cepat, rapi, dan aksesibel.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">Lewati ke konten</a>
      <ScrollProgress />
      <CursorFollower />
      <Navbar />
      <main id="main" className="overflow-x-clip">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Toaster position="bottom-right" theme="system" toastOptions={{ className: "glass" }} />
    </MotionConfig>
  );
}
