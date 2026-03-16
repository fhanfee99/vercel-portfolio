"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const media = [
  { type: "image", src: "/projects/checkout_abd.png" },
  { type: "image", src: "/projects/fe8d02_5fb7c92385224e899c7c0852033293e4~mv2.png" },
  { type: "image", src: "/projects/fe8d02_8e86163e54954f2d81bf217db46da1e9~mv2 (1).png" },
  { type: "image", src: "/projects/fe8d02_42e35d21ce9749319e03ec47320ffd69~mv2.png" },
  { type: "image", src: "/projects/fe8d02_85a5983f109b4df7aa2aa7d96d3e4c03~mv2.png" },
  { type: "image", src: "/projects/fe8d02_04720a25d2a740839075e51980a10455~mv2.png" },
  { type: "image", src: "/projects/fe8d02_906939e4c0cc4e50b3c59983ed360e08~mv2.png" },
  { type: "image", src: "/projects/fe8d02_ff517fb7aab84cc483d6c5e95808af0c~mv2.png" },
];

export function ProjectsSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState("");
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll(".project-card");
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 100, rotateX: -15 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          delay: index * 0.12,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 55%",
            scrub: 1,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const openModal = (src: string) => {
    setCurrentImg(src);
    setIsOpen(true);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 relative">
      {/* Background grid */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 text-foreground neon-glow">
          Projects Showcase
        </h1>
        <p className="text-center text-muted-foreground font-mono text-sm mb-12 tracking-widest">
          &lt; 600+ Projects Delivered /&gt;
        </p>

        {/* Project Overview */}
        <div className="max-w-4xl mx-auto text-muted-foreground leading-relaxed space-y-6 mb-20">
          <div className="glassmorphic p-6 rounded-lg border border-primary/20">
            <p className="mb-4">
              I build scalable and high-performance eCommerce platforms and web
              applications using modern frontend technologies and robust backend
              systems.
            </p>
            <p className="mb-4">
              My work includes custom Shopify storefronts, advanced theme
              architecture, API integrations, and performance-optimized user
              interfaces designed to improve conversions and user experience.
            </p>
            <p className="mb-4">
              I develop complex features such as geolocation-based inventory,
              dynamic delivery systems, custom product logic, automation workflows,
              and scalable backend integrations.
            </p>
            <p>
              Alongside Shopify development, I also build full-stack applications
              using Node.js, React, MongoDB, and REST APIs to create modern and
              scalable web platforms.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-semibold text-center mb-12 text-foreground neon-glow">
          Featured Work
        </h2>

        {/* Media Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 perspective-3d">
          {media.map((item, index) => (
            <div
              key={index}
              className="project-card group cursor-pointer perspective-child"
              onClick={() => openModal(item.src)}
            >
              <div className="relative overflow-hidden h-64 rounded-lg neon-border glassmorphic transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/40">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all z-10 pointer-events-none" />
                
                <Image
                  src={item.src}
                  alt="Project Screenshot"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-primary font-mono text-sm">Click to expand</div>
                </div>

                {/* Corner glare effect */}
                <div className="absolute top-0 left-0 w-24 h-24 bg-white opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-300 -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>
          ))}
        </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Content */}
          <div
            className="relative max-w-5xl w-full neon-border rounded-lg overflow-hidden scale-in-bounce"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-20 p-2 rounded-lg bg-primary/20 hover:bg-primary/40 text-foreground transition-all duration-300 neon-border group"
              aria-label="Close modal"
            >
              <X size={24} className="group-hover:rotate-90 transition-transform" />
            </button>

            {/* Image */}
            <div className="relative w-full bg-gradient-to-br from-card to-card/50">
              <Image
                src={currentImg}
                alt="Project Screenshot"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
              />
              {/* Scan line effect */}
              <div className="absolute inset-0 scan-line pointer-events-none opacity-20" />
            </div>
          </div>
        </div>
      )}
      </div>
    </section>
  );
}
