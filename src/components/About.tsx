import { motion } from 'framer-motion';

export function About() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-black-main)]" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-sm tracking-widest text-[var(--color-muted-grey)] uppercase mb-4">
            01 — ABOUT
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-[var(--color-white-main)] max-w-3xl leading-tight">
            AN IT STUDENT <br className="hidden md:block"/>
            WHO LIKES TO BUILD.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 text-lg text-[var(--color-light-grey)] leading-relaxed font-light"
          >
            <p>
              Information Technology student with basic knowledge in programming, particularly Java. Experienced in developing academic projects including a web-based inventory management system.
            </p>
            <p>
              Quick learner with the ability to adapt to emerging technologies and work efficiently in fast-paced environments.
            </p>
            
            <div className="pt-8 border-t border-[var(--color-border-grey)]">
              <h3 className="text-xl text-[var(--color-white-main)] font-medium mb-4">Education</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-[var(--color-soft-white)]">B.Tech Information Technology</h4>
                  <p className="text-[var(--color-muted-grey)] mt-1">V.S.B College of Engineering Technical Campus, Coimbatore</p>
                  <p className="font-mono text-sm mt-2">CGPA: 8.3 / 10 | Expected: 2027</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-start"
          >
            {/* Minimal Information Strip */}
            <div className="w-full border border-[var(--color-border-grey)] bg-[var(--color-dark-grey)]/30 p-8 grid grid-cols-1 sm:grid-cols-2 gap-8 font-mono text-sm backdrop-blur-sm">
              <div>
                <p className="text-[var(--color-muted-grey)] mb-2">EDUCATION</p>
                <p className="text-[var(--color-white-main)]">B.TECH IT</p>
              </div>
              <div>
                <p className="text-[var(--color-muted-grey)] mb-2">CGPA</p>
                <p className="text-[var(--color-white-main)]">8.3 / 10</p>
              </div>
              <div>
                <p className="text-[var(--color-muted-grey)] mb-2">LOCATION</p>
                <p className="text-[var(--color-white-main)]">COIMBATORE</p>
              </div>
              <div>
                <p className="text-[var(--color-muted-grey)] mb-2">FOCUS</p>
                <p className="text-[var(--color-white-main)]">SOFTWARE + CLOUD</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
