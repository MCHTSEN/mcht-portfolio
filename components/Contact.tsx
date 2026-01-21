import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-40 bg-studio-bg/30">
      <div className="max-w-[1800px] mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          {/* Header & Intent */}
          <div className="lg:col-span-6 space-y-12">
            <div className="space-y-6">
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-blue-600 bg-blue-50 px-3 py-1.5 inline-block">İletişim / İş Birliği</span>
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none uppercase">
                BİRLİKTE<br /><span className="text-blue-600">ÇALIŞALIM</span><br />MI?
              </h2>
            </div>
            
            <p className="text-xl md:text-2xl text-studio-gray font-medium max-w-md leading-snug tracking-tight">
              2026 iş birlikleri için kapasite ayrıldı. Projenizin teknik gereksinimlerini değerlendirelim.
            </p>

            <div className="space-y-6 pt-12">
               <div className="flex items-center gap-4 text-studio-text">
                  <div className="w-12 h-12 bg-white border-2 border-studio-text flex items-center justify-center shadow-[4px_4px_0px_#2563eb]">
                    <MapPin size={20} className="text-blue-600" />
                  </div>
                  <span className="text-sm font-mono font-bold uppercase tracking-widest underline decoration-blue-600 underline-offset-4">İstanbul & Bursa</span>
               </div>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-studio-text border-2 border-studio-text shadow-[16px_16px_0px_#e5e7eb]">
              
              {/* Email */}
              <a href="mailto:mchtsenn16@gmail.com" className="group bg-white p-12 hover:bg-blue-600 hover:text-white transition-all duration-500 flex flex-col justify-between aspect-square">
                 <div className="flex justify-between items-start">
                    <Mail size={32} strokeWidth={1} />
                    <ArrowUpRight size={24} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                 </div>
                 <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-studio-gray group-hover:text-white/70">E-Posta</span>
                    <p className="text-lg font-bold">mchtsenn116@gmail.com</p>
                 </div>
              </a>

              {/* LinkedIn */}
              <a href="https://linkedin.com/in/mucahit-sen-a3933a184" target="_blank" rel="noopener noreferrer" className="group bg-white p-12 hover:bg-black hover:text-white transition-all duration-500 flex flex-col justify-between aspect-square">
                 <div className="flex justify-between items-start">
                    <Linkedin size={32} strokeWidth={1} />
                    <ArrowUpRight size={24} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                 </div>
                 <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-studio-gray group-hover:text-white/70">LinkedIn</span>
                    <p className="text-lg font-bold">LinkedIn</p>
                 </div>
              </a>

              {/* GitHub */}
              <a href="https://github.com/MCHTSEN" target="_blank" rel="noopener noreferrer" className="group bg-white p-12 hover:bg-black hover:text-white transition-all duration-500 flex flex-col justify-between aspect-square">
                 <div className="flex justify-between items-start">
                    <Github size={32} strokeWidth={1} />
                    <ArrowUpRight size={24} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                 </div>
                 <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-studio-gray group-hover:text-white/70">Açık Kaynak</span>
                    <p className="text-lg font-bold">GitHub</p>
                 </div>
              </a>

              {/* Call */}
              <a href="tel:+905050161116" className="group bg-blue-600 text-white p-12 transition-all duration-500 flex flex-col justify-between aspect-square">
                 <div className="flex justify-between items-start">
                    <Phone size={32} strokeWidth={1} />
                    <ArrowUpRight size={24} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                 </div>
                 <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/50">Telefon</span>
                    <p className="text-lg font-bold">Görüşme Planla</p>
                 </div>
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
