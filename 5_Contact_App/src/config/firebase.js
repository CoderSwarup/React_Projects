// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: YOUR_FIREBASE_DETAILS,
  authDomain: YOUR_FIREBASE_DETAILS,
  projectId: YOUR_FIREBASE_DETAILS,
  storageBucket: YOUR_FIREBASE_DETAILS,
  messagingSenderId: YOUR_FIREBASE_DETAILS,
  appId: YOUR_FIREBASE_DETAILS,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
