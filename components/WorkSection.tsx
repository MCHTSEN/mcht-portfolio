import React from 'react';
import { ArrowRight, Star, Globe, Smartphone, Feather, Layout, ArrowUpRight, Award, Apple } from 'lucide-react';

export const WorkSection: React.FC = () => {
  return (
    <section id="work" className="py-10 px-6 max-w-5xl mx-auto space-y-12">
      
      {/* N26 Case Study - White */}
      <div className="bg-white rounded-[40px] p-10 md:p-16 text-center shadow-sm overflow-hidden relative group cursor-pointer transition-shadow hover:shadow-xl">
        <div className="mb-10">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">N26</h3>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            A home for the<br/>easier-than-ever<br/>finances
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto mb-10 text-sm md:text-base">
            From bills to budgeting, money management can be challenging.
            Check out the design process of redesigning the home screen and
            Transaction of one of Europe's first completely mobile banks.
            </p>
        </div>
        
        {/* Mockups */}
        <div className="relative mx-auto w-full max-w-md h-64 md:h-96">
             {/* Replaced with a cleaner mobile UI mockup image */}
             <img src="https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?auto=format&fit=crop&q=80&w=1000" 
             className="w-full h-full object-cover rounded-t-3xl shadow-2xl border-4 border-gray-100" alt="N26 App Interface" />
        </div>

        {/* Footer info strip */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap justify-center md:justify-between items-center gap-6 text-xs font-semibold text-gray-500">
             <div className="flex items-center gap-2">
                <span className="bg-teal-500 text-white p-1 rounded">N26</span>
                <span>4.8</span>
                <div className="flex text-yellow-400"><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/></div>
             </div>
             <div className="flex items-center gap-2">
                 <span>+8 millions customers</span>
             </div>
             <div className="flex items-center gap-2">
                <span className="font-serif italic">Forbes</span>
                <span>World's Best Banks</span>
             </div>
             <button className="bg-black text-white px-6 py-2 rounded-full flex items-center gap-2 group-hover:bg-gray-800 transition-colors">
                N26 Case Study <ArrowRight size={14} />
             </button>
        </div>
      </div>

      {/* Article Card - Blue */}
      <div className="bg-card-blue rounded-[40px] p-10 md:p-16 text-center shadow-sm overflow-hidden relative text-white group cursor-pointer">
         {/* Abstract background shapes */}
         <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400/30 rounded-full blur-xl animate-pulse"></div>
         <div className="absolute bottom-10 right-10 w-32 h-32 bg-indigo-500/30 rounded-full blur-2xl"></div>
         
         <div className="relative z-10 flex flex-col items-center">
            <span className="text-xs font-semibold uppercase tracking-widest opacity-70 mb-6">Article</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The power of visual in<br/>product design</h2>
            <p className="max-w-md mx-auto opacity-80 mb-10">
                How visual elements affect our perception, recognition and memory for interacting with digital products.
            </p>
            
             <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-white hover:text-card-blue transition-all">
                Full article <ArrowRight size={14} />
             </button>
             
             {/* 3D-like Illustrations */}
             <div className="mt-12 flex justify-between w-full max-w-2xl mx-auto">
                <div className="w-24 h-24 bg-orange-400 rounded-lg transform rotate-12 shadow-lg flex items-center justify-center text-4xl">🎨</div>
                <div className="w-20 h-20 bg-purple-400 rounded-full shadow-lg flex items-center justify-center text-4xl mb-12">👁️</div>
                <div className="w-28 h-28 bg-white text-blue-600 rounded-xl transform -rotate-6 shadow-xl flex items-center justify-center text-4xl">📐</div>
             </div>
         </div>
      </div>

      {/* Bookify Card - Beige */}
      <div className="bg-card-beige rounded-[40px] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between shadow-sm overflow-hidden relative group cursor-pointer gap-10">
         <div className="flex-1 text-left">
            <span className="text-xs font-bold text-indigo-600 mb-2 block">Bookify</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Acclaimed<br/>books right to<br/>your phone
            </h2>
            <p className="text-gray-500 mb-8 max-w-sm text-sm">
                Worldpackers is a community based on collaboration that makes travel
                more accessible to +1.5 million travelers seeking a profound cultural experience.
            </p>
            <div className="flex items-center justify-between border-t border-gray-300 pt-6">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center text-white text-xs font-bold">b</div>
                    <span className="text-xs font-bold text-gray-700">Bookify</span>
                    <span className="text-xs text-gray-400">4.7</span>
                </div>
                <button className="bg-purple-700 text-white px-5 py-2 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-purple-800 transition-colors">
                    Bookify Case Study <ArrowRight size={12} />
                </button>
            </div>
         </div>
         <div className="flex-1 relative flex justify-center">
             <div className="w-64 h-[400px] bg-black rounded-[40px] border-8 border-gray-900 shadow-2xl overflow-hidden relative z-10">
                  {/* Replaced with a more abstract/clean book visual */}
                  <img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover opacity-90" alt="Bookify App"/>
             </div>
             {/* Hand mock - approximated with a shape or just the phone */}
             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-200 rounded-full blur-2xl opacity-50"></div>
         </div>
      </div>

       {/* Worldpackers - White */}
       <div className="bg-white rounded-[40px] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-sm relative group cursor-pointer">
          <div className="flex-1 relative h-80 w-full flex justify-center items-center">
             <div className="relative w-48 h-80 transform -rotate-6 z-10">
                 {/* Travel Image 1 */}
                 <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover rounded-3xl border-4 border-black shadow-lg" alt="Switzerland Travel" />
             </div>
             <div className="relative w-48 h-80 transform rotate-6 -ml-12 mt-12 z-0">
                 {/* Travel Image 2 */}
                 <img src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover rounded-3xl border-4 border-gray-200 shadow-lg" alt="Traveler" />
             </div>
          </div>
          <div className="flex-1 text-left">
             <span className="text-xs font-bold text-gray-400 mb-2 block uppercase">Worldpackers</span>
             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                A world of ways to travel the world
             </h2>
             <p className="text-gray-500 mb-8 text-sm">
                Worldpackers is a community based on collaboration that makes travel
                more accessible to +1.5 million travelers seeking a profound cultural experience.
             </p>
             <div className="flex flex-wrap items-center gap-4 mt-8 pt-8 border-t border-gray-100">
                <div className="flex items-center gap-2 text-xs font-bold">
                    <Globe size={16} /> Worldpackers
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Award size={16} /> App of the day 2019
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Apple size={16} /> Editors' choice Innovation in Brazil
                </div>
                 <button className="bg-black text-white px-5 py-2 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-gray-800 transition-colors ml-auto">
                    Case Study <ArrowRight size={12} />
                </button>
             </div>
          </div>
       </div>

       {/* Grid Section */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {/* Red Card */}
           <div className="bg-card-red rounded-[40px] p-10 text-center text-white relative overflow-hidden group hover:shadow-lg transition-shadow">
               <span className="text-xs font-bold uppercase tracking-widest opacity-70 mb-4 block">Article</span>
               <h3 className="text-3xl font-bold mb-4">Making every design event worth it</h3>
               <p className="opacity-80 text-sm mb-8">How to get the most before, during and after every design event you attend.</p>
               <button className="bg-white/20 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-xs inline-flex items-center gap-2 mb-10">
                   Full article <ArrowRight size={12}/>
               </button>
               {/* Decorative Graphic */}
               <div className="mt-4 flex justify-center gap-2 opacity-90">
                  <div className="w-16 h-20 bg-black rounded-lg flex items-center justify-center text-xl font-bold">W</div>
                  <div className="w-16 h-20 bg-gray-800 rounded-lg flex items-center justify-center text-xl font-bold">W</div>
                  <div className="w-16 h-20 bg-gray-900 rounded-lg flex items-center justify-center text-xl font-bold rotate-6">IXDA</div>
               </div>
           </div>

           {/* White Card - Critiques */}
           <div className="bg-white rounded-[40px] p-10 text-center relative overflow-hidden group hover:shadow-lg transition-shadow border border-gray-100">
               <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 block">Article</span>
               <h3 className="text-3xl font-bold mb-4 text-gray-900">Mastering Design Critiques</h3>
               <p className="text-gray-500 text-sm mb-8">Checklists, framework and learning about running Design Critique over 60+ designers</p>
               <button className="bg-black text-white px-4 py-1.5 rounded-full text-xs inline-flex items-center gap-2 mb-10">
                   Full article <ArrowRight size={12}/>
               </button>
               {/* Graphic */}
               <div className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-200 text-left text-xs text-gray-400 font-mono w-3/4 mx-auto">
                   <div className="flex gap-2 mb-2"><div className="w-2 h-2 rounded-full bg-red-400"></div><div className="w-2 h-2 rounded-full bg-yellow-400"></div></div>
                   <p className="mb-1">- 50 €</p>
                   <p className="line-through">How it works</p>
               </div>
           </div>

           {/* Orange Card - Brand Asset */}
           <div className="bg-card-orange rounded-[40px] p-10 text-center text-white relative overflow-hidden group hover:shadow-lg transition-shadow">
               <div className="w-8 h-8 bg-blue-600 rounded mx-auto mb-4 flex items-center justify-center text-xs font-bold">Itau</div>
               <h3 className="text-3xl font-bold mb-4">Brand Asset Management</h3>
               <p className="opacity-80 text-sm mb-8">From the ground up. Redesigning how 130.000 employees access the brands assets.</p>
               <button className="bg-white/20 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-xs inline-flex items-center gap-2 mb-10">
                   Restricted <ArrowRight size={12}/>
               </button>
               <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mt-4 shadow-xl flex items-center justify-center font-bold text-2xl italic">Itaú</div>
           </div>

           {/* White Card - Listing Page */}
           <div className="bg-white rounded-[40px] p-10 text-center relative overflow-hidden group hover:shadow-lg transition-shadow border border-gray-100">
               <div className="flex items-center justify-center gap-1 text-orange-500 font-bold mb-4">
                   <span>Pepper</span>
                   <div className="flex"><Star size={8} fill="currentColor"/><Star size={8} fill="currentColor"/><Star size={8} fill="currentColor"/></div>
               </div>
               <h3 className="text-3xl font-bold mb-4 text-gray-900">A listing page redesign</h3>
               <p className="text-gray-500 text-sm mb-8">Deal Page redesign for +25 millions users</p>
               <button className="bg-black text-white px-4 py-1.5 rounded-full text-xs inline-flex items-center gap-2 mb-10">
                   Coming soon <ArrowRight size={12}/>
               </button>
               {/* Graphic Mockup */}
               <div className="w-3/4 mx-auto mt-4 transform rotate-3">
                   {/* Clean dashboard/list UI */}
                   <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=500" className="rounded-lg shadow-md opacity-80 hover:opacity-100 transition-opacity" alt="Listing" />
               </div>
           </div>
       </div>

    </section>
  );
};