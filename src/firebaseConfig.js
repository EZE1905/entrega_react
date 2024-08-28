// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase que obtuviste de Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyCEpDAE1Wz_cxfu8TOvPZJ-tF8K32Fm0vw",
    authDomain: "e-comerce-react-albornoz.firebaseapp.com",
    projectId: "e-comerce-react-albornoz",
    storageBucket: "e-comerce-react-albornoz.appspot.com",
    messagingSenderId: "929033006454",
    appId: "1:929033006454:web:4e35385de46773fe1f9e57",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
