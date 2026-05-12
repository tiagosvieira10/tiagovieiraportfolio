import { motion } from "framer-motion";
import { Atom, Code, Coffee, Cog, GraduationCap } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  { icon: GraduationCap, title: "Engenharia de Software", desc: "(2023 - 2027) Graduação em Engenharia de Software fornece um profundo entendimento das metodologias e práticas vitais para o desenvolvimento de sistemas de software avançados. Abrange áreas como design orientado a objetos, arquitetura de software, testes automatizados e gerenciamento de projetos." },
  { icon: Code, title: "Desenvolvimento de Software", desc: "(2022 - 2023) Curso intensivo de 227h para desenvolvimento com proficiência. Dominando a criação de sites robustos, desenvolvimento de aplicações modernas e habilidades no Front-end e no Back-end. Além disso, desenvolvi soft skills como trabalho em equipe, resolução de problemas e metodologias ágeis." },
  { icon: Coffee, title: "Formação em Java", desc: "(2026) Formação especializada em Java, abrangendo fundamentos da linguagem, orientação a objetos, APIs REST, Spring Boot, bancos de dados, autenticação com JWT, testes automatizados e boas práticas de arquitetura como DDD e Design Patterns." },
  { icon: Atom, title: "Formação em React", desc: "(2024) Formação especializada em React, principais fundamentos do ReactJS, criando SPAs, consumo de API e performace. Next.js, Desing System, Storybook e criação de aplicações FullStack." },
  { icon: Cog, title: "Engenharia Mecânica", desc: "(2018 - 2022) Aprimorei habilidades em áreas como lógica, cálculo e análise crítica. Durante o período de 2022 a 2023, redescobri minha paixão pela programação, levando-me a fazer a transição para a Engenharia de Software." },
];

export function Timeline() {
  return (
    <section id="educacao" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="Educação"
          title="Formação acadêmica"
          description="Acompanhe minha trajetória acadêmica e os conhecimentos que adquiri ao longo do tempo."
        />

        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent sm:-translate-x-1/2" />
          <div className="space-y-8">
            {items.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`relative grid sm:grid-cols-2 gap-4 ${i % 2 === 0 ? "" : "sm:[&>*:first-child]:order-2"}`}
              >
                <div className={`pl-12 sm:pl-0 ${i % 2 === 0 ? "sm:text-right sm:pr-12" : "sm:pl-12"}`}>
                  <div className="rounded-2xl border border-border bg-card/40 backdrop-blur p-5 hover:border-primary/40 transition inline-block max-w-md">
                    <div className={`flex items-center gap-3 ${i % 2 === 0 ? "sm:flex-row-reverse" : ""}`}>
                      <div className="rounded-lg bg-primary/10 border border-primary/20 p-2 text-primary">
                        <it.icon size={16} />
                      </div>
                      <h3 className="font-display font-medium">{it.title}</h3>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                  </div>
                </div>
                <div className="hidden sm:block" />
                <span className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 h-3 w-3 rounded-full bg-primary glow-blue ring-4 ring-background" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
