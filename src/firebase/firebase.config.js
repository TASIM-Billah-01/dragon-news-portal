// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBScqM-8Gf82caNXJ3cpbIi-DBS89nuE0E",
  authDomain: "dragon-news-recap-2b32c.firebaseapp.com",
  projectId: "dragon-news-recap-2b32c",
  storageBucket: "dragon-news-recap-2b32c.firebasestorage.app",
  messagingSenderId: "672319887658",
  appId: "1:672319887658:web:52b607adbed8bcd6602653"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)