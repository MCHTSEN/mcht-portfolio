import { AnimatePresence, motion } from 'framer-motion';
import { Bluetooth, Brain, ExternalLink, Factory, Plus, QrCode, ShieldAlert, Wrench } from 'lucide-react';
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
      <section id="work" className="py-48 bg-transparent">
        <div className="max-w-[1800px] mx-auto px-6">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-40">
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-studio-primary/5 text-studio-primary rounded-sm border border-studio-primary/10"
              >
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em]">Seçilmiş Projeler</span>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85] uppercase"
              >
                PROJE<br /><span className="text-studio-primary">ARŞİVİ.</span>
              </motion.h2>
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-sm lg:pb-6"
            >
              <p className="text-studio-gray font-medium text-lg leading-relaxed border-l-2 border-studio-primary pl-6">
                Mobil dünya için yüksek performanslı, ödüllü ve ölçeklenebilir dijital deneyimler geliştiriyoruz.
              </p>
            </motion.div>
          </div>

          <div className="space-y-64">
            {projectsData.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => openProject(project.id)}
                className="group cursor-pointer"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                  
                  {/* Left Column: Info */}
                  <div className="lg:col-span-5 space-y-12 lg:sticky lg:top-48">
                    <div className="flex items-center gap-4">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-widest leading-none px-4 py-2 border border-studio-border rounded-full group-hover:bg-studio-primary group-hover:text-white group-hover:border-transparent transition-all`}>
                        {projectTypeMap[project.type] || project.type}
                      </span>
                      {project.hasAward && (
                        <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-studio-primary uppercase tracking-widest leading-none bg-studio-primary/5 px-4 py-2 rounded-full border border-studio-primary/20">
                           AWARD WINNER
                        </div>
                      )}
                    </div>

                    <div className="space-y-6">
                       <h3 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight uppercase relative inline-block group-hover:text-studio-primary transition-colors duration-500">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-3">
                        <div className="h-[2px] w-12 bg-studio-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                        <p className="text-lg font-mono tracking-tighter font-bold text-studio-text">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-studio-gray font-medium text-lg leading-relaxed max-w-sm">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                      {project.techStack.slice(0, 4).map(tech => (
                        <span key={tech} className="text-[10px] font-mono font-bold uppercase tracking-widest text-studio-gray group-hover:text-studio-text transition-colors">
                          / {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-8">
                       <button className="group/btn relative px-8 py-4 bg-studio-text text-white text-[10px] font-bold uppercase tracking-widest overflow-hidden transition-all rounded-sm flex items-center gap-3">
                         <span className="relative z-10 flex items-center gap-3">
                            PROJEYİ KEŞFET <ExternalLink size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                         </span>
                         <div className="absolute inset-0 bg-studio-primary translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                       </button>
                    </div>
                  </div>

                  {/* Right Column: Visual Showcase */}
                  <div className="lg:col-span-7">
                    <motion.div 
                      whileHover={{ scale: 0.98 }}
                      transition={{ duration: 0.5 }}
                      className={`relative overflow-hidden aspect-[16/10] ${project.secondaryColor} rounded-2xl border border-studio-border/20 group-hover:shadow-2xl group-hover:shadow-studio-primary/5 transition-all duration-700 flex items-center justify-center p-12 overflow-hidden`}
                    >
                       <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent"></div>
                       
                       {project.id === 'bursali-automotive' ? (
                         /* DESKTOP SHOWCASE (Bursali) */
                         <div className="relative w-full h-full flex items-center justify-center">
                            <motion.div 
                              whileHover={{ y: -10, x: -10 }}
                              className="w-[80%] aspect-video bg-white border border-studio-border/30 rounded-lg shadow-xl overflow-hidden transform -translate-x-10 -translate-y-6 transition-transform duration-700 hover:z-20"
                            >
                              <img src={project.screenshots[0]} alt="desktop-1" className="w-full h-full object-cover" />
                            </motion.div>
                            <motion.div 
                              whileHover={{ y: 10, x: 10 }}
                              className="absolute w-[80%] aspect-video bg-white border border-studio-border/30 rounded-lg shadow-2xl overflow-hidden transform translate-x-10 translate-y-6 transition-transform duration-700 z-10"
                            >
                              <img src={project.screenshots[1]} alt="desktop-2" className="w-full h-full object-cover" />
                            </motion.div>
                         </div>
                       ) : (
                         /* MOBILE SHOWCASE (Staggered) */
                         <div className="relative w-full h-full flex items-center justify-center gap-8 md:gap-16">
                           <motion.div 
                             whileHover={{ y: -20, rotate: -2 }}
                             className="w-32 md:w-44 aspect-[9/19] bg-white rounded-3xl border border-studio-border/30 shadow-xl overflow-hidden transform -rotate-6 translate-y-8 group-hover:translate-y-4 transition-transform duration-700"
                           >
                              <img src={project.screenshots[0]} alt="mobile-1" className="w-full h-full object-cover" />
                           </motion.div>
                           <motion.div 
                             whileHover={{ y: -20, scale: 1.05 }}
                             className="w-36 md:w-52 aspect-[9/19] bg-white rounded-[2rem] border border-studio-border/30 shadow-2xl overflow-hidden z-20 scale-110 transform translate-y-0 group-hover:-translate-y-4 transition-transform duration-700"
                           >
                              <img src={project.screenshots[1]} alt="mobile-2" className="w-full h-full object-cover" />
                           </motion.div>
                           <motion.div 
                             whileHover={{ y: -20, rotate: 2 }}
                             className="w-32 md:w-44 aspect-[9/19] bg-white rounded-3xl border border-studio-border/30 shadow-xl overflow-hidden transform rotate-6 translate-y-8 group-hover:translate-y-4 transition-transform duration-700"
                           >
                              <img src={project.screenshots[2]} alt="mobile-3" className="w-full h-full object-cover" />
                           </motion.div>
                         </div>
                       )}

                       {/* ID Label */}
                       <div className="absolute top-10 right-10 flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-full ${project.brandColor} ${project.brandTextColor} flex items-center justify-center shadow-lg`}>
                            {getProjectIcon(project.id)}
                          </div>
                          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-studio-text opacity-50">0{index + 1}</span>
                       </div>
                    </motion.div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProjectData && (
          <ProjectDetail project={selectedProjectData} onClose={closeProject} />
        )}
      </AnimatePresence>
    </>
  );
};
