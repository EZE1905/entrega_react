import { React, useState } from "react";
import Navbar from "./componentes/navbar.jsx";
import Main from "./componentes/main.jsx";
import Footer from "./componentes/Footer.jsx";
import Nosotros from "./componentes/nosotros.jsx";
import Detail from "./componentes/Detail.jsx";
import Carrito from "./componentes/Carrito.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartContext } from "./context/CartContext.jsx";
import "./App.css";

function App() {
    const [Cart, setCart] = useState([]);

    return (
        <>
            <CartContext.Provider value={{ Cart, setCart }}>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/Inicio" element={<Main />} />
                        <Route
                            path="/categoria/:categoriaid"
                            element={<Main />}
                        />
                        <Route path="/Nosotros" element={<Nosotros />} />
                        <Route path="/Carrito" element={<Carrito />} />
                        <Route path="/Detail/:id" element={<Detail />} />
                        <Route path="*" element={<Main />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </CartContext.Provider>
        </>
    );
}

export default App;
