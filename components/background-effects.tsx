"use client";

import { useEffect, useRef } from "react";

export function BackgroundEffects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create floating code snippets
    const snippets = ["const", "function", "async", "await", "return", "{}", "=>", "import"];
    
    for (let i = 0; i < 20; i++) {
      const span = document.createElement("span");
      span.textContent = snippets[Math.floor(Math.random() * snippets.length)];
      span.style.position = "absolute";
      span.style.left = Math.random() * 100 + "%";
      span.style.top = Math.random() * 100 + "%";
      span.style.opacity = String(Math.random() * 0.3 + 0.1);
      span.style.fontSize = Math.random() * 12 + 10 + "px";
      span.style.color = Math.random() > 0.5 ? "oklch(0.65 0.22 280)" : "oklch(0.60 0.20 180)";
      span.style.fontFamily = "monospace";
      span.style.pointerEvents = "none";
      span.style.whiteSpace = "nowrap";
      span.className = "code-float";
      span.style.animationDelay = Math.random() * 4 + "s";
      
      containerRef.current.appendChild(span);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      style={{ perspective: "1000px" }}
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 cyber-grid opacity-50" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary to-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-accent to-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4" />

      {/* Scan line effect */}
      <div className="absolute inset-0 scan-line bg-gradient-to-b from-transparent via-primary/10 to-transparent pointer-events-none opacity-30" />
    </div>
  );
}
