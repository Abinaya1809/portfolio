import { motion } from 'framer-motion';

export function Experience() {
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
    <section className="py-24 md:py-32 bg-[var(--color-near-black)]" id="experience">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="font-mono text-sm tracking-widest text-[var(--color-muted-grey)] uppercase mb-4">
            02 — EXPERIENCE
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-[var(--color-white-main)] max-w-3xl leading-tight">
            LEARNING BY <br />
            BUILDING.
          </h2>
        </motion.div>

        <div className="relative border-l border-[var(--color-border-grey)] ml-4 md:ml-8 space-y-24">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-8 md:pl-16"
            >
              {/* Timeline Node */}
              <div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] bg-[var(--color-white-main)] rotate-45" />
              
              <div className="font-mono text-sm tracking-widest text-[var(--color-muted-grey)] flex items-center gap-4 mb-4">
                <span>{exp.id}</span>
                <span className="w-8 h-px bg-[var(--color-border-grey)]" />
                <span className="text-[var(--color-light-grey)]">DEPLOYED</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-white-main)] tracking-tight mb-2">
                {exp.title}
              </h3>
              <p className="text-[var(--color-muted-grey)] mb-8 font-mono text-sm">
                {exp.company}
              </p>

              <ul className="space-y-4 mb-8 text-[var(--color-light-grey)] font-light list-none">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[var(--color-muted-grey)] mt-1.5 opacity-50">▹</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                {exp.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="border border-[var(--color-border-grey)] bg-[var(--color-dark-grey)]/50 px-3 py-1 font-mono text-xs text-[var(--color-soft-white)]"
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
