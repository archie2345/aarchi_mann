export function Footer() {
  return (
    <footer className="px-6 pb-10 pt-20 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-sm text-foreground">Aarchi Mann</p>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="mailto:aarchi.mann@sydney.edu.au"
              className="text-xs text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/aarchi-mann-609921237"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/archie2345"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              GitHub
            </a>
            <span className="text-xs text-muted-foreground">
              Designed & built by Aarchi
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
