import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import SkillSection from './components/SkillSection'
import ProjectSection from './components/ProjectSection'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <SkillSection />
      <ProjectSection />
      <ContactSection />

      <footer className="relative bottom-0 w-[100%] bg-[#00B3FF] text-[#000] font-bold flex justify-evenly items-center py-5 text-xl">
          <p>Portfólio Pessoal</p>
          <p>Copyright © 2023 Lucas Kaique. <br/> Todos os direitos reservados</p>
      </footer>
    </>
  )
}

export default App
