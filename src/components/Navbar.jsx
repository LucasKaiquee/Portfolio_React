const Navbar = () => {
    return(
        <nav className="flex justify-evenly w-full text-xl bg-[#1E1E1E] font-bold text-lg fixed p-3 top-0 z-10">
            <a href="#" className="text-[#00B3FF]">LucasKaique</a>
            <ul className="flex list-none justify-evenly gap-10">
                <li className=""><a href="#about">Sobre</a></li>
                <li className=""><a href="#skill">Competências</a></li>
                <li className=""><a href="#projects">Projetos</a></li>
                <li className=""><a href="#contact">Contatos</a></li>
            </ul>
        </nav>
    )
}

export default Navbar