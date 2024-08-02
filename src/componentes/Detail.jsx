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
            <h1>{product.name}</h1>
            <img src={product.img} alt={product.name} />
            <p>{product.description}</p>
            <p className="price">${product.price}</p>
            <Link to="/">Volver</Link>
        </div>
    );
}
