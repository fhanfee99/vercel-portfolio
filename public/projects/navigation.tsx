"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-lg shadow-background/10"
          : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-4">
        {/* Logo */}
        <a
          href="/"
          className="text-primary font-mono text-xl font-bold hover:opacity-80 transition-opacity"
        >
          {"<FAH />"}
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-mono"
              >
                <span className="text-primary">0{index + 1}.</span> {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/Farhan-A-Hanfee4a.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-primary text-primary hover:bg-primary/10 transition-colors text-sm font-mono"
            >
              Professional Profile
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-primary p-2"
          aria-label="Toggle menu"
          type="button"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-md transition-all duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, index) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground hover:text-primary transition-colors text-lg font-mono"
              >
                <span className="text-primary block text-center text-sm mb-1">
                  0{index + 1}.
                </span>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/Farhan-A-HanfeeCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-primary text-primary hover:bg-primary/10 transition-colors text-sm font-mono"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
