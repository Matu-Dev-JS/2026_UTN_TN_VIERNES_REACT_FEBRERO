// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLAIR1DwPn1vReGKolAJFs0hhGPvR5Ujk",
  authDomain: "tn-react-abril.firebaseapp.com",
  projectId: "tn-react-abril",
  storageBucket: "tn-react-abril.firebasestorage.app",
  messagingSenderId: "934596909099",
  appId: "1:934596909099:web:3b305a166bfdc3e968f26e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Instancia de comunicacion con el servicio firestore con la app de firebase
const db = getFirestore(app)

export {db}
export default app
