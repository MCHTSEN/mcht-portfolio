import { About } from './components/About';
import { BackgroundEffect } from './components/BackgroundEffect';
import { Contact } from './components/Contact';
import { CustomCursor } from './components/CustomCursor';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { Navbar } from './components/Navbar';
import { WorkSection } from './components/WorkSection';

function App() {
  return (
    <div className="min-h-screen text-studio-text selection:bg-studio-primary selection:text-white">
      <BackgroundEffect />
      <CustomCursor />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Highlights />
        <WorkSection />
        <About />
        <Contact />
      </main>
      
      <footer className="py-20 px-6 max-w-[1800px] mx-auto studio-border-t">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="space-y-4">
             <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-studio-text flex items-center justify-center text-white font-mono text-xs font-bold transition-transform hover:rotate-90">LS</div>
                <span className="font-bold text-sm tracking-tighter uppercase font-mono">Lukeri Studio</span>
             </div>
             <p className="text-[10px] font-mono text-studio-gray uppercase tracking-widest leading-relaxed max-w-xs">
                Gelecek nesil endüstri liderleri için yüksek performanslı dijital ürünler tasarlıyoruz.
             </p>
          </div>
          
          <div className="flex flex-col md:items-end gap-2">
             <p className="text-[10px] font-mono text-studio-gray uppercase tracking-[0.2em]">© 2026 Lukeri Studio. Tüm hakları saklıdır.</p>
             <p className="text-[10px] font-mono text-studio-text font-bold uppercase tracking-[0.2em]">İstanbul | Bursa | Global Digital HQ</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default App;