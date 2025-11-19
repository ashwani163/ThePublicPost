// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tpepublicpost.firebaseapp.com",
  projectId: "tpepublicpost",
  storageBucket: "tpepublicpost.firebasestorage.app",
  messagingSenderId: "346201805809",
  appId: "1:346201805809:web:63f3d51623cef75a5e6a50"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);