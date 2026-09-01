import { motion } from 'framer-motion';

export function Interests() {
  const interests = [
    { title: "BADMINTON", desc: "Intermediate level" },
    { title: "CREATIVE STORY WRITING", desc: "" }
  ];

  return (
    <section className="py-24 bg-[var(--color-bg)] border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-4">
          <p className="font-mono text-sm tracking-widest text-[var(--color-accent)] font-semibold uppercase">
            07 — BEYOND CODE
          </p>
        </div>
        <div className="md:col-span-8 flex flex-col gap-12">
          {interests.map((interest, i) => (
            <motion.div 
              key={interest.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[var(--color-soft-border)] group-hover:text-[var(--color-heading)] transition-colors duration-500 cursor-default">
                {interest.title}
              </h3>
              {interest.desc && (
                <p className="mt-4 font-mono text-sm text-[var(--color-secondary)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-y-2 group-hover:translate-y-0">
                  {interest.desc}
                </p>
              )}
            </motion.div>
          ))}
          
          <div className="pt-8 flex gap-8 font-mono text-sm font-semibold tracking-widest text-[var(--color-muted)]">
            <span>LANGUAGES:</span>
            <span className="text-[var(--color-primary)]">TAMIL</span>
            <span className="text-[var(--color-primary)]">ENGLISH</span>
          </div>
        </div>
      </div>
    </section>
  );
}
