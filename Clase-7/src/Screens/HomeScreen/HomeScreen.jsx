import React from 'react'

export default function HomeScreen() {
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
    return (
        <div>
            <h1>Mis productos</h1>
            <div>
                {products.map(product => <div key={product.id}>
                    <h2>{product.title}</h2>
                    <span>Precio: ${product.price}</span>
                    <br/>
                    <a href={'/product/' + product.id }>Ver detalle</a>
                </div>)}
            </div>
        </div>
    )
}
