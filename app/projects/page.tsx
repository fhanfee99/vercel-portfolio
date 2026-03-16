"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

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

export default function ProjectsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState("");

  const openModal = (src: string) => {
    setCurrentImg(src);
    setIsOpen(true);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-center mb-12 text-foreground">
        Projects
      </h1>

      {/* Project Overview */}
      <div className="max-w-4xl mx-auto text-muted-foreground leading-relaxed space-y-6 mb-20">
        <p>
          I build scalable and high-performance eCommerce platforms and web
          applications using modern frontend technologies and robust backend
          systems.
        </p>
        <p>
          My work includes custom Shopify storefronts, advanced theme
          architecture, API integrations, and performance-optimized user
          interfaces designed to improve conversions and user experience.
        </p>
        <p>
          I develop complex features such as geolocation-based inventory,
          dynamic delivery systems, custom product logic, automation workflows,
          and scalable backend integrations.
        </p>
        <p>
          Alongside Shopify development, I also build full-stack applications
          using Node.js, React, MongoDB, Python and REST APIs to create modern and
          scalable web platforms.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-center mb-10 text-foreground">
        Project Showcase
      </h2>

      {/* Media Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {media.map((item, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => openModal(item.src)}
          >
            <div className="relative overflow-hidden h-64 border-l-4 border-primary group-hover:border-primary/80 transition duration-300 rounded-lg">
              <Image
                src={item.src}
                alt="Project Screenshot"
                width={1920}
                height={1080}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Content */}
          <div
            className="relative max-w-4xl w-full bg-card border border-border rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-background/50 hover:bg-background text-foreground transition"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            {/* Image */}
            <div className="relative w-full">
              <Image
                src={currentImg}
                alt="Project Screenshot"
                width={1920}
                height={1080}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
