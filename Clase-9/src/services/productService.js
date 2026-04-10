import {collection, getDocs} from 'firebase/firestore'
import { db } from '../config/firebase'

export async function getProductsList(){
    //Selecciono la coleccion de productos de mi DB
    const collection_selected =  collection(
        db,
        'productos'
    )
    //Obtengo las referencias de los documentos de la coleccion
    const snapshot = await getDocs(
        collection_selected
    )
    const productos = snapshot.docs.map(
        (doc) => {
            return {
                id: doc.id,
                ...doc.data() //Este metodo te trae la info de cada documento
            }
        }
    )
    console.log(productos)
    return productos
}