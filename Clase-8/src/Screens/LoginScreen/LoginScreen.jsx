import React, { useState } from 'react'
import useForm from '../../hooks/useForm'

const LoginScreen = () => {

    /* Lista de eventos del DOM: https://www.w3schools.com/jsref/dom_obj_event.asp */
    /* 
    TODAS las funciones asociadas a eventos del DOM cuando se desencadena el evento se les pasa por parametro un objeto con la descripcion de ese evento
    Dentro del evento tenemos al target, que es la propiedad que te permite saber que elemento desencadeno el evento
    */
   /*  function accion (evento){
        console.log('click')
        console.log(evento.target.id)
        if(evento.target.id == 1){
            console.log('borrar elemento')
        }
        else if(evento.target.id == 2){
            console.log('Crear cuadrado')
        }
        else if(evento.target.id == 3){
            console.log('borrar todo')
        }
    } */


    //FORMULARIO NO CONTROLADO
    /*  
    function handleSubmitLoginForm (evento) {
        evento.preventDefault() //Para evitar que recargue la pagina
        console.log("El formulario de login se envio")
        const form = evento.target
        const login_info =  {
            email: form.email.value,
            password: form.password.value
        }
        console.log(login_info)
    } */

    //Formulario Controlado
    /* 
    Tener un estado que represente en tiempo real el estado actual del formulario
    */  
    const intialFormState = {
        email: 'pepe@',
        password: ''
    }

    const {handleSubmit, handleChangeInput, formState} = useForm(intialFormState)
    

    
    return (
        <div>
            {/* <button onClick={accion} id='1'>Borrar elemento</button>
            <button onClick={accion} id='2'>Crear cuadrado</button>
            <button onClick={accion} id='3'>Borrar todo</button> */}
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        name='email' 
                        id='email'
                        onChange={handleChangeInput}
                        value={formState.email}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Contraseña:</label>
                    <input 
                        type='password' 
                        name='password' 
                        id='password'
                        onChange={handleChangeInput}
                        value={formState.password}
                    />
                </div>
                { 
                    formState.password.length > 0 && ( formState.password.length < 5
                    ? <span style={{color: 'red'}}>La contraseña no es segura</span>
                    : <span>Contraseña valida</span>
                    )
                }
                <button type='submit'>Iniciar sesion</button>
            </form>
        </div>
    )
}

export default LoginScreen