// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-property-dc4fa.firebaseapp.com",
  projectId: "mern-property-dc4fa",
  storageBucket: "mern-property-dc4fa.appspot.com",
  messagingSenderId: "176072949506",
  appId: "1:176072949506:web:187c938af863be65e18c1b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
