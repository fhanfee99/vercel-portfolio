"use client";

import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export function SocialSidebar() {
  return (
    <>
      {/* Left Sidebar - Social Icons */}
      <div className="fixed bottom-0 left-6 lg:left-12 hidden md:flex flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-muted-foreground/30">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
          aria-label="GitHub"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="https://farhanewg.wixsite.com/farhan-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
          aria-label="Portfolio"
        >
          <ExternalLink className="h-5 w-5" />
        </a>
        <a
          href="mailto:fhanfee99@gmail.com"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
          aria-label="Email"
        >
          <Mail className="h-5 w-5" />
        </a>
      </div>

      {/* Right Sidebar - Email */}
      <div className="fixed bottom-0 right-6 lg:right-12 hidden md:flex flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-muted-foreground/30">
        <a
          href="mailto:fhanfee99@gmail.com"
          className="text-muted-foreground hover:text-primary transition-colors font-mono text-xs tracking-widest [writing-mode:vertical-rl]"
        >
          fhanfee99@gmail.com
        </a>
      </div>
    </>
  );
}
