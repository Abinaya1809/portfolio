import { motion } from 'framer-motion';

export function About() {
  return (
    <section className="bg-[var(--color-white)] border-y border-[var(--color-soft-border)]" style={{ padding: 'var(--section-padding) 0' }} id="about">
      <div className="mx-auto flex flex-col" style={{ maxWidth: 'var(--container-max)', paddingInline: 'var(--page-padding)' }}>
        
        {/* TOP: Label & Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <p className="font-mono text-sm tracking-widest text-[var(--color-accent)] font-semibold uppercase mb-6">
            01 — ABOUT
          </p>
          <h2 
            className="font-bold tracking-tighter text-[var(--color-heading)] max-w-4xl leading-[1.1]"
            style={{ fontSize: 'var(--section-heading)', textWrap: 'balance' }}
          >
            AN IT STUDENT <br className="hidden md:block"/>
            WHO LIKES TO BUILD.
          </h2>
        </motion.div>

        {/* BOTTOM: Photo & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* LEFT: Profile Photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="aspect-[3/4] relative overflow-hidden border border-[var(--color-border)] bg-[var(--color-bg)] group"
            style={{ width: 'min(100%, 350px)', height: 'auto' }}
          >
            <img 
              src="/src/assets/profile.jpg" 
              alt="Abinaya P" 
              className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700" 
            />
            <div className="absolute inset-0 border-[8px] border-[var(--color-white)] pointer-events-none" />
          </motion.div>

          {/* RIGHT: Text & Education */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
            }}
            className="flex flex-col pt-4"
          >
            
            {/* Paragraphs */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="space-y-6 text-[var(--color-secondary)] leading-relaxed font-light mb-12"
              style={{ fontSize: 'var(--body-text)' }}
            >
              <p>
                Information Technology student with basic knowledge in programming, particularly Java. Experienced in developing academic projects including a web-based inventory management system.
              </p>
              <p>
                Quick learner with the ability to adapt to emerging technologies and work efficiently in fast-paced environments.
              </p>
            </motion.div>

            {/* Bold About Me Statement */}
            <motion.h3 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="font-bold tracking-tighter text-[var(--color-heading)] leading-[1.1] mb-16"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
            >
              FOCUSED ON SCALABLE SOFTWARE AND CLOUD ARCHITECTURE.
            </motion.h3>

            {/* Education Section */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="group p-6 -mx-6 rounded-lg transition-all hover:bg-[var(--color-bg)] hover:shadow-[0_4px_30px_rgba(0,0,0,0.02)] border border-transparent hover:border-[var(--color-border)]"
            >
              <p className="font-mono text-sm tracking-widest text-[var(--color-accent)] font-semibold mb-6 uppercase">
                EDUCATION
              </p>
              <div className="flex flex-col gap-2">
                <h4 className="text-xl md:text-2xl font-bold text-[var(--color-heading)] tracking-tight">
                  B.TECH INFORMATION TECHNOLOGY
                </h4>
                <p className="text-[var(--color-primary)] font-medium md:text-lg">
                  V.S.B College of Engineering Technical Campus, Coimbatore
                </p>
                <p className="font-mono text-sm mt-3 text-[var(--color-secondary)]">
                  CGPA: 8.3 / 10 <span className="hidden md:inline mx-3 text-[var(--color-soft-border)]">|</span> <br className="md:hidden" /> Expected Graduation: 2027
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
