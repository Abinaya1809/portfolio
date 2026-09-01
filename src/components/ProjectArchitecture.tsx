import { motion } from 'framer-motion';

export function ServerlessArchitecture() {
  return (
    <div className="w-full h-full min-h-[400px] border border-[var(--color-border-grey)] bg-[var(--color-dark-grey)]/20 p-6 md:p-12 flex flex-col items-center justify-center relative group overflow-hidden">
      
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-surface-grey)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Animated Data Packets (Glowing Line) */}
      <motion.div 
        className="absolute w-0.5 h-16 bg-gradient-to-b from-transparent via-[var(--color-white-main)] to-transparent opacity-0 group-hover:opacity-80 z-0"
        initial={{ top: '-20%' }}
        animate={{ top: '120%' }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
      />

      <div className="flex flex-col items-center z-10 w-full max-w-[280px] sm:max-w-sm">
        {['USER', 'FRONTEND', 'API GATEWAY', 'AWS LAMBDA', 'DYNAMODB'].map((node, i) => (
          <div key={node} className="w-full flex flex-col items-center">
            <motion.div 
              className="w-full border border-[var(--color-border-grey-dark)] bg-[var(--color-near-black)] py-3.5 px-6 text-center font-mono text-sm tracking-widest text-[var(--color-muted-grey)] group-hover:border-[var(--color-light-grey)] group-hover:text-[var(--color-white-main)] group-hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-500 relative overflow-hidden"
              style={{
                backgroundColor: node === 'AWS LAMBDA' ? 'var(--color-black-main)' : 'var(--color-near-black)'
              }}
            >
              {/* Highlight on Lambda */}
              {node === 'AWS LAMBDA' && (
                <div className="absolute top-0 left-0 w-full h-full bg-[var(--color-surface-grey)]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              )}
              <span className="relative z-10">{node}</span>
            </motion.div>
            
            {i < 4 && (
              <div className="h-7 w-px bg-[var(--color-border-grey)] group-hover:bg-[var(--color-medium-grey)] transition-colors duration-500 my-1.5 relative">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 border-b border-r border-[var(--color-border-grey)] group-hover:border-[var(--color-medium-grey)] rotate-45 transform origin-center transition-colors duration-500" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function FileOrganizerWorkflow() {
  return (
    <div className="w-full h-full min-h-[400px] border border-[var(--color-border-grey)] bg-[var(--color-dark-grey)]/20 p-6 md:p-12 flex flex-col items-center justify-center relative group overflow-hidden">
      
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-surface-grey)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Animated Data Packets (Glowing Line) */}
      <motion.div 
        className="absolute w-0.5 h-16 bg-gradient-to-b from-transparent via-[var(--color-white-main)] to-transparent opacity-0 group-hover:opacity-80 z-0"
        initial={{ top: '-20%' }}
        animate={{ top: '85%' }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
      />

      <div className="flex flex-col items-center z-10 w-full max-w-[280px] sm:max-w-sm">
        
        {['MESSY DIRECTORY', 'JAVA FILE SCANNER', 'FILE TYPE DETECTION', 'CATEGORIZATION'].map((node) => (
          <div key={node} className="w-full flex flex-col items-center">
            <motion.div 
              className="w-full border border-[var(--color-border-grey-dark)] bg-[var(--color-near-black)] py-3.5 px-6 text-center font-mono text-sm tracking-widest text-[var(--color-muted-grey)] group-hover:border-[var(--color-light-grey)] group-hover:text-[var(--color-white-main)] group-hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-500 relative overflow-hidden"
              style={{
                backgroundColor: node.includes('JAVA') ? 'var(--color-black-main)' : 'var(--color-near-black)'
              }}
            >
              {node.includes('JAVA') && (
                <div className="absolute top-0 left-0 w-full h-full bg-[var(--color-surface-grey)]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              )}
              <span className="relative z-10">{node}</span>
            </motion.div>
            
            <div className="h-7 w-px bg-[var(--color-border-grey)] group-hover:bg-[var(--color-medium-grey)] transition-colors duration-500 my-1.5 relative">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 border-b border-r border-[var(--color-border-grey)] group-hover:border-[var(--color-medium-grey)] rotate-45 transform origin-center transition-colors duration-500" />
            </div>
          </div>
        ))}

        <div className="w-full border border-[var(--color-border-grey-dark)] bg-[var(--color-near-black)] p-5 group-hover:border-[var(--color-light-grey)] group-hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-500 relative overflow-hidden">
          <p className="text-center font-mono text-xs tracking-widest text-[var(--color-muted-grey)] group-hover:text-[var(--color-white-main)] mb-5 transition-colors relative z-10">ORGANIZED FILES</p>
          <div className="flex justify-center gap-2 sm:gap-4 flex-wrap relative z-10">
            {['/Images', '/Documents', '/Videos'].map((folder) => (
              <motion.div 
                key={folder}
                className="border border-[var(--color-border-grey-dark)] bg-[var(--color-black-main)] px-3 py-1.5 font-mono text-[10px] sm:text-xs tracking-widest text-[var(--color-muted-grey)] group-hover:border-[var(--color-medium-grey)] group-hover:text-[var(--color-soft-white)] transition-colors cursor-default"
                whileHover={{ y: -2, backgroundColor: 'var(--color-border-grey)' }}
              >
                {folder}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
