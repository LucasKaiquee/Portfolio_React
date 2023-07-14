import ButtonRedes from "./ButtonRedes"

const Header = () => {
    const urlLinkedin = "https://www.linkedin.com/in/lucaskaique/"
    const urlGithub = "https://github.com/LucasKaiquee"

    const classButton = "border border-[#00B3FF] h-[40px] w-[170px] rounded-[10px] flex justify-center items-center font-bold"

    return (
        <header className="bg-background-main w-full h-[100vh] bg-cover bg-center flex flex-col justify-center">
            <div className="ml-[50px]">
                <h3 className="text-5xl font-bold mb-5">Olá, Sou o Lucas</h3>
                <h1 className="text-7xl font-bold">Desenvolvedor <span className="text-[#00B3FF]">Front - End</span></h1>
                <p className="text-xl w-[550px]">Atualmente estou cursando Sistemas para Internet e estou buscando uma oportunidade de estágio na aéra.</p>

                <div className="flex gap-7 mt-5">
                    <ButtonRedes urlLink = {urlLinkedin}  nameRede = "LinkedIn" classButton={classButton}/>
                    <ButtonRedes urlLink={urlGithub} nameRede= "GitHub" classButton={classButton + " bg-[#00B3FF] text-[#1E1E1E]"}/>
                </div>
            </div>
        </header>
    )
}

export default Header