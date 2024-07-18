import React from "react";
import Navbar from "./componentes/navbar.jsx";
import Main from "./componentes/main.jsx";
import "./App.css";
import { useState } from "react";

function App() {
    const [productos, setProductos] = useState(true);

    const ocultar = () => setProductos(false);
    const mostrar = () => setProductos(true);

    return (
        <>
            <div className="App">
                <Navbar />
                <div className="contenedor-btn">
                    <button className="btn-accion" onClick={ocultar}>
                        Ocultar
                    </button>
                    <button className="btn-accion" onClick={mostrar}>
                        Mostrar
                    </button>
                    <div className="busqueda">
                        <input type="text" placeholder="Buscar..." />
                    </div>
                </div>
                <main>{productos ? <Main /> : null}</main>
            </div>
        </>
    );
}

export default App;
