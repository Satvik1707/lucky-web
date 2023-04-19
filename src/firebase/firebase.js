// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV4q9PfcdUdevWhiXbh3uSmQw6LQXS7_8",
  authDomain: "ggn-2-a11c3.firebaseapp.com",
  projectId: "ggn-2-a11c3",
  storageBucket: "ggn-2-a11c3.appspot.com",
  messagingSenderId: "590191424455",
  appId: "1:590191424455:web:d06573cca6512bd4bc5fe2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);