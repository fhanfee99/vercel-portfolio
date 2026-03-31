"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { X, ExternalLink, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// --- 1. ENHANCED PROJECT DATA ---
const projectsData = [
  {
    id: 1,
    title: "Premium Checkout Flow",
    category: "Shopify Plus / Optimization",
    description: "A custom-engineered checkout experience designed to reduce cart abandonment by 24%. Includes one-click upsells and localized payment gateways.",
    src: "/projects/checkout_abd.png",
    url: "https://your-portfolio.vercel.app/case-study-1"
  },
  {
    id: 2,
    title: "Eco-Friendly Storefront",
    category: "Next.js / Tailwind",
    description: "Modern headless commerce site with sub-second page loads. Fully integrated with Contentful CMS for dynamic product storytelling.",
    src: "/projects/storefront_modern.png", // Rename your file to this for safety
    url: "https://eco-store-demo.vercel.app"
  },
  {
    id: 3,
    title: "Brand Identity Portal",
    category: "UX/UI Design",
    description: "A comprehensive design system and asset management hub for a global lifestyle brand. Built with interactive framer-motion components.",
    src: "/projects/brand_identity.png",
    url: "https://brand-portal.design"
  },
  {
    id: 4,
    title: "Global Inventory Engine",
    category: "Node.js / Backend",
    description: "Complex backend system managing over 50,000 SKUs across 12 warehouses with real-time geolocation-based stock updates.",
    src: "/projects/inventory_engine.png",
    url: "https://github.com/your-repo/inventory-system"
  },
  {
    id: 5,
    title: "Fast-Track Logistics App",
    category: "Full Stack / React Native",
    description: "Real-time delivery tracking application for local vendors. Features include automated route optimization and instant driver notifications.",
    src: "/projects/delivery_app.png",
    url: "https://logistics-app-v1.vercel.app"
  },
  {
    id: 6,
    title: "International Expansion",
    category: "Shopify / Multi-Currency",
    description: "Scaled a domestic fashion brand to 15+ international markets with automatic currency conversion and localized tax calculations.",
    src: "/projects/global_rollout.png",
    url: "https://global-fashion-store.com"
  }
];

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<typeof projectsData[0] | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.8,
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        }
      });
    }, gridRef);
    return () => ctx.revert();
  }, []);

  const openModal = (project: typeof projectsData[0]) => {
    setActiveProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setActiveProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="relative py-24 bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-8xl font-black mb-6 uppercase tracking-tighter italic">
            Featured <span className="text-blue-600">Work</span>
          </h2>
          <div className="flex items-center justify-center gap-3 text-zinc-500 font-mono text-[10px] tracking-[0.4em] uppercase">
            <span className="w-12 h-[1px] bg-zinc-800" />
            Strategy • Design • Development
            <span className="w-12 h-[1px] bg-zinc-800" />
          </div>
        </div>

        {/* --- GRID --- */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="project-card group relative aspect-[16/11] bg-zinc-900 rounded-3xl overflow-hidden cursor-pointer border border-white/5 transition-all hover:border-blue-500/40"
              onClick={() => openModal(project)}
            >
              <Image
                src={project.src}
                alt={project.title}
                fill
                className="object-cover opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
                <p className="text-blue-500 font-mono text-[10px] uppercase tracking-widest mb-2">{project.category}</p>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <div className="p-2 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL (FIXED) --- */}
      {activeProject && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-2xl"
          onClick={closeModal}
        >
          <div 
            className="relative w-full max-w-6xl bg-zinc-950 rounded-[2.5rem] border border-white/10 overflow-hidden flex flex-col md:grid md:grid-cols-12 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button onClick={closeModal} className="absolute top-6 right-6 z-[100] p-3 bg-white/5 rounded-full hover:bg-white/20 text-white border border-white/10 transition-all">
              <X size={24} />
            </button>

            {/* Modal Image Area */}
            <div className="md:col-span-7 relative h-[300px] md:h-full bg-zinc-900 min-h-[400px]">
              <Image 
                src={activeProject.src} 
                alt={activeProject.title} 
                fill 
                className="object-contain p-6 md:p-12"
                priority
                unoptimized
              />
            </div>

            {/* Modal Info Area */}
            <div className="md:col-span-5 p-8 md:p-16 flex flex-col justify-center border-l border-white/5 bg-zinc-950">
              <span className="text-blue-500 font-mono text-xs uppercase tracking-widest mb-4 inline-block">{activeProject.category}</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.1]">{activeProject.title}</h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                {activeProject.description}
              </p>
              
              <div className="mt-auto">
                <a 
                  href={activeProject.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:-translate-y-1"
                >
                  View Case Study <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
