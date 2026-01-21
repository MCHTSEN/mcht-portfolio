import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Highlights', href: '#highlights' },
  { label: 'Work', href: '#work' },
  { label: 'GitHub', href: 'https://github.com/MCHTSEN', external: true },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/mucahit-sen-a3933a184', external: true },
  { label: 'Get in touch', href: '#contact' },
];

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F9F9F9]/80 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden border border-gray-300 flex items-center justify-center text-white font-bold text-sm">
             MS
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm leading-tight">Mucahit SEN Portfolio 2025</span>
            <span className="text-xs text-gray-500">Flutter Developer | Istanbul & Bursa</span>
          </div>
        </div>

        <div className="hidden md:flex items-center bg-white rounded-full px-6 py-2 shadow-sm border border-gray-100 gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors flex items-center gap-1"
            >
              {item.label === 'GitHub' && <Github size={14} />}
              {item.label === 'LinkedIn' && <Linkedin size={14} />}
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
