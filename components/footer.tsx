import { Github, Linkedin, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            {/* <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a> */}
            <a
              href="https://in.linkedin.com/in/farhan-a-hanfee-80b9b2367"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://farhanewg.wixsite.com/farhan-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Portfolio"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>

          {/* Credit */}
          <p className="text-muted-foreground text-sm font-mono text-center">
            Designed & Built by{" "}
            <span className="text-primary">Farhan A Hanfee</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
