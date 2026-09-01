import { motion } from 'framer-motion';
import { ServerlessArchitecture, FileOrganizerWorkflow } from './ProjectArchitecture';

export function Projects() {
  const projects = [
    {
      id: "01",
      title: "SERVERLESS FEEDBACK COLLECTION SYSTEM",
      category: "AWS / SERVERLESS",
      description: "A serverless web application to collect user feedback using AWS Lambda and API Gateway, with DynamoDB providing scalable data storage and retrieval.",
      tech: ["AWS Lambda", "API Gateway", "DynamoDB", "HTML", "CSS", "JavaScript"],
      Visual: ServerlessArchitecture
    },
    {
      id: "02",
      title: "AUTOMATIC FILE ORGANIZER",
      category: "JAVA / AUTOMATION",
      description: "A Java application that automatically organizes files in a directory based on file type using Java IO and directory management.",
      tech: ["Java"],
      Visual: FileOrganizerWorkflow
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[var(--color-black-main)]" id="projects">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <p className="font-mono text-sm tracking-widest text-[var(--color-muted-grey)] uppercase mb-4">
            03 — SELECTED WORK
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-[var(--color-white-main)] max-w-3xl leading-tight">
            THINGS <br />
            I'VE BUILT.
          </h2>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`lg:col-span-5 space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
              >
                <div>
                  <div className="font-mono text-sm tracking-widest text-[var(--color-muted-grey)] mb-4 flex items-center gap-4">
                    <span>PROJECT {project.id}</span>
                    <span className="w-8 h-px bg-[var(--color-border-grey)]" />
                    <span>{project.category}</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold text-[var(--color-white-main)] tracking-tight leading-tight mb-6">
                    {project.title}
                  </h3>
                  <p className="text-lg text-[var(--color-light-grey)] font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-mono text-sm tracking-widest text-[var(--color-muted-grey)]">TECHNOLOGY STACK</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="border border-[var(--color-border-grey)] px-3 py-1 font-mono text-xs text-[var(--color-soft-white)] hover:border-[var(--color-light-grey)] transition-colors cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <a href="#" className="group inline-flex items-center gap-3 text-[var(--color-white-main)] font-semibold tracking-widest text-sm hover:text-[var(--color-light-grey)] transition-colors">
                    <span className="border-b border-[var(--color-white-main)] group-hover:border-[var(--color-light-grey)] transition-colors pb-0.5">VIEW PROJECT</span>
                    <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                  </a>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`lg:col-span-7 h-full w-full ${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <project.Visual />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
