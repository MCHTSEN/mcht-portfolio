import { motion } from 'framer-motion';
import { Github, Linkedin, MessageSquare } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Projeler', href: '#work' },
  { label: 'Hizmetler', href: '#highlights' },
  { label: 'Stüdyo', href: '#about' },
  { label: 'İletişim', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className={`max-w-[1800px] mx-auto px-6`}>
        <div className={`glass rounded-full flex items-center justify-between px-8 transition-all duration-500 ${scrolled ? 'h-16 border-studio-border/50 shadow-lg shadow-black/5' : 'h-20 border-transparent'}`}>
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-3 group">
              <motion.div 
                whileHover={{ rotate: 90 }}
                className="w-10 h-10 bg-studio-text flex items-center justify-center text-white font-mono text-xs font-bold rounded-xl"
              >
                LS
              </motion.div>
              <div className="flex flex-col">
                <span className="font-bold text-xs tracking-tighter uppercase leading-none">Lukeri Studio</span>
                <span className="text-[8px] font-mono text-studio-indigo uppercase tracking-widest mt-1">Design & Tech</span>
              </div>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-studio-text hover:text-studio-indigo transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-studio-indigo transition-all group-hover:w-full"></span>
              </a>
            ))}
            
            <div className="w-[1px] h-4 bg-studio-border/50 mx-2"></div>
            
            <div className="flex items-center gap-5">
              <a href="https://github.com/MCHTSEN" target="_blank" rel="noopener noreferrer" className="text-studio-text hover:text-studio-indigo transition-colors">
                <Github size={18} strokeWidth={1.5} />
              </a>
              <a href="https://linkedin.com/in/mucahit-sen-a3933a184" target="_blank" rel="noopener noreferrer" className="text-studio-text hover:text-studio-indigo transition-colors">
                <Linkedin size={18} strokeWidth={1.5} />
              </a>
              
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="ml-2 px-6 py-2.5 bg-studio-text text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-studio-indigo transition-all group flex items-center gap-2">
                Hadi Başlayalım
                <MessageSquare size={12} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          
          {/* Mobile indicator or menu could go here */}
          <div className="md:hidden">
             <div className="w-8 h-8 rounded-lg bg-studio-indigo/10 flex items-center justify-center text-studio-indigo">
                <div className="w-4 h-[1px] bg-current relative after:absolute after:top-[-4px] after:w-full after:h-[1px] after:bg-current before:absolute before:top-[4px] before:w-full before:h-[1px] before:bg-current"></div>
             </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
