import SectionTitle from "./SectionTitle"
import CardSkill from "./CardSkill"
import { FaReact, FaJs, FaCss3, FaHtml5, FaFigma, FaSass, FaGitAlt } from "react-icons/fa"
import {BiLogoTypescript, BiLogoTailwindCss} from "react-icons/bi"

const SkillSection = () => {

    const iconList= [
        <FaReact />,
        <FaJs />,
        <BiLogoTypescript />,
        <FaHtml5 />,
        <FaCss3 />,
        <FaSass />,
        <BiLogoTailwindCss />,
        <FaFigma />,
        <FaGitAlt />
    ] 

    return(
        <section id="skill">
            <SectionTitle title = "Competências"/>
            <div className="m-auto bg-[#353535] flex justify-center items-center py-10 gap-10 sm:flex-col">
                <div className="basis-[40%] sm:ml-[10px]">
                    <h3 className="text-3xl text-[#00B3FF] font-bold my-5 sm:text-2xl">Nome da Tech</h3>
                    <p className="mt-[20px] text-2xl my-5 sm:text-lg">Breve descrição da tecnologia e minha experiencia com ela</p>
                    <p className="sm:text-xs">Essas são as tecnologias que tenho experiencia e fazem parte da minha stack como desenvolvedor Fornt - end. Pretendo aumentar ainda mais minhas habilidades tanto com essas tecnologias, bem como novas tecnologias que se fizerem necessarias ao logo da minha trajetoria com dev.</p>
                </div>

                <div className="flex flex-wrap gap-3 basis-[30%] sm:justify-center">
                    {iconList.map((item, index) => (
                        <CardSkill key={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SkillSection