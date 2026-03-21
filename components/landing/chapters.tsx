"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"

const chapters = [
  {
    number: "01",
    title: "Comment Devenir un Superhôte",
    description: "Découvrez les critères exacts d'Airbnb et les stratégies pour obtenir et maintenir ce statut prestigieux.",
    topics: [
      "Les 4 critères essentiels du Superhôte",
      "Gestion du taux de réponse à 90%",
      "Stratégies pour éviter les annulations",
      "Obtenir des évaluations 5 étoiles"
    ]
  },
  {
    number: "02",
    title: "Les Types d'Hôtes",
    description: "Comprenez les différences entre Hôte Principal, Co-hôte et Gestionnaire pour choisir le rôle qui vous convient.",
    topics: [
      "Responsabilités de l'Hôte Principal",
      "Avantages et inconvénients du Co-hôte",
      "Quand faire appel à un Gestionnaire",
      "Choisir le bon modèle pour vous"
    ]
  },
  {
    number: "03",
    title: "Optimiser son Annonce Airbnb",
    description: "Créez une annonce irrésistible qui convertit les visiteurs en réservations.",
    topics: [
      "Créer un titre accrocheur",
      "Rédiger une description persuasive",
      "Photos de haute qualité",
      "Optimisation SEO de l'annonce"
    ]
  },
  {
    number: "04",
    title: "Fixer le Bon Tarif",
    description: "Maîtrisez l'art de la tarification pour maximiser vos revenus tout au long de l'année.",
    topics: [
      "Analyse du marché local",
      "Tarification dynamique et saisonnière",
      "Psychologie des prix",
      "Offres promotionnelles stratégiques"
    ]
  },
  {
    number: "05",
    title: "Gestion des Commentaires",
    description: "Transformez chaque avis en opportunité de croissance pour votre activité.",
    topics: [
      "Répondre aux commentaires positifs",
      "Gérer les avis négatifs avec élégance",
      "Obtenir plus de commentaires",
      "Éviter les erreurs courantes"
    ]
  },
  {
    number: "06",
    title: "Optimiser l'Expérience des Invités",
    description: "Créez des séjours mémorables qui génèrent des recommandations et des retours.",
    topics: [
      "Communication avant l'arrivée",
      "Accueil et première impression",
      "Équipements de qualité",
      "Service après-départ"
    ]
  }
]

export function Chapters() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Content */}
          <div className="lg:w-1/3">
            <Badge className="mb-4 bg-accent text-foreground border-0">
              Sommaire complet
            </Badge>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
              41 pages d&apos;expertise pure
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Un guide structuré en 6 chapitres couvrant tous les aspects essentiels pour réussir sur Airbnb, de débutant à Superhôte.
            </p>
            <div className="hidden lg:block">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Mise à jour 2024</p>
                  <p className="text-sm text-muted-foreground">Dernières stratégies Airbnb</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Accordion */}
          <div className="lg:w-2/3">
            <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
              {chapters.map((chapter, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50">
                  <AccordionTrigger className="hover:no-underline py-6 group">
                    <div className="flex items-center gap-4 text-left">
                      <span className="text-3xl font-bold text-primary/40 group-hover:text-primary transition-colors">
                        {chapter.number}
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {chapter.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1 hidden sm:block">
                          {chapter.description}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="text-muted-foreground mb-4 sm:hidden">
                      {chapter.description}
                    </p>
                    <ul className="grid gap-2 sm:grid-cols-2 ml-16">
                      {chapter.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
