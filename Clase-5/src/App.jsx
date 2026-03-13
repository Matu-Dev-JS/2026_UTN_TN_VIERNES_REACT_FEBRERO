import React from 'react'
import ProductCard from './Components/ProductCard/ProductCard'
import Counter from './Components/Counter/Counter'


function App() {
  return (
    <div>
      <h1>My Page.com, <span>Hello World</span></h1>
      <h2>hola</h2>
      {/* Instanciar el componente product card */}
      <ProductCard title={'TV Samsung 72"'} price={5000000} />
      <ProductCard title={'TV Samsung 50"'} price={2500000} />
      <ProductCard title={'TV Samsung 32"'} price={600000} />
      <ProductCard title={'TV Samsung 92"'} price={7000000} />
      <ProductCard title={'mesa grande'} price={500000} />

      <Counter initial_value={0} />
      <Counter initial_value={10} />
      <Counter initial_value={20} />
    </div>
  )
}

export default App


/* 
Crear el componente Counter
Tendra una prop que sera initial_value que representara el valor inicial del contador
El html se vera asi:
<div>
  <button>-</button>
  <span>{valor}</span>
  <button>+</button>
</div>

Instanciar 3 Counter en el app.js

La idea es tener 3 contadores independientes, osea cada uno con sus propios bontones
*/

/* 
Tarea para la clase 6:
Hacer un componente llamado <Switch /> 
que tendra un boton "Switch"
Tendra un estado interno que puede ser "On" "Off", incialmente 'Off'
Cuando des click a Switch el estado interno debe alternarse al estado opuesto
Mostrar en un span el valor actual de tu estado interno <span>Estado actual: {internal_state}</span>
*/