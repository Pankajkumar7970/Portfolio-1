import React, { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Introduction", href: "#hero" },
    { name: "Simulation", href: "#simulation" },
    { name: "Journey", href: "#timeline" },
    { name: "Work", href: "#projects" },
    { name: "Skills", href: "#skills" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center font-serif font-bold italic group-hover:bg-charcoal transition-colors">
            P
          </div>
          <span className="font-serif text-xl font-medium tracking-wide text-charcoal">
            PANKAJ <span className="text-gold">KUMAR</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest text-charcoal/70 hover:text-gold transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-charcoal text-white px-6 py-2 rounded-full font-medium text-sm hover:bg-gold transition-colors flex items-center gap-2">
            <span>Resume</span>
            <Download size={14} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-charcoal"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream border-t border-gold/20 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-serif text-charcoal hover:text-gold"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#"
                className="flex items-center gap-2 text-gold font-medium mt-4"
              >
                Download Resume <Download size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
