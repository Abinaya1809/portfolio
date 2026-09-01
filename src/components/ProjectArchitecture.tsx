import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function ServerlessArchitecture() {
  const shouldReduceMotion = useReducedMotion();
  const [statusIndex, setStatusIndex] = useState(0);
  const statuses = ['REQUEST', 'ROUTED', 'PROCESSED', 'STORED'];

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => setStatusIndex(prev => (prev + 1) % statuses.length), 1000);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="w-full h-full min-h-[400px] border border-[var(--color-soft-border)] bg-[var(--color-white)] p-6 md:p-12 flex flex-col items-center justify-center relative group overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.02)]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-soft-border)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      {!shouldReduceMotion && (
        <motion.div 
          className="absolute w-1 h-3 bg-[var(--color-accent)] z-20 rounded-full shadow-[0_0_10px_var(--color-accent)]"
          initial={{ top: '10%', opacity: 0 }}
          animate={{ top: '90%', opacity: [0, 1, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      )}

      <div className="flex flex-col items-center z-10 w-full max-w-[280px] sm:max-w-sm relative">
        {['USER', 'FRONTEND', 'API GATEWAY', 'AWS LAMBDA', 'DYNAMODB'].map((node, i) => (
          <div key={node} className="w-full flex flex-col items-center">
            <motion.div className="w-full border border-[var(--color-border)] bg-[var(--color-white)] py-3.5 px-6 text-center font-mono text-sm tracking-widest text-[var(--color-secondary)] group-hover:border-[var(--color-graphite)] group-hover:bg-[var(--color-graphite)] group-hover:text-[var(--color-white)] group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 font-semibold">{node}</span>
            </motion.div>
            {i < 4 && (
              <div className="h-7 w-px bg-[var(--color-border)] group-hover:bg-[var(--color-secondary)] transition-colors duration-500 my-1.5 relative">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 border-b border-r border-[var(--color-border)] group-hover:border-[var(--color-secondary)] rotate-45 transform origin-center transition-colors duration-500" />
              </div>
            )}
          </div>
        ))}

        {!shouldReduceMotion && (
          <div className="absolute -right-12 top-1/2 -translate-y-1/2 font-mono text-[10px] tracking-widest text-[var(--color-accent)] font-semibold rotate-90 origin-left hidden md:block">
            <AnimatePresence mode="wait">
              <motion.span
                key={statusIndex}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
                className="inline-block"
              >
                {statuses[statusIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}

export function DisasterRecoveryWorkflow() {
  const shouldReduceMotion = useReducedMotion();
  const [statusIndex, setStatusIndex] = useState(0);
  const statuses = ['BACKUP ACTIVE', 'TRANSFERRING', 'BACKUP COMPLETE ✓', 'RECOVERY READY'];

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => setStatusIndex(prev => (prev + 1) % statuses.length), 1500);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="w-full h-full min-h-[400px] border border-[var(--color-soft-border)] bg-[var(--color-white)] p-6 md:p-12 flex flex-col items-center justify-center relative group overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.02)]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-soft-border)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      {!shouldReduceMotion && (
        <motion.div 
          className="absolute w-2 h-2 bg-[var(--color-accent)] z-20 rounded-full"
          initial={{ top: '20%', opacity: 0 }}
          animate={{ top: '80%', opacity: [0, 1, 1, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <div className="flex flex-col items-center z-10 w-full max-w-[280px] sm:max-w-sm relative">
        {['USER', 'WEB APPLICATION', 'BACKEND API', 'CLOUD STORAGE', 'BACKUP / RECOVERY'].map((node, i) => (
          <div key={node} className="w-full flex flex-col items-center">
            <motion.div className="w-full border border-[var(--color-border)] bg-[var(--color-white)] py-3.5 px-6 text-center font-mono text-sm tracking-widest text-[var(--color-secondary)] group-hover:border-[var(--color-graphite)] group-hover:bg-[var(--color-graphite)] group-hover:text-[var(--color-white)] group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 font-semibold">{node}</span>
            </motion.div>
            {i < 4 && (
              <div className="h-7 w-px bg-[var(--color-border)] group-hover:bg-[var(--color-secondary)] transition-colors duration-500 my-1.5 relative">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 border-b border-r border-[var(--color-border)] group-hover:border-[var(--color-secondary)] rotate-45 transform origin-center transition-colors duration-500" />
              </div>
            )}
          </div>
        ))}
        {!shouldReduceMotion && (
          <div className="absolute -right-8 bottom-4 font-mono text-[10px] tracking-widest text-[var(--color-accent)] font-semibold hidden md:block">
            <AnimatePresence mode="wait">
              <motion.span
                key={statusIndex}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
                className="inline-block"
              >
                {statuses[statusIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}

export function ExpenseTrackerWorkflow() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full h-full min-h-[400px] border border-[var(--color-soft-border)] bg-[var(--color-white)] p-6 md:p-12 flex flex-col items-center justify-center relative group overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.02)]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-soft-border)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      {!shouldReduceMotion && (
        <motion.div 
          className="absolute w-0.5 h-16 bg-gradient-to-b from-transparent via-[var(--color-accent)] to-transparent opacity-0 group-hover:opacity-80 z-0"
          initial={{ top: '-20%' }}
          animate={{ top: '120%' }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
        />
      )}

      <div className="flex flex-col items-center z-10 w-full max-w-[280px] sm:max-w-sm">
        {['INCOME', 'EXPENSE ENTRY', 'CATEGORIZATION', 'TRACKING', 'SUMMARY'].map((node, i) => (
          <div key={node} className="w-full flex flex-col items-center">
            <motion.div className="w-full border border-[var(--color-border)] bg-[var(--color-white)] py-3.5 px-6 text-center font-mono text-sm tracking-widest text-[var(--color-secondary)] group-hover:border-[var(--color-graphite)] group-hover:bg-[var(--color-graphite)] group-hover:text-[var(--color-white)] group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 font-semibold">{node}</span>
            </motion.div>
            {i < 4 && (
              <div className="h-7 w-px bg-[var(--color-border)] group-hover:bg-[var(--color-secondary)] transition-colors duration-500 my-1.5 relative">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 border-b border-r border-[var(--color-border)] group-hover:border-[var(--color-secondary)] rotate-45 transform origin-center transition-colors duration-500" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-end gap-2 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {[40, 70, 30, 90, 50].map((height, i) => (
          <motion.div
            key={i}
            className="w-4 bg-[var(--color-graphite)] hover:bg-[var(--color-accent)] transition-colors rounded-t-sm"
            initial={{ height: 0 }}
            whileInView={{ height: `${height}%` }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          />
        ))}
      </div>
    </div>
  );
}
