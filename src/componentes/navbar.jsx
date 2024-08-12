import "./navbar.css";
import CartWidget from "./CartWidget";
import { MdLaptopChromebook } from "react-icons/md";
import { LuSmartphone } from "react-icons/lu";
import { FaHeadphones } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="contenedor-titulo">
                <h1>
                    <NavLink to="/Inicio" className="titulo-principal">
                        Tecno Shop{" "}
                    </NavLink>
                    <span>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/552/552489.png"
                            alt=""
                            className="logo"
                        />
                    </span>
                </h1>
            </div>
            <ul className="navbar-menu">
                <li className="navbar-item">
                    <NavLink to="/categoria/Celulares">
                        <LuSmartphone />
                    </NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/categoria/Notebook">
                        <MdLaptopChromebook />
                    </NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/categoria/Auriculares">
                        <FaHeadphones />
                    </NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/nosotros">
                        <IoPeopleSharp />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/carrito">
                        <CartWidget />
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}
