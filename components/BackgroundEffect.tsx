import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import React from 'react';

export const BackgroundEffect: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Smooth springs for parallax to make it feel "heavy" and premium
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 35,
    restDelta: 0.001
  });

  // Parallax offsets for different layers
  const yFast = useTransform(smoothProgress, [0, 1], [0, -800]);
  const yMedium = useTransform(smoothProgress, [0, 1], [0, -500]);
  const ySlow = useTransform(smoothProgress, [0, 1], [0, -300]);
  const yReverse = useTransform(smoothProgress, [0, 1], [0, 400]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-studio-bg">
      {/* Primary Aura Gradients - Layered Mesh */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-[10%] -left-[10%] w-[80%] h-[80%] bg-studio-primary/10 rounded-full blur-[160px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -100, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[20%] -right-[10%] w-[70%] h-[70%] bg-studio-accent/15 rounded-full blur-[140px]"
        />
      </div>

      {/* Diagonal Pill Shapes (Inspired by Uploaded Image) */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Layer 1: Large slow background pills */}
        <motion.div 
          style={{ y: ySlow }}
          className="absolute -top-40 right-[-10%] w-60 h-[1400px] bg-studio-primary/[0.06] rounded-full rotate-[45deg] blur-[1px]"
        />
        <motion.div 
          style={{ y: ySlow }}
          className="absolute top-80 left-[-5%] w-40 h-[1000px] bg-studio-accent/[0.06] rounded-full rotate-[45deg] blur-[1px]"
        />

        {/* Layer 2: Medium speed pills with borders */}
        <motion.div 
          style={{ y: yMedium }}
          className="absolute top-[5%] right-[20%] w-32 h-[800px] border border-studio-primary/30 rounded-full rotate-[45deg] shadow-[0_0_20px_rgba(2,132,199,0.1)]"
        />
        <motion.div 
          style={{ y: yMedium }}
          className="absolute bottom-[-10%] left-[25%] w-48 h-[900px] bg-gradient-to-b from-studio-primary/[0.1] to-transparent rounded-full rotate-[45deg]"
        />

        {/* Layer 3: Fast moving accent pills */}
        <motion.div 
          style={{ y: yFast }}
          className="absolute top-[-25%] left-[45%] w-24 h-[600px] bg-studio-accent/[0.12] rounded-full rotate-[45deg] blur-[1px]"
        />
        <motion.div 
          style={{ y: yFast }}
          className="absolute top-20 right-[30%] w-16 h-[500px] border border-studio-accent/40 rounded-full rotate-[45deg] shadow-[0_0_15px_rgba(6,182,212,0.1)]"
        />

        {/* Layer 4: Reverse moving or static-ish pills for depth */}
        <motion.div 
          style={{ y: yReverse }}
          className="absolute bottom-40 right-[10%] w-28 h-[800px] bg-studio-primary/[0.08] rounded-full rotate-[45deg]"
        />
      </div>

      {/* Dynamic Light Rays (More Visible) */}
      <div className="absolute inset-0 opacity-[0.3]">
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(2,132,199,0.08)_0%,transparent_60%)]"
        />
      </div>

      {/* Refined Grid System */}
      <div 
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #94a3b8 1px, transparent 1px),
            linear-gradient(to bottom, #94a3b8 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}
      />

      {/* Structural Accent Lines */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="absolute left-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-studio-border to-transparent" />
        <div className="absolute left-[90%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-studio-border to-transparent" />
      </div>
    </div>
  );
};

