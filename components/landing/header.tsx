"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Download } from "lucide-react"

const navItems = [
  { label: "Sommaire", href: "#sommaire" },
  { label: "Avantages", href: "#avantages" },
  { label: "Témoignages", href: "#temoignages" },
  { label: "À propos", href: "#auteur" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary-foreground" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.5 17.5c-.5.8-1.1 1.5-1.9 1.9-.8.5-1.8.6-2.8.3-1-.3-2.1-1-3.2-2.2-1.1-1.2-2.4-3-4-5.3C4 9.9 3.2 8 3 6.9c-.3-1.1-.2-2 .3-2.8.5-.8 1.1-1.5 1.9-1.9.8-.5 1.8-.6 2.8-.3 1 .3 2.1 1 3.2 2.2 1.1 1.2 2.4 3 4 5.3 1.6 2.3 2.4 4.2 2.6 5.3.3 1.1.2 2-.3 2.8z" />
              </svg>
            </div>
            <span className="font-bold text-foreground hidden sm:inline">Guide Hôtes Airbnb</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          {/* <div className="hidden md:flex items-center gap-4">
            <Button size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              Télécharger
            </Button>
          </div> */}

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                {/* <Button className="mt-4 gap-2">
                  <Download className="h-4 w-4" />
                  Télécharger
                </Button> */}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
