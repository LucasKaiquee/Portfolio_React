import ButtonRedes from "./ButtonRedes"
import curriculo from '../../public/Currículo_Lucas_Kaique_estágio_DEV.pdf'
import {FaRegFilePdf} from "react-icons/fa"

const Header = () => {
    const urlLinkedin = "https://www.linkedin.com/in/lucaskaique/"
    const urlGithub = "https://github.com/LucasKaiquee"


    const classButton = "border border-[#00B3FF] h-[40px] w-[140px] rounded-[10px] flex justify-center items-center font-bold sm:w-[100px] sm:text-xs"

    return (
        <header className="bg-background-main w-full h-[100vh] bg-cover bg-center flex flex-col justify-center">
            <div className="w-[80%] m-auto md:text-center">
                <h1 className="text-6xl font-bold mb-1 sm:text-3xl sm:mb-2">Lucas Kaique</h1>
                <h3 className="text-3xl font-bold mb-5 sm:text-2xl sm:mb-3">Desenvolvedor <span className="text-[#00B3FF]">Front - End</span></h3>
                <p className="text-xl w-[550px] md:m-auto sm:text-sm sm:w-full sm:px-2">Atualmente cursando Sistemas para Internet e buscando uma oportunidade de estágio.</p>

                <div className="flex gap-7 mt-5 sm:gap-3 md:justify-center">
                    <ButtonRedes urlLink = {urlLinkedin}  nameRede = "LinkedIn" classButton={classButton}/>
                    <ButtonRedes urlLink={urlGithub} nameRede= "GitHub" classButton={classButton}/>
                    <ButtonRedes urlLink={curriculo} nameRede={"Currículo"} classButton={classButton} />
                </div>
            </div>
        </header>
    )
}

export default Header