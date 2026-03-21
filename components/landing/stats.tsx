import { Star } from "lucide-react"

const stats = [
  {
    value: "4.9",
    label: "Note moyenne",
    sublabel: "des lecteurs",
    hasStars: true
  },
  {
    value: "98%",
    label: "Lecteurs satisfaits",
    sublabel: "recommandent ce guide"
  },
  {
    value: "500+",
    label: "Hôtes formés",
    sublabel: "grâce à ce guide"
  },
  {
    value: "41",
    label: "Pages de contenu",
    sublabel: "d'expertise pure"
  }
]

export function Stats() {
  return (
    <section className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-4xl font-bold text-primary-foreground md:text-5xl">
                  {stat.value}
                </span>
                {stat.hasStars && (
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                )}
              </div>
              <p className="text-primary-foreground/90 font-medium">{stat.label}</p>
              <p className="text-primary-foreground/70 text-sm">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
