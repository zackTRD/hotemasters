"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Download, CheckCircle2, ShieldCheck, CreditCard, Loader2 } from "lucide-react"
import { useActionState, useEffect } from "react"
import { subscribeToEbook } from "@/lib/actions/ebook"
import { toast } from "sonner"

export function CTA() {
  const [state, action, isPending] = useActionState(subscribeToEbook, null)

  useEffect(() => {
    if (state?.success) {
      toast.success("C'est envoyé ! Vérifiez votre boîte mail.")
    } else if (state?.error) {
      toast.error(state.error)
    }
  }, [state])

  return (
    <section className="py-20 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Book Cover */}
            <div className="lg:w-1/3 flex justify-center">
              <div className="relative h-[300px] w-[220px] md:h-[400px] md:w-[280px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.JPG-KGbjbdhjg3jRYRS2L0kqrELldxaPWx.jpeg"
                  alt="Guide pour les Hôtes Airbnb - Couverture"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* CTA Content */}
            <div className="lg:w-2/3 text-center lg:text-left">
          <Badge className="mb-6 bg-primary text-primary-foreground border-0">
            Offre de lancement
          </Badge>
          
          <h2 className="text-3xl font-bold md:text-5xl mb-6 text-balance">
            Prêt à faire exploser votre taux d&apos;occupation ?
          </h2>
          
          <p className="text-lg text-background/80 mb-8 max-w-2xl mx-auto lg:mx-0">
            Rejoignez les centaines d&apos;hôtes qui ont transformé leur activité Airbnb. 
            Téléchargez votre guide maintenant et commencez à voir des résultats dès cette semaine.
          </p>
          
          {/* Price */}
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
            <span className="text-2xl text-background/50 line-through">29,99€</span>
            <span className="text-5xl font-bold text-primary">19,99€</span>
            <Badge className="bg-accent text-foreground border-0">
              -33%
            </Badge>
          </div>
          
          {/* Features */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10 text-sm">
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
            <a href="https://gumroad.com/checkout?_gl=1*17ckwf7*_ga*MTg1MTA0ODgyNS4xNzU1NjE2OTQ5*_ga_6LJN6D94N6*czE3NzQxMzUyNTQkbzUkZzEkdDE3NzQxMzU2MTMkajkkbDAkaDA." target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto gap-2 text-lg px-10 py-7 bg-primary hover:bg-primary/90">
                <Download className="h-5 w-5" />
                Obtenir mon Guide Airbnb
              </Button>
            </a>
          </div>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-xs text-background/60">
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
            <form action={action} className="flex flex-col sm:flex-row gap-3">
              <Input 
                name="email"
                type="email" 
                placeholder="votre@email.com"
                className="flex-1 bg-background text-foreground border-0 h-12"
                required
                disabled={isPending}
              />
              <Button 
                type="submit" 
                className="h-12 px-6 bg-primary hover:bg-primary/90 min-w-[180px]"
                disabled={isPending}
              >
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  "Recevoir le chapitre"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
