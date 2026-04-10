import { useState } from "react"

function useForm (initialFormState){

    const [formState, setFormState] = useState(initialFormState)

    function handleSubmit(evento) {
        evento.preventDefault() //Para evitar que recargue la pagina
    }

    function handleChangeInput (evento){
        const field_name = evento.target.name
        const field_value = evento.target.value
        console.log('Campo a cambiar: ' + field_name )
        console.log("Nuevo valor: " + field_value)
        setFormState(
            (currentValue) => {
                return {
                    ...currentValue,
                    [field_name]: field_value
                }
            }
        )
    }

    return  {
        formState, handleSubmit, handleChangeInput
    }
}

export default useForm