import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Hero } from "@/components/portfolio/Hero";
import { Navbar } from "@/components/portfolio/Navbar";
import { Projects } from "@/components/portfolio/Projects";
import { Services } from "@/components/portfolio/Services";
import { Timeline } from "@/components/portfolio/Timeline";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tiago Vieira — Engenheiro de Software & Full Stack Developer" },
      { name: "description", content: "Portfólio de Tiago Vieira — Engenheiro de Software Front-end e Full Stack. Sites, sistemas e aplicações web modernas, performáticas e bem arquitetadas." },
      { property: "og:title", content: "Tiago Vieira — Engenheiro de Software" },
      { property: "og:description", content: "Front-end & Full Stack. Sites, sistemas e experiências digitais de alta qualidade." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
