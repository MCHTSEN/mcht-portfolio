import { ArrowRight, Zap } from 'lucide-react';
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-40 pb-32 px-6 max-w-[1800px] mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12">
        
        {/* Main Headline */}
        <div className="lg:col-span-8 space-y-10 relative">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-100/50 rounded-full blur-[100px] -z-10"></div>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-studio-text shadow-[4px_4px_0px_#2563eb]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600">2026 İş Birliklerine Açık</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl xl:text-[140px] font-bold tracking-tighter leading-[0.85] text-studio-text uppercase">
            YAZILIM<br />
            <span className="text-blue-600">GELİŞTİRME</span><br />
            <span className="text-studio-gray/20">STÜDYOSU.</span>
          </h1>
          
          <div className="flex flex-wrap gap-6 pt-6">
            <button className="group relative px-10 py-5 bg-studio-text text-white text-xs font-bold uppercase tracking-widest overflow-hidden transition-all hover:pr-14">
              <span className="relative z-10 flex items-center gap-3">
                İLETİŞİME GEÇİN <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
              </span>
              <div className="absolute top-0 right-0 w-2 h-full bg-blue-600 group-hover:w-full transition-all duration-300 -z-0"></div>
            </button>
            <button className="px-10 py-5 border-2 border-studio-border text-studio-text text-xs font-bold uppercase tracking-widest hover:border-studio-text hover:bg-studio-bg transition-all">
              TÜM PROJELER
            </button>
          </div>
        </div>

        {/* Studio Info / Sidebar Stats */}
        <div className="lg:col-span-4 flex flex-col justify-end space-y-16 lg:border-l-2 lg:border-studio-text lg:pl-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
               <span className="w-8 h-[2px] bg-blue-600"></span>
               <h3 className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-studio-gray">YAKLAŞIM</h3>
            </div>
            <p className="text-xl md:text-2xl text-studio-text font-medium leading-snug tracking-tight">
              Flutter ve Firebase ekosisteminde uzmanlaşmış, IoT entegrasyonlarından kurumsal sistemlere kadar geniş bir yelpazede çözümler üreten bir stüdyo.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 pt-8">
            <div className="space-y-2 group">
              <div className="text-5xl font-bold tracking-tighter text-blue-600 group-hover:scale-110 transition-transform origin-left">20+</div>
              <p className="text-[10px] font-mono uppercase tracking-widest font-bold text-studio-gray">Yayındaki Ürün</p>
            </div>
            <div className="space-y-2 group">
              <div className="text-5xl font-bold tracking-tighter text-blue-600 group-hover:scale-110 transition-transform origin-left">04+</div>
              <p className="text-[10px] font-mono uppercase tracking-widest font-bold text-studio-gray">Tasarım Ödülü</p>
            </div>
          </div>

        </div>

      </div>
      
      {/* Bottom ticker or info bar */}
      <div className="mt-40 border-y-2 border-studio-text py-10 flex flex-col md:flex-row justify-between items-center gap-6 bg-studio-bg/50">
         <div className="flex items-center gap-12 overflow-hidden whitespace-nowrap w-full group">
            <div className="flex gap-12 animate-marquee items-center">
              {['FLUTTER', 'DART', 'FIREBASE', 'IOT', 'AI ENTEGRASYONU', 'SİSTEM TASARIMI', 'MOBİL PLATFORMLAR'].concat(['FLUTTER', 'DART', 'FIREBASE', 'IOT']).map((tag, i) => (
                <span key={i} className={`text-[11px] font-mono font-bold uppercase tracking-[0.4em] flex items-center gap-3 ${i % 2 === 0 ? 'text-blue-600' : 'text-studio-text'}`}>
                   < Zap size={12} fill={i % 2 === 0 ? 'currentColor' : 'none'} /> {tag}
                </span>
              ))}
            </div>
         </div>
      </div>
    </section>
  );
};
