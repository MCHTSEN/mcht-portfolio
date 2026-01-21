import { motion } from 'framer-motion';
import { Plus, Sparkle } from 'lucide-react';
import React from 'react';

const items = [
  {
    category: "Teknik",
    title: "BLE & IoT Sistemleri",
    description: "12+ eşzamanlı cihaz bağlantısını destekleyen karmaşık Bluetooth Low Energy çözümleri mimarisi. Donanım ve yazılım senkronizasyonunda uzmanlık.",
    tags: ["BLE", "IoT", "Nexus"],
    accent: "indigo"
  },
  {
    category: "Mimari",
    title: "Clean Architecture",
    description: "Riverpod ve BLoC kullanarak yüksek sürdürülebilirliğe sahip kod yapıları. Birim testleri ve ölçeklenebilir modüler yapılara odaklanma.",
    tags: ["Riverpod", "Modular", "Solid"],
    accent: "cyan"
  },
  {
    category: "Başarı",
    title: "Ödüllü Deneyimler",
    description: "Piqup projesi ile iF Design Award 2024 kazananı. Teknik mükemmeliyet yoluyla ödüllü kullanıcı deneyimleri sunma.",
    tags: ["iF Design", "Premium UX"],
    accent: "indigo"
  },
  {
    category: "Ekosistem",
    title: "Cross-Platform Mastery",
    description: "Web, Mobil ve Masaüstü için Flutter'da derin uzmanlık. Tek bir kod tabanından akıcı ve yerel performanslı uygulamalar.",
    tags: ["Flutter", "Dart", "Performance"],
    accent: "cyan"
  },
  {
    category: "Backend",
    title: "Firebase & Cloud",
    description: "Firestore ile çevrimdışı öncelikli mimariler, karmaşık yetkilendirme akışları ve gerçek zamanlı senkronizasyon.",
    tags: ["NoSQL", "Cloud Functions"],
    accent: "indigo"
  },
  {
    category: "Süreç",
    title: "CI/CD Automations",
    description: "CodeMagic ve GitHub Actions aracılığıyla otomatik dağıtım hatları. Sentry ve Firebase Analytics ile entegre izleme.",
    tags: ["DevOps", "Monitoring"],
    accent: "cyan"
  }
];

export const Highlights: React.FC = () => {
  return (
    <section id="highlights" className="py-40 bg-transparent relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-32">
          <div className="max-w-3xl space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-studio-primary/5 text-studio-primary rounded-full"
            >
              <Sparkle size={12} fill="currentColor" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em]">Kapasitemiz</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] uppercase"
            >
              TEKNİK<br />
              <span className="text-studio-primary">MÜKEMMELİYET.</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-xs lg:pb-4 border-l border-studio-border pl-6"
          >
            <p className="text-studio-gray text-sm leading-relaxed font-medium">
              Karmaşık problemlere temiz ve ölçeklenebilir çözümler üretiyoruz. Teknoloji yığınımız geleceği inşa etmek için tasarlandı.
            </p>
          </motion.div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-studio-border">
          {items.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group p-12 border-r border-b border-studio-border hover:bg-studio-text hover:text-white transition-all duration-700 relative overflow-hidden cursor-pointer"
            >
              <div className="relative z-10 flex flex-col h-full space-y-10">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-studio-gray group-hover:text-studio-primary underline decoration-studio-primary decoration-2 underline-offset-4">
                    {item.category}
                  </span>
                  <div className="w-10 h-10 border border-studio-border group-hover:border-white/20 rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-studio-primary">
                    <Plus size={18} className="group-hover:rotate-90 transition-transform duration-500" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold tracking-tighter uppercase leading-tight group-hover:translate-x-2 transition-transform duration-500">
                    {item.title}
                  </h3>
                  <p className="text-sm text-studio-gray group-hover:text-white/60 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-6">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-mono font-bold uppercase tracking-widest bg-studio-bg text-studio-text group-hover:bg-white/10 group-hover:text-white px-3 py-1 rounded-sm border border-studio-border group-hover:border-transparent transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-studio-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
