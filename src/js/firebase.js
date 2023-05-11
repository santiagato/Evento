// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getFirestore }  from  'firebase/firestore' ;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJnbc9GmV-MRlJw945AzNUXa3rqvH5ReU",
  authDomain: "aprendizaje-54970.firebaseapp.com",
  projectId: "aprendizaje-54970",
  storageBucket: "aprendizaje-54970.appspot.com",
  messagingSenderId: "42095547031",
  appId: "1:42095547031:web:4f6312ba3806dd9676cfd2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db= getFirestore(app);