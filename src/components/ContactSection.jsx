import SectionTitle from "./SectionTitle"
import ButtonRedes from "./ButtonRedes"
import Form from "./Form"

import { FaInstagram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

const ContactSection = () => {

    const classButton = "bg-[#1E1E1E] w-[60px] h-[60px] rounded-[50%] text-[#00B3FF] border border-[#00B3FF] text-3xl flex justify-center items-center sm:w-[45px] sm:h-[45px] sm:text-xl"

    const button = [
        {
            url: "https://www.linkedin.com/in/lucaskaique/",
            icon: <FaLinkedin />,
        },
        {
            url: "https://github.com/LucasKaiquee",
            icon: <FaGithub />,
        },
        {
            url: "https://www.instagram.com/llucas_kaique/",
            icon: <FaInstagram />,
        }
    ]

    return (
        <section id="contact">
            <SectionTitle title="Contatos" />
            <div className="w-[80%] bg-[#353535] m-auto h-[100%] mb-[50px] flex items-center sm:flex-col-reverse">
                <div className="border-r-4 border-[#00B3FF] p-5 my-5 pr-20 sm:border-0 sm:p-0">
                    <h3 className="text-2xl">Envie uma <span className="text-[#00B3FF]">Menssagem</span></h3>
                   <Form /> 
                </div>
                

                <div className="sm:border-b sm:pb-3 sm:border-[#00B3FF] ">
                    <h2 className="text-[#00B3FF] text-5xl p-3 text-1xl sm:text-2xl">Olá<span className="text-white">.</span></h2>

                    <p className="p-3 sm:text-sm">Entre em contato comigo, Estou aberto a oportunidades de estágio ou para vagas de junior e também para fazer network e trocar experiências sobre programação. Abaixo você encontra o link das minhas redes socias.</p>

                    <div className="flex gap-4 p-3 sm:justify-center">
                        {button.map((button, index) =>(
                            <ButtonRedes 
                                key={index}
                                urlLink={button.url}
                                nameRede={button.icon}
                                classButton={classButton}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection