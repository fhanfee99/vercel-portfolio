"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { MapPin, Mail, Phone, ExternalLink, Code2, Zap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const titleRef = useRef(null);
  const laptopRef = useRef(null);
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Animate title on load
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Floating laptop animation
    gsap.to(laptopRef.current, {
      y: -30,
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });

    // Project cards stagger animation on scroll
    const cards = gsap.utils.toArray(".project-card");
    cards.forEach((card: any, index: number) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50, x: index % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 50%",
            scrub: false,
          },
        }
      );
    });

    // Parallax effect on scroll
    gsap.to(laptopRef.current, {
      y: (window.innerHeight * 0.3) / 2,
      scrollTrigger: {
        trigger: laptopRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [mounted]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Neon Grid Background */}
      <div className="absolute inset-0 neon-grid grid-animate opacity-30" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-40" />

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2" />

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center min-h-screen px-6 md:px-12 lg:px-20 py-20">
        {/* Left Content */}
        <div className="flex-1 max-w-3xl mb-10 lg:mb-0">
          {/* Greeting */}
          <p className="text-primary font-mono text-sm md:text-base mb-6 tracking-widest neon-glow">
            Hi, my name is
          </p>

          {/* Name */}
          <h1
            ref={titleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-2 leading-tight"
          >
            <span className="text-balance">Farhan A Hanfee</span>
          </h1>

          {/* Tagline */}
          <h2 className="text-2xl md:text-3xl font-bold text-muted-foreground mb-6 leading-relaxed">
            Full-Stack Developer building scalable <span className="text-accent neon-glow-secondary">Web, API, Shopify & AI-powered</span> solutions.
          </h2>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed mb-6 text-base md:text-lg">
            Full-Stack Developer with <span className="text-primary font-semibold">7+ years</span> of experience building modern web applications, custom Shopify platforms, and scalable backend APIs. I specialize in <span className="text-primary font-semibold">MERN stack, REST APIs, and AI-assisted development</span> to create efficient, scalable, and high-performance products. Delivered <span className="text-primary font-semibold">600+ projects</span> for global clients focusing on clean architecture, performance, and modern user experiences.
          </p>

          {/* Tech Stack */}
          <p className="text-sm text-muted-foreground mb-8 font-mono tracking-wide">
            React • Next.js • Node.js • Python • MongoDB • Shopify • REST APIs • AI-Assisted Development
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-10">
            <a
              href="mailto:fhanfee99@gmail.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              fhanfee99@gmail.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Indore, India
            </span>
          </div>

          {/* CTA Button */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-mono text-sm group glow-box"
          >
            <span>EXPLORE WORK</span>
            <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Right Side - 3D Laptop Section */}
        <div className="flex-1 flex items-center justify-center lg:justify-end">
          <div
            ref={laptopRef}
            className="relative w-full max-w-md h-96 float perspective"
          >
            {/* Laptop Frame */}
            <div className="w-full h-full glow-box rounded-2xl border-2 border-primary/40 bg-gradient-to-br from-card to-card/50 p-4 overflow-hidden relative">
              {/* Screen */}
              <div className="w-full h-3/4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg border border-primary/20 overflow-hidden">
                {/* Glowing code effect */}
                <div className="w-full h-full relative flex items-center justify-center">
                  <div className="space-y-2 font-mono text-xs text-primary/60">
                    <p className="neon-glow">&gt; npm run build</p>
                    <p className="text-accent/60">✓ Compiling...</p>
                    <p className="text-primary/40"># Building future web</p>
                  </div>

                  {/* Animated scan lines */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 animate-pulse opacity-20">
                    <div className="h-0.5 bg-primary/40 mb-1" />
                    <div className="h-0.5 bg-accent/40 mb-1" />
                    <div className="h-0.5 bg-primary/40 mb-1" />
                  </div>
                </div>
              </div>

              {/* Keyboard */}
              <div className="w-full h-1/4 bg-gradient-to-b from-card/30 to-card/10 rounded-b-lg border-t border-border flex items-center justify-center gap-1 p-2">
                <div className="flex-1 flex gap-1 flex-wrap">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 h-3 bg-border rounded-sm hover:bg-primary/20 transition-all"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating elements around laptop */}
            <div className="absolute -top-12 -right-12 p-4 glow-box rounded-full border border-accent/30 bg-card/50 backdrop-blur">
              <Code2 className="h-8 w-8 text-accent neon-glow-secondary" />
            </div>
            <div className="absolute -bottom-8 -left-8 p-4 glow-box rounded-full border border-primary/30 bg-card/50 backdrop-blur">
              <Zap className="h-8 w-8 text-primary neon-glow" />
            </div>
          </div>
        </div>
      </div>

      {/* Project Cards Preview - appears on scroll */}
      <div ref={cardsContainerRef} className="relative z-10 px-6 md:px-12 lg:px-20 py-20 grid md:grid-cols-3 gap-6">
        {[
          { title: "Shopify Stores", desc: "Custom ecommerce solutions", icon: "/icons8-e-commerce.gif" },
          { title: "Web Apps", desc: "Full-stack applications", icon: "/gifs/shopify.gif"  },
          { title: "AI Integration", desc: "Smart features & automation", icon: "/icons8-critical-thinking.gif"  },
        ].map((item, idx) => (
          <div
            key={idx}
            className="project-card glow-box p-6 rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 group cursor-pointer hover:scale-105"
          >
            <div className="h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-all" />
            <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
