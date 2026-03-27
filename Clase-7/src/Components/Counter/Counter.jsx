import { useState } from "react"

function Counter({ initial_value }) {
    //Es un hook que crea un estado
    //Recibe como parametro el valor inicial del estado
    //Retorna 1 valor, este valor es SIEMPRE UN ARRAY y ese array tiene 2 POSICIONES
    //La primera posicion (indice 0) es el estado en si mismo
    //La segunda posicion (indice 1) es la funcion de cambio del estado

    //IMPORTANTE, NUNCA BAJO NINGUN TERMINO ACTUALICES AL ESTADO SIN USAR EL SETTER, esto romperia la gracia de usar estados, ya que es el setter quien mediante su uso comunica a React que debe re-renderizar el componente
    const [counter, setCounter] = useState(0)


    function increment (){
        console.log('El usuario intento incrementar')
        //Cuando llaman al setter de un estado el COMPONENTE se RE-RENDERIZARA
        setCounter(
            (current_counter) => {
                return current_counter + 1
            }
        )
    }


    function decrement (){
        console.log('El usuario intento decrementar')

        //Esta forma de actualizar un estado es valida, pero tiene sus limitaciones y problemas
        //setCounter(counter - 1)

        //SI ustedes quieren trabajar con el valor actual del estado la forma mas correcta es pasar una callback a la funcion setCounter
        //La funcion setter esta preparada para recibir una callback y el retorno de esa callback sera el nuevo valor del estado
        //React enviara por parametro a callback EL VALOR ACTUAL (%100 asegurado) de tu estado
        setCounter(
            (current_counter) => {
                return current_counter - 1
            }
        )
    
    }
    
    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{counter}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}
export default Counter


/* 
En React tratamos de evitar usar el DOM REAL 
En cambio siempre tratamos de usar el DOM VIRUAL
*/