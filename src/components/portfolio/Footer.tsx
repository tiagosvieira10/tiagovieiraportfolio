export function Footer() {
  return (
    <footer className="relative border-t border-border/60 py-10">
      <div className="mx-auto max-w-6xl px-5 flex flex-col sm:flex-row items-center justify-center text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          {/* <span className="inline-block h-2 w-2 rounded-full bg-primary" /> */}
          <span>© {new Date().getFullYear()} Tiago Vieira. Todos os direitos reservados.</span>
        </div>
        {/* <div className="text-xs">Construído com cuidado · React · TypeScript · Tailwind</div> */}
      </div>
    </footer>
  );
}
