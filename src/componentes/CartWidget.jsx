import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.css";

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <FaShoppingCart size={24} />
            <span className="cart-count">5</span> {/* Número hardcodeado */}
        </div>
    );
};

export default CartWidget;
