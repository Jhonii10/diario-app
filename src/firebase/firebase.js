// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHTt8eFQY1n7XTinWHa9H5Nxq5MJSctdM",
  authDomain: "fir-j10.firebaseapp.com",
  projectId: "fir-j10",
  storageBucket: "fir-j10.appspot.com",
  messagingSenderId: "727704222867",
  appId: "1:727704222867:web:883ea3f9aa610cba60a166",
  measurementId: "G-4YN4JE2N8M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)