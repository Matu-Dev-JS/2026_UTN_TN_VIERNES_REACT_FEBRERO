import React from 'react'
import { useParams, useSearchParams } from 'react-router'

export default function ProductDetailScreen() {
    const products = [
        {
            id: 1,
            title: 'Test',
            price: 1200
        },
        {
            id: 2,
            title: 'Test 2',
            price: 1300
        },
        {
            id: 3,
            title: 'Test 3',
            price: 1400
        }
    ]


    //Nos permite acceder a los parametros de la url en la que estamos
    const {product_id} = useParams()
    const [searchParams] = useSearchParams()
    console.log(searchParams.get('country-code'))

    console.log("Estoy en el producto con id: " + product_id)

    const product_found = products.find(product => Number(product.id) === Number(product_id))
    return (
        <div>
            {
                product_found
                ? <h1>
                    Detalle de producto {product_found.title}
                </h1>
                : <span>
                    Producto con id {product_id} no encontrado
                </span>
            }
            

        </div>
    )
}
