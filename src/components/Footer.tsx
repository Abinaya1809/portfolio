export function Footer() {
  return (
    <footer className="border-t border-[var(--color-dark-surface)] pb-8 bg-[var(--color-graphite)] relative" style={{ paddingTop: 'var(--section-padding)' }}>
      <div className="absolute top-0 left-12 w-8 h-[2px] bg-[var(--color-accent)]" />
      <div className="mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12" style={{ maxWidth: 'var(--container-max)', paddingInline: 'var(--page-padding)' }}>
        <div className="space-y-4">
          <h2 className="font-bold tracking-tighter text-[var(--color-white)]" style={{ fontSize: 'var(--section-heading)' }}>ABINAYA P.</h2>
          <div className="space-y-1 text-[var(--color-border)]">
            <p className="font-medium">B.Tech Information Technology</p>
            <p>Software Developer</p>
            <p className="mt-2 text-sm text-[var(--color-muted)] font-mono tracking-widest">JAVA · AWS · SQL · WEB</p>
          </div>
        </div>
        
        <div className="flex flex-col items-start md:items-end space-y-4 text-sm text-[var(--color-muted)]">
          <div className="flex gap-6 font-semibold tracking-widest text-xs">
            <a href="https://www.linkedin.com/in/abinaya-p-16a073337/" target="_blank" rel="noreferrer" className="hover:text-[var(--color-accent)] transition-colors">LINKEDIN</a>
            <a href="https://github.com/Abinaya1809" target="_blank" rel="noreferrer" className="hover:text-[var(--color-accent)] transition-colors">GITHUB</a>
            <a href="mailto:abinayalmmhs.123@gmail.com" className="hover:text-[var(--color-accent)] transition-colors">EMAIL</a>
          </div>
          <div className="flex gap-4 font-mono">
            <span>TAMIL · ENGLISH</span>
          </div>
          <p className="font-mono text-[var(--color-secondary)]">© 2026 Abinaya P.</p>
        </div>
      </div>
    </footer>
  );
}
