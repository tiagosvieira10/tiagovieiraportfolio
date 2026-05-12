import cafeNoPonto from "@/assets/projects/cafeNoPonto.png";
import gestaoDeVagas from "@/assets/projects/gestao.png";
import iap from "@/assets/projects/iap.png";
import imperioImg from "@/assets/projects/imperio-ferragens.png";
import lift from "@/assets/projects/lift.png";
import nadja from "@/assets/projects/nadja.png";
import pretas from "@/assets/projects/pretasS:A.png";
import voluntariosImg from "@/assets/projects/voluntarios.png";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

// type Project = {
//   title: string;
//   desc: string;
//   image?: string;
//   url?: string;
// };

// const projects: Project[] = [
//   { title: "Rádio Voluntários FM", desc: "Plataforma da rádio com transmissão ao vivo, programação, notícias, interação com ouvintes.", image: voluntariosImg, url: "https://voluntariosfm.com.br" },
//   { title: "Instituto Ação e Proteção", desc: "Website institucional desenvolvido para fortalecer o projeto com informações e contato.", image: iap },
//   { title: "Império Ferragens", desc: "Site empresarial criados para fortalecer a marca e facilitar o contato com clientes da região.", image: imperioImg },
//   { title: "Projeto Pretas S/A", desc: "Website desenvolvida para valorizar o projeto Pretas S/A, ampliando sua presença digital.", image: pretas },
//   { title: "Nadja Acessórios", desc: "Loja virtual elegante criada para apresentar acessórios femininos de forma sofisticada.", image: nadja },
//   { title: "Lift", desc: "Landing Page desenvolvida para Software House Lift.", image: lift },
//   { title: "Gestão de vagas", desc: "Api utilizando Java - Spring Boot para gerenciamento de vagas de emprego.", image: gestaoDeVagas },
//   { title: "Café no ponto", desc: "E-commerce de cafeteria, promovendo produtos, ambiente e experiência da marca.", image: cafeNoPonto },
// ];

// export function Projects() {
//   return (
//     <section id="projetos" className="relative py-24 sm:py-32">
//       <div className="mx-auto max-w-6xl px-5">
//         <SectionHeader
//           eyebrow="Trabalhos"
//           title="Projetos selecionados."
//           description="Uma seleção de projetos reais — sistemas, plataformas e produtos que combinam engenharia sólida e design refinado."
//         />

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {projects.map((p, i) => (
//             <motion.article
//               key={p.title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-50px" }}
//               transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
//               className="group relative rounded-2xl border border-border bg-card/40 backdrop-blur overflow-hidden hover:border-primary/40 transition"
//             >
//               <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-card">
//                 {p.image ? (
//                   <img
//                     src={p.image}
//                     alt={`Print do projeto ${p.title}`}
//                     loading="lazy"
//                     className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
//                   />
//                 ) : (
//                   <>
//                     <div className="absolute inset-0 bg-grid opacity-40" />
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <div className="flex flex-col items-center gap-2 text-muted-foreground/60">
//                         <div className="h-10 w-10 rounded-lg border border-dashed border-foreground/20 flex items-center justify-center">
//                           <span className="font-mono text-xs text-primary">{"</>"}</span>
//                         </div>
//                         <span className="text-[11px] uppercase tracking-widest">Print em breve</span>
//                       </div>
//                     </div>
//                     <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-primary/30 blur-3xl group-hover:bg-primary/50 transition" />
//                   </>
//                 )}
//               </div>
//               <div className="p-5">
//                 <h3 className="font-display text-lg font-medium">{p.title}</h3>
//                 <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed line-clamp-2">{p.desc}</p>
//                 <div className="mt-5 flex items-center gap-2">
//                   <a href={p.url ?? "#"} className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-primary transition">
//                     Ver Projeto <ArrowUpRight size={14} />
//                   </a>
//                 </div>
//               </div>
//             </motion.article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
type Project = {
  title: string;
  desc: string;
  image?: string; // substitua depois pelo print real do site
  url?: string;
};

const projects: Project[] = [
  { title: "Rádio Voluntários FM", desc: "Plataforma da rádio com transmissão ao vivo, programação, notícias, interação com ouvintes.", image: voluntariosImg, url: "https://www.voluntariosfm.com.br/" },
  { title: "Instituto Ação e Proteção", desc: "Website institucional desenvolvido para fortalecer o projeto com informações e contato.", image: iap , url: "https://institutoacaoeprotecao.vercel.app/" },
  { title: "Império Ferragens", desc: "Site empresarial criados para fortalecer a marca e facilitar o contato com clientes da região.", image: imperioImg, url: "https://www.imperioferragens.com.br/" },
  { title: "Projeto Pretas S/A", desc: "Website desenvolvida para valorizar o projeto Pretas S/A, ampliando sua presença digital.", image: pretas, url: "https://pretas-s-a-transforma-o.vercel.app/" },
  { title: "Nadja Acessórios", desc: "Loja virtual elegante criada para apresentar acessórios femininos de forma sofisticada.", image: nadja, url: "https://www.nadjaacessorios.com.br/" },
  { title: "Lift", desc: "Landing Page desenvolvida para Software House Lift.", image: lift, url: "https://lift.app.br/" },
  { title: "Gestão de vagas", desc: "Api utilizando Java - Spring Boot para gerenciamento de vagas de emprego.", image: gestaoDeVagas, url: "https://github.com/tiagosvieira10/gestao_vagas" },
  { title: "Café no ponto", desc: "E-commerce de cafeteria, promovendo produtos, ambiente e experiência da marca.", image: cafeNoPonto, url: "https://coffe-delivery-six-sooty.vercel.app/" },
];

export function Projects() {
  return (
    <section id="projetos" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="Trabalhos"
          title="Projetos selecionados."
          description="Uma seleção de projetos reais — sistemas, plataformas e produtos que combinam engenharia sólida e design refinado."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative rounded-2xl border border-border bg-card/40 backdrop-blur overflow-hidden hover:border-primary/40 transition"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-card">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={`Print do projeto ${p.title}`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-grid opacity-40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex flex-col items-center gap-2 text-muted-foreground/60">
                        <div className="h-10 w-10 rounded-lg border border-dashed border-foreground/20 flex items-center justify-center">
                          <span className="font-mono text-xs text-primary">{"</>"}</span>
                        </div>
                        <span className="text-[11px] uppercase tracking-widest">Print em breve</span>
                      </div>
                    </div>
                    <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-primary/30 blur-3xl group-hover:bg-primary/50 transition" />
                  </>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-medium">{p.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed line-clamp-2">{p.desc}</p>
                <div className="mt-5 flex items-center gap-2">
                  <a href={p.url ?? "#"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-primary transition">
                    Ver Projeto <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
