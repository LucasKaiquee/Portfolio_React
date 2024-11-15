import SectionTitle from "./SectionTitle";
import CardSkill from "./CardSkill";

// import curriculo from '../../public/Currículo_Lucas_Kaique_estágio_.pdf'

import { useState } from "react";

import {
  FaReact,
  FaJs,
  FaGitAlt,
  FaAws,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";
import { SiSpringboot, SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { DiPostgresql } from "react-icons/di";
import { BiLogoTypescript, BiLogoTailwindCss } from "react-icons/bi";

const SkillSection = () => {
  const [selectedTech, setSelectedTech] = useState(null);

  const iconList = [
    <FaJs />,
    <BiLogoTypescript />,
    <FaReact />,
    <TbBrandNextjs />,
    <FaNodeJs />,
    <BiLogoTailwindCss />,
    <FaAws />,
    <FaJava />,
    <SiSpringboot />,
    <SiMongodb />,
    <DiPostgresql />,
    <FaGitAlt />
  ];

  const tech = [
    {
      name: "JavaScript",
      description: "Linguagem de programação para web e aplicações."
    },
    {
      name: "TypeScript",
      description: "Superset do JavaScript que adiciona tipagem estática."
    },
    {
      name: "React",
      description: "Biblioteca JavaScript para construção de interfaces."
    },
    {
      name: "Next.js",
      description:
        "Framework React para renderização no lado do servidor e geração de sites estáticos."
    },
    {
      name: "Node.js",
      description: "Ambiente de execução JavaScript no servidor."
    },
    {
      name: "Tailwind CSS",
      description: "Framework CSS utilitário para criação rápida de layouts."
    },
    {
      name: "AWS",
      description: "Amazon Web Service, plataforma de computação em nuvem."
    },
    {
      name: "Java",
      description:
        "Linguagem de programação orientada a objetos, amplamente usada em sistemas corporativos."
    },
    {
      name: "Spring Boot",
      description:
        "Framework Java para criação de aplicativos empresariais e microserviços."
    },
    {
      name: "MongoDB",
      description: "Banco de dados NoSQL, orientado a documentos."
    },
    {
      name: "PostgreSQL",
      description: "Banco de dados relacional open-source altamente escalável."
    },
    {
      name: "Git",
      description: "Sistema de controle de versão distribuído."
    }
  ];

  return (
    <section id="skill">
      <SectionTitle title="Competências" />
      <div className="bg-[#353535] flex justify-center items-center py-10 lg:flex-col md:p-5">
        <div className="basis-[40%] flex-col lg:ml-[10px]">
          <h3 className="text-3xl text-[#00B3FF] font-bold my-5 sm:text-2xl ease-out duration-300">
            {selectedTech !== null ? tech[selectedTech].name : "Skills"}
          </h3>
          <p className="mt-[20px] text-2xl my-5 sm:text-lg ease-out duration-300 h-[50px]">
            {selectedTech !== null
              ? tech[selectedTech].description
              : "Que tal interagir com uma tecnologia ?"}
          </p>
          <p className="text-md py-5 sm:text-xs">
          Estou sempre evoluindo e aprendendo. Meu estágio foi fundamental para aplicar os conhecimentos da faculdade em projetos reais. Agora, continuo me aprofundando no desenvolvimento web, enquanto a graduação amplia meu entendimento em diversas áreas da tecnologia.          </p>

          {/* <a href={curriculo} className="text-[#00B3FF] border border-[#00B3FF] gap-2 h-[40px] w-[170px] rounded-[10px] flex justify-center items-center mt-4 font-bold lg:self-center sm:w-[100px] sm:text-xs hover:scale-125 ease-out duration-300">Currículo <FaRegFilePdf/></a> */}
        </div>

        <div className="flex flex-wrap gap-3 basis-[40%] justify-end lg:justify-center lg:mt-[30px] lg:w-[70%] max-w-[512px]">
          {iconList.map((item, index) =>
            <CardSkill
              key={index}
              item={item}
              onMouseEnter={() => setSelectedTech(index)}
              onMouseLeave={() => setSelectedTech(null)}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
