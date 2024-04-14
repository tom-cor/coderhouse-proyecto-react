// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl_xFpu-K_8nptOKKiQBd9aYEEg8gvHT4",
  authDomain: "pepelindo-esquiador.firebaseapp.com",
  projectId: "pepelindo-esquiador",
  storageBucket: "pepelindo-esquiador.appspot.com",
  messagingSenderId: "199297593667",
  appId: "1:199297593667:web:afe180a00b496ae1c87ff6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)