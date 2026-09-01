import { motion } from 'framer-motion';

export function Skills() {
  const skills = [
    { name: "Java", category: "LANGUAGE", description: ["Programming language", "Application development"] },
    { name: "HTML / CSS", category: "WEB", description: ["Markup & Styling", "Responsive design"] },
    { name: "JavaScript", category: "WEB", description: ["Interactive elements", "Client-side logic"] },
    { name: "AWS", category: "CLOUD", description: ["Cloud platform", "Serverless infrastructure"] },
    { name: "SQL", category: "DATABASE", description: ["Relational database", "Data management"] },
    { name: "Git", category: "TOOLS", description: ["Version control", "Code collaboration"] },
  ];

  return (
    <section className="bg-[var(--color-white)] border-y border-[var(--color-soft-border)]" style={{ padding: 'var(--section-padding) 0' }} id="skills">
      <div className="mx-auto" style={{ maxWidth: 'var(--container-max)', paddingInline: 'var(--page-padding)' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-sm tracking-widest text-[var(--color-accent)] uppercase mb-4 font-semibold">
            04 — TECHNOLOGY
          </p>
          <h2 
            className="font-bold tracking-tighter text-[var(--color-heading)] max-w-3xl leading-tight"
            style={{ fontSize: 'var(--section-heading)', textWrap: 'balance' }}
          >
            TOOLS I USE <br />
            TO TURN IDEAS <br />
            INTO SOFTWARE.
          </h2>
        </motion.div>

        <div className="grid gap-px bg-[var(--color-soft-border)] border border-[var(--color-soft-border)]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
          {skills.map((skill, i) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[var(--color-bg)] p-6 md:p-8 min-h-[200px] md:min-h-[240px] group hover:bg-[var(--color-white)] transition-colors duration-300 relative overflow-hidden flex flex-col justify-start"
            >
              <div className="absolute top-0 left-0 w-0 h-1 bg-[var(--color-accent)] group-hover:w-full transition-all duration-500 ease-out" />
              
              <div>
                <div className="font-mono text-[10px] tracking-widest text-[var(--color-muted)] mb-8 font-semibold">
                  {skill.category}
                </div>
                <h3 className="text-xl font-bold text-[var(--color-heading)] mb-4 transform group-hover:-translate-y-1 transition-transform duration-300">
                  {skill.name}
                </h3>
              </div>
              
              {/* Hover Description Reveal */}
              <div className="mt-auto pt-4 relative">
                <div className="absolute top-0 left-0 h-px bg-[var(--color-accent)] w-0 group-hover:w-8 transition-all duration-500 delay-100" />
                <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150 mt-4 flex flex-col gap-1">
                  {skill.description.map((line, j) => (
                    <p key={j} className="text-xs text-[var(--color-secondary)] font-medium leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
