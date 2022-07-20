
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC304Lv36kXduaQEUoE2sjWod-r9Wpfgis",
  authDomain: "ecommerce-react-app-a71ac.firebaseapp.com",
  projectId: "ecommerce-react-app-a71ac",
  storageBucket: "ecommerce-react-app-a71ac.appspot.com",
  messagingSenderId: "1067785952262",
  appId: "1:1067785952262:web:6e752bd89d59bb31a3b787"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const bdd =  getFirestore(app)

