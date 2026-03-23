import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Star, Award, BookOpen, Users } from "lucide-react"

export function Author() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Book Preview Image */}
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative">
              <div className="relative h-[350px] w-[280px] md:h-[450px] md:w-[350px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-47Aikkc3ySizQs6mQWq1QwAk1CNHVf.png"
                  alt="Guide pour les Hôtes Airbnb - Aperçu du livre"
                  fill
                  className="object-contain"
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-lg border border-border">
                <Award className="h-5 w-5 text-primary" />
                <span className="font-semibold text-sm">Expert Airbnb</span>
              </div>
            </div>
          </div>
          
          {/* Author Info */}
          <div className="lg:w-2/3 text-center lg:text-left">
            <Badge className="mb-4 bg-accent text-foreground border-0">
              À propos de l&apos;auteur
            </Badge>
            
            <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-2">
              Bonjour, je suis Zack Bonnet
            </h2>
            
            <p className="text-lg text-primary font-medium mb-6">
              Expert en gestion locative et Superhôte certifié
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Après plusieurs années d&apos;expérience dans la gestion de propriétés Airbnb, 
              j&apos;ai compilé toutes mes connaissances et stratégies dans ce guide complet. 
              Mon objectif ? Vous aider à transformer chaque séjour en un souvenir inoubliable 
              pour vos invités, tout en maximisant vos revenus.
            </p>
            
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mx-auto mb-2">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <p className="font-bold text-foreground">Superhôte</p>
                <p className="text-xs text-muted-foreground">Certifié</p>
              </div>
              <div className="text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mx-auto mb-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <p className="font-bold text-foreground">41 pages</p>
                <p className="text-xs text-muted-foreground">De contenu</p>
              </div>
              <div className="text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mx-auto mb-2">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <p className="font-bold text-foreground">500+</p>
                <p className="text-xs text-muted-foreground">Hôtes formés</p>
              </div>
            </div>
            
            {/* Signature */}
            <div className="mt-8">
              <p className="text-2xl font-script italic text-primary">Zack Bonnet</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
