/* 
Los componentes son funciones que retornan JSX (html)
Los componentes son REUTILIZABLES
props siempre es un objeto (incluso sino hay, en ese caso es {})
*/
function ProductCard (props){
  console.log(props)
  return (
    <div>
      <h2>{props.title}</h2>
      <span>Precio: ${props.price}</span>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni fugiat eius debitis illo. Sapiente odit doloremque maxime nesciunt excepturi possimus eos eius sit nam natus, et officiis, ad magni vel.</p>
      <button>Comprar</button>
    </div>
  )
}

export default ProductCard