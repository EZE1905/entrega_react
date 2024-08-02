import { React, useState, useEffect } from "react";
import "./main.css";
import productos from "../data/productos.json";
import { useParams, Link } from "react-router-dom";

export default function Main() {
    const [products, setproducts] = useState([]);

    const { categoriaid } = useParams();

    useEffect(() => {
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos);
            }, 1000);
        });

        myPromise.then((response) => {
            if (!categoriaid) {
                setproducts(response);
            } else {
                const filteredProducts = response.filter(
                    (product) => product.categoria === categoriaid
                );
                setproducts(filteredProducts);
            }
        });
    }, [categoriaid]);

    return (
        <div className="main">
            <div className="titulo-contenedor">
                {categoriaid ? (
                    <h2 className="about-title">Catálogo de {categoriaid}</h2>
                ) : (
                    <h2 className="about-title">Catálogo Completo</h2>
                )}
            </div>
            {products.map((products, index) => (
                <div className="card" key={index}>
                    <img
                        className="card-img"
                        src={products.img}
                        alt={products.title}
                    />
                    <div className="card-title">{products.title}</div>
                    <div className="card-text">{products.description}</div>
                    <Link to={`/Detail/${products.id}`}>
                        <button className="btn">Ver Más</button>
                    </Link>
                </div>
            ))}
        </div>
    );
}
