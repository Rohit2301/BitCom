// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD78QF_8CkviWPTThXbNPJ2rX_2BLJwhvE",
  authDomain: "bitcom-632cb.firebaseapp.com",
  projectId: "bitcom-632cb",
  storageBucket: "bitcom-632cb.appspot.com",
  messagingSenderId: "644251045371",
  appId: "1:644251045371:web:31145948959c65acc9cf5e",
  measurementId: "G-ERMF60W78Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
