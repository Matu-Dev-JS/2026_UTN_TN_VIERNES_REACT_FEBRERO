import React from 'react'
import ProductCard from './Components/ProductCard/ProductCard'

function App() {
  return (
    <div>
      <h1>My Page.com, <span>Hello World</span></h1>
      <h2>hola</h2>
      {/* Instanciar el componente product card */}
      <ProductCard title={'TV Samsung 72"'} price={5000000}/>
      <ProductCard title={'TV Samsung 50"'} price={2500000}/>
      <ProductCard title={'TV Samsung 32"'} price={600000}/>
      <ProductCard  title={'TV Samsung 92"'} price={7000000}/>
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
*/

