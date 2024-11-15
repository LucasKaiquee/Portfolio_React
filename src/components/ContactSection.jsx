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
            <div className="w-[80%] bg-[#353535] m-auto h-[100%] mb-[50px] flex items-center md:flex-col-reverse">
                <div className="border-r-4 border-[#00B3FF] p-5 my-5 pr-20 md:border-0 md:p-0">
                    <h3 className="text-2xl">Envie uma <span className="text-[#00B3FF]">Menssagem</span></h3>
                   <Form /> 
                </div>
                

                <div className="md:border-b md:pb-3 md:border-[#00B3FF]">
                    <h2 className="text-[#00B3FF] text-5xl p-3 text-1xl sm:text-2xl">Olá<span className="text-white">.</span></h2>

                    <p className="text-md p-3 sm:text-sm">Fique à vontade para entrar em contato comigo. Estou em busca de oportunidades de estágio e também aberto para estabelecer conexões e compartilhar experiências sobre programação. Abaixo, você encontra o link das minhas redes sociais.</p>

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