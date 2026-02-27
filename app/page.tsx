import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { ProjectCards } from "@/components/project-cards"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <ProjectCards />
      </main>
      <Footer />
    </>
  )
}
