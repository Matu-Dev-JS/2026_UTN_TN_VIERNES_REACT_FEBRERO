import React, { useEffect, useState } from 'react'
import useProducts from '../../hooks/useProducts'
import ProductCard from '../../Components/ProductCard/ProductCard'
import './HomeScreen.css'

export default function HomeScreen() {
    const {products, loading, error} = useProducts()
    
    return (
        <div className="home-container">
            <h1 className="home-title">Mis productos</h1>
            <div className="product-grid">
                {
                    loading && <span className="loading-span">Cargando...</span>
                }
                {!loading && products && products.map(product => (
                    <ProductCard 
                        key={product.id} 
                        id={product.id}
                        titulo={product.titulo} 
                        precio={product.precio} 
                    />
                ))}
                {
                    !loading && error && <span className="error-span">Error al obtener lista de productos</span>
                }
            </div>
        </div>
    )
}
