// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4DBMTmG79--GKixRc_PmCh0BxpKzHdTQ",
  authDomain: "inventory-management-6ed0d.firebaseapp.com",
  projectId: "inventory-management-6ed0d",
  storageBucket: "inventory-management-6ed0d.appspot.com",
  messagingSenderId: "586677870976",
  appId: "1:586677870976:web:433afa5c9d8a22ebd8a165",
  measurementId: "G-BQ825XBZQZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}