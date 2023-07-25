import {useForm} from "react-hook-form"

const Form = () => {
    const { register, handleSubmit, formState: {errors} } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

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
                name="" 
                id="" 
                cols="30" 
                rows="10" 
                placeholder="Digite sua menssagem..." 
                className=""
                {...register('textArea')}>
            </textarea>

            <button onClick={() => handleSubmit(onSubmit)()} className="bg-[#00B3FF] text-black font-bold rounded-[5px] py-2">Enviar</button>
        </div>
    )
}

export default Form