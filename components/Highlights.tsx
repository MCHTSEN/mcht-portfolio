import React from 'react';
import { Apple, Award, BookOpen, CreditCard, Mic, Users } from 'lucide-react';
import { HighlightItem } from '../types';

const items: HighlightItem[] = [
  {
    icon: <Apple className="w-8 h-8 mb-4" />,
    title: "Apple Editors' choice",
    description: "Worldpackers was featured at Appstore as 'Innovation made in Brazil'",
    linkText: "See more"
  },
  {
    icon: <Award className="w-8 h-8 mb-4" />,
    title: "Appstore's App of the day",
    description: "Worldpackers App Highlight at Appstore - Travel Category",
    linkText: "See more"
  },
  {
    icon: <BookOpen className="w-8 h-8 mb-4" />,
    title: "One of the UX Essential Portfolios",
    description: "Featured by UX Collective",
    linkText: "See more"
  },
  {
    icon: <CreditCard className="w-8 h-8 mb-4" />,
    title: "Pushing Europe's banking further",
    description: "N26 Alumni - 2019 owning Money & Transactions",
    linkText: "See more"
  },
  {
    icon: <Mic className="w-8 h-8 mb-4" />,
    title: "Speaker at Interaction Latin America",
    description: "Sharing the challenges of moving abroad - IT only",
    linkText: "See more"
  },
  {
    icon: <Users className="w-8 h-8 mb-4" />,
    title: "Host & Speaker at UX Speed Dating",
    description: "+100 attendees, 12 hours of workshops & practical User Research",
    linkText: "See more"
  }
];

export const Highlights: React.FC = () => {
  return (
    <section id="highlights" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-start group cursor-pointer">
            <div className="text-gray-900 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 leading-tight w-3/4">{item.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">{item.description}</p>
            {item.linkText && (
              <span className="text-xs font-semibold text-gray-400 group-hover:text-black transition-colors flex items-center gap-1">
                {item.linkText} 
                <span className="text-lg leading-none">↗</span>
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};