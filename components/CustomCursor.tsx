import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true); // Default to true to prevent flash
  const rafRef = useRef<number | null>(null);
  const positionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check if it's a touch device
    const checkTouchDevice = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 768;
      setIsTouchDevice(hasTouch || isSmallScreen);
    };

    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);

    return () => {
      window.removeEventListener('resize', checkTouchDevice);
    };
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY };

      // Throttle with requestAnimationFrame
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(() => {
          setPosition(positionRef.current);

          // Check for interactive elements without getComputedStyle
          const target = e.target as HTMLElement;
          const isInteractive =
            target.tagName === 'BUTTON' ||
            target.tagName === 'A' ||
            target.closest('button') !== null ||
            target.closest('a') !== null ||
            target.classList.contains('cursor-pointer');

          setIsPointer(isInteractive);
          rafRef.current = null;
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isTouchDevice]);

  // Don't render anything on touch devices
  if (isTouchDevice) {
    return null;
  }

  return (
    <>
      <div
        className="cursor-glow"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          pointerEvents: 'none',
        }}
      />
      <div
        className={`fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[10000] mix-blend-difference bg-white ${
          isPointer ? 'scale-[3]' : 'scale-100'
        }`}
        style={{
          transform: `translate(${position.x - 8}px, ${position.y - 8}px)`,
          transition: 'transform 0.1s ease-out',
          willChange: 'transform',
        }}
      />
    </>
  );
};
