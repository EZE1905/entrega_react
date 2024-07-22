import React from "react";
import "./main.css";
import celularesData from "../data/celulares.json";
import notebookData from "../data/notebook.json";
import auricularesData from "../data/auriculares.json";

export default function Main({ contenido }) {
    let content;

    switch (contenido) {
        case "home":
            content = (
                <div className="main">
                    <div className="titulo-contenedor">
                        <h2 className="about-title">Catálogo de Celulares</h2>
                    </div>
                    {celularesData.map((celular, index) => (
                        <div className="card" key={index}>
                            <img
                                className="card-img"
                                src={celular.img}
                                alt={celular.title}
                            />
                            <div className="card-title">{celular.title}</div>
                            <div className="card-text">
                                {celular.description}
                            </div>
                            <button className="btn">Comprar</button>
                        </div>
                    ))}
                </div>
            );
            break;

        case "about":
            content = (
                <div className="main">
                    <div className="titulo-contenedor">
                        <h2 className="about-title">Catálogo de Notebooks</h2>
                    </div>
                    {notebookData.map((notebook, index) => (
                        <div className="card" key={index}>
                            <img
                                className="card-img"
                                src={notebook.img}
                                alt={notebook.title}
                            />
                            <div className="card-title">{notebook.title}</div>
                            <div className="card-text">
                                {notebook.description}
                            </div>
                            <button className="btn">Comprar</button>
                        </div>
                    ))}
                </div>
            );
            break;

        case "contact":
            content = (
                <div className="main">
                    <div className="titulo-contenedor">
                        <h2 className="about-title">Catálogo de Auriculares</h2>
                    </div>
                    {auricularesData.map((auriculares, index) => (
                        <div className="card" key={index}>
                            <img
                                className="card-img"
                                src={auriculares.img}
                                alt={auriculares.title}
                            />
                            <div className="card-title">
                                {auriculares.title}
                            </div>
                            <div className="card-text">
                                {auriculares.description}
                            </div>
                            <button className="btn">Comprar</button>
                        </div>
                    ))}
                </div>
            );
            break;

        default:
            content = (
                <div className="main">
                    <div className="about">
                        <h2 className="about-title">Sobre Nosotros</h2>
                        <p>
                            Bienvenido a Tecno Shop, tu tienda de tecnología de
                            confianza. Ofrecemos una amplia gama de productos
                            tecnológicos de alta calidad para satisfacer todas
                            tus necesidades. Nuestro equipo está dedicado a
                            proporcionar el mejor servicio y soporte a nuestros
                            clientes.
                        </p>
                        <p>
                            Nuestra misión es brindar una experiencia de compra
                            excepcional a nuestros clientes. Nos enorgullece
                            brindar soluciones tecnológicas de alta calidad para
                            satisfacer las necesidades de nuestros clientes.
                        </p>
                        <p>
                            Contáctanos para obtener más información sobre
                            nuestros productos y promociones especiales. Estamos
                            comprometidos en brindar una experiencia de compra
                            excepcional a nuestros clientes.
                        </p>
                        <p>
                            ¡Gracias por tu tiempo y comparte nuestra
                            experiencia!
                        </p>
                        <p>
                            -Equipo de Tecno Shop
                            <br />
                            -Teléfono: (351) 675-1800
                            <br />
                            -Email: eze_thomi@hotmail.com
                        </p>
                    </div>
                </div>
            );
    }

    return content;
}
