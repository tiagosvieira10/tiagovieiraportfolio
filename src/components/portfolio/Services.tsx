import { motion } from "framer-motion";
import { Globe, Layout, Palette, Server, Wrench } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const services = [
  { icon: Globe, title: "Desenvolvimento de Sites", desc: "Sites institucionais e de alta conversão, rápidos e responsivos." },
  { icon: Server, title: "Sistemas Web", desc: "Sistemas internos, dashboards e plataformas sob medida." },
  { icon: Layout, title: "Landing Pages", desc: "Páginas otimizadas para conversão, com copy e performance." },
  { icon: Palette, title: "UI/UX Moderno", desc: "Interfaces minimalistas, intuitivas e com identidade forte." },
  { icon: Wrench, title: "Manutenção de Sistemas", desc: "Evolução, performance, refactor e suporte contínuo." },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-24 sm:py-32 border-y border-border/50">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="Serviços"
          title="O que posso construir para você."
          description="Soluções end-to-end, do design técnico à entrega em produção."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.07 }}
              className="group relative rounded-2xl border border-border bg-card/40 backdrop-blur p-6 hover:border-primary/40 transition overflow-hidden"
            >
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition" />
              <div className="relative">
                <div className="rounded-xl bg-primary/10 border border-primary/20 p-3 text-primary inline-flex">
                  <s.icon size={20} />
                </div>
                <h3 className="mt-4 font-display text-lg font-medium">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
