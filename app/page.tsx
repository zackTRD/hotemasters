import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Stats } from "@/components/landing/stats"
import { Features } from "@/components/landing/features"
import { Chapters } from "@/components/landing/chapters"
import { Testimonials } from "@/components/landing/testimonials"
import { Author } from "@/components/landing/author"
import { CTA } from "@/components/landing/cta"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <section id="avantages">
        <Features />
      </section>
      <section id="sommaire">
        <Chapters />
      </section>
      <section id="temoignages">
        <Testimonials />
      </section>
      <section id="auteur">
        <Author />
      </section>
      <CTA />
      <Footer />
    </main>
  )
}
