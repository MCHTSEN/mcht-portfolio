import React from 'react';

export const BackgroundEffect: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-studio-bg">
      {/* Primary Aura Gradients - CSS-only animations for GPU acceleration */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-[10%] -left-[10%] w-[50%] md:w-[80%] h-[50%] md:h-[80%] bg-studio-primary/10 rounded-full blur-[40px] md:blur-[80px] will-change-transform animate-aura-1"
          style={{ transform: 'translateZ(0)' }}
        />
        <div
          className="absolute top-[20%] -right-[10%] w-[40%] md:w-[70%] h-[40%] md:h-[70%] bg-studio-accent/15 rounded-full blur-[30px] md:blur-[60px] will-change-transform animate-aura-2"
          style={{ transform: 'translateZ(0)' }}
        />
      </div>

      {/* Diagonal Pill Shapes - Hidden on mobile, visible on tablet+ */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        {/* Layer 1: Large background pills */}
        <div
          className="absolute -top-40 right-[-10%] w-60 h-[1400px] bg-studio-primary/[0.06] rounded-full"
          style={{ transform: 'rotate(45deg) translateZ(0)' }}
        />
        <div
          className="absolute top-80 left-[-5%] w-40 h-[1000px] bg-studio-accent/[0.06] rounded-full"
          style={{ transform: 'rotate(45deg) translateZ(0)' }}
        />

        {/* Layer 2: Medium pills with borders */}
        <div
          className="absolute top-[5%] right-[20%] w-32 h-[800px] border border-studio-primary/30 rounded-full shadow-[0_0_20px_rgba(2,132,199,0.1)]"
          style={{ transform: 'rotate(45deg) translateZ(0)' }}
        />
        <div
          className="absolute bottom-[-10%] left-[25%] w-48 h-[900px] bg-gradient-to-b from-studio-primary/[0.1] to-transparent rounded-full"
          style={{ transform: 'rotate(45deg) translateZ(0)' }}
        />

        {/* Layer 3: Accent pills */}
        <div
          className="absolute top-[-25%] left-[45%] w-24 h-[600px] bg-studio-accent/[0.12] rounded-full"
          style={{ transform: 'rotate(45deg) translateZ(0)' }}
        />
        <div
          className="absolute top-20 right-[30%] w-16 h-[500px] border border-studio-accent/40 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.1)]"
          style={{ transform: 'rotate(45deg) translateZ(0)' }}
        />

        {/* Layer 4: Depth pill */}
        <div
          className="absolute bottom-40 right-[10%] w-28 h-[800px] bg-studio-primary/[0.08] rounded-full"
          style={{ transform: 'rotate(45deg) translateZ(0)' }}
        />
      </div>

      {/* Dynamic Light Rays - CSS animation */}
      <div className="absolute inset-0 opacity-[0.3] hidden md:block">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(2,132,199,0.08)_0%,transparent_60%)] animate-pulse-slow"
          style={{ transform: 'translate(-50%, -50%) translateZ(0)' }}
        />
      </div>

      {/* Refined Grid System - Hidden on mobile */}
      <div
        className="absolute inset-0 opacity-[0.1] hidden md:block"
        style={{
          backgroundImage: `
            linear-gradient(to right, #94a3b8 1px, transparent 1px),
            linear-gradient(to bottom, #94a3b8 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          transform: 'translateZ(0)'
        }}
      />

      {/* Structural Accent Lines - Hidden on mobile */}
      <div className="absolute inset-0 opacity-[0.08] hidden lg:block">
        <div className="absolute left-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-studio-border to-transparent" />
        <div className="absolute left-[90%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-studio-border to-transparent" />
      </div>
    </div>
  );
};
