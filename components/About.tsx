import { motion } from 'framer-motion';
import { Cpu, PenTool, Terminal } from 'lucide-react';
import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-48 bg-studio-text text-white overflow-hidden relative">
      {/* Decorative background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold opacity-[0.02] whitespace-nowrap pointer-events-none uppercase tracking-tighter">
        Digital Craftsmanship
      </div>

      <div className="max-w-[1800px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          <div className="lg:col-span-8 space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 text-studio-indigo"
            >
              <div className="h-px w-12 bg-current"></div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em]">Manifestomuz</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-7xl font-bold tracking-tighter leading-[1.1] uppercase"
            >
              SADECE KOD YAZMIYORUZ, <br />
              <span className="text-studio-indigo">DİJİTAL DENEYİMLER</span> <br />
              ZANAAT EDİYORUZ.
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-3xl text-white/60 font-medium max-w-4xl leading-relaxed"
            >
              Lukeri Studio olarak, teknolojinin estetikle buluştuğu noktada duruyoruz. Her pikselin bir amacı, her satır kodun bir ruhu olduğuna inanıyoruz. Karmaşıklığı basitliğe, fikirleri yaşayan ürünlere dönüştürüyoruz.
            </motion.p>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end space-y-12">
            {[
              { icon: Terminal, title: "Teknik Hassasiyet", desc: "En güncel teknolojilerle sarsılmaz altyapılar." },
              { icon: PenTool, title: "Estetik Vizyon", desc: "Kullanıcıyı merkezine alan premium tasarımlar." },
              { icon: Cpu, title: "İnovatif Çözümler", desc: "IoT ve AI ile geleceğin sistemlerini bugün inşaa ediyoruz." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (idx * 0.1) }}
                className="space-y-4 group"
              >
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-studio-indigo group-hover:bg-studio-indigo group-hover:text-white transition-all">
                  <feature.icon size={24} />
                </div>
                <h4 className="text-lg font-bold uppercase tracking-tight">{feature.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
