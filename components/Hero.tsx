import React from 'react';
import ResponsiveHeroBanner from './ui/responsive-hero-banner';

export const Hero: React.FC = () => {
    return (
        <div className="relative pt-24 md:pt-0">
            <ResponsiveHeroBanner
                badgeLabel="New"
                badgeText="Gelecek Nesil Dijital Ürün Stüdyosu 2026"
                title="DİJİTAL GELECEĞİ"
                titleLine2="BİRLİKTE İNŞA EDELİM"
                description="Fikirleri yüksek performanslı dijital ürünlere dönüştüren yazılım ve tasarım stüdyosuyuz."
                primaryButtonText="Projeye Başla"
                primaryButtonHref="#contact"
                secondaryButtonText="Dosyamızı Gör"
                secondaryButtonHref="#work"
                ctaButtonText="Randevu Al"
                partnersTitle="TEKNİK ÜSTÜNLÜK & ETKİ"
            />
            
            {/* Minimalist Marquee */}
            <div className="absolute bottom-10 left-0 right-0 py-10 border-y border-white/5 bg-black/20 backdrop-blur-sm overflow-hidden z-20">
                <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
                    {['50+ MUTLU MÜŞTERİ', 'BAŞARI GARANTİSİ', 'YATIRIMCI ONAYLI ALTYAPI', 'ÖDÜLLÜ UI/UX TASARIM', 'UÇTAN UCA TESLİMAT', 'GLOBAL REFERANSLAR'].map((tag, i) => (
                        <React.Fragment key={i}>
                            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-white/40 flex items-center gap-4">
                                <span className="w-2 h-2 rounded-full bg-studio-primary opacity-50" />
                                {tag}
                            </span>
                        </React.Fragment>
                    ))}
                    {['50+ MUTLU MÜŞTERİ', 'BAŞARI GARANTİSİ', 'YATIRIMCI ONAYLI ALTYAPI', 'ÖDÜLLÜ UI/UX TASARIM', 'UÇTAN UCA TESLİMAT', 'GLOBAL REFERANSLAR'].map((tag, i) => (
                        <React.Fragment key={i + 10}>
                            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-white/40 flex items-center gap-4">
                                <span className="w-2 h-2 rounded-full bg-studio-primary opacity-50" />
                                {tag}
                            </span>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};
