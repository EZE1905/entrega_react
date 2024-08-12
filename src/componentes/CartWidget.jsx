import { React, useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import "./CartWidget.css";

const CartWidget = () => {
    const { Cart } = useContext(CartContext);

    return (
        <div className="cart-widget">
            <FaShoppingCart size={24} />
            <span className="cart-count">{Cart.length}</span>
        </div>
    );
};

export default CartWidget;
