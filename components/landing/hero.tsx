"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Download, BookOpen } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/20 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 border-0">
              Nouveau : Le Guide Ultime pour les Propriétaires
            </Badge>
            
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              Transformez votre annonce en une machine à{" "}
              <span className="text-primary">réservations 5 étoiles</span>
            </h1>
            
            <p className="mb-8 text-lg text-muted-foreground md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Maîtrisez l&apos;art de l&apos;hospitalité, optimisez vos tarifs et obtenez le statut de{" "}
              <strong className="text-foreground">Superhôte</strong> grâce aux stratégies éprouvées de ce guide complet.
            </p>
            
            <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start justify-center">
              <Button size="lg" className="w-full sm:w-auto gap-2 text-base px-8 py-6">
                <Download className="h-5 w-5" />
                Acheter maintenant - 19,99€
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 text-base px-8 py-6">
                <BookOpen className="h-5 w-5" />
                Lire un extrait gratuit
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="ml-1 font-medium">4.9/5</span>
              </div>
              <span className="hidden sm:inline">|</span>
              <span className="hidden sm:inline">+500 hôtes satisfaits</span>
            </div>
          </div>
          
          {/* Right Content - Book Mockup */}
          <div className="relative flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Price Tag */}
              <div className="absolute -left-4 -top-4 z-10 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                <div className="text-center">
                  <span className="text-xs font-medium">Seulement</span>
                  <div className="text-xl font-bold">19,99€</div>
                </div>
              </div>
              
              {/* Book Cover */}
              <div className="relative h-[400px] w-[300px] md:h-[480px] md:w-[360px] rounded-lg bg-card shadow-2xl overflow-hidden border border-border">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10" />
                <div className="relative h-full w-full flex flex-col items-center justify-center p-8 text-center">
                  {/* Airbnb-style icon */}
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <svg viewBox="0 0 24 24" className="h-10 w-10 text-primary" fill="currentColor">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.5 17.5c-.5.8-1.1 1.5-1.9 1.9-.8.5-1.8.6-2.8.3-1-.3-2.1-1-3.2-2.2-1.1-1.2-2.4-3-4-5.3C4 9.9 3.2 8 3 6.9c-.3-1.1-.2-2 .3-2.8.5-.8 1.1-1.5 1.9-1.9.8-.5 1.8-.6 2.8-.3 1 .3 2.1 1 3.2 2.2 1.1 1.2 2.4 3 4 5.3 1.6 2.3 2.4 4.2 2.6 5.3.3 1.1.2 2-.3 2.8z"/>
                    </svg>
                  </div>
                  
                  <h2 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
                    Guide pour les Hôtes Airbnb
                  </h2>
                  <p className="mb-6 text-muted-foreground">
                    Le guide complet pour devenir Superhôte
                  </p>
                  
                  {/* Chapter icons */}
                  <div className="grid grid-cols-3 gap-3">
                    {["Superhôte", "Tarification", "Avis"].map((item) => (
                      <div key={item} className="flex flex-col items-center gap-1">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/50">
                          <Star className="h-5 w-5 text-foreground" />
                        </div>
                        <span className="text-xs text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-auto pt-6">
                    <Badge variant="secondary" className="bg-accent text-foreground">
                      41 pages d&apos;expertise
                    </Badge>
                  </div>
                </div>
              </div>
              
              {/* Superhost Badge */}
              <div className="absolute -bottom-4 -right-4 z-10 flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-lg border border-border">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                  <Star className="h-4 w-4 fill-primary-foreground text-primary-foreground" />
                </div>
                <span className="font-semibold text-foreground">Superhôte</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
    </section>
  )
}
