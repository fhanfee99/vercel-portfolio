"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { X, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// --- 1. PROJECT DATA (Isse aap update kar sakte hain) ---
const projectsData = [
  {
    id: 1,
    title: "Checkout Experience",
    category: "Shopify / UX",
    description: "Custom optimized checkout flow for high-conversion eCommerce performance.",
    src: "/projects/checkout_abd.png",
    url: "https://your-link-here.com" // Yahan apni link daalein
  },
  {
    id: 2,
    title: "Modern Storefront",
    category: "Next.js / Headless",
    description: "A high-performance headless commerce solution with sub-second load times.",
    src: "/projects/fe8d02_5fb7c92385224e899c7c0852033293e4~mv2.png",
    url: "https://your-link-here.com"
  },
  {
    id: 3,
    title: "Brand Identity Hub",
    category: "Web Design",
    description: "Full-scale brand portal with interactive UI elements and smooth transitions.",
    src: "/projects/fe8d02_8e86163e54954f2d81bf217db46da1e9~mv2 (1).png",
    url: "https://your-link-here.com"
  },
  {
    id: 4,
    title: "Inventory Engine",
    category: "Backend / API",
    description: "Complex geolocation-based inventory management system for global shipping.",
    src: "/projects/fe8d02_42e35d21ce9749319e03ec47320ffd69~mv2.png",
    url: "https://your-link-here.com"
  },
  {
    id: 5,
    title: "Dynamic Delivery App",
    category: "Full Stack",
    description: "Automated logistics and real-time delivery tracking for local businesses.",
    src: "/projects/fe8d02_85a5983f109b4df7aa2aa7d96d3e4c03~mv2.png",
    url: "https://your-link-here.com"
  },
  {
    id: 6,
    title: "Global Store Rollout",
    category: "Shopify Plus",
    description: "Scaling a local brand to international markets with multi-currency support.",
    src: "/projects/fe8d02_04720a25d2a740839075e51980a10455~mv2.png",
    url: "https://your-link-here.com"
  },
  {
    id: 7,
    title: "Performance Optimization",
    category: "Core Web Vitals",
    description: "99+ PageSpeed score achievement for a heavy-traffic digital store.",
    src: "/projects/fe8d02_906939e4c0cc4e50b3c59983ed360e08~mv2.png",
    url: "https://your-link-here.com"
  },
  {
    id: 8,
    title: "Automation Workflow",
    category: "Node.js / Automation",
    description: "Custom internal tools to automate order processing and customer support.",
    src: "/projects/fe8d02_ff517fb7aab84cc483d6c5e95808af0c~mv2.png",
    url: "https://your-link-here.com"
  }
];

export function ProjectsSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<typeof projectsData[0] | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll(".project-card");
    cards.forEach((card, index) => {
      gsap.fromTo(card, 
        { opacity: 0, y: 30 }, 
        { 
          opacity: 1, y: 0, duration: 0.5, delay: index * 0.1,
          scrollTrigger: { trigger: card, start: "top 90%" } 
        }
      );
    });
    return () => { ScrollTrigger.getAll().forEach((t) => t.kill()); };
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
    <section className="relative py-20 bg-black text-white min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-gray-500 font-mono text-sm tracking-widest uppercase">
            // 600+ Deliveries Completed
          </p>
        </div>

        {/* Info Card - Using Standard Tailwind */}
        <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl mb-16 max-w-3xl mx-auto">
          <p className="text-gray-400 leading-relaxed text-center">
            I architect scalable eCommerce platforms and web applications. From custom 
            Shopify storefronts to full-stack Node.js integrations, I focus on performance 
            and seamless user experiences.
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="project-card group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer border border-zinc-800 bg-zinc-900"
              onClick={() => openModal(project)}
            >
              <Image
                src={project.src}
                alt={project.title}
                fill
                className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-6">
                <p className="text-blue-400 text-xs font-mono mb-1 uppercase">{project.category}</p>
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL --- */}
      {isOpen && activeProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={closeModal}>
          <div className="absolute inset-0 bg-black/95 backdrop-blur-sm" />
          
          <div 
            className="relative w-full max-w-4xl bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={closeModal} className="absolute top-4 right-4 z-[110] p-2 bg-white/10 rounded-full hover:bg-white/20">
              <X size={20} />
            </button>

            <div className="grid md:grid-cols-2">
              <div className="relative aspect-video md:aspect-auto bg-black h-full">
                <Image src={activeProject.src} alt={activeProject.title} fill className="object-contain" />
              </div>
              <div className="p-8">
                <span className="text-blue-500 font-mono text-xs uppercase">{activeProject.category}</span>
                <h2 className="text-3xl font-bold mt-2 mb-4">{activeProject.title}</h2>
                <p className="text-gray-400 mb-8">{activeProject.description}</p>
                
                {/* External Link Button */}
                <a 
                  href={activeProject.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all"
                >
                  Visit Project <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
