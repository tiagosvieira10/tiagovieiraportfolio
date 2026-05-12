import { motion } from "framer-motion";
import { ArrowRight, Code2, Github } from "lucide-react";

const marquee = [
  "React", "TypeScript", "Next.js", "Node.js", "Java", "Spring Boot",
  "Tailwind", "SQL"
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-60" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/15 blur-[160px] animate-pulse-glow" />
      <div className="absolute -bottom-40 -right-32 w-[420px] h-[420px] rounded-full bg-accent/15 blur-[140px]" />

      {/* Radial fade mask on grid edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, hsl(var(--background)) 75%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-5 w-full text-center">
        {/* <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs text-muted-foreground mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Disponível para novos projetos
          <span className="text-border">·</span>
        </motion.div> */}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="font-display font-semibold leading-[0.95] tracking-tight text-5xl sm:text-7xl md:text-8xl"
        >
          <span className="block text-foreground/90">Tiago Vieira</span>
          <span className="block">
            <span className="text-gradient">Engenharia de software</span>
            <span className="text-primary">.</span>
          </span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed"
        >
          <span className="text-foreground font-medium">Engenheiro de software</span>,
          entusiasta em soluções através da tecnologia
          Este é meu portfólio, um espaço onde compartilho minha {" "}
          <span className="text-foreground">trajetória</span>,{" "}
          <span className="text-foreground">meus projetos</span> e a{" "}
          <span className="text-foreground">minha experiência de trabalho</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projetos"
            className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition glow-blue"
          >
            Ver projetos
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 backdrop-blur px-6 py-3 text-sm font-medium hover:bg-card transition"
          >
            Entrar em contato
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center justify-center rounded-full border border-border bg-card/40 backdrop-blur w-11 h-11 hover:bg-card transition"
          >
            <Github size={16} />
          </a>
        </motion.div>
      </div>

      {/* Tech marquee */}
      <div className="absolute bottom-0 inset-x-0 border-t border-border/40 bg-background/40 backdrop-blur-sm py-4 overflow-hidden">
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2 px-5 max-w-5xl mx-auto">
          <Code2 size={12} className="text-primary" />
          <span className="uppercase tracking-[0.2em]">Stack mais usadas</span>
        </div>
        <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex shrink-0 animate-marquee gap-10 pr-10 text-sm text-muted-foreground/80">
            {[...marquee, ...marquee].map((t, i) => (
              <span key={i} className="whitespace-nowrap font-mono">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
