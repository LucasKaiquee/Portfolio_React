const Form = () => {
    return (
        <form action="" className="flex flex-col gap-2 w-[250px] mt-2">
            <input type="text" placeholder="Nome" className="bg-[#1E1E1E] rounded-[5px] p-2"/>
            <input type="mail" placeholder="Email" className="bg-[#1E1E1E] rounded-[5px] p-2"/>
            <textarea name="" id="" cols="30" rows="10" placeholder="Digite sua menssagem..." className="bg-[#1E1E1E] rounded-[5px] h-[150px] p-2"></textarea>
            <button type="submit" className="bg-[#00B3FF] text-black font-bold rounded-[5px] py-2">Enviar</button>
        </form>
    )
}

export default Form