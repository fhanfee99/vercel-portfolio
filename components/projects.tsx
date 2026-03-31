"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom"; 
import { X, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  { id: 1, title: "Dynamic Checkout Optimizer", category: "Next.js / Shopify Logic", description: "Engineered a custom checkout middleware using Node.js and Shopify’s AJAX API to solve price flickering and cart abandonment. Implemented server-side logic to fetch real-time fixed pricing, bypassing client-side delays and increasing checkout completion by 18%.", src: "/projects/checkout_abd.png", url: "#" },
  { id: 2, title: "Bespoke Subscription Engine", category: "React / Shopify Subscription API", description: "Developed a high-end subscription interface with custom-designed variant selectors. Integrated Shopify's Subscription API with a headless React frontend to manage recurring billing logic, resulting in a 35% increase in Subscriber Lifetime Value (LTV).", src: "/projects/fe8d02_5fb7c92385224e899c7c0852033293e4~mv2.png", url: "#" },
  { id: 3, title: "Personalized Product Engine", category: "Shopify Liquid / AJAX API", description: "Developed a robust custom property system allowing users to add personalized data (text, files, or dates) to specific products. Leveraged Shopify's Line Item Properties and the AJAX Cart API to ensure custom data flows seamlessly from the product page to the final order fulfillment, improving order accuracy by 100%.", src: "/projects/fe8d02_8e86163e54954f2d81bf217db46da1e9~mv2 (1).png", url: "#" },
  { id: 4, title: "Nectar & Bloom Visual Identity", category: "Brand Design / Packaging", description: "Created a premium packaging system for an organic honey brand. Focused on a 'Modern Artisan' aesthetic using custom hexagonal grid patterns and gold-foil typography to position the product in the luxury gourmet market.", src: "/projects/fe8d02_42e35d21ce9749319e03ec47320ffd69~mv2.png", url: "#" },
  { id: 5, title: "Interactive Typography Previewer", category: "Next.js / Canvas API", description: "Developed a real-time font customization engine for personalized products. Integrated a dynamic preview layer using the HTML5 Canvas API, allowing customers to visualize their custom text in multiple premium fonts before adding to cart. Reduced pre-shipment revisions by 40% through accurate 'What You See Is What You Get' (WYSIWYG) logic.", src: "/projects/fe8d02_85a5983f109b4df7aa2aa7d96d3e4c03~mv2.png", url: "#" },
  { id: 6, title: "Nectar & Bloom Logo Identity", category: "Logo Design / Visual Identity", description: "Developed a comprehensive visual identity system for a premium honey brand. Designed a modern, flexible logo centered around a stylized bee and honeycomb icon. The identity balances luxury aesthetics with organic trust, ensuring scalability across print labels and digital platforms.", src: "/projects/fe8d02_04720a25d2a740839075e51980a10455~mv2.png", url: "#" },
  { id: 7, title: "High-Performance Commerce Engine", category: "Next.js / Headless Shopify", description: "Architected a headless eCommerce solution using Next.js 14 and the Shopify Storefront API. Optimized Core Web Vitals to achieve a 98+ Lighthouse score, implementing server-side rendering (SSR) and incremental static regeneration (ISR) to handle high-traffic product launches without latency.", src: "/projects/fe8d02_906939e4c0cc4e50b3c59983ed360e08~mv2.png", url: "#" },
  { id: 8, title: "Modular Theme Architecture", category: "Shopify Liquid / Schema API", description: "Developed a library of high-performance custom Shopify sections with dynamic Schema settings. Empowered merchants to build complex page layouts using a drag-and-drop interface, reducing the need for third-party page builder apps and improving site speed by 30%.", src: "/projects/fe8d02_ff517fb7aab84cc483d6c5e95808af0c~mv2.png", url: "#" }
];

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<typeof projectsData[0] | null>(null);
  const [mounted, setMounted] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  // Client-side mount check for Portals
  useEffect(() => {
    setMounted(true);
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
  };

  const closeModal = () => {
    setActiveProject(null);
    document.body.style.overflow = "auto";
  };

  if (!mounted) return null;

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

      {/* --- MODAL USING REACT PORTAL --- */}
      {activeProject && createPortal(
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            zIndex: 999999,
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
              maxWidth: '1000px',
              display: 'flex',
              flexDirection: 'column', 
              borderRadius: '24px',
              border: '1px solid rgba(255,255,255,0.1)',
              overflow: 'hidden',
              boxShadow: '0 0 100px rgba(0,0,0,1)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 p-2 bg-white/10 rounded-full text-white"
            >
              <X size={24} />
            </button>

            {/* Desktop Flex Wrapper */}
            <div className="flex flex-col md:flex-row h-full">
                {/* Image */}
                <div className="w-full md:w-3/5 bg-[#111] relative h-[300px] md:h-[500px] flex items-center justify-center p-4">
                  <img 
                    src={activeProject.src} 
                    alt={activeProject.title} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Content */}
                <div className="w-full md:w-2/5 p-8 md:p-10 flex flex-col justify-center bg-[#0a0a0a]">
                  <span className="text-blue-500 font-mono text-xs uppercase mb-2 tracking-widest">{activeProject.category}</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">{activeProject.title}</h2>
                  <p className="text-zinc-400 mb-8 leading-relaxed">{activeProject.description}</p>
                  {activeProject.url !== "#" && (
                  <a 
                    href={activeProject.url} 
                    target="_blank" 
                    className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl text-center flex items-center justify-center gap-2"
                  >
                    Launch Project <ExternalLink size={18} />
                  </a>
                  )}
                </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
