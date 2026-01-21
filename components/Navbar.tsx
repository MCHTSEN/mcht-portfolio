import React from 'react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Highlights', href: '#highlights' },
  { label: 'Work', href: '#work' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Get in touch', href: '#contact' },
];

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F9F9F9]/80 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border border-gray-300">
             <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" alt="Avatar" className="w-full h-full object-cover grayscale" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm leading-tight">Jonny Czar Portfolio 2024</span>
            <span className="text-xs text-gray-500">Jonny Czar • "Keep it simple"</span>
          </div>
        </div>

        <div className="hidden md:flex items-center bg-white rounded-full px-6 py-2 shadow-sm border border-gray-100 gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};