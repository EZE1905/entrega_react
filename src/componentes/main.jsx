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
                    <h1>Contenido no encontrado</h1>
                </div>
            );
    }

    return content;
}
