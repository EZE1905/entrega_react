import { React, useState, useEffect } from "react";
import "./main.css";
import productos from "../data/productos.json";
import { useParams, Link } from "react-router-dom";
import bannerImage from "../assets/banner.png";

export default function Main() {
    const [products, setproducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoriaid } = useParams();

    useEffect(() => {
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos);
                setLoading(false);
            }, 2000);
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

    if (loading) {
        return (
            <div className="loading">
                <h1 className="loading-text">Cargando Productos...</h1>
            </div>
        );
    }

    return (
        <div className="main">
            <div className="titulo-contenedor">
                {categoriaid ? (
                    <h2 className="about-title">Catálogo de {categoriaid}</h2>
                ) : (
                    <div className="contenedor">
                        <img src={bannerImage} alt="" className="banner" />
                        <h2 className="about-title">Catálogo Completo</h2>
                    </div>
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
