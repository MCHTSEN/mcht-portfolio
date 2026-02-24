import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkle } from 'lucide-react';
import React from 'react';

const items = [
  {
    category: "Ölçeklenebilirlik",
    title: "2.5M+ Aylık Aktif Kullanıcı",
    description: "Tasarladığımız ve geliştirdiğimiz uygulamalar aylık milyonlarca aktif kullanıcıya sıfır kesintiyle hizmet veriyor.",
    tags: ["High Traffic", "Reliability", "Architecture"],
    iconColor: "from-blue-500 to-indigo-500"
  },
  {
    category: "E-Ticaret",
    title: "Yüksek Dönüşüm Oranları",
    description: "Sadece güzel görünen değil, sepet terk edilme oranlarını minimize eden UI/UX dizilimleri ile satış performansını maksimuma çıkarıyoruz.",
    tags: ["Conversion", "E-Commerce", "Growth"],
    iconColor: "from-cyan-500 to-blue-500"
  },
  {
    category: "Teslimat Güvencesi",
    title: "40+ Başarılı Uygulama",
    description: "Fikir aşamasından mağaza yayınına kadar tam zamanında ve vaat edilen bütçeyle teslim edilmiş onlarca başarılı mobil ve web projesi.",
    tags: ["On-Time Delivery", "Track Record"],
    iconColor: "from-indigo-500 to-purple-500"
  },
  {
    category: "Sektörel Liderlik",
    title: "Sektör Lideri Uygulamalar",
    description: "Yazdığımız temiz kod ve sunduğumuz kusursuz kullanıcı deneyimi sayesinde müşterilerimiz kendi sektörlerinde öncü konuma ulaşıyor.",
    tags: ["Scalable Code", "Market Leader"],
    iconColor: "from-blue-400 to-cyan-400"
  },
  {
    category: "Market Başarısı",
    title: "5+ Kez 'Günün Uygulaması'",
    description: "Apple ve Google algoritmalarının sevdiği, organik indirme rekorları kıran ve editoryal olarak öne çıkarılan ödüllü mobil deneyimler.",
    tags: ["Featured", "ASO", "Award Winning"],
    iconColor: "from-purple-500 to-indigo-500"
  },
  {
    category: "Yüksek Performans",
    title: "< 0.1s Ortalama Yanıt",
    description: "Kullanıcı deneyimini mükemmelleştiren, anında tepki veren mikroservis mimarileri ve son derece optimize edilmiş render süreçleri.",
    tags: ["Performance", "Microservices"],
    iconColor: "from-cyan-400 to-emerald-400"
  }
];

export const PainAndRelief: React.FC = () => {
  return (
    <section id="solutions" aria-labelledby="solutions-heading" className="py-24 md:py-40 bg-zinc-50 text-zinc-950 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 md:gap-12 mb-20 md:mb-32 relative z-10">
          <div className="max-w-4xl space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white shadow-sm border border-zinc-200 text-blue-700 rounded-full"
            >
              <Sparkle size={14} fill="currentColor" className="text-blue-600" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] pt-0.5">Ürettiğimiz Sonuçlar</span>
            </motion.div>
            <motion.h2
              id="solutions-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-[5.5rem] font-bold tracking-tighter leading-[0.95] uppercase text-zinc-900"
            >
              TEKNOLOJİ DEĞİL,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">SONUÇ ÜRETİYORUZ.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-sm lg:pb-6"
          >
            <p className="text-zinc-600 text-lg leading-relaxed font-medium">
              Sadece kod yazanlara değil, iş hedeflerinizi anlayan, maliyetli hataları engelleyen ve doğrudan büyümeye odaklanan bir teknoloji partnerine ihtiyacınız var.
            </p>
          </motion.div>
        </div>

        {/* Floating Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-white rounded-[2rem] p-8 md:p-10 desktop-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] shadow-sm border border-zinc-200/60 hover:border-zinc-300 hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col h-full"
            >
              {/* Vibrant Glow Effect Behind the Card */}
              <div className="absolute -inset-0.5 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-1000 blur-2xl z-0" />
              
              {/* Subtle accent blob */}
              <div className="absolute -right-16 -top-16 w-48 h-48 bg-blue-50/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Top Section: Category Tag & Icon */}
                <div className="flex items-center justify-between mb-10">
                  <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-zinc-100 group-hover:bg-blue-50 transition-colors duration-500 border border-zinc-200/50 group-hover:border-blue-100">
                    <span className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-widest text-zinc-500 group-hover:text-blue-600 transition-colors duration-500">
                      {item.category}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                    <ArrowUpRight size={18} className="transform group-hover:rotate-12 transition-transform duration-500" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl md:text-[1.75rem] font-extrabold tracking-tight text-zinc-900 leading-tight mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-zinc-900 group-hover:to-zinc-600 transition-all duration-500">
                  {item.title}
                </h3>
                
                <p className="text-[15px] md:text-base text-zinc-500 leading-relaxed font-medium mb-10 flex-grow group-hover:text-zinc-600 transition-colors duration-500">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-widest bg-white border border-zinc-200 text-zinc-400 px-3 py-1.5 rounded-lg group-hover:bg-zinc-50 group-hover:text-zinc-600 transition-colors duration-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
