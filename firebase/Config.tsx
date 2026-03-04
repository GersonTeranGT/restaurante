// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs-YusLEXfU7UNbLihiBkY-y6zg8q5HNI",
  authDomain: "prueba-app-5bb53.firebaseapp.com",
  databaseURL: "https://prueba-app-5bb53-default-rtdb.firebaseio.com",
  projectId: "prueba-app-5bb53",
  storageBucket: "prueba-app-5bb53.firebasestorage.app",
  messagingSenderId: "455799022843",
  appId: "1:455799022843:web:b0c2489d1820716b69fc5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);