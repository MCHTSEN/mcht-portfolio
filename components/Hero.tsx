import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-40 pb-20 px-6 text-center max-w-4xl mx-auto flex flex-col items-center">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
        Jonny Czar is <br />
        Experience Designer <br />
        at Hotjar
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-12">
        15 years of Design. Brazilian. Berlin based.
      </p>
      
      <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
         {/* Specific portrait resembling the designer style */}
        <img 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
          alt="Jonny Czar" 
          className="w-full h-full object-cover grayscale"
        />
      </div>
    </section>
  );
};