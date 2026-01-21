import { ArrowUpRight, Award, ChevronLeft, ChevronRight, X } from 'lucide-react';
import React from 'react';

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  location: string;
  type: 'studio-product' | 'enterprise-system' | 'side-project' | 'internship' | 'freelance';
  description: string;
  story: string;
  challenge: string;
  solution: string;
  impact: string;
  techStack: string[];
  features: string[];
  screenshots: string[];
  coverImage: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  githubUrl?: string;
  websiteUrl?: string;
  hasAward?: boolean;
  awardName?: string;
  brandColor: string; // TailWind class for primary accent e.g. 'bg-orange-600'
  brandTextColor: string; // TailWind class for text on brand color e.g. 'text-white'
  secondaryColor: string; // TailWind class for light version e.g. 'bg-orange-50'
  isDesktop?: boolean;
}

interface ProjectDetailProps {
  project: ProjectData;
  onClose: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.screenshots.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length);
  };

  const projectTypeMap: Record<string, string> = {
    'enterprise-system': 'Kurumsal Sistem',
    'studio-product': 'Stüdyo Ürünü',
    'internship': 'Teknik Deneyim',
    'side-project': 'Ar-Ge Projesi'
  };

  return (
    <div className="fixed inset-0 z-[100] bg-studio-bg overflow-y-auto overflow-x-hidden selection:bg-studio-text selection:text-white">
      
      {/* Brand Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[110] bg-white/90 backdrop-blur-md border-b border-studio-border/50`}>
        <div className="max-w-[1800px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className={`text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1.5 ${project.brandColor} ${project.brandTextColor}`}>
              {projectTypeMap[project.type] || project.type}
            </span>
            <span className="text-xs font-mono font-bold text-studio-gray uppercase tracking-widest hidden md:block">Referans No: {project.id}</span>
          </div>
          
          <button 
            onClick={onClose}
            className={`group flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] transition-all hover:gap-6`}
          >
            <span className="group-hover:text-studio-gray">Kapat</span>
            <div className={`w-10 h-10 ${project.brandColor} ${project.brandTextColor} flex items-center justify-center transition-transform group-hover:rotate-90`}>
              <X size={20} />
            </div>
          </button>
        </div>
      </nav>

      <main className="pt-32 pb-40">
        
        {/* Project Header */}
        <div className="max-w-[1800px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32">
            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl md:text-8xl xl:text-9xl font-bold tracking-tighter leading-[0.8] uppercase">
                  {project.title}
                </h1>
                <p className="text-2xl md:text-4xl font-mono font-bold tracking-tighter text-studio-gray">
                  .{project.subtitle}
                </p>
              </div>
              
              {project.hasAward && (
                <div className={`inline-flex items-center gap-6 p-6 border-2 border-studio-text bg-studio-bg`}>
                  <div className={`w-14 h-14 ${project.brandColor} ${project.brandTextColor} flex items-center justify-center studio-shadow-sm`}>
                    <Award size={28} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono font-bold uppercase tracking-widest text-studio-gray">Üstün Başarı Ödülü</span>
                    <span className="block text-lg font-bold uppercase tracking-tight">{project.awardName}</span>
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-4 flex flex-col justify-end">
              <div className="grid grid-cols-2 gap-12 border-l-2 border-studio-text pl-8 py-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-studio-gray">Proje Dönemi</span>
                  <p className="text-sm font-bold uppercase">{project.period}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-studio-gray">Lokasyon</span>
                  <p className="text-sm font-bold uppercase">{project.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* SIDE-BY-SIDE GALLERY SHOWCASE */}
          <div className={`relative mb-40 py-32 ${project.secondaryColor} -mx-6 px-6 overflow-hidden`}>
            <div className="max-w-[1800px] mx-auto relative">
              <div className="flex items-center justify-center gap-4 md:gap-12 relative">
                
                {/* Left Screen */}
                <div className={`hidden lg:block opacity-40 transform -rotate-12 scale-75 transition-all duration-1000 overflow-hidden border-8 border-studio-text bg-white ${project.isDesktop ? 'w-[500px] aspect-video rounded-3xl' : 'w-72 aspect-[9/19] rounded-[2.5rem]'}`}>
                   <img 
                    src={project.screenshots[(currentImageIndex - 1 + project.screenshots.length) % project.screenshots.length]} 
                    className="w-full h-full object-cover grayscale" 
                    alt="prev-view"
                  />
                </div>

                {/* Main Focused Screen */}
                <div className={`relative z-20 scale-100 transition-all duration-700 studio-shadow-lg bg-studio-text ${project.isDesktop ? 'w-full max-w-[900px] aspect-video rounded-3xl p-3' : 'w-full max-w-[340px] md:max-w-[400px] aspect-[9/19] rounded-[3rem] p-4'}`}>
                  {!project.isDesktop && <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-studio-text rounded-b-3xl z-30"></div>}
                  <div className={`w-full h-full overflow-hidden bg-white relative group ${project.isDesktop ? 'rounded-2xl' : 'rounded-[2.2rem]'}`}>
                    <img 
                      src={project.screenshots[currentImageIndex]} 
                      className="w-full h-full object-cover animate-in fade-in slide-in-from-bottom-4 duration-700" 
                      alt={project.title}
                    />
                    
                    {/* In-Screen Controls */}
                    <div className="absolute inset-x-0 bottom-12 flex justify-center gap-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button onClick={prevImage} className={`w-14 h-14 rounded-full ${project.brandColor} ${project.brandTextColor} flex items-center justify-center shadow-2xl hover:scale-110 transition-transform`}>
                        <ChevronLeft size={24} />
                      </button>
                      <button onClick={nextImage} className={`w-14 h-14 rounded-full ${project.brandColor} ${project.brandTextColor} flex items-center justify-center shadow-2xl hover:scale-110 transition-transform`}>
                        <ChevronRight size={24} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Screen */}
                <div className={`hidden lg:block opacity-40 transform rotate-12 scale-75 transition-all duration-1000 overflow-hidden border-8 border-studio-text bg-white ${project.isDesktop ? 'w-[500px] aspect-video rounded-3xl' : 'w-72 aspect-[9/19] rounded-[2.5rem]'}`}>
                  <img 
                    src={project.screenshots[(currentImageIndex + 1) % project.screenshots.length]} 
                    className="w-full h-full object-cover grayscale" 
                    alt="next-view"
                  />
                </div>
              </div>

              {/* Dynamic Indicators */}
              <div className="flex justify-center gap-4 mt-20">
                {project.screenshots.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImageIndex(i)}
                    className={`h-1.5 transition-all duration-500 rounded-full ${i === currentImageIndex ? `w-20 ${project.brandColor}` : 'w-4 bg-studio-text/10'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            <div className="lg:col-span-8 space-y-32">
              
              <section className="space-y-12">
                <div className="flex items-center gap-6">
                  <span className={`w-12 h-0.5 ${project.brandColor}`}></span>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-studio-gray">01 / PROJE HİKAYESİ</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div className="text-2xl font-medium leading-relaxed tracking-tight text-studio-text">
                    {project.story}
                  </div>
                  <div className={`p-10 ${project.secondaryColor} border-l-4 border-studio-text flex flex-col justify-between`}>
                     <p className="text-studio-gray text-lg italic leading-relaxed">"{project.description}"</p>
                     <div className="pt-8 flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${project.brandColor}`}></div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest">Stüdyo Notu</span>
                     </div>
                  </div>
                </div>
              </section>

              <section className="space-y-12">
                <div className="flex items-center gap-6">
                  <span className={`w-12 h-0.5 ${project.brandColor}`}></span>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-studio-gray">02 / STRATEJİK YAKLAŞIM</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div className="space-y-8 bg-studio-bg p-8 border border-studio-border">
                    <h4 className="text-2xl font-bold tracking-tighter uppercase">TEKNİK ZORLUKLAR</h4>
                    <p className="text-studio-gray leading-relaxed font-medium">{project.challenge}</p>
                  </div>
                  <div className="space-y-8 bg-studio-bg p-8 border border-studio-border">
                    <h4 className="text-2xl font-bold tracking-tighter uppercase">ÇÖZÜM YOLUMUZ</h4>
                    <p className="text-studio-gray leading-relaxed font-medium">{project.solution}</p>
                  </div>
                </div>
              </section>

              <div className={`p-16 ${project.brandColor} ${project.brandTextColor} studio-shadow-lg transform -rotate-1`}>
                <div className="flex items-center gap-4 mb-8">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-widest opacity-70">Etki ve Ölçeklendirme</h4>
                </div>
                <p className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight">
                  {project.impact}
                </p>
              </div>

            </div>

            <div className="lg:col-span-4 space-y-20 lg:sticky lg:top-40 h-fit">
              <div className="space-y-10">
                 <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-studio-gray">Teknoloji Yığını</h4>
                 <div className="flex flex-wrap gap-3">
                   {project.techStack.map(tech => (
                     <span key={tech} className="px-5 py-2.5 bg-studio-bg border border-studio-border text-[10px] font-mono font-bold uppercase tracking-widest hover:border-studio-text transition-colors">
                       {tech}
                     </span>
                   ))}
                 </div>
              </div>

              <div className="space-y-10">
                 <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-studio-gray">Sistem Özellikleri</h4>
                 <ul className="space-y-6">
                   {project.features.map(feature => (
                     <li key={feature} className="flex items-start gap-5 text-sm font-bold uppercase group">
                       <span className={`mt-1.5 w-2.5 h-2.5 ${project.brandColor} group-hover:scale-125 transition-transform`}></span>
                       <span className="group-hover:translate-x-2 transition-transform">{feature}</span>
                     </li>
                   ))}
                 </ul>
              </div>

              {(project.appStoreUrl || project.playStoreUrl || project.websiteUrl) && (
                <div className="space-y-10 pt-10 border-t-2 border-studio-text">
                   <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-studio-gray">Dijital Erişim</h4>
                   <div className="space-y-4">
                    {project.appStoreUrl && (
                      <a href={project.appStoreUrl} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-between p-5 border-2 border-studio-text font-bold text-xs uppercase tracking-widest hover:bg-studio-text hover:text-white transition-all shadow-[4px_4px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none`}>
                        App Store <ArrowUpRight size={20} />
                      </a>
                    )}
                    {project.playStoreUrl && (
                      <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-between p-5 border-2 border-studio-text font-bold text-xs uppercase tracking-widest hover:bg-studio-text hover:text-white transition-all shadow-[4px_4px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none`}>
                        Google Play <ArrowUpRight size={20} />
                      </a>
                    )}
                   </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};
