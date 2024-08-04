import { React, useState, useEffect } from "react";
import "../App.css";
import productos from "../data/productos.json";
import { useParams, Link } from "react-router-dom";
export default function Detail() {
    const [product, setproduct] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos);
            }, 1000);
        });

        myPromise.then((response) => {
            const item = response.find((product) => product.id === Number(id));
            setproduct(item);
        });
    }, [id]);

    if (!product) {
        return <h2>Producto no encontrado</h2>;
    }

    return (
        <div className="contenedor-detail">
            <img src={product.img} alt={product.title} className="detail-img" />
            <div className="contenedor-derecha">
                <h1 className="detail-title">{product.title}</h1>
                <p className="price-description">{product.description}</p>
                <p className="price-description">Precio: ${product.price}</p>
                <div className="contenedor-btn">
                    <Link to="/" className="btn-comprar">
                        Comprar
                    </Link>
                    <Link to="/" className="btn-volver">
                        Volver
                    </Link>
                </div>
            </div>
        </div>
    );
}
