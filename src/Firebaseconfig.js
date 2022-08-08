// Import the functions you need from the SDKs you need
import {getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrysYJEXaROpZ1Umkm9lvMj5XMVj5dloo",
  authDomain: "todo-376a4.firebaseapp.com",
  projectId: "todo-376a4",
  storageBucket: "todo-376a4.appspot.com",
  messagingSenderId: "315978475205",
  appId: "1:315978475205:web:da594ae6afca6dfcaa32ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getDatabase(app);
export const auth=getAuth();