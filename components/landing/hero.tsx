"use client"

import Image from "next/image"
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
              <a href="https://gumroad.com/checkout?_gl=1*17ckwf7*_ga*MTg1MTA0ODgyNS4xNzU1NjE2OTQ5*_ga_6LJN6D94N6*czE3NzQxMzUyNTQkbzUkZzEkdDE3NzQxMzU2MTMkajkkbDAkaDA." target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full sm:w-auto gap-2 text-base px-8 py-6">
                  <Download className="h-5 w-5" />
                  Acheter maintenant - 19,99€
                </Button>
              </a>
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
          
          {/* Right Content - Featured Image */}
          <div className="relative flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Price Tag */}
              <div className="absolute -left-4 -top-4 z-10 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                <div className="text-center">
                  <span className="text-xs font-medium">Seulement</span>
                  <div className="text-xl font-bold">19,99€</div>
                </div>
              </div>
              
              {/* Main Image */}
              <div className="relative h-[400px] w-[300px] md:h-[480px] md:w-[400px] rounded-2xl shadow-2xl overflow-hidden border border-border">
                <Image
                  src="https://images.pexels.com/photos/2029731/pexels-photo-2029731.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Chambre Airbnb élégante et accueillante"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay with book info */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-card">
                  <Badge className="mb-3 bg-primary text-primary-foreground border-0">
                    Guide Complet
                  </Badge>
                  <h2 className="text-xl font-bold md:text-2xl mb-2">
                    Guide pour les Hôtes Airbnb
                  </h2>
                  <p className="text-sm text-card/80">
                    41 pages de conseils pratiques pour devenir Superhôte
                  </p>
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
