import ButtonRedes from "./ButtonRedes"
import { FaGithub } from "react-icons/fa"
import { FaLink } from "react-icons/fa"

// eslint-disable-next-line react/prop-types
const CardProject = ({imgProjectD, imgProjectM, urlLink, urlDemo, description}) => {

    const githubIcon = <FaGithub />
    const linkIcon = <FaLink />

    return(
        <div className="w-[600px]">
            <div className="w-[550px] h-[300px] bg-white rounded-[7px] border-4 border-[#000]">
                <img src={imgProjectD} alt="demonstração do projeto" className="w-[100%] h-[100%]" />
            </div>

            <div className="flex h-[100px]">
                <p className="text-1xl mt-5">{description}</p>

                <div className="h-[300px] w-[180px] bg-white border-4 border-[#000] rounded-[7px] relative top-[-220px]">
                    <img src={imgProjectM} alt="demonstração do projeto" className="w-[100%] h-[100%]"/>
                </div>
            </div>
            
            <div className="flex gap-5">
                <ButtonRedes  urlLink = {urlLink}  nameRede = {githubIcon} classButton="border border-[#00B3FF] h-[40px] w-[100px] rounded-[10px] flex justify-center items-center font-bold"/>

                <ButtonRedes  urlLink = {urlDemo}  nameRede = {linkIcon} classButton="bg-[#00B3FF] h-[40px] w-[100px] rounded-[10px] flex justify-center items-center font-bold text-black"/>
            </div>

        </div>
    ) 
}

export default CardProject