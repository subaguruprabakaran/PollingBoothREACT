// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqf8zVXQ8lN5gkOYMe9D1QVl8l7RhHMHk",
  authDomain: "polling-d83d1.firebaseapp.com",
  projectId: "polling-d83d1",
  storageBucket: "polling-d83d1.appspot.com",
  messagingSenderId: "775648637462",
  appId: "1:775648637462:web:1efc0b10bff0ff61873b37",
  measurementId: "G-7ST9TRMDMZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const  auth=getAuth(app)
export const provider = new GoogleAuthProvider

//test comments