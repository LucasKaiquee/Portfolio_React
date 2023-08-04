import ButtonRedes from "./ButtonRedes"
import { FaGithub } from "react-icons/fa"
import { FaLink } from "react-icons/fa"

// eslint-disable-next-line react/prop-types
const CardProject = ({imgProjectD, imgProjectM, urlLink, urlDemo, description, techs}) => {

    const githubIcon = <FaGithub />
    const linkIcon = <FaLink />

    return(
        <div className="w-[600px]">
            <div className="w-[550px] bg-white rounded-[7px] border-4 border-[#000] sm:w-[300px]">
                <img src={imgProjectD} alt="demonstração do projeto" className="w-[100%] h-[100%]" />
            </div>

            <div className="flex h-[130px]">
                <div className="w-[100%]">
                    <p className="text-1xl mt-3 sm:text-sm">{description}</p>
                    <p className="text-1xl text-[#00B3FF] font-bold py-3 sm:text-sm">{techs}</p>
                </div>

                <div className="h-[300px] w-[180px] border-4 border-[#000] rounded-[7px] relative top-[-220px] sm:w-[100px] sm:h-[180px] sm:top-[-100px]">
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