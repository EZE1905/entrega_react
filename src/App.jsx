import React from "react";
import { useState } from "react";
import Navbar from "./componentes/navbar.jsx";
import Main from "./componentes/main.jsx";
import Footer from "./componentes/Footer.jsx";
import "./App.css";

function App() {
    const [contenido, setContenido] = useState("home");

    return (
        <>
            <div className="App">
                <Navbar setContenido={setContenido} />
                <main>
                    <Main contenido={contenido} />
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;
