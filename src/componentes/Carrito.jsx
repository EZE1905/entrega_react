import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./Carrito.css";

export default function Carrito() {
    const { Cart, setCart } = useContext(CartContext);

    if (Cart.length === 0) {
        return (
            <>
                <div className="contenedor-vacio">
                    <p className="carrito-vacio">
                        ¡Empezá un carrito de compras!
                    </p>
                    <Link className="volver" to="/">
                        Volver
                    </Link>
                </div>
            </>
        );
    }

    const vaciarCart = () => {
        setCart([]);
    };

    return (
        <div className="contenedor-carrito">
            <div className="contenedor-izquierda-carrito">
                <ul>
                    {Cart.map((item, index) => (
                        <li key={index} className="item">
                            <img src={item.img} alt="" className="img" />
                            <h2 className="title">{item.title}</h2>
                            <p className="price">USD${item.price}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="contenedor-derecha-carrito">
                <p className="total">
                    Total: USD${Cart.reduce((acc, item) => acc + item.price, 0)}
                </p>

                <Link to="/Checkout" className="comprar">
                    Finalizar compra
                </Link>

                <button className="vaciar" onClick={() => vaciarCart()}>
                    Vaciar
                </button>

                <Link className="volver" to="/">
                    Volver
                </Link>
            </div>
        </div>
    );
}
