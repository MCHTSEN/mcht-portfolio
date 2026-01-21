import React from 'react';
import { X, ExternalLink, Github, Calendar, MapPin, Smartphone, Monitor, Award, ChevronLeft, ChevronRight } from 'lucide-react';

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  location: string;
  type: 'freelance' | 'internship' | 'side-project' | 'full-time';
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
  accentColor: string;
  bgGradient: string;
  hasAward?: boolean;
  awardName?: string;
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

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm">
      <div className="min-h-screen px-4 py-8 flex items-start justify-center">
        <div className="bg-white rounded-[32px] w-full max-w-4xl shadow-2xl overflow-hidden relative animate-in fade-in zoom-in duration-300">

          {/* Header with gradient */}
          <div className={`${project.bgGradient} p-8 pb-32 relative`}>
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Award badge */}
            {project.hasAward && (
              <div className="absolute top-6 left-6 flex items-center gap-2 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                <Award size={16} />
                {project.awardName}
              </div>
            )}

            {/* Project info */}
            <div className="text-white mt-8">
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.type === 'freelance' ? 'bg-green-500/30' :
                  project.type === 'internship' ? 'bg-blue-500/30' :
                  project.type === 'side-project' ? 'bg-purple-500/30' : 'bg-gray-500/30'
                }`}>
                  {project.type === 'freelance' ? 'Freelance' :
                   project.type === 'internship' ? 'Staj' :
                   project.type === 'side-project' ? 'Side Project' : 'Full-time'}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl opacity-90 mb-6">{project.subtitle}</p>

              <div className="flex flex-wrap gap-4 text-sm opacity-80">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  {project.period}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  {project.location}
                </div>
              </div>
            </div>
          </div>

          {/* Screenshots carousel - overlapping header */}
          <div className="px-8 -mt-24 relative z-10">
            <div className="bg-gray-900 rounded-3xl p-4 shadow-2xl">
              <div className="relative">
                {/* Main image */}
                <div className="flex justify-center gap-4 overflow-hidden">
                  <div className="w-48 md:w-56 flex-shrink-0" style={{ aspectRatio: '1284/2778' }}>
                    <img
                      src={project.screenshots[currentImageIndex]}
                      alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                  {project.screenshots.length > 1 && (
                    <>
                      <div className="w-40 md:w-48 flex-shrink-0 opacity-50 hidden md:block" style={{ aspectRatio: '1284/2778' }}>
                        <img
                          src={project.screenshots[(currentImageIndex + 1) % project.screenshots.length]}
                          alt={`${project.title} screenshot`}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                      <div className="w-32 md:w-40 flex-shrink-0 opacity-30 hidden lg:block" style={{ aspectRatio: '1284/2778' }}>
                        <img
                          src={project.screenshots[(currentImageIndex + 2) % project.screenshots.length]}
                          alt={`${project.title} screenshot`}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                    </>
                  )}
                </div>

                {/* Navigation arrows */}
                {project.screenshots.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                {/* Dots indicator */}
                <div className="flex justify-center gap-2 mt-4">
                  {project.screenshots.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        idx === currentImageIndex ? 'bg-white' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 space-y-8">

            {/* Story section */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Hikaye</h2>
              <p className="text-gray-600 leading-relaxed">{project.story}</p>
            </div>

            {/* Challenge & Solution */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-3 text-red-700">Zorluk</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{project.challenge}</p>
              </div>
              <div className="bg-green-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-3 text-green-700">Cozum</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Impact */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-3 text-gray-900">Etki & Sonuclar</h3>
              <p className="text-gray-600 leading-relaxed">{project.impact}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-gray-900">Temel Ozellikler</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl px-4 py-3 text-sm text-gray-700">
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-gray-900">Teknoloji Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${project.accentColor}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            {(project.appStoreUrl || project.playStoreUrl || project.githubUrl || project.websiteUrl) && (
              <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
                {project.appStoreUrl && (
                  <a
                    href={project.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    <Smartphone size={16} />
                    App Store
                  </a>
                )}
                {project.playStoreUrl && (
                  <a
                    href={project.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-green-700 transition-colors"
                  >
                    <Smartphone size={16} />
                    Play Store
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                )}
                {project.websiteUrl && (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    <Monitor size={16} />
                    Website
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
