"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !contentRef.current) return;

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      }
    );
  }, [isVisible]);

 const highlights = [
  "React / Next.js",
  "Node.js / Express",
  "MongoDB",
  "REST APIs",
  "Shopify / Shopify Plus",
  "Liquid (Advanced)",
  "JavaScript / TypeScript",
  "AI-Assisted Development",
];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 neon-grid opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <h2
          className={`flex items-center gap-4 text-3xl md:text-4xl font-bold text-foreground mb-12 transition-all duration-700 neon-glow ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary font-mono text-xl md:text-2xl">&lt;01 /&gt;</span>
          About Me
          <span className="flex-1 h-px bg-gradient-to-r from-primary to-accent max-w-xs" />
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div
            ref={contentRef}
            className={`md:col-span-2 space-y-4 transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-muted-foreground leading-relaxed">
Hello! I'm Farhan, a Full-Stack Developer based in Indore, India with over 
<span className="text-primary"> 7+ years of experience</span> building modern 
web applications, scalable APIs, and high-performance eCommerce platforms.
I focus on creating robust digital products that combine clean UI,
efficient backend systems, and performance-focused architecture.
</p>

<p className="text-muted-foreground leading-relaxed">
My core expertise includes Shopify and custom eCommerce development,
where I have delivered <span className="text-primary">600+ projects</span>
for international clients. I have deep experience with Shopify themes,
Liquid, JavaScript, and Online Store 2.0, building optimized storefronts
and advanced platform functionality.
</p>

<p className="text-muted-foreground leading-relaxed">
In addition to frontend development, I work with modern full-stack
technologies including <span className="text-primary">Node.js, React,
Next.js, REST APIs, backend integrations, and AI-assisted development</span>.
This allows me to build complete systems — from responsive user interfaces
to scalable API-driven backend logic.
</p>

<p className="text-muted-foreground leading-relaxed">
I enjoy solving complex problems, optimizing application performance,
and building scalable products using modern development workflows
and AI-powered tools to improve efficiency and development speed.
Here are a few technologies I've been working with recently:
</p>

            <ul className="grid grid-cols-2 gap-3 text-sm font-mono">
              {highlights.map((tech, i) => (
                <li key={tech} className="flex items-center gap-2 p-2 rounded border border-primary/20 hover:border-primary hover:bg-primary/10 transition-all glow-box">
                  <span className="text-accent neon-glow-secondary animate-pulse">→</span>
                  <span className="text-foreground hover:text-primary transition-colors">{tech}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative group">
              <div className="relative z-10 glow-box rounded-lg overflow-hidden backdrop-blur-md border border-primary/30 group-hover:border-primary/60 transition-all">
                <div className="aspect-square bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 flex items-center justify-center relative">
                  {/* Grid overlay */}
                  <div className="absolute inset-0 neon-grid opacity-30" />
                  <div className="relative z-10 text-center">
                    <p className="text-xl md:text-xl font-bold neon-glow font-mono mb-2">
                      Farhan A Hanfee
                    </p>
                    <p className="text-xs text-primary/80 font-mono tracking-widest">
                      Building Shopify Stores, Web Apps & AI-Powered Solutions
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-accent/30 rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
