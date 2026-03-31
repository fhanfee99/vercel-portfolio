"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Shopify / eCommerce",
    skills: [
      "Shopify / Shopify Plus",
      "Liquid (Advanced)",
      "Online Store 2.0",
      "Metafields & Dynamic Data",
      "Shopify AJAX API",
      "Storefront API",
      "Shopify Flow",
      "Custom Sections (OS 2.0)",
      "Cart & Variant Logic",
      "Subscriptions / Bundles",
      "Performance Optimization",
      "Theme Customization",
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      "HTML5 / CSS3",
      "JavaScript (Advanced)",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "jQuery",
      "Responsive Design",
      "Mobile-First Design",
      "UI / UX Optimization",
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "MongoDB",
      "REST APIs",
      "API Integrations",
      "Webhooks",
      "Authentication Logic",
      "Server Logic",
      "Cloudflare Workers",
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      "Git / GitHub / Bitbucket",
      "Figma to Code",
      "Photoshop",
      "Canva",
      "Cross-Browser Testing",
      "Performance Optimization",
      "AI-Assisted Development",
      "ChatGPT",
      "Gemini",
      "GitHub Copilot"
    ],
  },
];

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll(".skill-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50, rotationX: -10 },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        stagger: 0.15,
        duration: 0.8,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      }
    );
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 neon-grid opacity-15 pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />

      <div className="max-w-5xl mx-auto relative z-10">
        <h2
          className={`flex items-center gap-4 text-xl md:text-4xl font-bold text-foreground mb-12 transition-all duration-700 neon-glow ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary font-mono text-xl md:text-2xl">&lt;03 /&gt;</span>
          Skills & Technologies
          <span className="flex-1 h-px bg-gradient-to-r from-primary to-accent max-w-xs" />
        </h2>

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8 perspective">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className="skill-card glow-box p-6 rounded-lg border border-primary/20 backdrop-blur-md hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-500"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2 neon-glow">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-mono bg-gradient-to-r from-primary/20 to-accent/20 text-foreground border border-primary/30 rounded hover:border-primary hover:bg-primary/30 hover:text-primary transition-all duration-300 cursor-default group relative overflow-hidden"
                  >
                    <span className="relative z-10">{skill}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 transition-opacity" />
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
  { value: "8+", label: "Years Experience" },
  { value: "600+", label: "Projects Delivered" },
  { value: "250+", label: "Global Clients" },
  { value: "80–90+", label: "Performance Score" },
].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 glow-box rounded-lg border border-primary/30 hover:border-primary/60 backdrop-blur-md group transition-all duration-500 hover:scale-105"
            >
              <div className="text-4xl md:text-5xl font-bold neon-glow mb-2 group-hover:neon-glow-secondary transition-all">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground font-mono tracking-widest group-hover:text-primary transition-colors">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
