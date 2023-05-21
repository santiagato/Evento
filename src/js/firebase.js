// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcqmPli6YqU55kv59pokPojUXbAWeVp5E",
  authDomain: "alquiler-f9a38.firebaseapp.com",
  projectId: "alquiler-f9a38",
  storageBucket: "alquiler-f9a38.appspot.com",
  messagingSenderId: "711506937678",
  appId: "1:711506937678:web:080aa9f17a414e7760c01f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);