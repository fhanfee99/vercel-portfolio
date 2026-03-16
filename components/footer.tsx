import { Github, Linkedin, ExternalLink, Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-12 px-6 md:px-12 lg:px-24 border-t border-primary/20 glassmorphic mt-20">
      {/* Background grid */}
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://in.linkedin.com/in/farhan-a-hanfee-80b9b2367"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 rounded-lg glow-box border border-primary/20 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://farhanewg.wixsite.com/farhan-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 rounded-lg glow-box border border-accent/20 text-muted-foreground hover:text-accent hover:border-accent/50 transition-all duration-300"
              aria-label="Portfolio"
            >
              <ExternalLink className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Center divider */}
          <div className="hidden md:block h-8 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />

          {/* Credit */}
          <p className="text-muted-foreground text-xs font-mono text-center md:text-right tracking-widest">
            <Code2 className="inline h-3 w-3 mr-1 text-accent" />
            Designed & Built by{" "}
            <span className="text-primary neon-glow">Farhan A Hanfee</span>
            <br />
            <span className="text-primary/60">© 2026 | Full-Stack Developer</span>
          </p>
        </div>

        {/* Bottom decoration */}
        <div className="mt-8 pt-8 border-t border-primary/10 flex items-center justify-center gap-2 text-xs text-muted-foreground font-mono">
          <span className="text-accent">&lt;</span>
          <span>Made with Next.js, React & Tailwind</span>
          <span className="text-accent">/&gt;</span>
        </div>
      </div>
    </footer>
  );
}
