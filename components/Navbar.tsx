import { motion } from 'framer-motion';
import { Github, Linkedin, MessageSquare } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Projeler', href: '#work' },
  { label: 'Hizmetler', href: '#highlights' },
  { label: 'Stüdyo', href: '#about' },
  { label: 'İletişim', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const rafRef = useRef<number | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      lastScrollY.current = window.scrollY;

      // Throttle with requestAnimationFrame
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(() => {
          setScrolled(lastScrollY.current > 20);
          rafRef.current = null;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <nav role="navigation" aria-label="Ana navigasyon" className={`main-navbar fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className={`max-w-[1800px] mx-auto px-6`}>
        <div className={`glass rounded-full flex items-center justify-between px-8 transition-all duration-500 ${scrolled ? 'h-16 border-studio-border/50 shadow-lg shadow-black/5' : 'h-20 border-transparent'}`}>
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-3 group" aria-label="Lukeri Studio - Ana sayfa">
              <motion.div
                whileHover={{ rotate: 90 }}
                className="w-10 h-10 bg-white flex items-center justify-center text-black font-mono text-xs font-bold rounded-xl"
              >
                LS
              </motion.div>
              <div className="flex flex-col">
                <span className="font-bold text-xs tracking-tighter uppercase leading-none">Lukeri Studio</span>
                <span className="text-[8px] font-mono text-studio-primary uppercase tracking-widest mt-1">Design & Tech</span>
              </div>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-studio-text hover:text-studio-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-studio-primary transition-all group-hover:w-full"></span>
              </a>
            ))}

            <div className="w-[1px] h-4 bg-studio-border/50 mx-2"></div>

            <div className="flex items-center gap-5">
              <a href="https://github.com/MCHTSEN" target="_blank" rel="noopener noreferrer" aria-label="GitHub profilimiz" className="text-studio-text hover:text-studio-primary transition-colors">
                <Github size={18} strokeWidth={1.5} aria-hidden="true" />
              </a>
              <a href="https://linkedin.com/in/mucahit-sen-a3933a184" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profilimiz" className="text-studio-text hover:text-studio-primary transition-colors">
                <Linkedin size={18} strokeWidth={1.5} aria-hidden="true" />
              </a>

              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="ml-2 px-6 py-2.5 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-studio-primary hover:text-white transition-all group flex items-center gap-2">
                Hadi Başlayalım
                <MessageSquare size={12} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden w-10 h-10 rounded-lg bg-studio-primary/10 flex flex-col items-center justify-center gap-1.5 text-studio-primary focus:outline-none focus:ring-2 focus:ring-studio-primary focus:ring-offset-2"
            aria-label="Menüyü aç"
            aria-expanded="false"
            type="button"
          >
            <span className="sr-only">Navigasyon menüsünü aç</span>
            <span className="block w-5 h-0.5 bg-current rounded-full" aria-hidden="true"></span>
            <span className="block w-5 h-0.5 bg-current rounded-full" aria-hidden="true"></span>
            <span className="block w-5 h-0.5 bg-current rounded-full" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};
