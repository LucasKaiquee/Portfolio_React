import SectionTitle from "./SectionTitle"
import CardProject  from "./CardProject"

import porject1 from "../assets/imgs/movie.png"
import project1M from "../assets/imgs/MovieVerseM.png"

const ProjectSection = () => {
    

    return (
        <section className="">
            <SectionTitle title="Projetos" />

            <div className="w-[90%] flex justify-center my-10 m-auto gap-20 flex-wrap">

                <CardProject 
                    imgProjectD={porject1} 
                    imgProjectM={project1M} 
                    urlLink="https://github.com/LucasKaiquee/Movieverse"
                    urlDemo="https://movieversee.netlify.app/" 
                    description="Breve descrição do projeto e destacar as tecnologias que foram usadas"
                />

                <CardProject 
                    imgProjectD={porject1} 
                    imgProjectM={project1M} 
                    urlLink="https://github.com/LucasKaiquee/Movieverse"
                    urlDemo="https://movieversee.netlify.app/" 
                    description="Breve descrição do projeto e destacar as tecnologias que foram usadas"
                />

                <CardProject 
                    imgProjectD={porject1} 
                    imgProjectM={project1M} 
                    urlLink="https://github.com/LucasKaiquee/Movieverse"
                    urlDemo="https://movieversee.netlify.app/" 
                    description="Breve descrição do projeto e destacar as tecnologias que foram usadas"
                />

                <CardProject 
                    imgProjectD={porject1} 
                    imgProjectM={project1M} 
                    urlLink="https://github.com/LucasKaiquee/Movieverse"
                    urlDemo="https://movieversee.netlify.app/" 
                    description="Breve descrição do projeto e destacar as tecnologias que foram usadas"
                />
            </div>

            <p className="text-center py-10 text-1xl">
                Esses são alguns dos projetos que desenvolvi durante meus estudos no front-end e durante a faculdade, para acessar mais projetos confira meu <a href="https://github.com/LucasKaiquee" className="text-[#00B3FF]">GitHub...</a> 
            </p>
        </section>
    )
}

export default ProjectSection