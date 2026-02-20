/*  

metodos de array avanzados 3
    - map
    - find
- operador ternario 3
- modulos (import, export) 1
- arrays y objetos 1
- funciones 1
 */

/* 

MAP: Crear un array a partir de otro array
Metodo avanzado de array

*/

/* const nombres = ['pepe', 'maria', 'juan'] */

/* 
SIN usar el map
crear una funcion que dado el array de nombres nos retorne un array de personas donde cada nombre ahora sera transformado en un objeto que tendra la propiedad nombre y el valor del string.

crearPersonas(['pepe', 'maria', 'juan']) // [{nombre: 'pepe'}, {nombre: 'maria'}, {nombre: 'juan'}]
*/

/* const nombres = ["Ana", "Pedro", "Lucia", "Sebastian"] */
/* Crear una función que dado un array de nombres nos retorne un arrayr de personas donde cada nombre ahora sera 
transformado en un objeto que tendra la propiedad nombbre y el valor del string sin usar el método map()*/
/* function crearPersonas(nombres){
    const personas = []
    for(let i=0; i < nombres.length; i++){
        const persona = {nombre: nombres[i]}
        personas.push(persona)
    }
    return personas
}
const personas = crearPersonas(nombres)
 */

/* const personas = [
    {
        nombre: 'pepe',
        edad: 90
    },
    {
        nombre: 'maria',
        edad: 50
    },
] */

/* 
Recorrer la lista de personas y por cada persona incrementar la edad en 1 mas

GLOSARIO
Iterar/recorrer un array/lista/coleccion: Ejecutar algo por cada elemento de una lista
*/
//for es un bucle que deberiamos usarlo cuando sabemos cuantas veces queremos repetir algo
/* for(let iterador = 1; iterador <= 10; iterador = iterador + 1){
    console.log('hola mundo, el iterador vale: ' + iterador)
}
console.log('fin') */

/* const nombres = ['pepe', 'juan', 'maria'] */
/* for(let i = 0; i < nombres.length; i = i + 1){
    const nombre_seleccionado = nombres[i] //Aca es donde me posiciono dentro de la lista de nombres
    console.log("Bienvenido " + nombre_seleccionado)
} */

/* for(const nombre of nombres){
    console.log('Bienvenido ' + nombre)
} */

/* for(const persona of personas){
    persona.edad = persona.edad + 1
} */

/* const operaciones = [
    {
        operacion: '+',
        a: 1,
        b: 2
    }, 
    {
        operacion: '-',
        a: 2,
        b: 1
    }
] */
/* 
Recorrer el array de operaciones para obtener un array resultante de resultados
[
    {
        operacion: '+',
        a: 1,
        b: 2
    }, 
    {
        operacion: '-',
        a: 2,
        b: 1
    }
] => [3, 1]
*/
//Diccionarios en JS
/* const OPERACIONES = {
    '+': {
        operar: (a, b) => {
            return a + b
        }
    },
    '-': {
        operar: (a, b) => {
            return a - b
        }
    }
}

const resultado = []
for(const operacion of operaciones){
    const resultado_operacion = OPERACIONES[operacion].operar(operacion.a, operacion.b)
    resultado.push(resultado_operacion)
} */

/* const operaciones = [
    {
        operador: '+',
        a: 1,
        b: 2
    }, 
    {
        operador: '-',
        a: 2,
        b: 1
    }
]

const resultado = operaciones.map(
    (operacion) => {
        if(operacion.operador === '+'){
            return operacion.a + operacion.b
        }
        else if(operacion.operador === '-'){
            return operacion.a - operacion.b
        }
    }
)

console.log(resultado) */

const personas_complicadas = [
    ['pepe', 30],
    ['maria', 40],
    ['juan', 50]
]
//Transformar a personas complicadas en personas normales 
/* 
[
    ['pepe', 30],
    ['maria', 40],
    ['juan', 50]
] 
    transformar en: 
[
    {
        nombre: 'pepe',
        edad: 30
    },
    {
        nombre: 'maria',
        edad: 40
    },
    {
        nombre: 'juan',
        edad: 50
    }
]
*/