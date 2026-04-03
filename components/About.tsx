import { motion } from 'framer-motion';
import { Cpu, PenTool, Terminal } from 'lucide-react';
import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-32 md:py-48 bg-white text-zinc-950 overflow-hidden relative">
      {/* Decorative background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-bold opacity-[0.03] text-zinc-900 whitespace-nowrap pointer-events-none uppercase tracking-tighter">
        Proven Excellence
      </div>

      <div className="max-w-[1800px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24">
          
          <div className="lg:col-span-6 space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 text-blue-600"
            >
              <div className="h-px w-12 bg-current"></div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em]">Güven & Şeffaflık</span>
            </motion.div>

            <motion.h2
              id="about-heading"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-7xl font-bold tracking-tighter leading-[1.1] uppercase text-zinc-900"
            >
              RİSK YOK,<br />
              <span className="text-blue-600">ÖLÇÜLEBİLİR SONUÇLAR</span> <br />
              VAR.
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-base md:text-xl lg:text-2xl text-zinc-600 font-medium max-w-2xl leading-relaxed"
            >
              Bir ürünün başarısı kodun kalitesi kadar iş hedeflerine olan hizmetiyle ölçülür. Agile süreçlerimiz, şeffaf iletişimimiz ve kanıtlanmış tekniklerimizle projenizi bütçe ve zaman garantisiyle hayata geçiriyoruz.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="pt-8 flex flex-col sm:flex-row gap-8 sm:gap-16"
            >
               <div>
                  <div className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-zinc-900">1M+</div>
                  <div className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-500 mt-2">Aktif Kullanıcı</div>
               </div>
               <div>
                  <div className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-zinc-900">%99.9</div>
                  <div className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-500 mt-2">Sistem Uptime</div>
               </div>
               <div>
                  <div className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-zinc-900">3+</div>
                  <div className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-500 mt-2">Tasarım Ödülü</div>
               </div>
            </motion.div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
            <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-400 border-b border-zinc-200 pb-4 mb-4">Neden Müşteriler Bizi Tercih Ediyor?</h3>
            
            {[
              { icon: Terminal, title: "Teknik Ölçeklenebilirlik", desc: "Kod tabanını gelecekteki 10x kullanıcı akışına hazır mimarilerle (Clean Architecture vb.) kurguluyoruz, yatırımınız korunuyor." },
              { icon: PenTool, title: "Premium Brand Algısı", desc: "Kullanıcıya 'Güven' veren, pazar ortalamasının çok üzerinde bir estetik kalite standartı sağlıyoruz." },
              { icon: Cpu, title: "ŞEFFAF AGILE SÜREÇ", desc: "Gizli maliyetler yok. Haftalık sprint raporları ve doğrudan mühendislerle Slack iletişimi ile projenin her anına hakimsiniz." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (idx * 0.1) }}
                className="flex items-start gap-6 group p-6 rounded-2xl hover:bg-zinc-50 border border-transparent hover:border-zinc-200 transition-all cursor-default"
              >
                <div className="w-14 h-14 shrink-0 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  <feature.icon size={24} />
                </div>
                <div className="space-y-2">
                   <h3 className="text-lg font-bold uppercase tracking-tight text-zinc-900">{feature.title}</h3>
                   <p className="text-zinc-500 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
