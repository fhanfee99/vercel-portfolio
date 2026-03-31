"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, ExternalLink, Terminal } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !containerRef.current) return;

    gsap.fromTo(
      containerRef.current,
      { opacity: 0, scale: 0.9, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      }
    );
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 neon-grid opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none" />
    
      <div ref={containerRef} className="max-w-2xl mx-auto text-center relative z-10">
        <p
          className={`text-primary font-mono text-xs mb-4 transition-all duration-700 tracking-widest neon-glow ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          &lt;04 /&gt; WHAT'S NEXT?
        </p>

        <h2
          className={`text-5xl md:text-6xl font-bold neon-glow mb-6 transition-all duration-700 delay-100 leading-tight ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Get In Touch
        </h2>

        <p
          className={`text-muted-foreground leading-relaxed mb-12 transition-all duration-700 delay-200 text-lg ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          I&apos;m currently open to new opportunities and would love to hear
          from you. Whether you have a project in mind, a question, or just want
          to say hi, my inbox is always open!
        </p>

        {/* Contact Cards */}
        <div
          className={`grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="mailto:fhanfee99@gmail.com"
            className="group glow-box flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/30 rounded-lg hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
          >
            <Mail className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
            <span className="text-foreground font-medium">Email</span>
            <span className="text-muted-foreground text-sm group-hover:text-primary transition-colors font-mono">
              fhanfee99@gmail.com
            </span>
          </a>
          <a
    href="mailto:ahanfeefarhan@gmail.com"
    className="group glow-box flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/30 rounded-lg hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
  >
    <Mail className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
    <span className="text-foreground font-medium">Email</span>
    <span className="text-muted-foreground text-sm group-hover:text-primary transition-colors font-mono">
      ahanfeefarhan@gmail.com
    </span>
  </a>

        </div>

        {/* CTA Button */}
        <div
          className={`transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
  href="https://wa.me/918962633019?text=Hi%20Farhan,%20I%20want%20to%20discuss%20a%20project."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-mono glow-box group rounded-lg"
>
  <span className="neon-glow">&gt;</span>
  Chat on WhatsApp
  <ExternalLink className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
</a>
        </div>
      </div>
    </section>
  );
}
