import { Github, Linkedin } from 'lucide-react';
import React from 'react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Projeler', href: '#work' },
  { label: 'Hizmetler', href: '#highlights' },
  { label: 'Stüdyo', href: '#about' },
  { label: 'İletişim', href: '#contact' },
];

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-studio-border">
      <div className="max-w-[1800px] mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-studio-text flex items-center justify-center text-white font-mono text-xs font-bold transition-transform group-hover:rotate-90">
              LS
            </div>
            <span className="font-bold text-sm tracking-tighter uppercase">Lukeri Studio</span>
          </a>
          <div className="hidden lg:flex items-center gap-6 studio-border-l pl-8">
            <span className="text-[10px] font-mono text-studio-gray uppercase tracking-widest leading-none">Yazılım Geliştirme Stüdyosu</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-studio-text hover:text-studio-gray transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="w-[1px] h-4 bg-studio-border mx-2"></div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/MCHTSEN" target="_blank" rel="noopener noreferrer" className="text-studio-text hover:text-studio-gray transition-colors">
              <Github size={16} strokeWidth={1.5} />
            </a>
            <a href="https://linkedin.com/in/mucahit-sen-a3933a184" target="_blank" rel="noopener noreferrer" className="text-studio-text hover:text-studio-gray transition-colors">
              <Linkedin size={16} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
