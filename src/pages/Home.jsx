import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import Projects from '../components/Projects.jsx'
import Skills from '../components/Skills.jsx'
import Contact from '../components/Contact.jsx'
import Tryhackme from '../components/Tryhackme.jsx'
import { Reports } from '../components/Reports.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Tryhackme />
        <Reports />
        {/* <Experience /> */}
        <Contact />
      </main>
      {/* <Footer /> */}
    </>
  )
}
