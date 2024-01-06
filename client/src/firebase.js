// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-60f98.firebaseapp.com",
  projectId: "mern-estate-60f98",
  storageBucket: "mern-estate-60f98.appspot.com",
  messagingSenderId: "998628547274",
  appId: "1:998628547274:web:d4e7ffd506073c0c40b233"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);