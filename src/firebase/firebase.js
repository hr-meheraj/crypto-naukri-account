// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo-eBVvJVLpSmHmvSB3HdK8LLFoJ9bVKU",
  authDomain: "crypto-naukri-account.firebaseapp.com",
  projectId: "crypto-naukri-account",
  storageBucket: "crypto-naukri-account.appspot.com",
  messagingSenderId: "545838367406",
  appId: "1:545838367406:web:25b1b90d1404399f78a33f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
