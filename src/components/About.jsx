import SectionTitle from "./SectionTitle"
import Foto from "../assets/imgs/Foto1.png"

const About = () => {
    return(
        <section id="about" className="md:h-full">
            <SectionTitle title = "Sobre mim" /> 
            <div className="flex m-auto w-[80%] md:flex-col-reverse md:items-center md:bg-[#353535]">
                <img src={Foto} alt="Foto pessoal" className="w-[230px] h-100 sm:rounded-[5px] md:mt-7 md:w-[140px] md:h-[190px] md:mb-[20px]"/>
                <div className="bg-[#353535] px-[10px]">
                    <h3 className="text-2xl font-bold text-[#00B3FF] my-3">Quem Sou</h3>

                    <p className="text-md lg:text-sm">Olá, sou o Lucas Kaique, tenho 22 anos e estou focado em ingressar no mercado como estagiário na área de desenvolvimento web. Minha jornada na programação teve início em 2022, quando decidi trancar a faculdade de engenharia mecânica. Naquela época, estava insatisfeito com o curso e em busca de uma nova direção para minha carreira. Foi aí que me apaixonei pelo mundo da tecnologia.</p>

                    <h3 className="text-2xl font-bold text-[#00B3FF] my-3">Graduação</h3> 
                    <p className="text-md font-bold lg:text-sm">Tecnologia em Sistemas Para Internet - Instituto Federal Da Paraíba</p>
                    <p>Cursando 2023 - 2026</p>
                </div>
            </div>
        </section>
    )
}

export default About