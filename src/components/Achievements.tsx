import { motion } from 'framer-motion';

export function Achievements() {
  const achievements = [
    {
      id: "01",
      title: "PAPER PRESENTATION",
      description: "Gas Leakage Detection System",
      context: "Presented at a technical symposium conducted by CIT, Coimbatore."
    },
    {
      id: "02",
      title: "ACADEMIC",
      description: "100% Attendance Certificate",
      context: ""
    },
    {
      id: "03",
      title: "LEADERSHIP",
      description: "Jumbled Code Programming Event",
      context: "Organized and conducted during the college technical fest."
    }
  ];

  return (
    <section className="bg-[var(--color-bg)]" style={{ padding: 'var(--section-padding) 0' }} id="achievements">
      <div className="mx-auto" style={{ maxWidth: 'var(--container-max)', paddingInline: 'var(--page-padding)' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-sm tracking-widest text-[var(--color-accent)] font-semibold uppercase mb-4">
            06 — ACTIVITY
          </p>
          <h2 
            className="font-bold tracking-tighter text-[var(--color-heading)] max-w-3xl leading-tight"
            style={{ fontSize: 'var(--section-heading)', textWrap: 'balance' }}
          >
            A FEW THINGS <br />
            I'VE DONE.
          </h2>
        </motion.div>

        <div className="border border-[var(--color-border)] bg-[var(--color-white)]">
          <div className="border-b border-[var(--color-border)] p-4 md:px-8 font-mono text-xs tracking-widest font-semibold text-[var(--color-muted)]">
            ACTIVITY LOG
          </div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="flex flex-col"
          >
            {achievements.map((item) => (
              <motion.div 
                key={item.id}
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="group flex flex-col md:flex-row gap-4 md:gap-8 p-6 md:p-8 border-b border-[var(--color-border)] last:border-0 hover:bg-[var(--color-bg)] transition-colors"
              >
                <div className="font-mono text-sm text-[var(--color-muted)] font-semibold md:w-16 pt-1 group-hover:text-[var(--color-accent)] transition-colors">
                  [{item.id}]
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="font-mono text-xs font-semibold tracking-widest text-[var(--color-secondary)] uppercase">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xl md:text-2xl text-[var(--color-heading)] font-semibold tracking-tight mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                    {item.description}
                  </p>
                  {item.context && (
                    <p className="text-[var(--color-secondary)] font-medium">
                      {item.context}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
