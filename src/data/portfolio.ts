import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

export const profile = {
  name: "Dwi Prastowo",
  roles: ["Frontend Developer", "UI/UX Designer", "Design Engineer"],
  location: "Yogyakarta, Indonesia",
  email: "halo@dwiprastowo.dev",
  github: "https://github.com/dwiprastowo",
  linkedin: "https://linkedin.com/in/dwiprastowo",
  dribbble: "https://dribbble.com/dwiprastowo",
  tagline:
    "Saya merancang dan membangun antarmuka web yang cepat, rapi, dan menyenangkan dipakai — dari wireframe sampai produksi.",
  bio: "Halo! Saya Dwi, frontend developer sekaligus UI/UX designer dengan pengalaman lebih dari 5 tahun. Saya senang menjembatani desain dan kode: memastikan setiap detail visual terasa hidup di browser, aksesibel, dan berperforma tinggi.",
};

export const facts = [
  { label: "Lokasi", value: "Yogyakarta, ID" },
  { label: "Pengalaman", value: "5+ tahun" },
  { label: "Fokus", value: "React · TypeScript · Design Systems" },
  { label: "Status", value: "Open to work" },
];

export const marqueeTech = [
  "React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Figma",
  "Node.js", "Vite", "GraphQL", "Storybook", "PostgreSQL", "Git",
];

export const skillGroups = [
  { title: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Accessibility"] },
  { title: "Backend", items: ["Node.js", "Express", "REST & GraphQL", "PostgreSQL", "Supabase"] },
  { title: "Tools & Design", items: ["Figma", "Storybook", "Git", "Vite", "Jest / Vitest", "Design Tokens"] },
];

export type Category = "Web App" | "Mobile" | "Design System";

export const projects: {
  title: string; description: string; image: string; tags: string[];
  category: Category; demo: string; github: string;
}[] = [
  {
    title: "Kasku — Dashboard Keuangan",
    description: "Dashboard analitik untuk UMKM memantau arus kas secara real-time, lengkap dengan grafik interaktif dan laporan otomatis.",
    image: p1, tags: ["React", "TypeScript", "Recharts"], category: "Web App",
    demo: "https://example.com", github: "https://github.com/dwiprastowo",
  },
  {
    title: "Kopi Senja — Aplikasi Pemesanan",
    description: "Aplikasi pemesanan kopi untuk kedai lokal: pesan, bayar, dan ambil tanpa antre. Riset UX dan desain end-to-end.",
    image: p2, tags: ["React Native", "Figma", "UX Research"], category: "Mobile",
    demo: "https://example.com", github: "https://github.com/dwiprastowo",
  },
  {
    title: "Nusa UI — Design System",
    description: "Library komponen open-source dengan design tokens, dokumentasi Storybook, dan dukungan aksesibilitas penuh.",
    image: p3, tags: ["Storybook", "Tailwind", "Tokens"], category: "Design System",
    demo: "https://example.com", github: "https://github.com/dwiprastowo",
  },
];

export const experiences = [
  { period: "2023 — Sekarang", title: "Senior Frontend Developer", org: "Tokoloka (Startup E-commerce)", desc: "Memimpin migrasi ke React + TypeScript dan membangun design system internal yang dipakai 6 tim produk." },
  { period: "2021 — 2023", title: "UI/UX Designer & Frontend", org: "Studio Rupa Digital", desc: "Merancang dan mengembangkan 20+ website & aplikasi untuk klien lokal maupun internasional." },
  { period: "2019 — 2021", title: "Junior Web Developer", org: "Freelance", desc: "Membangun landing page dan toko online untuk UMKM dengan fokus pada performa dan SEO." },
  { period: "2015 — 2019", title: "S1 Teknik Informatika", org: "Universitas Gadjah Mada", desc: "Fokus pada Interaksi Manusia dan Komputer. Lulus dengan predikat cum laude." },
];

export const testimonials = [
  { quote: "Dwi punya mata yang tajam untuk detail. Hasil kerjanya selalu rapi, cepat, dan melampaui ekspektasi kami.", name: "Rina Kartika", role: "Product Manager, Tokoloka" },
  { quote: "Jarang ada orang yang sama kuatnya di desain dan kode. Kolaborasi dengan Dwi terasa sangat mulus.", name: "Arif Nugroho", role: "CTO, Studio Rupa Digital" },
  { quote: "Website baru kami jadi 2x lebih cepat dan konversi naik signifikan. Sangat direkomendasikan!", name: "Maya Sari", role: "Founder, Kopi Senja" },
];
