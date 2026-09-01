import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MagneticButton } from './MagneticButton';

export function Contact() {
  const [typedText, setTypedText] = useState('');
  const fullText = "$ ./contact-abinaya\nInitializing connection...\nSTATUS: READY\nCHANNELS: EMAIL / LINKEDIN / GITHUB\nConnection available.";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section className="py-32 md:py-48 bg-[var(--color-graphite)] relative overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onViewportEnter={() => setIsVisible(true)}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="space-y-8"
        >
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            className="font-mono text-sm tracking-widest text-[var(--color-accent)] font-semibold uppercase"
          >
            08 — CONTACT
          </motion.p>
          <motion.h2 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-[var(--color-white)] leading-[1.1]"
          >
            HAVE SOMETHING <br />
            WORTH BUILDING?
          </motion.h2>
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            className="text-xl text-[var(--color-border)] max-w-md font-light"
          >
            Let's connect and talk about software, cloud, technology and new opportunities.
          </motion.p>

          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            className="flex flex-wrap gap-4 pt-8"
          >
            <MagneticButton href="mailto:abinayalmmhs.123@gmail.com" className="bg-[var(--color-white)] text-[var(--color-graphite)] px-8 py-4 font-semibold tracking-widest text-sm hover:bg-[var(--color-accent)] hover:text-[var(--color-white)] hover:-translate-y-1 transition-all border border-transparent">
              EMAIL ME ↗
            </MagneticButton>
            <MagneticButton href="https://www.linkedin.com/in/abinaya-p-16a073337/" target="_blank" rel="noreferrer" className="border border-[var(--color-secondary)] text-[var(--color-white)] px-8 py-4 font-semibold tracking-widest text-sm hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:-translate-y-1 transition-all">
              LINKEDIN ↗
            </MagneticButton>
            <MagneticButton href="https://github.com/Abinaya1809" target="_blank" rel="noreferrer" className="border border-[var(--color-secondary)] text-[var(--color-white)] px-8 py-4 font-semibold tracking-widest text-sm hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:-translate-y-1 transition-all">
              GITHUB ↗
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center lg:justify-end"
        >
          <div className="w-full max-w-md border border-[var(--color-dark-surface)] bg-[var(--color-primary)] p-6 min-h-[200px] shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-accent)]" />
            <pre className="font-mono text-sm md:text-base text-[var(--color-border)] whitespace-pre-wrap leading-relaxed">
              {typedText}
              <span className="animate-pulse text-[var(--color-white)]">_</span>
            </pre>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
