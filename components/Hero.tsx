import React from 'react';
import { MapPin, GraduationCap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-40 pb-20 px-6 text-center max-w-4xl mx-auto flex flex-col items-center">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
        Mucahit SEN <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Flutter Developer
        </span>
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
        <div className="flex items-center gap-2 text-gray-600">
          <GraduationCap size={18} />
          <span className="text-lg">Bilgisayar Muhendisligi | Topkapi Universitesi</span>
        </div>
      </div>

      <div className="flex items-center gap-2 text-gray-500 mb-12">
        <MapPin size={18} />
        <span className="text-lg">Istanbul & Bursa, Turkiye</span>
      </div>

      <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
        {/* Placeholder for profile photo - user will provide actual image */}
        <div className="text-white text-center">
          <span className="text-6xl md:text-7xl font-bold">MS</span>
          <p className="text-sm mt-2 opacity-80">Profile Photo</p>
        </div>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-3">
        <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Flutter</span>
        <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Dart</span>
        <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Firebase</span>
        <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">Cross-Platform</span>
        <span className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">BLE / IoT</span>
      </div>
    </section>
  );
};
