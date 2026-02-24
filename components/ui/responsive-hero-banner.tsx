"use client";

import { ArrowRight, Play } from 'lucide-react';
import React from 'react';
import { LampContainer } from './lamp';

interface NavLink {
    label: string;
    href: string;
    isActive?: boolean;
}

interface Partner {
    logoUrl: string;
    href: string;
}

interface ResponsiveHeroBannerProps {
    logoUrl?: string;
    backgroundImageUrl?: string;
    navLinks?: NavLink[];
    ctaButtonText?: string;
    ctaButtonHref?: string;
    badgeText?: string;
    badgeLabel?: string;
    title?: string;
    titleLine2?: string;
    description?: string;
    primaryButtonText?: string;
    primaryButtonHref?: string;
    secondaryButtonText?: string;
    secondaryButtonHref?: string;
    partnersTitle?: string;
}

const ResponsiveHeroBanner: React.FC<ResponsiveHeroBannerProps> = ({
    logoUrl = "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=100&h=40&auto=format&fit=crop",
    navLinks = [
        { label: "Home", href: "#", isActive: true },
        { label: "Services", href: "#" },
        { label: "Projects", href: "#" },
        { label: "About", href: "#" },
        { label: "Contact", href: "#" }
    ],
    ctaButtonText = "Start Project",
    ctaButtonHref = "#",
    badgeLabel = "New",
    badgeText = "Future of Digital Product Design 2026",
    title = "Architecting Digital",
    titleLine2 = "Excellence",
    description = "We help industry leaders build high-performance digital products that scale. From strategy to deployment, we are your engineering partner.",
    primaryButtonText = "Build Your Product",
    primaryButtonHref = "#",
    secondaryButtonText = "View Case Studies",
    secondaryButtonHref = "#",
    partnersTitle = "STUDIO PILLARS"
}) => {
    const pillars = [
        { id: "01", title: "STRATEJİK MİMARİ", desc: "Ürününüzün temelini sağlam veriler ve ölçeklenebilir stratejilerle atıyoruz." },
        { id: "02", title: "PREMİUM DENEYİM", desc: "iF Design ödüllü estetik anlayışımızla kullanıcıda iz bırakan arayüzler tasarlıyoruz." },
        { id: "03", title: "İLERİ MÜHENDİSLİK", desc: "IoT, AI ve yüksek performanslı mobil mimarilerle geleceğin teknolojisini kodluyoruz." }
    ];

    return (
        <section className="w-full isolate min-h-screen overflow-hidden relative font-sans">
            <LampContainer className="pt-20">
                <div className="z-10 relative">
                    <div className="max-w-7xl mx-auto px-6 pb-16 text-center">
                        <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-white/5 px-3 py-2 ring-1 ring-white/10 backdrop-blur-md">
                            <span className="inline-flex items-center text-[10px] uppercase tracking-widest font-bold text-neutral-900 bg-white rounded-full py-1 px-3">
                                {badgeLabel}
                            </span>
                            <span className="text-xs uppercase tracking-[0.2em] font-medium text-white/80">
                                {badgeText}
                            </span>
                        </div>

                        <h1 className="sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] text-5xl text-white tracking-tighter font-serif font-normal">
                            {title}
                            <br className="hidden sm:block" />
                            <span className="italic opacity-90">{titleLine2}</span>
                        </h1>

                        <p className="sm:text-lg text-base text-white/60 max-w-2xl mt-8 mx-auto leading-relaxed font-mono uppercase text-[10px] tracking-[0.2em]">
                            {description}
                        </p>

                        <div className="flex flex-col sm:flex-row sm:gap-6 mt-12 gap-4 items-center justify-center">
                            <a
                                href={primaryButtonHref}
                                className="group inline-flex items-center gap-2 hover:bg-white text-xs uppercase tracking-widest font-bold text-white hover:text-black bg-white/10 ring-white/20 ring-1 rounded-full py-4 px-8 transition-all duration-300"
                            >
                                {primaryButtonText}
                                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href={secondaryButtonHref}
                                className="inline-flex items-center gap-2 rounded-full bg-transparent px-8 py-4 text-xs uppercase tracking-widest font-bold text-white/60 hover:text-white transition-colors"
                            >
                                {secondaryButtonText}
                                <Play className="w-4 h-4 fill-white/10" />
                            </a>
                        </div>

                    </div>
                </div>
            </LampContainer>

            <div className="relative z-20 mx-auto max-w-7xl px-6 pb-24 -mt-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/5 rounded-3xl overflow-hidden bg-white/[0.02] backdrop-blur-xl">
                    {pillars.map((pillar, index) => (
                        <div 
                            key={index}
                            className={`group relative p-12 md:p-16 flex flex-col justify-between min-h-[400px] transition-all duration-700 hover:bg-white/[0.03] ${index < 2 ? 'md:border-r border-b md:border-b-0 border-white/5' : ''}`}
                        >
                            <div className="relative z-10">
                                <span className="text-5xl md:text-7xl font-bold tracking-tighter text-white/5 group-hover:text-studio-primary transition-colors duration-700">
                                    {pillar.id}
                                </span>
                            </div>
                            
                            <div className="relative z-10 space-y-6">
                                <h3 className="text-xl md:text-2xl font-bold tracking-tighter text-white group-hover:translate-x-2 transition-transform duration-500">
                                    {pillar.title}
                                </h3>
                                <p className="text-xs md:text-sm font-mono text-white/40 leading-relaxed uppercase tracking-widest">
                                    {pillar.desc}
                                </p>
                            </div>

                            {/* Abstract Decorator */}
                            <div className="absolute top-1/2 right-12 -translate-y-1/2 w-48 h-48 bg-studio-primary/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                            
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-studio-primary/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResponsiveHeroBanner;
