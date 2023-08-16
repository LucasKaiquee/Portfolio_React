import SectionTitle from "./SectionTitle"
import CardSkill from "./CardSkill"

import { useState } from "react";

import { FaReact, FaJs, FaCss3, FaHtml5, FaFigma, FaSass, FaGitAlt } from "react-icons/fa"
import {BiLogoTypescript, BiLogoTailwindCss} from "react-icons/bi"

const SkillSection = () => {

    const [selectedTech, setSelectedTech] = useState(null);

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

    const tech = [
        {
          name: "React",
          description: "Biblioteca JavaScript para construção de interfaces.",
        },
        {
          name: "JavaScript",
          description: "Linguagem de programação para web e aplicações.",
        },
        {
          name: "TypeScript",
          description: "Superset do JavaScript que adiciona tipagem estática.",
        },
        {
          name: "HTML",
          description: "Linguagem de marcação para páginas web.",
        },
        {
          name: "CSS",
          description: "Linguagem de estilos para páginas web.",
        },
        {
          name: "Sass",
          description: "Pré-processador CSS que adiciona funcionalidades extras.",
        },
        {
          name: "Tailwind CSS",
          description: "Framework CSS utilitário para criação rápida de layouts.",
        },
        {
          name: "Figma",
          description: "Ferramenta de design e prototipagem.",
        },
        {
          name: "Git",
          description: "Sistema de controle de versão distribuído.",
        },
      ];
    
      return (
        <section id="skill">
            <SectionTitle title="Competências" />
            <div className="bg-[#353535] flex justify-center items-center py-10 lg:flex-col md:p-5">
                <div className="basis-[40%] lg:ml-[10px]">
                    <h3 className="text-3xl text-[#00B3FF] font-bold my-5 sm:text-2xl ease-out duration-300">
                        {selectedTech !== null ? tech[selectedTech].name : "Skills"}
                    </h3>
                    <p className="mt-[20px] text-2xl my-5 sm:text-lg ease-out duration-300 h-[50px]">
                        {selectedTech !== null ? tech[selectedTech].description : "Que tal interagir com uma tecnologia ?"}
                    </p>
                    <p className="sm:text-xs">
                        Essas são as tecnologias que tenho experiencia e fazem parte da minha stack como desenvolvedor Fornt - end.
                        Pretendo aumentar ainda mais minhas habilidades tanto com essas tecnologias, bem como novas tecnologias que se fizerem necessarias ao longo da minha trajetoria como dev.
                    </p>
                </div>
    
                <div className="flex flex-wrap gap-3 basis-[40%] justify-end lg:justify-center lg:mt-[30px] lg:w-[70%]">
                    {iconList.map((item, index) => (
                        <CardSkill
                            key={index}
                            item={item}
                            onMouseEnter={() => setSelectedTech(index)}
                            onMouseLeave={() => setSelectedTech(null)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SkillSection