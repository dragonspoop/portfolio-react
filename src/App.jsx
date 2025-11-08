import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Tryhackme from './components/Tryhackme.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Tryhackme />
        {/* <Experience /> */}
        <Contact />
      </main>
      {/* <Footer /> */}
    </>
  )
}
