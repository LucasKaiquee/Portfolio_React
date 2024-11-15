import SectionTitle from "./SectionTitle"
import CardProject  from "./CardProject"

import projects from "../data/projects"

const ProjectSection = () => {

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