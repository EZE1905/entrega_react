import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCEpDAE1Wz_cxfu8TOvPZJ-tF8K32Fm0vw",
    authDomain: "e-comerce-react-albornoz.firebaseapp.com",
    projectId: "e-comerce-react-albornoz",
    storageBucket: "e-comerce-react-albornoz.appspot.com",
    messagingSenderId: "929033006454",
    appId: "1:929033006454:web:4e35385de46773fe1f9e57",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
