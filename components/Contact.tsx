import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, MessageSquare, Phone } from 'lucide-react';
import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-48 bg-transparent overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          {/* Header & Intent */}
          <div className="lg:col-span-6 space-y-16">
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-studio-primary/5 text-studio-primary rounded-full"
              >
                <MessageSquare size={12} fill="currentColor" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em]">İletişim Hattı</span>
              </motion.div>
              <motion.h2
                id="contact-heading"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85] uppercase"
              >
                HADİ<br /><span className="text-studio-primary">BAŞLAYALIM.</span>
              </motion.h2>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-studio-gray font-medium max-w-md leading-relaxed tracking-tight border-l-2 border-studio-primary pl-8"
            >
              Yeni bir projeye mi başlıyorsunuz? Teknik partneriniz olmaya hazırız. Hemen iletişime geçin.
            </motion.p>
 
            <div className="flex items-center gap-6 pt-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-studio-primary rounded-full blur-xl opacity-20 animate-pulse"></div>
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-white relative z-10 border border-white/10">
                    <MapPin size={24} />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-studio-primary">Konum</span>
                  <span className="text-lg font-bold text-studio-text">İstanbul & Bursa, TR</span>
                </div>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {[
                { 
                  icon: Mail, 
                  label: "E-Posta", 
                  value: "hello@lukeristudio.com", 
                  href: "mailto:hello@lukeristudio.com",
                  color: "bg-studio-primary"
                },
                { 
                  icon: Linkedin, 
                  label: "LinkedIn", 
                  value: "Lukeri Studio", 
                  href: "https://linkedin.com/in/mucahit-sen-a3933a184",
                  color: "bg-[#0A66C2]" 
                },
                { 
                  icon: Github, 
                  label: "Açık Kaynak", 
                  value: "GitHub", 
                  href: "https://github.com/MCHTSEN",
                  color: "bg-black" 
                },
                { 
                  icon: Phone, 
                  label: "Telefon", 
                  value: "Tıkla & Ara", 
                  href: "tel:+905050161116",
                  color: "bg-studio-primary" 
                }
              ].map((item, idx) => (
                <motion.a 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: -10 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  href={item.href} 
                  target={item.href.startsWith('http') ? "_blank" : undefined}
                  rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-studio-border p-6 rounded-xl hover:border-studio-primary/50 hover:shadow-lg hover:shadow-studio-primary/5 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-studio-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <div className={`w-12 h-12 ${item.color} text-white rounded-lg flex items-center justify-center shadow-md transform transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                        <item.icon size={20} strokeWidth={1.5} />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-studio-gray block">{item.label}</span>
                        <p className="text-base font-bold text-studio-text group-hover:text-studio-primary transition-colors">{item.value}</p>
                      </div>
                    </div>
                    
                    <div className="w-8 h-8 rounded-full border border-studio-border flex items-center justify-center group-hover:bg-studio-primary group-hover:border-studio-primary group-hover:text-white transition-all">
                      <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </motion.a>
              ))}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
