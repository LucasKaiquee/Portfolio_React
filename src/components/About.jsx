import SectionTitle from "./SectionTitle"
import Foto from "../assets/imgs/Foto1.png"

const About = () => {
    return(
        <section id="about" className="md:h-full">
            <SectionTitle title = "Sobre mim" /> 
            <div className="flex m-auto w-[85%] md:flex-col-reverse md:items-center md:bg-[#353535]">
                <img src={Foto} alt="Foto pessoal" className="rounded h-100 sm:rounded-[5px] md:mt-7 md:w-[140px] md:h-[190px] md:mb-[20px]"/>
                <div className="px-[10px]">
                    <h3 className="text-2xl font-bold text-[#00B3FF] my-3">Quem Sou</h3>

                    <p className="text-md lg:text-sm">Olá, sou Lucas Kaique, tenho 23 anos e sou um desenvolvedor Web apaixonado com mais de um ano de experiência em projetos e estágio. Minha jornada na programação começou em 2022, quando decidi trancar a faculdade de engenharia mecânica em busca de uma nova direção para minha carreira. Foi nesse momento que me apaixonei pelo mundo da tecnologia. <br/> <br/>Com minha experiência anterior como estagiário, estou em busca de uma nova oportunidade para encarar novos desafios na área de desenvolvimento web, continuar aprimorando minhas habilidades e contribuir com projetos impactantes.</p>

                    <h3 className="text-2xl font-bold text-[#00B3FF] my-3">Graduação</h3> 
                    <p className="text-md font-bold lg:text-sm">Tecnologia em Sistemas Para Internet - Instituto Federal Da Paraíba</p>
                    <p>Cursando 2023 - 2026</p>
                </div>
            </div>
        </section>
    )
}

export default About