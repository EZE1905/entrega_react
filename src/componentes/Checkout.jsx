import React, { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { CartContext } from "../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import "./Checkout.css";

const Checkout = () => {
    const { Cart, setCart } = useContext(CartContext);

    const [pedidoid, setpedidoid] = useState("");

    const { register, handleSubmit } = useForm();

    const enviar = async (data) => {
        const pedido = {
            cliente: data,
            productos: Cart,
            total: Cart.reduce((acc, item) => acc + item.price, 0),
        };

        // Añadir documento a la colección 'pedidos' en Firestore
        const pedidosCollection = collection(db, "pedidos");
        addDoc(pedidosCollection, pedido).then((doc) => {
            setpedidoid(doc.id);
        });

        // Limpiar el carrito después de la compra
        setCart([]);
    };

    if (pedidoid) {
        return (
            <div className="form-container">
                <h1 className="form-title">Compra Realizada</h1>
                <p className="form-p">
                    Tu pedido {pedidoid} se ha enviado con exito!
                </p>
                <p className="form-p">Gracias por tu compra!</p>
                <p className="form-p">¡Vuelve pronto!</p>
                <p className="form-p">Equipo de Tecno Shop</p>
                <p className="form-p">Teléfono: (351) 675-1800</p>
                <p className="form-p">Email: ezethomigoku@gmail.com</p>
            </div>
        );
    }

    return (
        <div className="form-container">
            <h1 className="form-title">Finalizar Compra</h1>
            <form className="form" onSubmit={handleSubmit(enviar)}>
                <input
                    className="form-input"
                    type="text"
                    placeholder="nombre"
                    {...register("nombre")}
                />
                <input
                    className="form-input"
                    type="text"
                    placeholder="email"
                    {...register("email")}
                />
                <input
                    className="form-input"
                    type="text"
                    placeholder="telefono"
                    {...register("telefono")}
                />
                <input
                    className="form-input"
                    type="text"
                    placeholder="direccion"
                    {...register("direccion")}
                />
                <input className="form-submit" type="submit" value="Comprar" />
            </form>
        </div>
    );
};

export default Checkout;
