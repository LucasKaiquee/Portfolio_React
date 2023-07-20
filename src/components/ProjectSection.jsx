import SectionTitle from "./SectionTitle"
import CardProject  from "./CardProject"

import project1 from "../assets/imgs/movie.png"
import project1M from "../assets/imgs/MovieVerseM.png"
import project2 from "../assets/imgs/Task.png"
import project2M from "../assets/imgs/TaskM.png"
import project3 from "../assets/imgs/card.png"
import project3M from "../assets/imgs/CardM.png"
import project4 from "../assets/imgs/Securitas.png"
import project4M from "../assets/imgs/SecuritasM.png"

const ProjectSection = () => {
    
    const projects = [
        {
            imgProjectD: project1,
            imgProjectM: project1M,
            urlLink: "https://github.com/LucasKaiquee/Movieverse",
            urlDemo: "https://movieversee.netlify.app/",
            description: "Usando a API OMDB, o Movie Verse é capaz de trazer informações sobre filmes e series.",
            techs: "| React.JS | Hooks | Rotas | JavaScript | HTML | CSS | API |"
        },
        {
            imgProjectD: project2,
            imgProjectM: project2M,
            urlLink: "https://github.com/LucasKaiquee/Tasks-List",
            urlDemo: "https://task-list-02b9a4.netlify.app/",
            description: "Gerenciador de tarefas com recursos para adicionar, mudar o status e deletar tarefas no banco de dados acessando a API.",
            techs: "| React.JS | Rotas | Hooks | JavaScript | HTML | SaSS | API |"
        },
        {
            imgProjectD: project3,
            imgProjectM: project3M,
            urlLink: "https://github.com/LucasKaiquee/Interactive-card",
            urlDemo: "https://lucaskaiquee.github.io/Projeto_LM/",
            description: "Card interativo que permite ao usuário preencher um formulário, que será mostrado no cartão.",
            techs: "| JavaScript | HTML | CSS |"
        },
        {
            imgProjectD: project4,
            imgProjectM: project4M,
            urlLink: "https://github.com/LucasKaiquee/Projeto_LM",
            urlDemo: "https://lucaskaiquee.github.io/Projeto_LM/",
            description:"Portal para uma empresa fictícia de tecnologia e segurança digital, apaixonada por conectar pessoas.",
            techs: "| HTML | CSS | Tailwind CSS |"
        }
    ]

    return (
        <section id="projects">
            <SectionTitle title="Projetos" />

            <div className="w-[90%] flex justify-center my-10 m-auto gap-20 flex-wrap">
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

            <p className="text-center py-10 text-1xl">
                Esses são alguns dos projetos que desenvolvi durante meus estudos no front-end e durante a faculdade, para acessar mais projetos confira meu <a href="https://github.com/LucasKaiquee" className="text-[#00B3FF]">GitHub...</a> 
            </p>
        </section>
    )
}

export default ProjectSection