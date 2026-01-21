import { Plus } from 'lucide-react';
import React from 'react';

const items = [
  {
    category: "Teknik",
    title: "BLE & IoT Sistemleri",
    description: "12+ eşzamanlı cihaz bağlantısını destekleyen karmaşık Bluetooth Low Energy çözümleri mimarisi. Donanım ve yazılım senkronizasyonunda uzmanlık.",
    tags: ["BLE", "IoT", "Gerçek Zamanlı"]
  },
  {
    category: "Mimari",
    title: "Temiz Tasarım Desenleri",
    description: "MVVM, Riverpod ve BLoC kullanarak yüksek sürdürülebilirliğe sahip kod yapıları. Birim testleri ve ölçeklenebilir modüler yapılara odaklanma.",
    tags: ["Riverpod", "BLoC", "Test"]
  },
  {
    category: "Başarı",
    title: "iF Design Award",
    description: "Piqup projesi ile iF Design Award 2024 kazananı. Teknik mükemmeliyet yoluyla ödüllü kullanıcı deneyimleri sunma.",
    tags: ["Ödül", "UX", "Ürün"]
  },
  {
    category: "Temel",
    title: "Flutter Ekosistemi",
    description: "Web, Mobil ve Masaüstü için Flutter'da derin uzmanlık. Tek bir kod tabanından akıcı ve yerel performanslı uygulamalar inşa etme.",
    tags: ["Çapraz Platform", "Dart", "Performans"]
  },
  {
    category: "Arka Uç",
    title: "Firebase Entegrasyonu",
    description: "Cloud Firestore ile çevrimdışı öncelikli mimariler, karmaşık yetkilendirme akışları ve gerçek zamanlı veritabanı senkronizasyonu.",
    tags: ["NoSQL", "Yetkilendirme", "Senkron"]
  },
  {
    category: "Süreç",
    title: "CI/CD & DevOps",
    description: "CodeMagic ve GitHub Actions aracılığıyla otomatik dağıtım hatları. Sentry ve Firebase Analytics ile entegre izleme sistemleri.",
    tags: ["DevOps", "CI/CD", "İzleme"]
  }
];

export const Highlights: React.FC = () => {
  return (
    <section id="highlights" className="py-32 studio-border-t">
      <div className="max-w-[1800px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24">
          <div className="max-w-3xl space-y-6">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-studio-gray bg-studio-border/30 px-3 py-1.5">Yetkinlikler / Hizmetler</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
              MOBİL MÜHENDİSLİĞİN <br />
              SINIRLARINI ZORLUYORUZ.
            </h2>
          </div>
          <div className="max-w-sm lg:pb-2">
            <p className="text-studio-gray text-sm leading-relaxed font-medium">
              Sadece uygulama geliştirmiyoruz; teknik karmaşıklığı estetik hassasiyetle dengeleyen dijital ürünler tasarlıyoruz.
            </p>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 studio-border-l studio-border-t">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="group p-12 studio-border-r studio-border-b hover:bg-studio-text hover:text-white transition-all duration-500 relative overflow-hidden"
            >
              <div className="relative z-10 flex flex-col h-full space-y-8">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-studio-gray group-hover:text-white/50">
                    [{index + 1}] {item.category}
                  </span>
                  <Plus size={18} className="group-hover:rotate-90 transition-transform duration-500" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold tracking-tight uppercase leading-none">
                    {item.title}
                  </h3>
                  <p className="text-sm text-studio-gray group-hover:text-white/70 leading-relaxed min-h-[80px]">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-mono font-bold uppercase tracking-tighter border border-studio-border group-hover:border-white/20 px-2 py-0.5">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Background index number for extra flair */}
              <span className="absolute bottom-[-20%] right-[-5%] text-[200px] font-bold opacity-[0.02] group-hover:opacity-[0.05] transition-opacity pointer-events-none italic">
                {index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
