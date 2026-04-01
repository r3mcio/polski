"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 100);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Logika Paryża", href: "#paryz" },
    { name: "Chaos Warszawy", href: "#warszawa" },
    { name: "Powiśle", href: "#powisle" },
    { name: "Plan Naprawczy", href: "#plan-naprawczy" },
  ];

  return (
    <motion.nav
      initial={{ y: "-100%" }}
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled 
          ? "bg-[#070913]/90 backdrop-blur-md border-gold/20 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.5)]" 
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="font-serif text-xl tracking-widest uppercase text-parchment transition-colors duration-500 hover:text-white">
          Wokulski<span className="text-gold">.</span>doc
        </a>
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href}
                className="group relative text-sm tracking-wider uppercase font-medium transition-colors duration-300 hover:text-gold text-parchment/80 drop-shadow-sm"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
