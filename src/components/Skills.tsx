import { motion } from 'framer-motion';

export function Skills() {
  const skills = [
    { name: "Java", category: "LANGUAGE", description: "Core programming language for backend and automation" },
    { name: "HTML", category: "WEB", description: "Markup language for web structure" },
    { name: "CSS", category: "WEB", description: "Styling and responsive design" },
    { name: "JavaScript", category: "WEB", description: "Interactive web elements and client-side logic" },
    { name: "AWS", category: "CLOUD", description: "Cloud computing services (Lambda, API Gateway, DynamoDB)" },
    { name: "SQL", category: "DATABASE", description: "Relational database management" },
    { name: "Git", category: "TOOLS", description: "Version control system" },
    { name: "Chrome DevTools", category: "TOOLS", description: "Web debugging and performance testing" }
  ];

  return (
    <section className="py-24 md:py-32 bg-[var(--color-near-black)]" id="skills">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-sm tracking-widest text-[var(--color-muted-grey)] uppercase mb-4">
            04 — TECHNOLOGY
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-[var(--color-white-main)] max-w-3xl leading-tight">
            TOOLS I USE <br />
            TO TURN IDEAS <br />
            INTO SOFTWARE.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-border-grey)] border border-[var(--color-border-grey)]">
          {skills.map((skill, i) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[var(--color-black-main)] p-6 md:p-8 min-h-[200px] group hover:bg-[var(--color-surface-grey)] transition-colors duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-xs tracking-widest text-[var(--color-muted-grey)] mb-6 group-hover:text-[var(--color-light-grey)] transition-colors">
                  {skill.category}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-white-main)] mb-2">
                  {skill.name}
                </h3>
              </div>
              
              {/* Hover Description Reveal */}
              <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 mt-4">
                <p className="text-sm text-[var(--color-light-grey)] font-light leading-snug">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
