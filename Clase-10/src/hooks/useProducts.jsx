import { useEffect, useState } from "react"
import { getProductsList } from "../services/productService"

function useProducts() {
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function loadProducts() {
        try {
            setError(null)
            setLoading(true)
            const response = await getProductsList()
            setProducts(response)
        }
        catch (error) {
            console.error('Obtener la lista de productos de firestore fallo', error)
            setError(error)
        }
        finally {
            setLoading(false)
        }
    }

    //Controlar la cantidad de veces que ese ejecuta una funcionalidad
    useEffect(
        () => {//Efecto
            loadProducts()
        },
        []//lista de dependencias, si esta vacia solo ejecuta una vez
    )
    return {
        products,
        loading,
        error
    }
}

export default useProducts