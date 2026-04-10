import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { getProductsList } from '../../services/productService'
import useProducts from '../../hooks/useProducts'

export default function HomeScreen() {
    const {products, loading, error} = useProducts()
    
    return (
        <div>
            <h1>Mis productos</h1>
            <div>
                {
                    loading && <span>Cargando...</span>
                }
                {!loading && products && products.map(product => <div key={product.id}>
                    <h2>{product.titulo}</h2>
                    <span>Precio: ${product.precio}</span>
                    <br/>
                    <Link to={'/product/' + product.id }>Ver detalle</Link>
                </div>)}
                {
                    !loading && error && <span>Error al obtener lista de productos</span>
                }
            </div>
        </div>
    )
}
