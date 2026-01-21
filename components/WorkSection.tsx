import { ArrowUpRight, Bluetooth, Brain, Factory, Plus, QrCode, ShieldAlert, Wrench } from 'lucide-react';
import React, { useState } from 'react';
import { getProjectById, projectsData } from '../data/projects';
import { ProjectDetail } from './ProjectDetail';

// Mapping icons to project IDs for visual variety
const getProjectIcon = (id: string) => {
  switch (id) {
    case 'bursali-automotive': return <Factory size={24} strokeWidth={1.5} />;
    case 'piqup': return <QrCode size={24} strokeWidth={1.5} />;
    case 'catchpad': return <Bluetooth size={24} strokeWidth={1.5} />;
    case 'inner-kid': return <Brain size={24} strokeWidth={1.5} />;
    case 'yetis': return <ShieldAlert size={24} strokeWidth={1.5} />;
    case 'tamir-kolay': return <Wrench size={24} strokeWidth={1.5} />;
    default: return <Plus size={24} strokeWidth={1.5} />;
  }
};

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

  const selectedProjectData = selectedProject ? getProjectById(selectedProject) : null;

  const projectTypeMap: Record<string, string> = {
    'enterprise-system': 'Kurumsal Sistem',
    'studio-product': 'Stüdyo Ürünü',
    'internship': 'Teknik Deneyim',
    'side-project': 'Ar-Ge Projesi'
  };

  return (
    <>
      <section id="work" className="py-40 studio-border-t">
        <div className="max-w-[1800px] mx-auto px-6">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-40">
            <div className="space-y-6">
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-studio-gray bg-studio-border/30 px-3 py-1.5 inline-block">Portfolyo Dizini</span>
              <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none">
                SON<br />ÇALIŞMALAR.
              </h2>
            </div>
            <div className="max-w-sm">
              <p className="text-studio-gray font-medium text-base leading-relaxed">
                Mobil uygulamalar, IoT sistemleri ve kurumsal yazılım çözümleri. Konseptten lansmana kadar uçtan uca geliştirme.
              </p>
            </div>
          </div>

          <div className="space-y-48">
            {projectsData.map((project, index) => (
              <div 
                key={project.id}
                onClick={() => openProject(project.id)}
                className="group cursor-pointer"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                  
                  {/* Left Column: Info */}
                  <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-40">
                    <div className="flex items-center gap-4">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-widest leading-none px-3 py-1.5 ${project.brandColor} ${project.brandTextColor}`}>
                        {projectTypeMap[project.type] || project.type}
                      </span>
                      {project.hasAward && (
                        <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-studio-text uppercase tracking-widest leading-none border-2 border-studio-text px-3 py-1.5 shadow-[2px_2px_0px_#000]">
                          Ödüllü
                        </div>
                      )}
                    </div>

                    <div className="space-y-4">
                       <h3 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight transition-colors group-hover:text-studio-gray uppercase">
                        {project.title}
                      </h3>
                      <p className={`text-xl font-mono tracking-tighter font-bold inline-block border-b-2 border-studio-text`}>
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-studio-gray font-medium text-lg leading-relaxed max-w-sm">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3 pt-4">
                      {project.techStack.slice(0, 3).map(tech => (
                        <span key={tech} className="text-[10px] font-mono font-bold uppercase tracking-widest text-studio-text">
                          # {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-12">
                       <button className={`inline-flex items-center gap-4 text-xs font-bold uppercase tracking-widest transition-all group-hover:gap-8 group-hover:bg-studio-text group-hover:text-white px-6 py-3 border-2 border-studio-text`}>
                         DETAYLARI İNCELE <ArrowUpRight size={18} />
                       </button>
                    </div>
                  </div>

                  {/* Right Column: Visual Showcase */}
                  <div className="lg:col-span-7">
                    <div className={`relative overflow-hidden aspect-[16/10] ${project.secondaryColor} border-2 border-studio-text group-hover:shadow-[12px_12px_0px_#000] transition-all duration-700 flex items-center justify-center p-12`}>
                       
                       {project.id === 'bursali-automotive' ? (
                         /* DESKTOP SHOWCASE (Bursali) */
                         <div className="relative w-full h-full flex items-center justify-center">
                            <div className="w-[75%] aspect-video bg-white border-2 border-studio-text studio-shadow-sm overflow-hidden transform -translate-x-8 -translate-y-4 group-hover:-translate-y-6 transition-transform duration-700 grayscale group-hover:grayscale-0">
                              <img 
                                src={project.screenshots[0]} 
                                alt="desktop-1" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="absolute w-[75%] aspect-video bg-white border-2 border-studio-text studio-shadow-lg overflow-hidden transform translate-x-8 translate-y-4 group-hover:translate-y-6 transition-transform duration-700 z-10 grayscale group-hover:grayscale-0">
                              <img 
                                src={project.screenshots[1]} 
                                alt="desktop-2" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                         </div>
                       ) : (
                         /* MOBILE SHOWCASE (Staggered Side-by-Side) */
                         <div className="relative w-full h-full flex items-center justify-center scale-90 md:scale-100">
                           <div className="w-32 md:w-40 aspect-[9/19] bg-white border-2 border-studio-text studio-shadow-sm overflow-hidden transform -rotate-12 -translate-x-12 translate-y-4 group-hover:-rotate-6 transition-transform duration-700 grayscale group-hover:grayscale-0">
                              <img 
                                src={project.screenshots[0]} 
                                alt="mobile-1" 
                                className="w-full h-full object-cover"
                              />
                           </div>
                           <div className="w-36 md:w-48 aspect-[9/19] bg-white border-2 border-studio-text studio-shadow-lg overflow-hidden z-20 scale-105 transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0">
                              <img 
                                src={project.screenshots[1]} 
                                alt="mobile-2" 
                                className="w-full h-full object-cover"
                              />
                           </div>
                           <div className="w-32 md:w-40 aspect-[9/19] bg-white border-2 border-studio-text studio-shadow-sm overflow-hidden transform rotate-12 translate-x-12 translate-y-4 group-hover:rotate-6 transition-transform duration-700 grayscale group-hover:grayscale-0">
                              <img 
                                src={project.screenshots[2]} 
                                alt="mobile-3" 
                                className="w-full h-full object-cover"
                              />
                           </div>
                         </div>
                       )}

                       {/* Project Identifier Overlay */}
                       <div className={`absolute top-0 right-0 p-8 ${project.brandColor} ${project.brandTextColor} shadow-[-4px_4px_0px_#000] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 z-30`}>
                          {getProjectIcon(project.id)}
                       </div>

                       <div className="absolute bottom-8 left-8 text-[120px] font-bold text-studio-text/10 leading-none select-none tracking-tighter z-0">
                          0{index + 1}
                       </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProjectData && (
        <ProjectDetail project={selectedProjectData} onClose={closeProject} />
      )}
    </>
  );
};
