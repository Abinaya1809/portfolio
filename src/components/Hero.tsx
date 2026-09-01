import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { MagneticButton } from './MagneticButton';

export function Hero() {
  const [statusIndex, setStatusIndex] = useState(0);
  const statusMessages = ["SYSTEM READY", "AWS READY", "JAVA READY", "BUILDING SOFTWARE"];

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % statusMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden" id="hero">
      {/* Subtle Animated Background Grid Parallax */}
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-40" 
        style={{ 
          backgroundImage: 'linear-gradient(var(--color-soft-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-soft-border) 1px, transparent 1px)', 
          backgroundSize: '60px 60px' 
        }}
        animate={{
          backgroundPosition: ['0px 0px', '60px 60px']
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary)] uppercase mb-6 flex items-center"
          >
            <span>B.Tech Information Technology</span>
            <span className="mx-3 text-[var(--color-accent)]">/</span>
            <span>Software Developer</span>
          </motion.div>
          
          <h1 className="text-[3.5rem] sm:text-7xl md:text-8xl lg:text-[6.5rem] font-bold tracking-tighter leading-[1.05] text-[var(--color-heading)] flex flex-col">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0, ease: [0.16, 1, 0.3, 1] }}
            >
              BUILDING
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-[var(--color-graphite)] opacity-90"
            >
              PRACTICAL SOFTWARE
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              WITH JAVA & AWS.
            </motion.span>
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-[var(--color-secondary)] max-w-2xl font-light leading-relaxed"
          >
            Information Technology student exploring software development, cloud computing, serverless applications and modern web technologies.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4 pt-6"
          >
            <MagneticButton href="#projects" className="bg-[var(--color-graphite)] text-[var(--color-white)] px-8 py-4 text-sm font-semibold tracking-widest hover:bg-[var(--color-accent)] transition-colors border border-transparent">
              VIEW PROJECTS →
            </MagneticButton>
            <MagneticButton href="#contact" className="bg-[var(--color-white)] text-[var(--color-graphite)] border border-[var(--color-border)] px-8 py-4 text-sm font-semibold tracking-widest hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors group">
              LET'S CONNECT <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform inline-block ml-1">↗</span>
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 perspective-1000"
        >
          <motion.div 
            className="bg-[var(--color-white)] border border-[var(--color-border)] p-6 md:p-8 font-mono text-xs md:text-sm text-[var(--color-secondary)] shadow-[0_20px_60px_rgba(0,0,0,0.03)] relative overflow-hidden"
            whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-accent)]/20" />
            
            <div className="flex justify-between border-b border-[var(--color-soft-border)] pb-4 mb-5">
              <span className="text-[var(--color-heading)] font-semibold tracking-widest">ABINAYA.P</span>
              <span className="tracking-widest text-[var(--color-muted)]">STATUS</span>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center group">
                <span>AVAILABLE</span> 
                <span className="text-[var(--color-graphite)] flex items-center gap-2 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
                  TRUE
                </span>
              </div>
              <div className="flex justify-between items-center group">
                <span>RUNTIME</span> 
                <span className="text-[var(--color-primary)] font-medium">JAVA</span>
              </div>
              <div className="flex justify-between items-center group">
                <span>CLOUD</span> 
                <span className="text-[var(--color-primary)] font-medium">AWS</span>
              </div>
              <div className="flex justify-between items-center group">
                <span>DATABASE</span> 
                <span className="text-[var(--color-primary)] font-medium">SQL</span>
              </div>
              <div className="flex justify-between items-center group">
                <span>WEB</span> 
                <span className="text-[var(--color-primary)] font-medium">HTML / CSS / JS</span>
              </div>
              <div className="flex justify-between items-center group">
                <span>LOCATION</span> 
                <span className="text-[var(--color-primary)] font-medium">COIMBATORE</span>
              </div>
            </div>
            
            <div className="mt-5 pt-4 border-t border-[var(--color-soft-border)] flex justify-between items-center overflow-hidden">
              <span className="tracking-widest text-[var(--color-muted)]">SYSTEM</span>
              <div className="text-[var(--color-accent)] font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
                <AnimatePresence mode="wait">
                  <motion.span
                    key={statusIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="inline-block"
                  >
                    {statusMessages[statusIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
