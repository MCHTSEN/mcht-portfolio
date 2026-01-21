import React from 'react';
import { Award, Monitor, Layers, Database, Bluetooth, CheckCircle } from 'lucide-react';
import { HighlightItem } from '../types';

const items: HighlightItem[] = [
  {
    icon: <Award className="w-8 h-8 mb-4" />,
    title: "iF Design Award",
    description: "Piqup projesi ile iF Design Award 2024 kazanan uygulama gelistirme deneyimi",
    linkText: "Piqup"
  },
  {
    icon: <Monitor className="w-8 h-8 mb-4" />,
    title: "Cross-Platform Development",
    description: "Flutter Desktop, Web ve Mobile platformlarinda tek kod tabaniyla uygulama gelistirme",
    linkText: "See projects"
  },
  {
    icon: <Layers className="w-8 h-8 mb-4" />,
    title: "Clean Architecture",
    description: "MVVM, Riverpod ve BLoC pattern'leri ile olceklenebilir ve surdurulebilir mimari tasarim",
    linkText: "Learn more"
  },
  {
    icon: <Database className="w-8 h-8 mb-4" />,
    title: "Firebase & Backend",
    description: "Firestore, Firebase Auth ve offline-first yaklasimi ile guclu backend entegrasyonlari",
    linkText: "See more"
  },
  {
    icon: <Bluetooth className="w-8 h-8 mb-4" />,
    title: "IoT & BLE Integration",
    description: "4-12 eszamanli Bluetooth cihaz baglantisi ile IoT cozumleri gelistirme",
    linkText: "CatchPad"
  },
  {
    icon: <CheckCircle className="w-8 h-8 mb-4" />,
    title: "Quality-Driven Development",
    description: "Unit/Widget Test, CodeMagic CI/CD ve Sentry ile kalite odakli gelistirme sureci",
    linkText: "See more"
  }
];

export const Highlights: React.FC = () => {
  return (
    <section id="highlights" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Uzmanlik Alanlari</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">Flutter ekosisteminde derinlestirilmis bilgi ve deneyim ile modern, performansli ve kullanici dostu uygulamalar</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-start group cursor-pointer p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
            <div className="text-blue-600 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 leading-tight w-3/4">{item.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">{item.description}</p>
            {item.linkText && (
              <span className="text-xs font-semibold text-gray-400 group-hover:text-blue-600 transition-colors flex items-center gap-1">
                {item.linkText}
                <span className="text-lg leading-none">↗</span>
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
