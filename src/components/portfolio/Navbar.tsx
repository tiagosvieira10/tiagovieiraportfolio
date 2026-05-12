import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#educacao", label: "Formação" },
  { href: "#projetos", label: "Projetos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const h = document.documentElement;
      const p = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(p);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent">
        <div
          className="h-full bg-primary transition-[width] duration-150"
          style={{ width: `${progress}%`, boxShadow: "0 0 10px var(--glow)" }}
        />
      </div>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className={`mx-auto max-w-6xl px-5 ${scrolled ? "" : ""}`}>
          <div className={`flex items-center justify-between rounded-full px-5 py-3 transition-all ${
            scrolled ? "glass" : ""
          }`}>
            <a href="#hero" className="flex items-center gap-2 font-display font-semibold tracking-tight">
              <span className="font-mono text-primary text-sm">{"</>"}</span>
              <span>tiago<span className="text-primary">vieira</span></span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
                  {l.label}
                </a>
              ))}
            </nav>
            <a
              href="#contato"
              className="hidden md:inline-flex items-center rounded-full bg-primary/10 border border-primary/30 px-4 py-1.5 text-sm text-foreground hover:bg-primary/20 transition"
            >
              Vamos conversar
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 -mr-2"
              aria-label="Menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mx-5 mt-2 rounded-2xl glass p-6"
          >
            <nav className="flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-foreground/90 hover:text-primary transition py-1"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </motion.header>
    </>
  );
}
