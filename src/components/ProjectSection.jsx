import SectionTitle from "./SectionTitle"
import CardProject  from "./CardProject"

import { FaReact, FaJs, FaCss3, FaHtml5, FaSass} from "react-icons/fa"
import {BiLogoTailwindCss} from "react-icons/bi"

import project1 from "../assets/imgs/movie.png"
import project1M from "../assets/imgs/MovieVerseM.png"
import project2 from "../assets/imgs/Task.png"
import project2M from "../assets/imgs/TaskM.png"
import project3 from "../assets/imgs/card.png"
import project3M from "../assets/imgs/CardM.png"
import project4 from "../assets/imgs/Securitas.png"
import project4M from "../assets/imgs/SecuritasM.png"

const ProjectSection = () => {

    const techIcon = [
        /*Seguindo a ordem dos icones por index: 
            0: HTML
            1: CSS
            2: Js
            3: React
            4: Sass
            5: TailwindCss
        */ 
        <FaHtml5 />, 
        <FaCss3 />, 
        <FaJs />,
        <FaReact />,
        <FaSass />,
        <BiLogoTailwindCss />
    ]
    
    const projects = [
        {
            imgProjectD: project1,
            imgProjectM: project1M,
            urlLink: "https://github.com/LucasKaiquee/Movieverse",
            urlDemo: "https://movieversee.netlify.app/",
            description: "Usando a API OMDB, o Movie Verse é capaz de trazer informações sobre filmes e series.",
            techs: [techIcon[3], techIcon[2], techIcon[1], techIcon[0]]
        },
        {
            imgProjectD: project2,
            imgProjectM: project2M,
            urlLink: "https://github.com/LucasKaiquee/Tasks-List",
            urlDemo: "https://task-list-02b9a4.netlify.app/",
            description: "Gerenciador de tarefas com recursos para adicionar, mudar o status e deletar tarefas no banco de dados acessando a API.",
            techs: [techIcon[3], techIcon[2], techIcon[4], techIcon[0]]
        },
        {
            imgProjectD: project3,
            imgProjectM: project3M,
            urlLink: "https://github.com/LucasKaiquee/Interactive-card",
            urlDemo: "https://lucaskaiquee.github.io/Projeto_LM/",
            description: "Card interativo que permite ao usuário preencher um formulário, que será mostrado no cartão.",
            techs: [techIcon[2], techIcon[0], techIcon[1]]
        },
        {
            imgProjectD: project4,
            imgProjectM: project4M,
            urlLink: "https://github.com/LucasKaiquee/Projeto_LM",
            urlDemo: "https://lucaskaiquee.github.io/Projeto_LM/",
            description:"Portal para uma empresa fictícia de tecnologia e segurança digital, apaixonada por conectar pessoas.",
            techs: [techIcon[0], techIcon[1], techIcon[5]]
        }
    ]

    return (
        <section id="projects">
            <SectionTitle title="Projetos" />

            <div className="flex justify-center my-10 m-auto gap-10 flex-wrap lg:flex-col lg:items-center">
                {projects.map((project, index) => (
                    <CardProject 
                        key={index}
                        imgProjectD={project.imgProjectD} 
                        imgProjectM={project.imgProjectM}
                        urlLink={project.urlLink}
                        urlDemo={project.urlDemo}
                        description={project.description}
                        techs={project.techs}
                    />
                ))}
            </div>

            <p className="text-center w-[80%] m-auto py-10 text-xl sm:text-base sm:px-5">
                Esses são alguns dos projetos que desenvolvi durante meus estudos no front-end e durante a faculdade, para acessar mais projetos confira meu <a href="https://github.com/LucasKaiquee" className="text-[#00B3FF]">GitHub...</a> 
            </p>
        </section>
    )
}

export default ProjectSection