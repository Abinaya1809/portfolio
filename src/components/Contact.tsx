import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
    <section className="py-32 md:py-48 bg-[var(--color-near-black)] relative overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsVisible(true)}
          className="space-y-8"
        >
          <p className="font-mono text-sm tracking-widest text-[var(--color-muted-grey)] uppercase">
            08 — CONTACT
          </p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-[var(--color-white-main)] leading-[1.1]">
            HAVE SOMETHING <br />
            WORTH BUILDING?
          </h2>
          <p className="text-xl text-[var(--color-light-grey)] max-w-md font-light">
            Let's connect and talk about software, cloud, technology and new opportunities.
          </p>

          <div className="flex flex-wrap gap-4 pt-8">
            <a href="mailto:abinayalmmhs.123@gmail.com" className="bg-[var(--color-white-main)] text-[var(--color-near-black)] px-8 py-4 font-semibold tracking-wide hover:bg-[var(--color-soft-white)] hover:-translate-y-1 transition-all inline-flex items-center gap-2">
              EMAIL ME ↗
            </a>
            <a href="#" className="border border-[var(--color-border-grey)] bg-[var(--color-dark-grey)] text-[var(--color-white-main)] px-8 py-4 font-semibold tracking-wide hover:bg-[var(--color-surface-grey)] hover:-translate-y-1 transition-all inline-flex items-center gap-2">
              LINKEDIN ↗
            </a>
            <a href="#" className="border border-[var(--color-border-grey)] bg-[var(--color-dark-grey)] text-[var(--color-white-main)] px-8 py-4 font-semibold tracking-wide hover:bg-[var(--color-surface-grey)] hover:-translate-y-1 transition-all inline-flex items-center gap-2">
              GITHUB ↗
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center lg:justify-end"
        >
          <div className="w-full max-w-md border border-[var(--color-border-grey)] bg-[var(--color-black-main)] p-6 min-h-[200px] shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-white-main)]/20" />
            <pre className="font-mono text-sm md:text-base text-[var(--color-light-grey)] whitespace-pre-wrap leading-relaxed">
              {typedText}
              <span className="animate-pulse text-[var(--color-white-main)]">_</span>
            </pre>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
