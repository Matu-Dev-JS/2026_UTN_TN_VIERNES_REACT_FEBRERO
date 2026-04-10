
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
    /* 
    Crea un estado interno que trackea el cambio de valores de la URL del navegador 
    Tiene que encerrar a toda la APP porque luego los subcomponentes hijos van a utilizar este estado interno
    */
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
