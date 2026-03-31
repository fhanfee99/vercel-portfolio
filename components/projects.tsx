"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { X, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  { id: 1, title: "Checkout Experience", category: "Shopify / UX", description: "Custom optimized checkout flow for high-conversion eCommerce performance.", src: "/projects/checkout_abd.png", url: "#" },
  { id: 2, title: "Modern Storefront", category: "Next.js / Headless", description: "A high-performance headless commerce solution with sub-second load times.", src: "/projects/fe8d02_5fb7c92385224e899c7c0852033293e4~mv2.png", url: "#" },
  { id: 3, title: "Brand Identity Hub", category: "Web Design", description: "Full-scale brand portal with interactive UI elements and smooth transitions.", src: "/projects/fe8d02_8e86163e54954f2d81bf217db46da1e9~mv2 (1).png", url: "#" },
  { id: 4, title: "Inventory Engine", category: "Backend / API", description: "Complex geolocation-based inventory management system for global shipping.", src: "/projects/fe8d02_42e35d21ce9749319e03ec47320ffd69~mv2.png", url: "#" },
  { id: 5, title: "Dynamic Delivery App", category: "Full Stack", description: "Automated logistics and real-time delivery tracking for local businesses.", src: "/projects/fe8d02_85a5983f109b4df7aa2aa7d96d3e4c03~mv2.png", url: "#" },
  { id: 6, title: "Global Store Rollout", category: "Shopify Plus", description: "Scaling a local brand to international markets with multi-currency support.", src: "/projects/fe8d02_04720a25d2a740839075e51980a10455~mv2.png", url: "#" },
  { id: 7, title: "Performance Optimization", category: "Core Web Vitals", description: "99+ PageSpeed score achievement for a heavy-traffic digital store.", src: "/projects/fe8d02_906939e4c0cc4e50b3c59983ed360e08~mv2.png", url: "#" },
  { id: 8, title: "Automation Workflow", category: "Node.js / Automation", description: "Custom internal tools to automate order processing and customer support.", src: "/projects/fe8d02_ff517fb7aab84cc483d6c5e95808af0c~mv2.png", url: "#" }
];

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<typeof projectsData[0] | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        opacity: 0, y: 50, stagger: 0.1, duration: 0.6,
        scrollTrigger: { trigger: gridRef.current, start: "top 85%" }
      });
    }, gridRef);
    return () => ctx.revert();
  }, []);

  const openModal = (p: typeof projectsData[0]) => {
    setActiveProject(p);
    document.body.style.overflow = "hidden";
    // Extra safety: force body to not scroll
    document.documentElement.style.overflow = "hidden";
  };

  const closeModal = () => {
    setActiveProject(null);
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
  };

  return (
    <section className="relative py-24 bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-8xl font-black text-center mb-20 uppercase italic tracking-tighter">
          Featured <span className="text-blue-600">Work</span>
        </h2>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((p) => (
            <div
              key={p.id}
              className="project-card group relative aspect-video bg-zinc-900 rounded-2xl overflow-hidden cursor-pointer border border-white/10"
              onClick={() => openModal(p)}
            >
              <Image src={p.src} alt={p.title} fill className="object-cover opacity-50 group-hover:opacity-100 transition-all unoptimized" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 p-6 flex flex-col justify-end">
                <span className="text-blue-500 font-mono text-[10px] uppercase mb-1">{p.category}</span>
                <h3 className="text-xl font-bold">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- FORCED POPUP OVERLAY --- */}
      {activeProject && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            zIndex: 2147483647, // Maximum possible Z-index
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={closeModal}
        >
          <div 
            style={{
              position: 'relative',
              backgroundColor: '#0a0a0a',
              width: '100%',
              maxWidth: '1100px',
              maxHeight: '90vh',
              borderRadius: '24px',
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              flexDirection: window.innerWidth < 768 ? 'column' : 'row',
              overflow: 'hidden',
              boxShadow: '0 0 50px rgba(0,0,0,0.5)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                zIndex: 10,
                padding: '10px',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: '50%',
                cursor: 'pointer',
                color: 'white'
              }}
            >
              <X size={24} />
            </button>

            {/* Image Container */}
            <div style={{ flex: 1, backgroundColor: '#111', position: 'relative', minHeight: '300px' }}>
              <div style={{ position: 'absolute', inset: 0, padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img 
                  src={activeProject.src} 
                  alt={activeProject.title} 
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                />
              </div>
            </div>

            {/* Content Container */}
            <div style={{ flex: 0.8, padding: '40px', backgroundColor: '#0a0a0a', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span style={{ color: '#2563eb', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px' }}>
                {activeProject.category}
              </span>
              <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: 'white', marginBottom: '20px' }}>
                {activeProject.title}
              </h2>
              <p style={{ color: '#a1a1aa', fontSize: '16px', lineHeight: '1.6', marginBottom: '30px' }}>
                {activeProject.description}
              </p>
              
              <a 
                href={activeProject.url} 
                target="_blank" 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  backgroundColor: '#2563eb',
                  color: 'white',
                  padding: '16px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  textAlign: 'center'
                }}
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
