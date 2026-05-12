import { motion } from "framer-motion";
import { ArrowRight, Github, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const WHATSAPP_URL = "https://wa.me/5587992438502?text=Ol%C3%A1%20Tiago%2C%20gostaria%20de%20conversar%20sobre%20um%20projeto.";
const EMAIL = "tiagosvieira10@gmail.com";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/tiagosvieira10" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/tiago-svieira/" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/tiago.svieira_" },
];

export function Contact() {
  return (
    <section id="contato" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[140px]" />

      <div className="relative mx-auto max-w-4xl px-5">
        <SectionHeader
          eyebrow="Contato"
          title="Vamos transformar sua ideia em um projeto real."
          description="Escolha o canal que preferir. Respondo em até 24 horas."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="grid sm:grid-cols-2 gap-4 mb-10"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-2xl bg-primary text-primary-foreground px-6 py-5 hover:opacity-90 transition glow-blue"
          >
            <span className="flex items-center gap-3">
              <span className="rounded-lg bg-primary-foreground/15 p-2.5">
                <MessageCircle size={18} />
              </span>
              <span className="flex flex-col">
                <span className="text-xs uppercase tracking-wider opacity-80">Resposta rápida</span>
                <span className="text-sm font-medium">Conversar no WhatsApp</span>
              </span>
            </span>
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
          </a>

          <a
            href={`mailto:${EMAIL}?subject=Contato%20via%20portf%C3%B3lio`}
            className="group flex items-center justify-between rounded-2xl border border-border bg-card/40 backdrop-blur px-6 py-5 hover:border-primary/40 hover:bg-card transition"
          >
            <span className="flex items-center gap-3">
              <span className="rounded-lg bg-primary/10 border border-primary/20 p-2.5 text-primary">
                <Mail size={18} />
              </span>
              <span className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">Prefere e-mail?</span>
                <span className="text-sm font-medium">{EMAIL}</span>
              </span>
            </span>
            <ArrowRight size={18} className="text-muted-foreground group-hover:text-primary transition" />
          </a>
        </motion.div>

        <div className="flex items-center justify-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="inline-flex items-center justify-center rounded-full border border-border bg-card/40 backdrop-blur w-11 h-11 hover:border-primary/40 hover:text-primary transition"
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
