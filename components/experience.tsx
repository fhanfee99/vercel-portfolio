"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    id: "ewg",
    company: "Ecommerce Web Guru",
    role: "Senior Full-Stack Developer | Shopify, MERN, Python | API, Webhooks & AI",
    period: "2018 — Present",
    highlights: [
      "Developed and customized 600+ Shopify stores for international clients, delivering custom themes, high-performing storefronts, and scalable eCommerce systems.",
      "Built custom API integrations and dynamic frontend logic using JavaScript and REST APIs",
      "Developed advanced Shopify features including subscriptions, bundles, and automation workflows",
      "Built custom Shopify themes & OS 2.0 sections from scratch",
      "Implemented complex cart drawer logic, discounts, and free-gift flows",
      "Created advanced product pages (subscriptions, bundles, variants)",
      "Integrated Appstle / Recharge with dynamic UI logic",
      "Converted Figma / PSD designs into responsive, pixel-perfect UI",
      "Solved complex frontend issues related to variants, carts, and dynamic data",
      "Expanded into full-stack development with MERN and Python, creating scalable APIs and backend systems.",
      ""
    ],
  },
  {
    id: "cyrus",
    company: "Cyrus Webtech",
    role: "Part-time Shopify Developer",
    period: "2024 — 2025",
    highlights: [
      "Customized Shopify & WordPress frontend UI",
      "Fixed frontend bugs and performance issues",
      "Integrated third-party APIs and apps from UI perspective",
      "Supported development team with frontend best practices",
    ],
  },
  {
  id: "graphic",
  company: "Freelance",
  role: "Graphic Designer",
  period: "2017 — 2018",
  highlights: [
    "Designed branding assets including logos, banners, and marketing creatives",
    "Created visual content for websites, social media, and marketing campaigns",
    "Worked with clients to maintain brand identity and visual consistency",
    "Built design foundations that later helped in UI/UX and frontend development",
  ],
},
];

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

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

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 neon-grid opacity-15 pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4" />

      <div className="max-w-3xl mx-auto relative z-10">
        <h2
          className={`flex items-center gap-4 text-3xl md:text-4xl font-bold text-foreground mb-12 transition-all duration-700 neon-glow ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary font-mono text-xl md:text-2xl">&lt;02 /&gt;</span>
          Where I&apos;ve Worked
          <span className="flex-1 h-px bg-gradient-to-r from-primary to-accent max-w-xs" />
        </h2>

        <div
          className={`flex flex-col md:flex-row gap-4 md:gap-8 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Tabs */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-primary/20 gap-2 md:gap-0">
            {experiences.map((exp, index) => (
              <button
                key={exp.id}
                onClick={() => setActiveTab(index)}
                type="button"
                className={cn(
                  "px-4 py-3 text-sm font-mono text-left whitespace-nowrap transition-all duration-300 relative group",
                  activeTab === index
                    ? "text-primary bg-primary/10 glow-box"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                )}
              >
                {exp.company}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 md:bottom-auto md:left-0 md:top-0 h-0.5 md:h-full md:w-0.5 w-full md:w-auto bg-gradient-to-t md:bg-gradient-to-r from-primary to-accent transition-all duration-300",
                    activeTab === index ? "opacity-100" : "opacity-0"
                  )}
                />
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="py-2 min-h-80 glow-box p-6 rounded-lg border border-primary/20 backdrop-blur-md">
            {experiences.map(
              (exp, index) =>
                activeTab === index && (
                  <div key={exp.id} className="animate-in fade-in duration-300">
                    <h3 className="text-lg md:text-xl font-semibold neon-glow mb-1">
                      {exp.role}{" "}
                      <span className="text-accent neon-glow-secondary">@ {exp.company}</span>
                    </h3>
                    <p className="text-xs font-mono text-primary/60 mb-6 tracking-widest">
                      {exp.period}
                    </p>
                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-muted-foreground text-sm leading-relaxed hover:text-foreground hover:translate-x-1 transition-all group"
                        >
                          <span className="text-accent mt-1.5 flex-shrink-0 font-bold">
                            &gt;
                          </span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
