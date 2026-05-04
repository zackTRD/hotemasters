import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10">
              <Image
                src="/logo.png"
                alt="HOTEMASTER Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} HOTEMASTER. Tous droits réservés.
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
