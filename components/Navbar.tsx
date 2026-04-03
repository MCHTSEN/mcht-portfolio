import { AnimatePresence, motion } from 'framer-motion';
import { Github, Linkedin, MessageSquare, X } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Projeler', href: '#work' },
  { label: 'Hizmetler', href: '#solutions' },
  { label: 'Stüdyo', href: '#about' },
  { label: 'İletişim', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const rafRef = useRef<number | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      lastScrollY.current = window.scrollY;

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <>
      <nav role="navigation" aria-label="Ana navigasyon" className={`main-navbar fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3 md:py-4' : 'py-4 md:py-8'}`}>
        <div className="max-w-[1800px] mx-auto px-4 md:px-6">
          <div className={`glass rounded-full flex items-center justify-between px-5 md:px-8 transition-all duration-500 ${scrolled ? 'h-14 md:h-16 border-studio-border/50 shadow-lg shadow-black/5' : 'h-16 md:h-20 border-transparent'}`}>
            <div className="flex items-center gap-8">
              <a href="/" className="flex items-center gap-3 group" aria-label="Lukeri Studio - Ana sayfa">
                <motion.div
                  whileHover={{ rotate: 90 }}
                  className="w-9 h-9 md:w-10 md:h-10 bg-white flex items-center justify-center text-black font-mono text-xs font-bold rounded-xl"
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
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-11 h-11 rounded-xl bg-studio-primary/10 flex flex-col items-center justify-center gap-1.5 text-studio-primary focus:outline-none focus:ring-2 focus:ring-studio-primary"
              aria-label={mobileOpen ? 'Menüyü kapat' : 'Menüyü aç'}
              aria-expanded={mobileOpen}
              type="button"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                className="block w-5 h-0.5 bg-current rounded-full origin-center"
                aria-hidden="true"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-5 h-0.5 bg-current rounded-full"
                aria-hidden="true"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                className="block w-5 h-0.5 bg-current rounded-full origin-center"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />

            {/* Menu Content */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative h-full flex flex-col items-center justify-center gap-2 px-8"
            >
              {/* Close button */}
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-8 right-6 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white"
                aria-label="Menüyü kapat"
              >
                <X size={20} />
              </button>

              {/* Nav Links */}
              {navItems.map((item, i) => (
                <motion.button
                  key={item.label}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                  onClick={() => handleNavClick(item.href)}
                  className="text-2xl font-bold uppercase tracking-widest text-white/90 py-4 px-6 rounded-xl hover:bg-white/5 active:bg-white/10 transition-colors w-full text-center"
                >
                  {item.label}
                </motion.button>
              ))}

              {/* Divider */}
              <div className="w-16 h-[1px] bg-white/20 my-4" />

              {/* Social Links */}
              <div className="flex items-center gap-6">
                <a href="https://github.com/MCHTSEN" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white/70 active:bg-white/20 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/mucahit-sen-a3933a184" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white/70 active:bg-white/20 transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>

              {/* CTA Button */}
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={() => handleNavClick('#contact')}
                className="mt-6 px-8 py-4 bg-studio-primary text-white text-sm font-bold uppercase tracking-widest rounded-full flex items-center gap-3 active:scale-95 transition-transform"
              >
                Hadi Başlayalım
                <MessageSquare size={16} />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
