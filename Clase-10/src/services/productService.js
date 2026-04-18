import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'
import { db } from '../config/firebase'

export async function getProductsList() {
    //Selecciono la coleccion de productos de mi DB
    const collection_selected = collection(
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

/* Obtener un producto por ID usando FIREBASE FIRESTORE */
/* 
Con esto ya pueden armar la pantalla de detalle
*/
export async function getProductById(product_id) {
    const doc_to_find = doc(db, 'productos', product_id)
    const snapshot = await getDoc(doc_to_find)
    if (!snapshot.exists()) {
        return null
    }
    const product_found = {
        id: snapshot.id,
        ...snapshot.data()
    }
    return product_found
}

/* 
Queremos crear un producto
Extrae la info de un formulario y llama a esta funcion
*/

export async function createProduct(titulo, precio) {
    const new_product = {
        titulo,
        precio
    }
    const product_ref = await addDoc(collection(db, 'productos'), new_product)
    return product_ref.id
}

/* 
Queres eliminar un producto por su ID
*/
export async function deleteProductById(product_id) {
    const document_to_delete = doc(db, 'productos', product_id)
    await deleteDoc(document_to_delete)
}

/* 
Quiero actualizar algun dato del producto por su ID
*/
export async function updateProductById(product_id, update_data) {
    const product_to_update_ref = doc(db, 'productos', product_id)
    await updateDoc(product_to_update_ref, update_data)
}

//updateProductById('npU6LiCOZFuPqX0jYlup', { titulo: "Mesa grande de madera oscura" })
/* 
Forma correcta de trabajo con firebase
- Una coleccion de usuarios (firebase te genera una)
- Implementar un login en la app
*/