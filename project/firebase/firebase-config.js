// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3ZXuO7YVwi7zZPz4vJZ5e8iZUrimc3GU",
  authDomain: "backend-tina-cake.firebaseapp.com",
  projectId: "backend-tina-cake",
  storageBucket: "backend-tina-cake.appspot.com",
  messagingSenderId: "455462527124",
  appId: "1:455462527124:web:77305d8ea18be0377ed481",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
