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
    <section className="py-24 md:py-32 bg-[var(--color-near-black)]" id="achievements">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-sm tracking-widest text-[var(--color-muted-grey)] uppercase mb-4">
            06 — ACTIVITY
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-[var(--color-white-main)] max-w-3xl leading-tight">
            A FEW THINGS <br />
            I'VE DONE.
          </h2>
        </motion.div>

        <div className="border border-[var(--color-border-grey)] bg-[var(--color-black-main)]">
          <div className="border-b border-[var(--color-border-grey)] p-4 md:px-8 font-mono text-sm text-[var(--color-muted-grey)]">
            ACTIVITY LOG
          </div>
          <div className="flex flex-col">
            {achievements.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col md:flex-row gap-4 md:gap-8 p-6 md:p-8 border-b border-[var(--color-border-grey)] last:border-0 hover:bg-[var(--color-surface-grey)] transition-colors"
              >
                <div className="font-mono text-sm text-[var(--color-muted-grey)] md:w-16 pt-1">
                  [{item.id}]
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="font-mono text-sm font-semibold tracking-widest text-[var(--color-white-main)] uppercase">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xl md:text-2xl text-[var(--color-white-main)] font-medium tracking-tight mb-2">
                    {item.description}
                  </p>
                  {item.context && (
                    <p className="text-[var(--color-light-grey)] font-light">
                      {item.context}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
