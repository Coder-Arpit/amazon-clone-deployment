// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import getAuth to access auth object
import { getFirestore } from "firebase/firestore"; // Import getFirestore for Firestore
require('firebase/auth');
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSjcNMNdeeIV3Nx6Zru6UO2TskUiK3blk",
  authDomain: "clone-cc079.firebaseapp.com",
  projectId: "clone-cc079",
  storageBucket: "clone-cc079.appspot.com",
  messagingSenderId: "533830935681",
  appId: "1:533830935681:web:a124f2d43e7cbbc77fd980",
  measurementId: "G-E644HX51EN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Access auth object using getAuth function
const db = getFirestore(app); // Access Firestore object using getFirestore function

export { db, auth };