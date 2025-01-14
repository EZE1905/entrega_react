import React from "react";
import "../componentes/Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2 className="logo-text">Tecno Shop</h2>
                    <br />
                    <p>
                        Tecno Shop es una tienda en línea dedicada a ofrecer los
                        mejores productos tecnológicos al mejor precio.
                    </p>
                    <div className="contact">
                        <span>
                            <i className="fas fa-phone"></i> &nbsp; 351 675-1800
                        </span>
                        <span>
                            <i className="fas fa-envelope"></i> &nbsp;
                            Eze_thomi@hotmail.com
                        </span>
                    </div>
                </div>

                <div className="footer-section links">
                    <h2>Links Rápidos</h2>
                    <br />
                    <ul>
                        <NavLink to="/Inicio">
                            <li>Inicio</li>
                        </NavLink>
                        <NavLink to="/categoria/Celulares">
                            <li>Celulares</li>
                        </NavLink>
                        <NavLink to="/categoria/Notebook">
                            <li>Notebook</li>
                        </NavLink>
                        <NavLink to="/categoria/Auriculares">
                            <li>Auriculares</li>
                        </NavLink>
                        <NavLink to="/Nosotros">
                            <li>Sobre Nosotros</li>
                        </NavLink>
                    </ul>
                </div>

                <div className="footer-section social">
                    <h2>Redes Sociales</h2>
                    <br />
                    <div className="social-links">
                        <a href="https://web.facebook.com/ezequiel.albornoz.330?locale=es_LA">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/eze.pece/">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://github.com/EZE1905">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                &copy; tecnoshop.com | Diseñado por Tecno Shop
            </div>
        </footer>
    );
}
