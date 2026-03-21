"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Download, CheckCircle2, ShieldCheck, CreditCard } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-primary text-primary-foreground border-0">
            Offre de lancement
          </Badge>
          
          <h2 className="text-3xl font-bold md:text-5xl mb-6 text-balance">
            Prêt à faire exploser votre taux d&apos;occupation ?
          </h2>
          
          <p className="text-lg text-background/80 mb-8 max-w-2xl mx-auto">
            Rejoignez les centaines d&apos;hôtes qui ont transformé leur activité Airbnb. 
            Téléchargez votre guide maintenant et commencez à voir des résultats dès cette semaine.
          </p>
          
          {/* Price */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-2xl text-background/50 line-through">29,99€</span>
            <span className="text-5xl font-bold text-primary">19,99€</span>
            <Badge className="bg-accent text-foreground border-0">
              -33%
            </Badge>
          </div>
          
          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
            <div className="flex items-center gap-2 text-background/90">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span>41 pages de contenu</span>
            </div>
            <div className="flex items-center gap-2 text-background/90">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span>Accès immédiat</span>
            </div>
            <div className="flex items-center gap-2 text-background/90">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span>Mises à jour gratuites</span>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="https://gumroad.com/checkout?_gl=1*12s6gao*_ga*OTM4ODA4NDgxLjE3NTI2NzM2NjY.*_ga_6LJN6D94N6*czE3NTI2NzM2NjYkbzEkZzAkdDE3NTI2NzM2NjYkajYwJGwwJGhw" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto gap-2 text-lg px-10 py-7 bg-primary hover:bg-primary/90">
                <Download className="h-5 w-5" />
                Obtenir mon Guide Airbnb
              </Button>
            </a>
          </div>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 text-xs text-background/60">
            <div className="flex items-center gap-1">
              <ShieldCheck className="h-4 w-4" />
              <span>Paiement sécurisé</span>
            </div>
            <div className="flex items-center gap-1">
              <CreditCard className="h-4 w-4" />
              <span>Visa / Mastercard / PayPal</span>
            </div>
          </div>
        </div>
        
        {/* Free Chapter Form */}
        <div className="mt-16 max-w-xl mx-auto">
          <div className="bg-background/10 backdrop-blur rounded-2xl p-8 border border-background/20">
            <h3 className="text-xl font-semibold mb-2 text-center">
              Recevez un chapitre gratuit
            </h3>
            <p className="text-background/70 text-center mb-6 text-sm">
              Entrez votre email pour recevoir le premier chapitre gratuitement
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <Input 
                type="email" 
                placeholder="votre@email.com"
                className="flex-1 bg-background text-foreground border-0 h-12"
              />
              <Button type="submit" className="h-12 px-6 bg-primary hover:bg-primary/90">
                Recevoir le chapitre
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
