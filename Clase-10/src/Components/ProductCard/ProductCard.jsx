import React from 'react'
import { Link } from 'react-router'
import './ProductCard.css'

function ProductCard ({id, titulo, precio}){

  return (
    <Link to={'/product/' + id} className='product-card'>
        <div className='product-card__image-placeholder'></div>
        <div className='product-card__info'>
            <span className='product-card__price'>$ {precio}</span>
            <h2 className='product-card__title'>{titulo}</h2>
        </div>
    </Link>
  )
}

export default ProductCard