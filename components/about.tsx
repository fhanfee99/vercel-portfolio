"use client";

import { useEffect, useRef, useState } from "react";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      className="py-24 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className={`flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary font-mono text-lg md:text-xl">01.</span>
          About Me
          <span className="flex-1 h-px bg-border max-w-xs" />
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div
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

            <ul className="grid grid-cols-2 gap-2 text-sm font-mono">
              {highlights.map((tech, i) => (
                <li key={tech} className="flex items-center gap-2">
                  <span className="text-primary">▹</span>
                  <span className="text-muted-foreground">{tech}</span>
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
              <div className="relative z-10 bg-primary/20 rounded overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
  <div className="text-center">
    <p className="text-2xl md:text-3xl font-bold text-primary font-mono">
      Farhan
    </p>
    <p className="text-sm text-muted-foreground">
      Full-Stack Developer
    </p>
  </div>
</div>
              </div>
              <div className="absolute inset-0 border-2 border-primary rounded translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
