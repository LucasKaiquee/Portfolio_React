import ButtonRedes from "./ButtonRedes"
import { FaGithub } from "react-icons/fa"
import { FaLink } from "react-icons/fa"

// eslint-disable-next-line react/prop-types
const CardProject = ({imgProjectD, imgProjectM, urlLink, urlDemo, description, techs}) => {

    const githubIcon = <FaGithub />
    const linkIcon = <FaLink />

    return(
        <div className="w-[500px] sm:w-[350px]">
            <div className="w-[450px] bg-white rounded-[7px] border-4 border-[#000] sm:w-[300px]">
                <img src={imgProjectD} alt="demonstração do projeto" className="w-[100%] h-[100%]" />
            </div>

            <div className="flex h-[130px]">
                <div className="w-[100%]">
                    <p className="text-base mt-3 sm:text-sm">{description}</p>
                    <span className="flex gap-4 text-[#00B3FF] text-2xl font-bold py-3 sm:text-xl">{techs}</span>
                </div>

                <div className="h-[240px] w-[150px] border-4 border-[#000] rounded-[7px] relative top-[-200px] sm:w-[100px] sm:h-[170px] sm:top-[-100px]">
                    <img src={imgProjectM} alt="demonstração do projeto" className="w-[100%] h-[100%]"/>
                </div>
                
            </div>

            <div className="flex gap-5">

                <ButtonRedes  urlLink = {urlLink}  nameRede = {githubIcon} classButton="border border-[#00B3FF] h-[40px] w-[100px] rounded-[10px] flex justify-center items-center font-bold text-[#00B3FF] text-2xl sm:h-[30px] sm:w-[90px] sm:text-lg"/>

                <ButtonRedes  urlLink = {urlDemo}  nameRede = {linkIcon} classButton="bg-[#00B3FF] h-[40px] w-[100px] rounded-[10px] flex justify-center items-center font-bold text-black text-2xl sm:h-[30px] sm:w-[90px] sm:text-lg"/>
            </div>

        </div>
    ) 
}

export default CardProject