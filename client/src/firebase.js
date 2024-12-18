// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate17.firebaseapp.com",
  projectId: "mern-estate17",
  storageBucket: "mern-estate17.firebasestorage.app",
  messagingSenderId: "809121253311",
  appId: "1:809121253311:web:0dd6f94c6e27b14639430a"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);