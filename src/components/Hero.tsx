import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden" id="hero">
      {/* Subtle Animated Background Grid Parallax */}
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-[0.04]" 
        style={{ 
          backgroundImage: 'linear-gradient(var(--color-border-grey) 1px, transparent 1px), linear-gradient(90deg, var(--color-border-grey) 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
        animate={{
          backgroundPosition: ['0px 0px', '40px 40px']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-mono text-xs md:text-sm tracking-[0.2em] text-[var(--color-muted-grey)] uppercase mb-6 flex items-center">
              <span>B.Tech Information Technology</span>
              <span className="mx-3 text-[var(--color-border-grey)]">/</span>
              <span>Software Developer</span>
            </p>
            <h1 className="text-[3.5rem] sm:text-7xl md:text-8xl lg:text-[6.5rem] font-bold tracking-tighter leading-[1.05] text-[var(--color-white-main)]">
              BUILDING <br />
              <span className="text-[var(--color-soft-white)]">PRACTICAL SOFTWARE</span> <br />
              WITH JAVA & AWS.
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-[var(--color-light-grey)] max-w-2xl font-light leading-relaxed"
          >
            Information Technology student exploring software development, cloud computing, serverless applications and modern web technologies.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-6 pt-6"
          >
            <a href="#projects" className="bg-[var(--color-white-main)] text-[var(--color-near-black)] px-8 py-4 font-semibold tracking-wide hover:bg-[var(--color-soft-white)] transition-colors inline-flex items-center gap-2">
              VIEW PROJECTS →
            </a>
            <a href="#contact" className="border border-[var(--color-border-grey)] bg-[var(--color-dark-grey)] text-[var(--color-white-main)] px-8 py-4 font-semibold tracking-wide hover:bg-[var(--color-surface-grey)] transition-colors inline-flex items-center gap-2 group">
              LET'S CONNECT <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 perspective-1000"
        >
          <motion.div 
            className="border border-[var(--color-border-grey)] bg-[var(--color-dark-grey)]/40 p-6 font-mono text-xs md:text-sm text-[var(--color-muted-grey)] backdrop-blur-md shadow-2xl relative overflow-hidden"
            whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-white-main)]/10" />
            
            <div className="flex justify-between border-b border-[var(--color-border-grey)] pb-4 mb-5">
              <span className="text-[var(--color-white-main)] font-semibold tracking-widest">ABINAYA.P</span>
              <span className="tracking-widest">STATUS</span>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center group">
                <span>AVAILABLE</span> 
                <span className="text-[var(--color-white-main)] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-white-main)] animate-pulse" />
                  TRUE
                </span>
              </div>
              <div className="flex justify-between items-center group">
                <span>RUNTIME</span> 
                <span className="text-[var(--color-light-grey)] group-hover:text-[var(--color-white-main)] transition-colors">JAVA</span>
              </div>
              <div className="flex justify-between items-center group">
                <span>CLOUD</span> 
                <span className="text-[var(--color-light-grey)] group-hover:text-[var(--color-white-main)] transition-colors">AWS</span>
              </div>
              <div className="flex justify-between items-center group">
                <span>DATABASE</span> 
                <span className="text-[var(--color-light-grey)] group-hover:text-[var(--color-white-main)] transition-colors">SQL</span>
              </div>
              <div className="flex justify-between items-center group">
                <span>WEB</span> 
                <span className="text-[var(--color-light-grey)] group-hover:text-[var(--color-white-main)] transition-colors">HTML / CSS / JS</span>
              </div>
              <div className="flex justify-between items-center group">
                <span>LOCATION</span> 
                <span className="text-[var(--color-light-grey)] group-hover:text-[var(--color-white-main)] transition-colors">COIMBATORE</span>
              </div>
            </div>
            
            <div className="mt-5 pt-4 border-t border-[var(--color-border-grey)] flex justify-between items-center">
              <span className="tracking-widest">SYSTEM</span>
              <span className="text-[var(--color-white-main)] animate-pulse">READY _</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
