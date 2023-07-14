const Navbar = () => {
    return(
        <nav className="flex justify-evenly w-full text-xl bg-[#1E1E1E] font-bold text-lg fixed p-3 top-0">
            <p className="text-[#00B3FF]">LucasKaique</p>
            <ul className="flex list-none justify-evenly gap-10">
                <li className="">Sobre</li>
                <li className="">Competências</li>
                <li className="">Projetos</li>
                <li className="">Contatos</li>
            </ul>
        </nav>
    )
}

export default Navbar