import React, { useEffect, useState } from 'react'
import {v4 as uuid} from 'uuid'
import PersonajesStarWars from './Components/PersonajesStarWars/PersonajesStarWars'


/* 
asincronia es una forma de crear funcionalidades donde se busca maximizar la eficiencia de ejecucion de un programa
Como se mide la eficiencia de un programa? Dar la mayor cantidad de outputs en el menor tiempo posible

Normalmente en un lenguaje de programacion cuando se trabaja con asincronia se crean nuevos hilos de ejecucion en paralelo al actual que hace que nuestro programa procese mas rapido. (2 cabezas son mejor que 1)

En javascript no podemos (normalmente) crear otros hilos de procesamiento (Es un lenguaje monohilo). Lo que si se puede hacer y da el "efecto" de ejecucion paralela es delegar procesos que no requieren el hilo de ejecucion y mientras utilizar el hilo de ejecucion ocioso
En criollo: Si vas a hacerte un cafe mientras esperas a que caliente la pava podes ir haciendo las tostadas
Para manejar esas "delegaciones" JS invento las promesas, que es un objeto que tiene un estado interno donde se maneja el "estado" actual de la tarea
Por ejemplo, hagoUnCafe() => pasa a estar en cola de espera, mientras sigo con mi hilo de ejecucion, pero cada tanto reviso si la pava ya calento para seguir con el proceso de hacer el cafe.

*/ 

function App() {

  /* 
  Que funcion de JS nos permite hacer consultas HTTP? 
  - Fetch es una funcion asincronica (Eso quiere decir que devuelve una promesa)
  */

  
  //TODO: Estado de error!! 
  const [loadingUsers, setLoadingUsers] = useState(false)
  const [users, setUsers] = useState(null)

  async function traerUsuarios (){
    setLoadingUsers(true)
    const result = await fetch(
      'https://jsonplaceholder.typicode.com/users', 
      {
        method: "GET" //Indico al servidor que quiero traer informacion
      }
    )
    const body = await result.json()
    setUsers(body.map(
      user => { 
        return {...user, id_generado: uuid()}
      } )
    )
    setLoadingUsers(false)
  }

  //Esto garantiza que traerUsuarios solo se ejecute una vez
  useEffect(//Controla cuantas veces se ejecuta una funcionalidad
    () => { //El efecto (la funcion a controlar)
      traerUsuarios()
    },
    [] //Dependencias, Si este array esta vacio, el efecto (la funcion de arriba) solo se ejecuta 1 vez
  )
  
  console.log('Cargando:', loadingUsers)
  console.log('Usuarios cargados:', users)


  /* 
  Crear un componente <PersonajesStarWars/> donde se llame mediante GET a https://swapi.dev/api/people, y se renderize en la pantalla la lista de pensonajes de star wars que viene de ese endpoint.
  Debe tener un estado interno de personajes
  Debe tener un estado interno para manejar el cargando

  */

  return (
    <div>
      <h1>My Page.com, <span>Hello World</span></h1>
      {
        loadingUsers && <span>Cargando...</span> 
      }
      {
        users && !loadingUsers && users.map(
          (usuario) => {
            return <div key={usuario.id_generado}>
              <h2>Usuario: {usuario.name}</h2>
              <h3>Email: {usuario.email}</h3>
              <span>Telefono: {usuario.telefono}</span>
              <hr />
            </div>
          }
        )
      }

      <PersonajesStarWars/>
    </div>
  )
}

export default App
