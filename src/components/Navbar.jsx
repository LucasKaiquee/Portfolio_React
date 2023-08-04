const Navbar = () => {

    return(
        <nav className="flex justify-evenly w-full text-xl bg-[#1E1E1E] font-bold text-lg fixed p-3 top-0 z-10 border-b-2 border-[#00B3FF]">
            <a href="#" className="text-[#00B3FF] hover:scale-125 ease-out duration-300 sm:hidden">LucasKaique</a>
            <ul className="flex list-none justify-evenly gap-10 sm:text-sm">
                <li className="hover:scale-125 ease-out duration-300"><a href="#about">Sobre</a></li>
                <li className="hover:scale-125 ease-out duration-300"><a href="#skill">Competências</a></li>
                <li className="hover:scale-125 ease-out duration-300"><a href="#projects">Projetos</a></li>
                <li className="hover:scale-125 ease-out duration-300"><a href="#contact">Contatos</a></li>
            </ul>
        </nav>
    )
}

export default Navbar