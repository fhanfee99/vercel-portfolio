"use client";

import { useEffect, useRef, useState } from "react";

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

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 px-6 md:px-12 lg:px-24 bg-card/50"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className={`flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary font-mono text-lg md:text-xl">03.</span>
          Skills & Technologies
          <span className="flex-1 h-px bg-border max-w-xs" />
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(catIndex + 1) * 100}ms` }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-mono bg-secondary text-secondary-foreground rounded hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
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
  { value: "7+", label: "Years Experience" },
  { value: "600+", label: "Projects Delivered" },
  { value: "50+", label: "Global Clients" },
  { value: "80–90+", label: "Performance Score" },
].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-secondary/50 rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
