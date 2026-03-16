"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-5xl">
        {/* Greeting */}
        <p
          className={`text-primary font-mono text-sm md:text-base mb-4 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Hi, my name is
        </p>

        {/* Name */}
        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 transition-all duration-700 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-balance">Farhan A Hanfee</span>
        </h1>

        {/* Tagline */}
        <h2
          className={`text-2xl md:text-4xl lg:text-5xl font-bold text-muted-foreground mb-8 transition-all duration-700 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-balance">
  Full-Stack Developer building scalable Web, API, Shopify & AI-powered solutions.
</span>
        </h2>

        {/* Description */}
       <p
  className={`text-muted-foreground max-w-2xl text-base md:text-lg leading-relaxed mb-8 transition-all duration-700 delay-300 ${
    mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
  }`}
>
  Full-Stack Developer with <span className="text-primary font-semibold">7+ years </span>
  of experience building modern web applications, custom Shopify platforms,
  and scalable backend APIs. I specialize in
  <span className="text-primary font-semibold"> MERN stack, REST APIs, and AI-assisted development </span>
  to create efficient, scalable, and high-performance products.
  Delivered <span className="text-primary font-semibold">600+ projects </span>
  for global clients focusing on clean architecture, performance, and
  modern user experiences.
</p>
<p className="text-sm text-muted-foreground mb-10 font-mono">
React • Next.js • Node.js • MongoDB • Shopify • REST APIs • AI-Assisted Development
</p>

        {/* Contact Info */}
        <div
          className={`flex flex-wrap gap-4 md:gap-6 text-sm text-muted-foreground mb-10 transition-all duration-700 delay-400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="flex items-center gap-2 hover:text-primary transition-colors">
            <MapPin className="h-4 w-4" />
            Indore, India
          </span>
          <a
            href="mailto:fhanfee99@gmail.com"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4" />
            fhanfee99@gmail.com
          </a>
          <a
            href="tel:+918962633019"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            +91 8962633019
          </a>
        </div>

        {/* CTA */}
        <div
  className={`transition-all duration-700 delay-500 ${
    mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
  }`}
>
  <Link
    href="/projects"
    className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-mono text-sm"
  >
    <span>Explore My Work</span>
    <ExternalLink className="h-4 w-4" />
  </Link>
</div>
      </div>
    </section>
  );
}
