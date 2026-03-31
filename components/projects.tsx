"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { X, ExternalLink, ZoomIn } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// --- 1. PROJECT DATA (JSON) ---
const projectsData = [
  {
    id: 1,
    title: "Checkout Experience",
    category: "Shopify / UX",
    description: "Custom optimized checkout flow for high-conversion eCommerce performance.",
    src: "/projects/checkout_abd.png",
  },
  {
    id: 2,
    title: "Modern Storefront",
    category: "Next.js / Headless",
    description: "A high-performance headless commerce solution with sub-second load times.",
    src: "/projects/fe8d02_5fb7c92385224e899c7c0852033293e4~mv2.png",
  },
  {
    id: 3,
    title: "Brand Identity Hub",
    category: "Web Design",
    description: "Full-scale brand portal with interactive UI elements and smooth transitions.",
    src: "/projects/fe8d02_8e86163e54954f2d81bf217db46da1e9~mv2 (1).png",
  },
  {
    id: 4,
    title: "Inventory Engine",
    category: "Backend / API",
    description: "Complex geolocation-based inventory management system for global shipping.",
    src: "/projects/fe8d02_42e35d21ce9749319e03ec47320ffd69~mv2.png",
  },
  {
    id: 5,
    title: "Dynamic Delivery App",
    category: "Full Stack",
    description: "Automated logistics and real-time delivery tracking for local businesses.",
    src: "/projects/fe8d02_85a5983f109b4df7aa2aa7d96d3e4c03~mv2.png",
  },
  {
    id: 6,
    title: "Global Store Rollout",
    category: "Shopify Plus",
    description: "Scaling a local brand to international markets with multi-currency support.",
    src: "/projects/fe8d02_04720a25d2a740839075e51980a10455~mv2.png",
  },
  {
    id: 7,
    title: "Performance Optimization",
    category: "Core Web Vitals",
    description: "99+ PageSpeed score achievement for a heavy-traffic digital store.",
    src: "/projects/fe8d02_906939e4c0cc4e50b3c59983ed360e08~mv2.png",
  },
  {
    id: 8,
    title: "Automation Workflow",
    category: "Node.js / Automation",
    description: "Custom internal tools to automate order processing and customer support.",
    src: "/projects/fe8d02_ff517fb7aab84cc483d6c5e95808af0c~mv2.png",
  }
];

// --- 2. MAIN COMPONENT ---
export function ProjectsSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<typeof projectsData[0] | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // GSAP Entrance Animation
  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll(".project-card");
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const openModal = (project: typeof projectsData[0]) => {
    setActiveProject(project);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Aesthetic Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            FEATURED <span className="text-primary">PROJECTS</span>
          </h2>
          <div className="flex items-center justify-center gap-2 font-mono text-sm text-muted-foreground uppercase tracking-[0.2em]">
            <span className="w-8 h-[1px] bg-primary/50" />
            600+ Deliveries Completed
            <span className="w-8 h-[1px] bg-primary/50" />
          </div>
        </div>

        {/* Info Card */}
        <div className="glassmorphic p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl mb-20 max-w-4xl mx-auto text-center md:text-left">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I architect scalable eCommerce platforms and web applications using modern 
            technologies. From **custom Shopify storefronts** to **full-stack Node.js 
            integrations**, I focus on performance, conversion, and seamless user experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="project-card group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-muted border border-white/5"
              onClick={() => openModal(project)}
            >
              <Image
                src={project.src}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              
              {/* Overlay with Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300">
                <span className="text-primary font-mono text-[10px] tracking-widest uppercase mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  {project.description}
                </p>
              </div>

              {/* Zoom Indicator */}
              <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn size={18} className="text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL SYSTEM --- */}
      {isOpen && activeProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
          onClick={closeModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" />

          {/* Modal Box */}
          <div 
            className="relative w-full max-w-6xl bg-zinc-950 rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 z-[110] p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all"
            >
              <X size={20} />
            </button>

            <div className="grid lg:grid-cols-3">
              {/* Image Side */}
              <div className="lg:col-span-2 relative aspect-video lg:aspect-auto h-full min-h-[300px] bg-black">
                <Image
                  src={activeProject.src}
                  alt={activeProject.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Content Side */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-primary font-mono text-xs tracking-[0.2em] uppercase mb-4">
                  {activeProject.category}
                </span>
                <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                  {activeProject.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {activeProject.description}
                </p>
                
                <div className="space-y-4">
                  <div className="h-[1px] bg-white/10 w-full" />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-500">Year</span>
                    <span className="text-white">2026</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-500">Status</span>
                    <span className="text-green-400">Live & Optimized</span>
                  </div>
                </div>

                <button className="mt-10 w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all">
                  View Case Study <ExternalLink size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
