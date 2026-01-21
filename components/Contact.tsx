import React from 'react';
import { Linkedin, Mail, Github, Phone, MapPin, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Iletisime Gecin</h2>
        <p className="text-gray-500 max-w-lg mx-auto">Yeni projeler, fikirler veya isbirligi firsatlari icin benimle iletisime gecmekten cekinmeyin.</p>
      </div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {/* Email Card */}
        <a
          href="mailto:mchtsenn16@gmail.com"
          className="group bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all flex items-center gap-4"
        >
          <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-500 transition-colors">
            <Mail className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-1">Email</p>
            <p className="font-semibold text-gray-900">mchtsenn16@gmail.com</p>
          </div>
        </a>

        {/* Phone Card */}
        <a
          href="tel:+905050161116"
          className="group bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-green-200 transition-all flex items-center gap-4"
        >
          <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center group-hover:bg-green-500 transition-colors">
            <Phone className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" />
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-1">Telefon</p>
            <p className="font-semibold text-gray-900">+90 505 016 1116</p>
          </div>
        </a>

        {/* GitHub Card */}
        <a
          href="https://github.com/MCHTSEN"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-300 transition-all flex items-center gap-4"
        >
          <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-gray-900 transition-colors">
            <Github className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-400 mb-1">GitHub</p>
            <p className="font-semibold text-gray-900">github.com/MCHTSEN</p>
          </div>
          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-700 transition-colors" />
        </a>

        {/* LinkedIn Card */}
        <a
          href="https://linkedin.com/in/mucahit-sen-a3933a184"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-300 transition-all flex items-center gap-4"
        >
          <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-700 transition-colors">
            <Linkedin className="w-6 h-6 text-blue-700 group-hover:text-white transition-colors" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-400 mb-1">LinkedIn</p>
            <p className="font-semibold text-gray-900">Mucahit SEN</p>
          </div>
          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-700 transition-colors" />
        </a>
      </div>

      {/* Location Info */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-full text-gray-600">
          <MapPin size={18} />
          <span className="font-medium">Istanbul & Bursa, Turkiye</span>
        </div>
      </div>

      {/* Social Links Row */}
      <div className="flex justify-center gap-4 mt-12">
        <a
          href="https://github.com/MCHTSEN"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
        >
          <Github size={20} />
        </a>
        <a
          href="https://linkedin.com/in/mucahit-sen-a3933a184"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="mailto:mchtsenn16@gmail.com"
          className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
        >
          <Mail size={20} />
        </a>
      </div>
    </section>
  );
};
