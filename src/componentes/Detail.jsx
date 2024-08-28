import { React, useState, useEffect, useContext } from "react";
import "../App.css";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { getFirestore, getDoc, doc } from "firebase/firestore";
export default function Detail() {
    const [product, setproduct] = useState([]);

    const { id } = useParams();

    const { Cart, setCart } = useContext(CartContext);

    const addToCart = () => {
        const newItem = {
            img: product.img,
            title: product.title,
            price: product.price,
        };
        setCart([...Cart, newItem]);
    };

    useEffect(() => {
        const db = getFirestore();
        const refdoc = doc(db, "items", id);

        getDoc(refdoc).then((snapshot) => {
            if (snapshot.exists()) {
                setproduct({ id: snapshot.id, ...snapshot.data() });
            }
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
                <p className="price-description">USD$ {product.price}</p>
                <div className="contenedor-btn">
                    <button onClick={addToCart} className="btn-comprar">
                        Comprar
                    </button>
                    <Link to="/" className="btn-volver">
                        Volver
                    </Link>
                </div>
            </div>
        </div>
    );
}
