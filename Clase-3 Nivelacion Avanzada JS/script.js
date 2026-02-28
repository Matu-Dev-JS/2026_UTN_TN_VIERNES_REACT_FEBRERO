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


let estado_contador = 0

const contador_HTML = document.getElementById('contador')
const btn_sumar_contador = document.getElementById('btn-sumar')
const btn_restar_contador = document.getElementById('btn-restar')

function renderContador(){
    contador_HTML.textContent = estado_contador
}

function setContador(valor){
    estado_contador = valor
    renderContador()
}

function incrementar (){
    setContador(estado_contador + 1)
}

function decrementar (){
    setContador(estado_contador - 1)
}


btn_sumar_contador.addEventListener(
    'click',
    incrementar
)

btn_restar_contador.addEventListener(
    'click', 
    decrementar
)

renderContador()


/* 

SI BUSCAMOS UNA FORMA PROGRAMATICA Para comunicarnos con una API o cualquier recurso externo via HTTP debemos usar fetch

fetch = hacer consultas HTTP
fetch es una funcion ASINCRONICA
*/

async function obtenerUsuarios(){
    console.log('paso 2')
    await fetch('https://jsonplaceholder.typicode.com/users')
    console.log('paso 3')
}

console.log('paso 1')
obtenerUsuarios()
console.log('paso 4')
