import React from "react";
import "./navbar.css";
import CartWidget from "./CartWidget";

export default function Navbar() {
    return (
        <div className="navbar">
            <h1>Tecno Shop</h1>
            <ul className="navbar-menu">
                <li className="navbar-item">
                    <a href="#home">Home</a>
                </li>
                <li className="navbar-item">
                    <a href="#about">About</a>
                </li>
                <li className="navbar-item">
                    <a href="#services">Services</a>
                </li>
                <li className="navbar-item">
                    <a href="#contact">Contact</a>
                </li>
                <li className="navbar-item">
                    <CartWidget />
                </li>
            </ul>
        </div>
    );
}
