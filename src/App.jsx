import React from "react";
import Navbar from "./componentes/navbar.jsx";
import Main from "./componentes/main.jsx";
import Footer from "./componentes/Footer.jsx";
import Nosotros from "./componentes/nosotros.jsx";
import Detail from "./componentes/Detail.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/Inicio" element={<Main />} />
                    <Route path="/categoria/:categoriaid" element={<Main />} />
                    <Route path="/Nosotros" element={<Nosotros />} />
                    <Route path="/Detail/:id" element={<Detail />} />
                    <Route path="*" element={<Main />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
