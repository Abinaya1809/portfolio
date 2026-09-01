import { motion } from 'framer-motion';
import { ServerlessArchitecture, DisasterRecoveryWorkflow, ExpenseTrackerWorkflow } from './ProjectArchitecture';
import { MagneticButton } from './MagneticButton';

export function Projects() {
  const projects = [
    {
      id: "01",
      title: "SERVERLESS FEEDBACK COLLECTION SYSTEM",
      category: "AWS / SERVERLESS",
      description: "A serverless web application to collect user feedback using AWS Lambda and API Gateway, with DynamoDB providing scalable data storage and retrieval.",
      tech: ["AWS Lambda", "API Gateway", "DynamoDB", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Abinaya1809/Serverless-Feedback-Collection-System",
      Visual: ServerlessArchitecture
    },
    {
      id: "02",
      title: "DISASTER RECOVERY VAULT",
      category: "CLOUD / DISASTER RECOVERY",
      description: "A secure cloud infrastructure project demonstrating reliable backup workflows, resilient data storage, and automated recovery processes for business continuity.",
      tech: ["Cloud Storage", "Backend API", "Disaster Recovery", "Web Architecture"],
      github: "https://github.com/Abinaya1809/Disaster-Recovery-Vault",
      Visual: DisasterRecoveryWorkflow
    },
    {
      id: "03",
      title: "EXPENSE TRACKER",
      category: "WEB APPLICATION",
      description: "A web application that simplifies financial management by providing an intuitive interface to input expenses, categorize spending, and track overall summaries.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Abinaya1809/expense-tracker",
      Visual: ExpenseTrackerWorkflow
    }
  ];

  return (
    <section className="bg-[var(--color-bg)]" style={{ padding: 'var(--section-padding) 0' }} id="projects">
      <div className="mx-auto" style={{ maxWidth: 'var(--container-max)', paddingInline: 'var(--page-padding)' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <p className="font-mono text-sm tracking-widest text-[var(--color-accent)] font-semibold uppercase mb-4">
            03 — SELECTED WORK
          </p>
          <h2 
            className="font-bold tracking-tighter text-[var(--color-heading)] max-w-3xl leading-tight"
            style={{ fontSize: 'var(--section-heading)', textWrap: 'balance' }}
          >
            THINGS <br />
            I'VE BUILT.
          </h2>
        </motion.div>

        <div className="space-y-32 md:space-y-48">
          {projects.map((project, index) => (
            <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center group/project">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.15 } }
                }}
                className={`lg:col-span-5 space-y-8 relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}
              >
                {/* Large Background Number */}
                <motion.div 
                  variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 0.4, x: 0, transition: { duration: 0.8 } } }}
                  className="absolute -top-16 -left-8 text-[8rem] md:text-[12rem] font-bold text-[var(--color-soft-border)] z-0 pointer-events-none select-none tracking-tighter flex items-start group-hover/project:-translate-y-2 group-hover/project:translate-x-2 transition-transform duration-700"
                >
                  {project.id}
                  <span className="w-3 h-3 rounded-full bg-[var(--color-accent)] mt-10 md:mt-16 ml-1" />
                </motion.div>

                <motion.div 
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                  className="relative z-10 group-hover/project:-translate-y-1 transition-transform duration-500"
                >
                  <div className="font-mono text-sm tracking-widest text-[var(--color-muted)] mb-4 flex items-center gap-4">
                    <span className="text-[var(--color-accent)] font-semibold">PROJECT {project.id}</span>
                    <span className="w-8 h-px bg-[var(--color-border)]" />
                    <span className="font-medium text-[var(--color-primary)]">{project.category}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-heading)] tracking-tight leading-tight mb-6">
                    {project.title}
                  </h3>
                  <p className="text-lg text-[var(--color-secondary)] font-light leading-relaxed">
                    {project.description}
                  </p>
                </motion.div>

                <motion.div 
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                  className="space-y-4 relative z-10"
                >
                  <h4 className="font-mono text-xs tracking-widest text-[var(--color-muted)] font-semibold uppercase">TECHNOLOGY STACK</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="border border-[var(--color-border)] bg-[var(--color-white)] px-3 py-1 font-mono text-xs text-[var(--color-primary)] font-medium hover:border-[var(--color-accent)] transition-colors cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <motion.div 
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                  className="pt-6 relative z-10 flex flex-wrap gap-4"
                >
                  <MagneticButton href="#" className="group inline-flex items-center gap-3 text-[var(--color-heading)] font-semibold tracking-widest text-sm hover:text-[var(--color-accent)] transition-colors pt-3">
                    <span className="relative">
                      VIEW PROJECT
                      <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[var(--color-heading)] group-hover:bg-[var(--color-accent)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                    </span>
                    <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                  </MagneticButton>
                  <MagneticButton 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group inline-flex items-center gap-2 border border-[var(--color-graphite)]/20 bg-[var(--color-white)] text-[var(--color-heading)] px-5 py-2.5 font-semibold tracking-widest text-sm hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-[0_4px_20px_rgba(176,141,87,0.15)]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-heading)] group-hover:text-[var(--color-accent)] transition-colors"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    GITHUB
                    <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ml-1">↗</span>
                  </MagneticButton>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`lg:col-span-7 h-full w-full ${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <div className="w-full h-full max-w-full overflow-hidden group-hover/project:shadow-[0_30px_80px_rgba(0,0,0,0.04)] group-hover/project:border-[var(--color-accent)]/30 transition-all duration-700 rounded-sm">
                  <project.Visual />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
