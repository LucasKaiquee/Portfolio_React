import SectionTitle from "./SectionTitle"
import Foto from "../assets/imgs/Foto1.png"

const About = () => {
    return(
        <section id="about" className="md:h-full">
            <SectionTitle title = "Sobre mim" /> 
            <div className="flex m-auto w-[85%] md:flex-col-reverse md:items-center md:bg-[#353535]">
                <img src={Foto} alt="Foto pessoal" className="w-[230px] h-[300px] sm:rounded-[5px] md:w-[140px] md:h-[190px] md:mb-[20px]"/>
                <div className="bg-[#353535] px-[10px]">
                    <h3 className="text-4xl text-[#00B3FF] my-[20px] sm:text-2xl lg:text-3xl">Quem Sou</h3>

                    <p className="text-xl sm:text-base lg:text-xl">Olá, me chamo Lucas Kaique tenho 22 anos e atualmente estou cursando Sistemas para Internet no Instituo Federal Da Paraíba. Meu objetivo é ingressar no mercado como estágiario na área de desenvolvimento web, minha stack atual é voltada para o front end, porém meu objetivo no futuro é me tornar desenvolvedor Full Stack, e estou aberto a aprender novas tecnologias e evoluir cada vez mais na área.</p>
                </div>
            </div>
        </section>
    )
}

export default About