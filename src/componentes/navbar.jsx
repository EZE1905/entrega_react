import React, { useState } from "react";
import "./navbar.css";
import CartWidget from "./CartWidget";
import { MdLaptopChromebook } from "react-icons/md";
import { LuSmartphone } from "react-icons/lu";
import { FaHeadphones } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";

export default function Navbar({ setContenido }) {
    return (
        <div className="navbar">
            <h1>
                Tecno Shop{" "}
                <span>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/552/552489.png"
                        alt=""
                        className="logo"
                    />
                </span>
            </h1>
            <ul className="navbar-menu">
                <li className="navbar-item">
                    <a onClick={() => setContenido("home")} href="#home">
                        <IoPeopleSharp />
                    </a>
                </li>
                <li className="navbar-item">
                    <a onClick={() => setContenido("about")} href="#about">
                        <MdLaptopChromebook />
                    </a>
                </li>
                <li className="navbar-item">
                    <a
                        onClick={() => setContenido("services")}
                        href="#services">
                        <LuSmartphone />
                    </a>
                </li>
                <li className="navbar-item">
                    <a onClick={() => setContenido("contact")} href="#contact">
                        <FaHeadphones />
                    </a>
                </li>
                <li className="navbar-item">
                    <CartWidget />
                </li>
            </ul>
        </div>
    );
}
