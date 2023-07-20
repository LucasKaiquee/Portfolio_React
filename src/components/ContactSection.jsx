import SectionTitle from "./SectionTitle"
import ButtonRedes from "./ButtonRedes"

import { FaInstagram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

const ContactSection = () => {

    const classButton = "bg-[#1E1E1E] w-[60px] h-[60px] rounded-[50%] text-[#00B3FF] border border-[#00B3FF] text-3xl flex justify-center items-center"

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
            <div className="w-[80%] bg-[#353535] m-auto h-[400px] mb-[50px] flex items-center">
                <div className="bg-[orange] w-[30%] h-[380px] ">

                </div>

                <div className="">
                    <h2 className="text-[#00B3FF] text-5xl p-3 text-1xl">Olá<span className="text-white">.</span></h2>

                    <p className="p-3">Entre em contato comigo, Estou aberto a oportunidades de estágio ou para vagas de junior e também para fazer network e trocar experiências sobre programação. Abaixo você encontra o link das minhas redes socias.</p>

                    <div className="flex gap-4 p-3">
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