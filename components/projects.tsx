"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { X, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    id: 1,
    title: "Premium Checkout Flow",
    category: "Shopify Plus",
    description: "Custom engineered checkout experience to reduce abandonment.",
    src: "/projects/checkout_abd.png",
    url: "https://your-link.com"
  },
  {
    id: 2,
    title: "Modern Storefront",
    category: "Next.js",
    description: "High-performance headless commerce solution.",
    src: "/projects/fe8d02_5fb7c92385224e899c7c0852033293e4~mv2.png",
    url: "https://your-link.com"
  }
];

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<typeof projectsData[0] | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        opacity: 0, y: 30, stagger: 0.1, duration: 0.5,
        scrollTrigger: { trigger: gridRef.current, start: "top 80%" }
      });
    }, gridRef);
    return () => ctx.revert();
  }, []);

  const openModal = (p: typeof projectsData[0]) => {
    setActiveProject(p);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setActiveProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="relative py-20 bg-black text-white min-h-screen w-full">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold uppercase italic tracking-tighter">
            Featured <span className="text-blue-600">Work</span>
          </h2>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="project-card group relative aspect-video bg-zinc-900 rounded-2xl overflow-hidden cursor-pointer border border-white/5"
              onClick={() => openModal(project)}
            >
              <Image
                src={project.src}
                alt={project.title}
                fill
                className="object-cover opacity-50 group-hover:opacity-100 transition-all duration-500"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black flex flex-col justify-end p-6">
                <span className="text-blue-500 text-[10px] font-mono uppercase">{project.category}</span>
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- RE-FIXED MODAL (NO BLANK BOX) --- */}
      {activeProject && (
        <div 
          className="fixed inset-0 w-full h-full flex items-center justify-center z-[99999]" 
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.98)' }} // Solid black overlay
          onClick={closeModal}
        >
          <div 
            className="relative w-[95%] max-w-5xl bg-[#0a0a0a] rounded-3xl border border-white/10 flex flex-col md:flex-row overflow-hidden"
            style={{ minHeight: '400px', maxHeight: '90vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Forced High Z-Index */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-[100001] p-3 bg-white/10 rounded-full text-white border border-white/20 hover:bg-white/20"
            >
              <X size={24} />
            </button>

            {/* Left Side: Image Container with Forced Dimensions */}
            <div className="relative w-full md:w-3/5 min-h-[300px] md:h-auto bg-[#111]">
              <div className="absolute inset-0 p-4 flex items-center justify-center">
                <img 
                  src={activeProject.src} 
                  alt={activeProject.title}
                  className="max-w-full max-h-full object-contain shadow-2xl"
                  style={{ display: 'block' }}
                />
              </div>
            </div>

            {/* Right Side: Content Area (Forced Visible Colors) */}
            <div className="w-full md:w-2/5 p-8 md:p-10 flex flex-col justify-center bg-[#0a0a0a]">
              <span className="text-blue-500 font-mono text-xs uppercase tracking-widest block mb-2">
                {activeProject.category}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 block">
                {activeProject.title}
              </h2>
              <p className="text-gray-400 text-base mb-8 block leading-relaxed">
                {activeProject.description}
              </p>
              
              <a 
                href={activeProject.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all"
                style={{ display: 'flex !important' }}
              >
                Launch Project <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
