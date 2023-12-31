import axios from "axios";
import {useForm} from "react-hook-form"
import { useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Loading from "./Loading";

const Form = () => {
    const { register, reset, handleSubmit, formState: {errors} } = useForm()
    const MySwal = withReactContent(Swal)

    const [removeLoading, setRemoveLoading] = useState(true)

    const onSubmit = async (data) => {
        setRemoveLoading(false)
        try {
            const response = await axios.post('https://formsubmit.co/ajax/lucaskaique743@gmail.com', data);
            MySwal.fire({
                title: <strong>Obrigado !</strong>,
                html: <i>Recebi sua menssagem ...</i>,
                icon: 'success'
            }); 

            reset({name : '', email: '', textArea: ''})

            console.log(response)
        } catch (error) {
            console.error('Erro ao enviar o formulário:', error);
            MySwal.fire({
                title: <strong>Erro</strong>,
                html: <i>Vou resolver o mais rápido possível ...</i>,
                icon: 'error'
            });
        }

        setRemoveLoading(true)
      };

    const errorValidation = "border border-[red]"

    return (

        <div className="flex flex-col gap-2 w-[250px] mt-2">
            <input 
                type="text" 
                placeholder="Nome" 
                className={errors?.name && errorValidation}
                {...register('name', {required: true})}
                />

            {errors?.name ?.type === 'required' && (
            <p className="text-[red] font-bold">Insira seu nome</p>
            )}

            <input 
                type="mail" 
                placeholder="Email" 
                className={errors?.email && errorValidation}
                {...register('email', {required: true},)}
                />

            {errors?.email ?.type === 'required' && (
            <p className="text-[red] font-bold">Insira seu Email</p>
            )}

            <textarea 
                name="message" 
                id="" 
                cols="30" 
                rows="10" 
                placeholder="Digite sua menssagem..." 
                className=""
                {...register('textArea')}>
            </textarea>
            {removeLoading ? '' : <Loading /> }
            <button onClick={() => handleSubmit(onSubmit)()} className={"bg-[#00B3FF] text-black font-bold rounded-[5px] py-2 hover:scale-125 ease-out duration-300" + (removeLoading ? '' : ' hidden')} id="button-form">Enviar</button>
        </div>
    )
}

export default Form