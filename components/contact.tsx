"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-2xl mx-auto text-center">
        <p
          className={`text-primary font-mono text-sm mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          04. What&apos;s Next?
        </p>

        <h2
          className={`text-4xl md:text-5xl font-bold text-foreground mb-6 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Get In Touch
        </h2>

        <p
          className={`text-muted-foreground leading-relaxed mb-12 transition-all duration-700 delay-200 ${
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
            className="group flex flex-col items-center gap-3 p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
          >
            <Mail className="h-8 w-8 text-primary" />
            <span className="text-foreground font-medium">Email</span>
            <span className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
              fhanfee99@gmail.com
            </span>
          </a>
          <a
    href="mailto:ahanfeefarhan@gmail.com"
    className="group flex flex-col items-center gap-3 p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
  >
    <Mail className="h-8 w-8 text-primary" />
    <span className="text-foreground font-medium">Email</span>
    <span className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
      ahanfeefarhan@gmail.com
    </span>
  </a>

          <a
            href="tel:+918962633019"
            className="group flex flex-col items-center gap-3 p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
          >
            <Phone className="h-8 w-8 text-primary" />
            <span className="text-foreground font-medium">Phone</span>
            <span className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
              +91 8962633019
            </span>
          </a>
        </div>

        {/* Location */}
        <div
          className={`flex items-center justify-center gap-2 text-muted-foreground mb-10 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <MapPin className="h-4 w-4" />
          <span>Indore, India</span>
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
  className="inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-mono"
>
  Chat on WhatsApp
  <ExternalLink className="h-4 w-4" />
</a>
        </div>
      </div>
    </section>
  );
}
