"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { X, ExternalLink, Search } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    id: 1,
    title: "Checkout Experience",
    category: "Shopify / UX",
    description: "Custom optimized checkout flow for high-conversion eCommerce performance.",
    src: "/projects/checkout_abd.png",
    url: "https://your-link.com"
  },
  {
    id: 2,
    title: "Modern Storefront",
    category: "Next.js / Headless",
    description: "A high-performance headless commerce solution with sub-second load times.",
    src: "/projects/fe8d02_5fb7c92385224e899c7c0852033293e4~mv2.png",
    url: "https://your-link.com"
  },
  {
    id: 3,
    title: "Brand Identity Hub",
    category: "Web Design",
    description: "Full-scale brand portal with interactive UI elements and smooth transitions.",
    src: "/projects/fe8d02_8e86163e54954f2d81bf217db46da1e9~mv2 (1).png",
    url: "https://your-link.com"
  },
  {
    id: 4,
    title: "Inventory Engine",
    category: "Backend / API",
    description: "Complex geolocation-based inventory management system for global shipping.",
    src: "/projects/fe8d02_42e35d21ce9749319e03ec47320ffd69~mv2.png",
    url: "https://your-link.com"
  },
  {
    id: 5,
    title: "Dynamic Delivery App",
    category: "Full Stack",
    description: "Automated logistics and real-time delivery tracking for local businesses.",
    src: "/projects/fe8d02_85a5983f109b4df7aa2aa7d96d3e4c03~mv2.png",
    url: "https://your-link.com"
  },
  {
    id: 6,
    title: "Global Store Rollout",
    category: "Shopify Plus",
    description: "Scaling a local brand to international markets with multi-currency support.",
    src: "/projects/fe8d02_04720a25d2a740839075e51980a10455~mv2.png",
    url: "https://your-link.com"
  },
  {
    id: 7,
    title: "Performance Optimization",
    category: "Web Vitals",
    description: "99+ PageSpeed score achievement for a heavy-traffic digital store.",
    src: "/projects/fe8d02_906939e4c0cc4e50b3c59983ed360e08~mv2.png",
    url: "https://your-link.com"
  },
  {
    id: 8,
    title: "Automation Workflow",
    category: "Automation",
    description: "Custom internal tools to automate order processing and customer support.",
    src: "/projects/fe8d02_ff517fb7aab84cc483d6c5e95808af0c~mv2.png",
    url: "https://your-link.com"
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
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
        }
      });
    }, gridRef);
    return () => ctx.revert();
  }, []);

  // Modal open logic with immediate body lock
  const openModal = (project: typeof projectsData[0]) => {
    console.log("Opening project:", project.title); // Debugging ke liye
    setActiveProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setActiveProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="relative py-24 bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-4 uppercase tracking-tighter italic">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-zinc-500 font-mono text-xs tracking-[0.4em] uppercase">
            // High Performance Solutions Delivered
          </p>
        </div>

        {/* Project Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="project-card group relative aspect-[16/10] bg-zinc-900 rounded-2xl overflow-hidden cursor-pointer border border-zinc-800 transition-all hover:border-blue-500/50"
              onClick={() => openModal(project)}
            >
              <Image
                src={project.src}
                alt={project.title}
                fill
                className="object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent p-6 flex flex-col justify-end">
                <span className="text-blue-500 font-mono text-[10px] uppercase tracking-widest mb-1">{project.category}</span>
                <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-white/0 group-hover:text-white/100 transition-all">
                  <Search size={14} className="text-blue-500" /> Click to Expand
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- RE-ENGINEERED MODAL SYSTEM --- */}
      {activeProject && (
        <div 
          className="fixed inset-0 flex items-center justify-center p-4 md:p-8 z-[9999]" 
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}
          onClick={closeModal}
        >
          <div 
            className="relative w-full max-w-5xl bg-zinc-950 rounded-[2rem] overflow-hidden border border-zinc-800 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row min-h-[400px]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 z-[10000] p-3 rounded-full bg-white/5 hover:bg-white/20 text-white transition-all border border-white/10"
            >
              <X size={20} />
            </button>

            {/* Image Section */}
            <div className="w-full md:w-3/5 relative bg-black min-h-[250px]">
              <Image 
                src={activeProject.src} 
                alt={activeProject.title} 
                fill 
                className="object-contain p-4"
                priority
              />
            </div>

            {/* Info Section */}
            <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-zinc-950">
              <span className="text-blue-500 font-mono text-xs uppercase tracking-widest mb-4 inline-block">{activeProject.category}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">{activeProject.title}</h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-10">
                {activeProject.description}
              </p>
              
              <a 
                href={activeProject.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-blue-900/20"
              >
                Launch Project <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
