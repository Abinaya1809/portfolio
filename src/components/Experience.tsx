import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const experiences = [
    {
      id: "01",
      title: "WEB DEVELOPMENT INTERN",
      company: "Profenna Infotech — Coimbatore",
      responsibilities: [
        "Developed and modified web pages using HTML and CSS",
        "Improved structure and responsiveness",
        "Performed testing and debugging",
        "Identified and fixed UI and functionality issues",
        "Collaborated with team members",
        "Understood project requirements and development workflows"
      ],
      tags: ["HTML", "CSS", "Testing", "Debugging"]
    },
    {
      id: "02",
      title: "CLOUD COMPUTING INTERN",
      company: "Cognifyz IT Solutions Pvt. Ltd. — Coimbatore",
      responsibilities: [
        "Gained hands-on exposure to cloud computing concepts",
        "Worked with basic cloud services",
        "Assisted with assigned tasks",
        "Documented project progress",
        "Participated in team discussions",
        "Contributed to task execution"
      ],
      tags: ["AWS", "Cloud Computing", "Documentation"]
    }
  ];

  return (
    <section className="bg-[var(--color-bg)]" style={{ padding: 'var(--section-padding) 0' }} id="experience">
      <div className="mx-auto" style={{ maxWidth: 'var(--container-max)', paddingInline: 'var(--page-padding)' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="font-mono text-sm tracking-widest text-[var(--color-accent)] font-semibold uppercase mb-4">
            02 — EXPERIENCE
          </p>
          <h2 
            className="font-bold tracking-tighter text-[var(--color-heading)] max-w-3xl leading-tight"
            style={{ fontSize: 'var(--section-heading)', textWrap: 'balance' }}
          >
            LEARNING BY <br />
            BUILDING.
          </h2>
        </motion.div>

        <div ref={containerRef} className="relative ml-4 md:ml-8 space-y-24 pb-8">
          {/* Static Background Line */}
          <div className="absolute top-0 bottom-0 left-0 w-px bg-[var(--color-border)]" />
          
          {/* Animated Champagne Line */}
          <motion.div 
            className="absolute top-0 left-0 w-px bg-[var(--color-accent)] origin-top z-10" 
            style={{ height: lineHeight }} 
          />

          {experiences.map((exp) => (
            <motion.div 
              key={exp.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-20% 0px -50% 0px" }}
              variants={{
                hidden: { opacity: 0.5, x: -10 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
              }}
              className="relative pl-8 md:pl-16 group"
            >
              {/* Timeline Node */}
              <motion.div 
                variants={{
                  hidden: { backgroundColor: "var(--color-border)", scale: 1 },
                  visible: { backgroundColor: "var(--color-accent)", scale: 1.2 }
                }}
                className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rotate-45 z-20 group-hover:scale-125 transition-transform" 
              />
              
              <div className="font-mono text-sm tracking-widest text-[var(--color-muted)] flex items-center gap-4 mb-4">
                <span className="group-hover:text-[var(--color-accent)] transition-colors">{exp.id}</span>
                <span className="w-8 h-px bg-[var(--color-border)]" />
                <span className="text-[var(--color-secondary)]">DEPLOYED</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-heading)] tracking-tight mb-2">
                {exp.title}
              </h3>
              <p className="text-[var(--color-primary)] font-medium mb-8 font-mono text-sm">
                {exp.company}
              </p>

              <ul className="space-y-4 mb-8 text-[var(--color-secondary)] font-light list-none">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[var(--color-accent)] mt-1.5 opacity-80">▹</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                {exp.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="border border-[var(--color-border)] bg-[var(--color-white)] px-3 py-1 font-mono text-xs text-[var(--color-primary)] font-medium hover:border-[var(--color-accent)] transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
