// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API,
  authDomain: "cabshare-14491.firebaseapp.com",
  projectId: "cabshare-14491",
  storageBucket: "cabshare-14491.firebasestorage.app",
  messagingSenderId: "156449845303",
  appId: "1:156449845303:web:8cf8c15d2b2c5f59914fb2",
  measurementId: "G-JDN9P03YSG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
