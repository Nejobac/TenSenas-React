import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {HomePage } from "./pages";

const App=()=>{
    return(
        /* Desde el navegador */
        <BrowserRouter>
        {/* vamos a tener distinas rutas */}
            <Routes>
                {/* Especificamos cada ruta */}
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
/* si deseo exportar más de un componente trengo que quitar el default y poner los componentes entre llaves{} */
export default App;