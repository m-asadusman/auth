import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDI7gKQITRECI9Dtp5g4GR-6DwnyHdyO-4",
  authDomain: "prac-aaad6.firebaseapp.com",
  projectId: "prac-aaad6",
  storageBucket: "prac-aaad6.firebasestorage.app",
  messagingSenderId: "248822569370",
  appId: "1:248822569370:web:b8e28ec174ae8a60aa8223"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
