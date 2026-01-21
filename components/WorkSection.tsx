import React, { useState } from 'react';
import { Monitor, Smartphone, Tablet, Bluetooth, Award, Zap, QrCode, ExternalLink, Factory, Barcode, FileSpreadsheet, Cloud, MapPin, Star, Wrench, Brain, Heart, Users, TrendingUp } from 'lucide-react';
import { ProjectDetail } from './ProjectDetail';
import { projectsData, getProjectById } from '../data/projects';

export const WorkSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const openProject = (projectId: string) => {
    setSelectedProject(projectId);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const project = selectedProject ? getProjectById(selectedProject) : null;

  return (
    <>
      <section id="work" className="py-10 px-6 max-w-5xl mx-auto space-y-12">

        {/* Bursali Otomotiv - White Card (Main Project) */}
        <div
          onClick={() => openProject('bursali-otomotiv')}
          className="bg-white rounded-[40px] p-8 md:p-16 shadow-sm overflow-hidden relative group cursor-pointer transition-all hover:shadow-xl hover:scale-[1.01]"
        >
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <Factory className="w-6 h-6 text-blue-600" />
                <span className="text-sm font-bold uppercase tracking-widest text-gray-400">Bursali Otomotiv</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                Cross-Platform<br />Fabrika Yonetimi
              </h2>
              <p className="text-gray-500 mb-8 text-sm md:text-base leading-relaxed">
                Flutter Desktop ve Web Dashboard ile entegre fabrika yonetim sistemi.
                Rol bazli erisim, barkod okuyucu, siparis dongusu, PDF raporlama,
                offline-first mimari ve Excel import/export ozellikleri.
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
                <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-full text-xs font-medium">
                  <Monitor size={14} /> Desktop
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-full text-xs font-medium">
                  <Tablet size={14} /> Web Dashboard
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-full text-xs font-medium">
                  <Barcode size={14} /> Barkod
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-full text-xs font-medium hidden sm:flex">
                  <FileSpreadsheet size={14} /> Excel
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-full text-xs font-medium hidden sm:flex">
                  <Cloud size={14} /> Firebase
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100 text-xs text-gray-400 flex-wrap">
                <span>Flutter Desktop + Web</span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">Offline-First</span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">Role-Based Access</span>
              </div>
            </div>

            {/* Screenshots */}
            <div className="flex-1 relative w-full">
              <div className="grid grid-cols-2 gap-2 md:gap-3">
                <img
                  src="/assets/project-screenshots/bursali-otomotiv/screenshot-1.png"
                  alt="Bursali Otomotiv Dashboard"
                  className="rounded-xl md:rounded-2xl shadow-lg border border-gray-200 w-full h-auto object-cover"
                />
                <img
                  src="/assets/project-screenshots/bursali-otomotiv/screenshot-2.png"
                  alt="Bursali Otomotiv Orders"
                  className="rounded-xl md:rounded-2xl shadow-lg border border-gray-200 w-full h-auto object-cover"
                />
                <img
                  src="/assets/project-screenshots/bursali-otomotiv/screenshot-3.png"
                  alt="Bursali Otomotiv Inventory"
                  className="rounded-xl md:rounded-2xl shadow-lg border border-gray-200 w-full h-auto object-cover hidden sm:block"
                />
                <img
                  src="/assets/project-screenshots/bursali-otomotiv/screenshot-4.png"
                  alt="Bursali Otomotiv Reports"
                  className="rounded-xl md:rounded-2xl shadow-lg border border-gray-200 w-full h-auto object-cover hidden sm:block"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CatchPad - Blue Card */}
        <div
          onClick={() => openProject('catchpad')}
          className="bg-card-blue rounded-[40px] p-8 md:p-16 text-center shadow-sm overflow-hidden relative text-white group cursor-pointer transition-all hover:shadow-xl hover:scale-[1.01]"
        >
          {/* Abstract background shapes */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-indigo-500/30 rounded-full blur-2xl"></div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2">
              <Bluetooth className="w-6 h-6" />
              <span className="text-xs font-semibold uppercase tracking-widest opacity-70">CatchPad</span>
            </div>
            <span className="text-xs opacity-60 mb-6">Stajyer | Tem 2023 - Kas 2023 | Istanbul</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">BLE Cihaz<br />Yonetim Sistemi</h2>
            <p className="max-w-lg mx-auto opacity-80 mb-8 text-sm md:text-base">
              Clean Architecture ve MVVM pattern'i ile gelistirilmis, 4-12 eszamanli
              Bluetooth cihaz baglantisi destekleyen IoT uygulama.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
              <span className="px-3 md:px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs md:text-sm">Riverpod</span>
              <span className="px-3 md:px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs md:text-sm">Clean Architecture</span>
              <span className="px-3 md:px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs md:text-sm hidden sm:inline">MVVM</span>
              <span className="px-3 md:px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs md:text-sm hidden sm:inline">CodeMagic</span>
              <span className="px-3 md:px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs md:text-sm hidden md:inline">Sentry</span>
            </div>

            {/* App Screenshots */}
            <div className="flex justify-center gap-2 md:gap-3 mb-8">
              <div className="w-20 md:w-28 rounded-xl md:rounded-2xl overflow-hidden shadow-xl border-2 border-white/30 transform -rotate-6" style={{ aspectRatio: '1284/2778' }}>
                <img src="/assets/project-screenshots/catchpad/screenshot-1.jpg" alt="CatchPad Screen 1" className="w-full h-full object-cover" />
              </div>
              <div className="w-20 md:w-28 rounded-xl md:rounded-2xl overflow-hidden shadow-xl border-2 border-white/30 transform rotate-3" style={{ aspectRatio: '1284/2778' }}>
                <img src="/assets/project-screenshots/catchpad/screenshot-2.jpg" alt="CatchPad Screen 2" className="w-full h-full object-cover" />
              </div>
              <div className="w-20 md:w-28 rounded-xl md:rounded-2xl overflow-hidden shadow-xl border-2 border-white/30 transform -rotate-3 hidden sm:block" style={{ aspectRatio: '1284/2778' }}>
                <img src="/assets/project-screenshots/catchpad/screenshot-3.jpg" alt="CatchPad Screen 3" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="text-sm opacity-70 mb-8">4-12 Eszamanli BLE Baglanti</div>

            {/* Store Links */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <a
                href="https://apps.apple.com/tr/app/catchpad/id1625783946?l=tr"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 md:px-5 py-2 rounded-full flex items-center gap-2 hover:bg-white hover:text-card-blue transition-all text-xs md:text-sm font-medium"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.catchpad2&hl=tr"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 md:px-5 py-2 rounded-full flex items-center gap-2 hover:bg-white hover:text-card-blue transition-all text-xs md:text-sm font-medium"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg>
                Play Store
              </a>
            </div>
          </div>
        </div>

        {/* Piqup - Beige Card with Award Badge */}
        <div
          onClick={() => openProject('piqup')}
          className="bg-card-beige rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between shadow-sm overflow-hidden relative group cursor-pointer gap-8 md:gap-10 transition-all hover:shadow-xl hover:scale-[1.01]"
        >
          {/* Award Badge */}
          <div className="absolute top-4 right-4 md:top-6 md:right-6 flex items-center gap-2 bg-yellow-400 text-yellow-900 px-3 md:px-4 py-2 rounded-full text-xs font-bold shadow-md">
            <Award size={14} />
            <span className="hidden sm:inline">iF Design Award</span>
            <span className="sm:hidden">iF Award</span>
          </div>

          <div className="flex-1 text-left w-full">
            <span className="text-xs font-bold text-orange-600 mb-2 block">Piqup</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Powerbank<br />Kiralama<br />Platformu
            </h2>
            <p className="text-gray-500 mb-8 max-w-sm text-sm">
              iF Design Award kazanan, QR kod ile powerbank kiralama platformu.
              Piqup Pay entegrasyonu ve 22.5W hizli sarj destegi ile kullanici deneyimi odakli tasarim.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
              <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-full text-xs font-medium shadow-sm">
                <QrCode size={14} /> QR Kod
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-full text-xs font-medium shadow-sm">
                <Zap size={14} /> 22.5W Hizli Sarj
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-full text-xs font-medium shadow-sm hidden sm:flex">
                Piqup Pay
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-gray-300 pt-6 flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">P</div>
                <span className="text-sm font-bold text-gray-700">Piqup</span>
              </div>
              <div className="flex gap-2">
                <a
                  href="https://apps.apple.com/us/app/piqup/id6751543544"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="bg-black text-white px-3 md:px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-gray-800 transition-colors"
                >
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  <span className="hidden sm:inline">App Store</span>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.piqup.app&hl=tr"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="bg-green-600 text-white px-3 md:px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-green-700 transition-colors"
                >
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg>
                  <span className="hidden sm:inline">Play Store</span>
                </a>
              </div>
            </div>
          </div>

          {/* Phone Screenshots */}
          <div className="flex-1 relative flex justify-center gap-2 md:gap-4">
            <div className="w-24 md:w-40 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-900 transform -rotate-6" style={{ aspectRatio: '9/19.5' }}>
              <img
                src="/assets/project-screenshots/piqup/screenshot-1.webp"
                alt="Piqup App Screen 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-24 md:w-40 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-900 transform rotate-3 mt-4 md:mt-8" style={{ aspectRatio: '9/19.5' }}>
              <img
                src="/assets/project-screenshots/piqup/screenshot-2.webp"
                alt="Piqup App Screen 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-24 md:w-40 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-900 transform -rotate-3 hidden md:block" style={{ aspectRatio: '9/19.5' }}>
              <img
                src="/assets/project-screenshots/piqup/screenshot-3.webp"
                alt="Piqup App Screen 3"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative blur */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-200 rounded-full blur-2xl opacity-50"></div>
          </div>
        </div>

        {/* Inner Kid - Purple/Pink Gradient Card (Side Project) */}
        <div
          onClick={() => openProject('inner-kid')}
          className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-[40px] p-8 md:p-16 shadow-sm overflow-hidden relative text-white group cursor-pointer transition-all hover:shadow-xl hover:scale-[1.01]"
        >
          <div className="absolute top-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-pink-300/20 rounded-full blur-2xl"></div>

          <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-10">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <Heart className="w-6 h-6" />
                <span className="text-xs font-semibold uppercase tracking-widest opacity-70">Inner Kid</span>
                <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">Side Project</span>
              </div>
              <span className="text-xs opacity-60 mb-6 block">Haz 2025 - Agu 2025</span>

              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                AI Destekli<br />Cocuk Cizim Analizi
              </h2>
              <p className="max-w-2xl opacity-90 mb-8 text-sm md:text-base">
                Cocuklarin cizimlerinden duygusal ve bilissel analizler saglayan,
                OpenAI ChatGPT API ile entegre mobil uygulama. Real-time Firebase
                entegrasyonu ile responsive data flow.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4">
                  <Brain className="w-5 h-5 md:w-6 md:h-6 mb-2" />
                  <p className="text-xs md:text-sm font-medium">OpenAI ChatGPT API</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4">
                  <Cloud className="w-5 h-5 md:w-6 md:h-6 mb-2" />
                  <p className="text-xs md:text-sm font-medium">Firebase Full Stack</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 hidden sm:block">
                  <TrendingUp className="w-5 h-5 md:w-6 md:h-6 mb-2" />
                  <p className="text-xs md:text-sm font-medium">Mixpanel Analytics</p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs">Clean Architecture</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs">Riverpod</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs">Hive</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs hidden sm:inline">RevenueCat</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs hidden sm:inline">MVVM</span>
              </div>
            </div>

            {/* Screenshots - Fixed sizing with proper aspect ratio */}
            <div className="flex-1 flex justify-center items-center gap-2 md:gap-3">
              {/* Cover image - 6.png */}
              <div className="w-24 md:w-36 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30 transform -rotate-6" style={{ aspectRatio: '1284/2778' }}>
                <img
                  src="/assets/project-screenshots/inner-kid/6.png"
                  alt="Inner Kid App Cover"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-24 md:w-36 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30 transform rotate-3 mt-6 md:mt-8" style={{ aspectRatio: '1284/2778' }}>
                <img
                  src="/assets/project-screenshots/inner-kid/3.jpg"
                  alt="Inner Kid App Screen 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-24 md:w-36 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30 transform -rotate-3 hidden md:block" style={{ aspectRatio: '1284/2778' }}>
                <img
                  src="/assets/project-screenshots/inner-kid/11.jpg"
                  alt="Inner Kid App Screen 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Grid Section - Rapid Sport & Tamir Kolay */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          {/* Rapid Sport - Green Card */}
          <div
            onClick={() => openProject('rapid-sport')}
            className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-[32px] md:rounded-[40px] p-8 md:p-10 text-white relative overflow-hidden group cursor-pointer hover:shadow-lg transition-all hover:scale-[1.02]"
          >
            <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest opacity-70">Rapid Sport</span>
              </div>
              <span className="text-xs opacity-60 mb-4 block">Freelance | Haz 2023 - Oca 2024</span>

              <h3 className="text-2xl md:text-3xl font-bold mb-4">Sporcu-Antrenor Eslestirme</h3>
              <p className="opacity-80 text-sm mb-6">
                Konum bazli olarak sporculari ve antrenorleri eslestirme.
                Yorum yapma, degerlendirme ve harita uzerinden dinamik konum gosterme.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs flex items-center gap-1">
                  <MapPin size={12} /> Konum Bazli
                </span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs flex items-center gap-1">
                  <Star size={12} /> Degerlendirme
                </span>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-white/20">
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center text-green-600 text-xs font-bold">R</div>
                <span className="text-xs font-medium">Rapid Sport</span>
              </div>
            </div>
          </div>

          {/* Tamir Kolay - Orange Card */}
          <div
            onClick={() => openProject('tamir-kolay')}
            className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-[32px] md:rounded-[40px] p-8 md:p-10 text-white relative overflow-hidden group cursor-pointer hover:shadow-lg transition-all hover:scale-[1.02]"
          >
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <Wrench className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest opacity-70">Tamir Kolay</span>
              </div>
              <span className="text-xs opacity-60 mb-4 block">Freelance | Kas 2023 - Oca 2024</span>

              <h3 className="text-2xl md:text-3xl font-bold mb-4">Arac Servis Yonetimi</h3>
              <p className="opacity-80 text-sm mb-6">
                Firebase ile arac servis islemleri, Authentication ve user metrikleri.
                Gemini AI ile arac sorunu ve cozumleri hakkinda tahminler.
              </p>

              {/* Screenshots */}
              <div className="flex gap-2 mb-6">
                <div className="w-16 md:w-20 rounded-lg md:rounded-xl overflow-hidden border-2 border-white/30" style={{ aspectRatio: '1284/2778' }}>
                  <img src="/assets/project-screenshots/tamir-kolay/screenshot-1.png" alt="Tamir Kolay Screen 1" className="w-full h-full object-cover" />
                </div>
                <div className="w-16 md:w-20 rounded-lg md:rounded-xl overflow-hidden border-2 border-white/30" style={{ aspectRatio: '1284/2778' }}>
                  <img src="/assets/project-screenshots/tamir-kolay/screenshot-2.png" alt="Tamir Kolay Screen 2" className="w-full h-full object-cover" />
                </div>
                <div className="w-16 md:w-20 rounded-lg md:rounded-xl overflow-hidden border-2 border-white/30 hidden sm:block" style={{ aspectRatio: '1284/2778' }}>
                  <img src="/assets/project-screenshots/tamir-kolay/screenshot-3.png" alt="Tamir Kolay Screen 3" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs flex items-center gap-1">
                  <Cloud size={12} /> Firebase
                </span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs flex items-center gap-1">
                  <Brain size={12} /> Gemini AI
                </span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs flex items-center gap-1 hidden sm:flex">
                  <TrendingUp size={12} /> Finansal Takip
                </span>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-white/20">
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center text-orange-600 text-xs font-bold">T</div>
                <span className="text-xs font-medium">Tamir Kolay</span>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Project Detail Modal */}
      {project && (
        <ProjectDetail project={project} onClose={closeProject} />
      )}
    </>
  );
};
