import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 text-center max-w-xl mx-auto">
      <div className="flex justify-center gap-4 mb-8">
        <a href="#" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
            <Linkedin size={18} />
        </a>
        <a href="#" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
            <Mail size={18} />
        </a>
      </div>
      
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Want to get in touch?</h2>
      <h3 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">Drop me a line</h3>

      <form className="space-y-4">
        <div className="flex gap-4">
           <div className="flex-1 text-left">
              <label htmlFor="name" className="text-xs font-bold ml-1 mb-1 block text-gray-500">Name</label>
              <input 
                type="text" 
                id="name"
                placeholder="Enter your name" 
                className="w-full bg-white border border-transparent hover:border-gray-200 focus:border-black rounded-lg px-4 py-3 text-sm transition-colors outline-none"
              />
           </div>
           <div className="flex-1 text-left">
              <label htmlFor="email" className="text-xs font-bold ml-1 mb-1 block text-gray-500">Email Address</label>
              <input 
                type="email" 
                id="email"
                placeholder="Enter your email" 
                className="w-full bg-white border border-transparent hover:border-gray-200 focus:border-black rounded-lg px-4 py-3 text-sm transition-colors outline-none"
              />
           </div>
        </div>
        
        <div className="text-left">
             <label htmlFor="message" className="text-xs font-bold ml-1 mb-1 block text-gray-500">Message</label>
             <textarea 
                id="message"
                placeholder="Enter your message" 
                rows={4}
                className="w-full bg-white border border-transparent hover:border-gray-200 focus:border-black rounded-lg px-4 py-3 text-sm transition-colors outline-none resize-none"
             ></textarea>
        </div>

        <div className="text-center pt-4">
            <button type="submit" className="bg-black text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-gray-800 transition-colors">
                Submit
            </button>
        </div>
      </form>
    </section>
  );
};