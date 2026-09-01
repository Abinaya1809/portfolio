import { motion, useScroll, useReducedMotion } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return null;

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] bg-[var(--color-bg)] z-[99999] origin-left">
      <motion.div 
        className="h-full bg-[var(--color-accent)] origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}
