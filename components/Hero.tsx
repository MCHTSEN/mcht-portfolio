import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import React from 'react';

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative pt-48 pb-32 px-6 max-w-[1800px] mx-auto overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-studio-primary/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-studio-primary/5 rounded-full blur-[100px] -z-10"></div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-12"
      >
        
        {/* Main Headline */}
        <div className="lg:col-span-8 space-y-12 relative">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-studio-border shadow-sm rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-studio-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-studio-primary"></span>
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-studio-primary">Projeleriniz İçin Hazırız</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl xl:text-[140px] font-bold tracking-tighter leading-[0.8] text-studio-text uppercase">
            DİJİTAL<br />
            <span className="text-studio-primary relative inline-block">
               GELECEĞİ
               <motion.span 
                 initial={{ width: 0 }}
                 animate={{ width: '100%' }}
                 transition={{ delay: 1, duration: 1 }}
                 className="absolute -bottom-2 left-0 h-2 bg-studio-primary/30 -z-10"
               ></motion.span>
            </span><br />
            <span className="text-studio-gray/20">İNŞA EDİYORUZ.</span>
          </motion.h1>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-6 pt-4">
            <button className="group relative px-10 py-5 bg-studio-text text-white text-xs font-bold uppercase tracking-widest overflow-hidden transition-all rounded-sm">
              <span className="relative z-10 flex items-center gap-3">
                BAŞLAYALIM <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
              </span>
              <div className="absolute inset-0 bg-studio-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
            <button className="px-10 py-5 border border-studio-border text-studio-text text-xs font-bold uppercase tracking-widest hover:border-studio-primary hover:text-studio-primary transition-all rounded-sm bg-white/50 backdrop-blur-sm">
              PORTFOLYO
            </button>
          </motion.div>
        </div>

        {/* Studio Info / Sidebar Stats */}
        <motion.div variants={itemVariants} className="lg:col-span-4 flex flex-col justify-end space-y-16 lg:border-l lg:border-studio-border lg:pl-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
               <Sparkles size={16} className="text-studio-primary" />
               <h3 className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-studio-gray">KİMLİĞİMİZ</h3>
            </div>
            <p className="text-xl md:text-2xl text-studio-text font-medium leading-tight tracking-tight max-w-sm">
              Fikirleri yüksek performanslı dijital ürünlere dönüştüren butik bir <span className="text-studio-primary">yazılım ve tasarım</span> stüdyosuyuz.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 pt-8">
            <div className="space-y-2 group cursor-default">
              <div className="text-5xl font-bold tracking-tighter text-studio-primary group-hover:scale-105 transition-transform origin-left">24+</div>
              <p className="text-[10px] font-mono uppercase tracking-widest font-bold text-studio-gray">Global Teslimat</p>
            </div>
            <div className="space-y-2 group cursor-default">
              <div className="text-5xl font-bold tracking-tighter text-studio-primary group-hover:scale-105 transition-transform origin-left">05+</div>
              <p className="text-[10px] font-mono uppercase tracking-widest font-bold text-studio-gray">Yıllık Tecrübe</p>
            </div>
          </div>

        </motion.div>

      </motion.div>
      
      {/* Bottom ticker bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-40 border-y border-studio-border py-8 flex items-center bg-white/50 backdrop-blur-md"
      >
         <div className="flex items-center gap-12 overflow-hidden whitespace-nowrap w-full">
            <div className="flex gap-12 animate-marquee items-center py-2">
              {['EXPERIENCE DESIGN', 'MOBILE SYSTEMS', 'CLOUD ARCHITECTURE', 'IOT INTEGRATION', 'AI SOLUTIONS', 'BRAND TECH'].map((tag, i) => (
                <React.Fragment key={i}>
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-[0.4em] flex items-center gap-3 ${i % 2 === 0 ? 'text-studio-primary' : 'text-studio-text'}`}>
                    {tag}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-studio-border"></div>
                </React.Fragment>
              ))}
            </div>
            <div className="flex gap-12 animate-marquee items-center py-2">
              {['EXPERIENCE DESIGN', 'MOBILE SYSTEMS', 'CLOUD ARCHITECTURE', 'IOT INTEGRATION', 'AI SOLUTIONS', 'BRAND TECH'].map((tag, i) => (
                <React.Fragment key={i}>
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-[0.4em] flex items-center gap-3 ${i % 2 === 0 ? 'text-studio-primary' : 'text-studio-text'}`}>
                    {tag}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-studio-border"></div>
                </React.Fragment>
              ))}
            </div>
         </div>
      </motion.div>
    </section>
  );
};
