'use client'

import { useState, useEffect} from "react";
import HamburguerMenu from "../HamburguerMenu";
import { useTheme } from "@/context/ThemePovider";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const { theme, setTheme } = useTheme()

    useEffect(() => {
      const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth);
      }

      window.addEventListener('resize', updateWindowWidth)
      return () => {
        window.removeEventListener('resize', updateWindowWidth)
      }
    }, [])
  
    useEffect(() => {
      if (windowWidth <= 850) {
        setShowMenu(true);
      } else setShowMenu(false)
    }, [windowWidth]);

    // useEffect(() => {
    //     localStorage.setItem('theme', 'ligth')
    // }, [theme])
    
    const themeClass = theme === 'dark' ? 'text-light bg-bg-black' : 'bg-bg-black';

    return(
        <nav className={themeClass}>
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