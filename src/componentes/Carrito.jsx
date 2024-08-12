import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Carrito() {
    const { Cart, setCart } = useContext(CartContext);

    if (Cart.length === 0) {
        return <p>No hay productos en el carrito</p>;
    }

    const vaciarCart = () => {
        setCart([]);
    };

    return (
        <div>
            <h1>Carrito</h1>

            <ul>
                {Cart.map((item, index) => (
                    <li key={index}>
                        {item.title} / ${item.price}
                    </li>
                ))}
            </ul>

            <p>Total: ${Cart.reduce((acc, item) => acc + item.price, 0)}</p>

            <button>Comprar</button>

            <button onClick={() => vaciarCart()}>Vaciar</button>

            <Link to="/">Volver</Link>
        </div>
    );
}
