import{ useState } from 'react';
import './HamburguerMenu.css'; 

const HamburguerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className="menu-items">
        <li className="hover:scale-125 ease-out duration-300" onClick={toggleMenu}><a href="#about">Sobre</a></li>
        <li className="hover:scale-125 ease-out duration-300" onClick={toggleMenu}><a href="#skill">Competências</a></li>
        <li className="hover:scale-125 ease-out duration-300" onClick={toggleMenu}><a href="#projects">Projetos</a></li>
        <li className="hover:scale-125 ease-out duration-300" onClick={toggleMenu}><a href="#contact">Contatos</a></li>
      </ul>
    </div>
  );
};

export default HamburguerMenu;
