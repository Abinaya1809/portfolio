export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border-grey)] pt-16 pb-8 bg-[var(--color-near-black)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[var(--color-soft-white)]">ABINAYA P.</h2>
          <div className="space-y-1 text-[var(--color-muted-grey)]">
            <p>B.Tech Information Technology</p>
            <p>Software Developer</p>
            <p className="mt-2 text-sm">Java · AWS · SQL · Web Development</p>
          </div>
        </div>
        
        <div className="flex flex-col items-start md:items-end space-y-4 text-sm text-[var(--color-muted-grey)]">
          <div className="flex gap-6">
            <a href="#" className="hover:text-[var(--color-white-main)] transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-[var(--color-white-main)] transition-colors">GitHub</a>
            <a href="mailto:abinayalmmhs.123@gmail.com" className="hover:text-[var(--color-white-main)] transition-colors">Email</a>
          </div>
          <div className="flex gap-4">
            <span>Tamil · English</span>
          </div>
          <p>© 2026 Abinaya P.</p>
        </div>
      </div>
    </footer>
  );
}
