import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Grâce au chapitre sur la tarification dynamique, j'ai augmenté mon chiffre d'affaires de 25% en deux mois ! Un investissement qui s'est rentabilisé dès le premier mois.",
    author: "Marc A.",
    role: "Hôte à Paris",
    rating: 5,
    initials: "MA"
  },
  {
    quote: "Le guide indispensable pour ne plus faire d'erreurs de débutant. Je suis passée Superhost en un trimestre grâce aux conseils pratiques et applicables immédiatement.",
    author: "Julie L.",
    role: "Propriétaire de gîte",
    rating: 5,
    initials: "JL"
  },
  {
    quote: "La section sur la gestion des commentaires m'a sauvé ! J'ai appris à transformer les critiques en opportunités d'amélioration. Mes notes ont grimpé à 4.9.",
    author: "Thomas B.",
    role: "Multi-propriétaire",
    rating: 5,
    initials: "TB"
  },
  {
    quote: "Enfin un guide en français qui comprend les spécificités du marché ! Les templates de messages automatisés m'ont fait gagner des heures chaque semaine.",
    author: "Sophie M.",
    role: "Hôte à Lyon",
    rating: 5,
    initials: "SM"
  }
]

export function Testimonials() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
            Ce que disent nos lecteurs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des centaines d&apos;hôtes ont déjà transformé leur activité grâce à ce guide
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                
                <div className="relative mb-6">
                  <Quote className="absolute -left-1 -top-1 h-8 w-8 text-primary/10" />
                  <p className="text-foreground leading-relaxed pl-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 bg-primary/10">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
