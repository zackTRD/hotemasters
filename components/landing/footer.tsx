import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary-foreground" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.5 17.5c-.5.8-1.1 1.5-1.9 1.9-.8.5-1.8.6-2.8.3-1-.3-2.1-1-3.2-2.2-1.1-1.2-2.4-3-4-5.3C4 9.9 3.2 8 3 6.9c-.3-1.1-.2-2 .3-2.8.5-.8 1.1-1.5 1.9-1.9.8-.5 1.8-.6 2.8-.3 1 .3 2.1 1 3.2 2.2 1.1 1.2 2.4 3 4 5.3 1.6 2.3 2.4 4.2 2.6 5.3.3 1.1.2 2-.3 2.8z"/>
              </svg>
            </div>
            <span className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Zack Bonnet. Tous droits réservés.
            </span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Mentions Légales
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Confidentialité
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
