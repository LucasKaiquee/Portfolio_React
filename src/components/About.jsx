import SectionTitle from "./SectionTitle"
import Foto from "../assets/imgs/Foto1.png"

const About = () => {
    return(
        <section id="about" className="h-[500px] md:h-full">
            <SectionTitle title = "Sobre mim" /> 
            <div className="flex m-auto w-[85%] md:flex-col-reverse md:items-center md:bg-[#353535]">
                <img src={Foto} alt="Foto pessoal" className="w-[280px] h-[350px] sm:rounded-[5px] md:w-[140px] md:h-[190px] md:mb-[20px]"/>
                <div className="bg-[#353535] px-[10px]">
                    <h3 className="text-4xl text-[#00B3FF] my-[20px] sm:text-2xl">Quem Sou</h3>

                    <p className="text-2xl sm:text-base">Olá, me chamo Lucas Kaique tenho 22 anos e atualmente estou cursando Sistemas para Internet no Instituo Federal Da Paraíba. Meu objetivo é ingressar no mercado como estágiario na área de desenvolvimento web, minha stack atual é voltada para o front end, porém meu objetivo no futuro é me tornar desenvolvedor Full Stack, e estou aberto a aprender novas tecnologias e evoluir cada vez mais na área.</p>

                    <p className="my-[20px] sm:text-sm">Antes de decidir aprender programção eu cursava Engenharia Mecânica, porém sentia que não era o que queria para meu futuro, foi aí então que na metade de 2022 decidi trancar a faculdade e aprender a programar, no início foi um pouco dificil mas logo percebi que fiz a escolha certa e hoje estou muito feliz criando projetos e estudando uma área que realmente me faz ter prazer em atuar.</p>
                </div>
            </div>
        </section>
    )
}

export default About