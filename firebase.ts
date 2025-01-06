import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQLeAUhIr4KYKRJBm83vv3FFW4c9e1RqM",
  authDomain: "kono-website-5cf52.firebaseapp.com",
  projectId: "kono-website-5cf52",
  storageBucket: "kono-website-5cf52.firebasestorage.app",
  messagingSenderId: "857143306454",
  appId: "1:857143306454:web:ded81bd8fd64e7496f8177",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
