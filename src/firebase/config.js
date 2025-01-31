 //config.js
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCY78HMu_jii9lxbWsbMGaH9zAdVl0FStM",
  authDomain: "proyecto-final-react-281ec.firebaseapp.com",
  projectId: "proyecto-final-react-281ec",
  storageBucket: "proyecto-final-react-281ec.firebasestorage.app",
  messagingSenderId: "514228980349",
  appId: "1:514228980349:web:1617cb51a37b0eacaa7f14",
  measurementId: "G-CTFL3ZPJ8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app }; 