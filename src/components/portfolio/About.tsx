import { motion } from "framer-motion";
import { Code2, GraduationCap, Rocket } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const highlights = [
  { icon: Code2, title: "Desenvolvimento de Software", desc: "Arquiteturas escaláveis e modernas." },
  { icon: Rocket, title: "Freelancer", desc: "Site, E-commerce e aplicações para empresas e marcas." },
  { icon: GraduationCap, title: "Evolução Contínua", desc: "Graduando em Engenharia de Software, buscando sempre novas atualizações e melhorias de processo." },
];

export function About() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="Sobre mim"
          title="Que bom ter você por aqui! "
          description="Minha trajetória na programação teve início em 2018, quando dei os primeiros passos no mundo da lógica de programação e em C++. Após uma pausa para cursar Engenharia na Universidade Federal do Vale do São Francisco, retomei meu percurso no início de 2022. Foi nesse momento que redescobri meu fascínio pelo universo do desenvolvimento e suas incríveis possibilidades."
        />

        <div className="grid sm:grid-cols-2 gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-border bg-card/40 backdrop-blur p-6 hover:border-primary/40 transition"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="relative flex items-start gap-4">
                <div className="rounded-xl bg-primary/10 border border-primary/20 p-3 text-primary">
                  <h.icon size={20} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-medium">{h.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
