import { motion } from 'framer-motion';

export function Credentials() {
  const credentials = [
    { id: "01", title: "HONOURS DIPLOMA IN COMPUTER APPLICATION", type: "Credential", highlight: false },
    { id: "02", title: "CLOUD COMPUTING — NPTEL (SWAYAM)", type: "Certification", highlight: false },
    { id: "03", title: "ADOBE HACKATHON", type: "Hackathon Certificate", highlight: true },
    { id: "04", title: "TCS CODEVITA", type: "Competitive Programming Certificate", highlight: true },
    { id: "05", title: "WORKSHOP ON ARTIFICIAL INTELLIGENCE & MACHINE LEARNING", type: "Workshop Certificate", highlight: false },
    { id: "06", title: "MASTER CLASS ON POWER BI FOR DATA ANALYTICS", type: "Workshop / Master Class", highlight: false },
    { id: "07", title: "WEBINAR ON JOB READINESS THROUGH WEB TECHNOLOGIES", type: "Webinar", highlight: false }
  ];

  return (
    <section className="py-24 md:py-32 bg-[var(--color-black-main)]" id="credentials">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-sm tracking-widest text-[var(--color-muted-grey)] uppercase mb-4">
            05 — CREDENTIALS
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-[var(--color-white-main)] max-w-3xl leading-tight">
            CERTIFIED. <br />
            CURIOUS. <br />
            BUILDING.
          </h2>
        </motion.div>

        <div className="flex flex-col border-t border-[var(--color-border-grey)]">
          {credentials.map((cred, index) => (
            <motion.div
              key={cred.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`group flex flex-col md:flex-row md:items-center justify-between py-8 border-b hover:bg-[var(--color-surface-grey)] hover:px-6 md:hover:px-8 transition-all duration-300 ${cred.highlight ? 'border-[var(--color-medium-grey)] bg-[var(--color-dark-grey)]/30' : 'border-[var(--color-border-grey)]'}`}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 mb-4 md:mb-0 w-full">
                <span className="font-mono text-xl text-[var(--color-muted-grey)] group-hover:text-[var(--color-white-main)] group-hover:-translate-y-1 transition-all">
                  {cred.id}
                </span>
                <div className="flex-1">
                  <h3 className={`text-lg md:text-2xl font-bold tracking-tight ${cred.highlight ? 'text-[var(--color-white-main)]' : 'text-[var(--color-light-grey)] group-hover:text-[var(--color-white-main)] transition-colors'}`}>
                    {cred.title}
                  </h3>
                  <p className="font-mono text-xs md:text-sm text-[var(--color-muted-grey)] mt-2 uppercase tracking-widest">
                    {cred.type}
                  </p>
                </div>
              </div>
              <div className="md:opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-[var(--color-white-main)] font-semibold tracking-wide text-sm">
                <span>VIEW CREDENTIAL</span>
                <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
