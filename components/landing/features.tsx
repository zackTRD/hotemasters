import { Card, CardContent } from "@/components/ui/card"
import { Star, TrendingUp, MessageSquare, Sparkles, DollarSign, Users } from "lucide-react"

const features = [
  {
    icon: Star,
    title: "Le Secret du Superhôte",
    description: "Comprenez les critères exacts d'Airbnb : taux de réponse, évaluations et volume de séjours pour obtenir ce statut prestigieux."
  },
  {
    icon: TrendingUp,
    title: "SEO & Optimisation d'Annonce",
    description: "Comment rédiger un titre percutant et choisir des photos qui déclenchent le clic et maximisent vos réservations."
  },
  {
    icon: DollarSign,
    title: "Tarification Dynamique",
    description: "Utilisez la psychologie des prix et les outils comme PriceLabs pour ne plus jamais brader vos nuitées."
  },
  {
    icon: Sparkles,
    title: "L'Expérience \"Wow\"",
    description: "De la communication avant l'arrivée au petit cadeau de départ : créez des souvenirs inoubliables pour vos invités."
  },
  {
    icon: MessageSquare,
    title: "Gestion des Commentaires",
    description: "Transformez chaque avis en opportunité et apprenez à gérer les commentaires négatifs avec professionnalisme."
  },
  {
    icon: Users,
    title: "Types d'Hôtes",
    description: "Découvrez les différences entre Hôte Principal, Co-hôte et Gestionnaire pour choisir le rôle qui vous correspond."
  }
]

export function Features() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4 text-balance">
            Ce que vous allez apprendre
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un guide complet couvrant tous les aspects essentiels pour réussir sur Airbnb
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="group border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
