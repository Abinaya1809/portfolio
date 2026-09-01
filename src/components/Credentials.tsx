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
    <section className="bg-[var(--color-bg)]" style={{ padding: 'var(--section-padding) 0' }} id="credentials">
      <div className="mx-auto" style={{ maxWidth: 'var(--container-max)', paddingInline: 'var(--page-padding)' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-sm tracking-widest text-[var(--color-accent)] uppercase mb-4 font-semibold">
            05 — CREDENTIALS
          </p>
          <h2 
            className="font-bold tracking-tighter text-[var(--color-heading)] max-w-3xl leading-tight"
            style={{ fontSize: 'var(--section-heading)', textWrap: 'balance' }}
          >
            CERTIFIED. <br />
            CURIOUS. <br />
            BUILDING.
          </h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="flex flex-col border-t border-[var(--color-border)]"
        >
          {credentials.map((cred) => (
            <motion.div
              key={cred.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
              }}
              className={`group flex flex-col md:flex-row md:items-center justify-between py-8 border-b hover:bg-[var(--color-white)] hover:px-6 md:hover:px-8 transition-all duration-300 ${cred.highlight ? 'border-[var(--color-accent)] bg-[var(--color-light-accent)]/30' : 'border-[var(--color-border)]'}`}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 mb-4 md:mb-0 w-full">
                <span className="font-mono text-xl text-[var(--color-muted)] group-hover:text-[var(--color-accent)] group-hover:-translate-y-1 transition-all font-semibold">
                  {cred.id}
                </span>
                <div className="flex-1">
                  <h3 className={`text-lg md:text-2xl font-bold tracking-tight ${cred.highlight ? 'text-[var(--color-heading)]' : 'text-[var(--color-primary)] group-hover:text-[var(--color-heading)] transition-colors'}`}>
                    {cred.title}
                  </h3>
                  <p className="font-mono text-xs md:text-sm text-[var(--color-secondary)] mt-2 uppercase tracking-widest font-medium">
                    {cred.type}
                  </p>
                </div>
              </div>
              <div className="md:opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-[var(--color-accent)] font-semibold tracking-wide text-sm">
                <span>VIEW CREDENTIAL</span>
                <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
