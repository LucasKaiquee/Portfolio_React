import ButtonRedes from "./ButtonRedes"

const Header = () => {
    const urlLinkedin = "https://www.linkedin.com/in/lucaskaique/"
    const urlGithub = "https://github.com/LucasKaiquee"

    const classButton = "border border-[#00B3FF] h-[40px] w-[170px] rounded-[10px] flex justify-center items-center font-bold sm:w-[100px] sm:text-xs"

    return (
        <header className="bg-background-main w-full h-[100vh] bg-cover bg-center flex flex-col justify-center">
            <div className="ml-[50px] sm:m-0 sm:text-center">
                <h3 className="text-5xl font-bold mb-5 sm:text-2xl sm:mb-2">Olá, Sou o Lucas</h3>
                <h1 className="text-7xl font-bold sm:text-3xl sm:mb-3">Desenvolvedor <span className="text-[#00B3FF]">Front - End</span></h1>
                <p className="text-xl w-[550px] sm:text-sm sm:w-full">Atualmente estou cursando Sistemas para Internet e estou buscando uma oportunidade de estágio na aéra.</p>

                <div className="flex gap-7 mt-5 sm:justify-center sm:gap-3">
                    <ButtonRedes urlLink = {urlLinkedin}  nameRede = "LinkedIn" classButton={classButton}/>
                    <ButtonRedes urlLink={urlGithub} nameRede= "GitHub" classButton={classButton + " bg-[#00B3FF] text-[#1E1E1E]"}/>
                </div>
            </div>
        </header>
    )
}

export default Header