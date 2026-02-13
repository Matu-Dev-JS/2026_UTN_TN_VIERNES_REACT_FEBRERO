/* 
# Temas a repasar
- metodos de array avanzados 3
    - filter
    - map
    - find
- operador ternario 3
- modulos (import, export) 1
- arrays y objetos 1
- funciones 1

*/


// spread operator (clonar objetos / romper referencias) 6


//primitivos
/* 
al ser guardados en una variable se guardan como dato en la memoria
*/
/* let nombre_1 = 'pepe'
let nombre_2 = nombre_1
nombre_1 = 'juan'
console.log(nombre_2) */

/* 
- string
- number
- boolean
- undefined
- null
*/

//objeto
/* 
objetos
array
*/
/* 
let nombres_1 = [ 'pepe', 'juan' ]
let nombres_2 = nombres_1
nombres_1.push('maria')
console.log(nombres_2) 
*/

/* 
El spread operator entre muchas cosas te permite clonar arrays y objetos (Creando una nueva referencia)
*/

/* 
let nombres_1 = [ 'pepe', 'juan' ]
let nombres_2 = [...nombres_1]
nombres_1.push('maria')
console.log(nombres_2) 


let persona_1 = {nombre:  'pepe', edad: 40}
let persona_2 = {...persona_1, edad: 30}
console.log(persona_1)
console.log(persona_2) 
*/

/* 
- desestructuracion 4
    - objetos
    - arrays
*/

/* let persona = {
    edad: 30,
    nombre: 'juan',
    apellido:"suarez"
}

let {edad, nombre, apellido} = persona */
/* 
Es lo mismo que:
let edad = persona.edad
let nombre = persona.nombre
let apellido = persona.apellido
 */
/* console.log(
    `
    La persona se llama: ${nombre} ${apellido} y tiene: ${edad}
    `
) */

/* 
    nosotros sabemos que persona tendra el tipo de dato objeto
*/
/* function presentarPersona({ edad, nombre, apellido }) {

    console.log(
        `
        La persona se llama: ${nombre} ${apellido} y tiene: ${edad} años
        `
    )
}

presentarPersona(
    {
        edad: 30,
        nombre: 'juan',
        apellido: "suarez"
    }
) */


//Desestructuracion de array
//la funcion datos usuario devuelve un array donde el primer valor sera el nombre del usuario y el segundo la edad
/* function datosUsuario (){
    return ['pepe', 70]
} */

/* 
En vez de hacer esto:
let datos = datosUsuario()
let nombre = datos[0]
let edad = datos[1] 
*/
/* let [nombre, edad] = datosUsuario() */

/* const personas = [
    {
        nombre: 'pepe',
        edad: 30
    }
]
const [primer_persona] = personas
const {nombre, edad} = primer_persona */

/* 
- metodos de array avanzados 3
    - filter
    - map
    - find 
    */

const productos = [
    {
        id:1,
        title: 'TV samsung 42"',
        description: "lorem ipsum",
        price: 3000
    },
    {
        id:2,
        title: 'TV samsung 52"',
        description: "lorem ipsum",
        price: 3700
    },
    {
        id:3,
        title: 'TV samsung 62"',
        description: "lorem ipsum",
        price: 4500
    },
    {
        id:4,
        title: 'TV samsung 72"',
        description: "lorem ipsum",
        price: 5000
    },
    {
        id:5,
        title: 'TV samsung 82"',
        description: "lorem ipsum",
        price: 6500
    },
    {
        id:6,
        title: 'TV samsung 42"',
        description: "lorem ipsum",
        price: 3000
    }

]

/* 
Quiero obtener a todos los productos que esten entre 4300 y 8000

*/

/* function filtrarProductosPorRangoPrecios (precio_minimo, precio_maximo){
    const resultado = []
    for(const producto of productos){
        if(producto.price >= precio_minimo && producto.price <= precio_maximo){
            resultado.push(producto)
        }
    }
    return resultado
}

const productos_caros = filtrarProductosPorRangoPrecios(4300, 8000)
console.log(productos_caros) */

const productos_caros = productos.filter(
    (producto) => {
        return producto.price >= 4300 && producto.price <= 8000
    }
)
console.log(productos_caros)

//filtrar por los productos que tengan el id menor a 3