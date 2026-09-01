import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';

export function CustomCursor() {
  const { x, y } = useMousePosition();
  const shouldReduceMotion = useReducedMotion();
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if it's a touch device
    if (window.matchMedia("(hover: none)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for 'data-cursor-interactive'
      const interactiveEl = target.closest('[data-cursor-interactive="true"]');
      if (interactiveEl) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  // Disable entirely on touch devices or reduced motion
  if (isTouchDevice || shouldReduceMotion) return null;

  // Don't render until mouse has moved
  if (x === 0 && y === 0) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-[var(--color-heading)] pointer-events-none z-[9999] mix-blend-difference overflow-hidden"
        animate={{
          x: x - (isHovering ? 16 : 8),
          y: y - (isHovering ? 16 : 8),
          width: isHovering ? 32 : 16,
          height: isHovering ? 32 : 16,
        }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30,
          mass: 0.5,
        }}
      />
    </>
  );
}
