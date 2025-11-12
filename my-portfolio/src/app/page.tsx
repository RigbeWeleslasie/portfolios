// src/app/page.tsx
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'

// import About from '@/components/About' // You can create this next!
import Skills from '@/components/Skills' // And this!
// import Contact from '@/components/Contact' // And this!

export default function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills/>
      <Contact /> 
    </>
  )
}