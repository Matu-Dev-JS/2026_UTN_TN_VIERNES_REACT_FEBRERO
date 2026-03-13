/* 
Los componentes son funciones que retornan JSX (html)
Los componentes son REUTILIZABLES
props siempre es un objeto (incluso sino hay, en ese caso es {})
*/
import './ProductCard.css'
function ProductCard ({title, price}){

  return (
    <div>
        <h2 className='product-card__title'>{title}</h2>
        <span>Precio: ${price}</span>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni fugiat eius debitis illo. Sapiente odit doloremque maxime nesciunt excepturi possimus eos eius sit nam natus, et officiis, ad magni vel.</p>
        <button>Comprar</button>
        
    </div>
  )
}

export default ProductCard