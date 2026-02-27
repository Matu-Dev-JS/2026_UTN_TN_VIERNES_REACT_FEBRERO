/* 
- DOM
- Asincronia y Promesas
- API y Fetch
*/

//Document Object Model
//Finalidad: Editar, leer eliminar cosas del HTML
//Que usos puede tener el DOM?
/* 
- Mostrar datos que estan en el estado de nuestra app
*/


function obtenerBalance (){
    //El dia de mañana esta funcion llama al servidor en busca del balance del usuario
    return 1300
}

let estado_balance_actual = null

//Guardar el elemento del HTML que muestra el balance
const balance_HTML = document.getElementById("balance-actual")

function renderBalance(){
    //Responsable de mostrar en HTML el balance
    if(!estado_balance_actual){
        balance_HTML.textContent = 'Cargando...'
    }
    else{
        balance_HTML.textContent = estado_balance_actual
    }
}

//Cada vez que se modifica en JS el estado que deberia pasar en HTML? Se debe volver a renderizar!!!
function setBalance(valor){
    estado_balance_actual = valor
    renderBalance()
}

setBalance(obtenerBalance())


function actualizarBalance (){
    setBalance(500)
}

const btn_actualizar_HTML = document.getElementById('btn-actualizar-balance')

/* 
addEventListener es un metodo asociado a los elementos del HTML
Nos permite asociar funciones a eventos del HTML
EJEMPLO: SI el usuario da click, cambiar color de fondo
*/
btn_actualizar_HTML.addEventListener(
    'click',
    actualizarBalance
)


/* 
Practica: Contador
- El contador empieza en 0
- El contador debera tener un boton de '+' para sumar
- El contador debera tener un boton de '-' para restar
- El contador debera tener un span donde mostrara el valor actual del contador
- Tanto la accion de + como - debera funcionar
*/

