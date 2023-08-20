import HamburguerMenu from "./HamburguerMenu"
import { useState, useEffect} from "react"

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      // Função que atualiza a largura da tela quando a janela for redimensionada
      const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth);
      };
  
      // Adiciona um event listener para o evento de redimensionamento
      window.addEventListener('resize', updateWindowWidth);
  
      // Remove o event listener quando o componente é desmontado
      return () => {
        window.removeEventListener('resize', updateWindowWidth);
      };
    }, []);
  
    useEffect(() => {
      // Verifica se a largura da tela atende ao critério para mostrar o menu
      if (windowWidth <= 850) {
        setShowMenu(true);
      } else setShowMenu(false)
    }, [windowWidth]);

    return(
        <nav className="flex justify-around w-full text-xl bg-[#1E1E1E] font-bold text-lg fixed p-3 top-0 z-10 border-b-2 border-[#00B3FF]">
            <a href="#" className="text-[#00B3FF] hover:scale-125 ease-out duration-300">LucasKaique</a>
            
            <ul className={showMenu ? 'hidden' : "flex list-none justify-evenly gap-10 sm:text-sm"}>
                <li className="hover:scale-125 ease-out duration-300"><a href="#about">Sobre</a></li>
                <li className="hover:scale-125 ease-out duration-300"><a href="#skill">Competências</a></li>
                <li className="hover:scale-125 ease-out duration-300"><a href="#projects">Projetos</a></li>
                <li className="hover:scale-125 ease-out duration-300"><a href="#contact">Contatos</a></li>
            </ul>

            <div className={showMenu ? '' : 'hidden'}>
                <HamburguerMenu />
            </div>
            
        </nav>
    )
}

export default Navbar