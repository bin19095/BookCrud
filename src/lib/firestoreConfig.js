// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBoET47D4rhxUjb4k9FgTZVkvASFwrs1-U",
    authDomain: "whats-app-25f45.firebaseapp.com",
    databaseURL: "https://whats-app-25f45.firebaseio.com",
    projectId: "whats-app-25f45",
    storageBucket: "whats-app-25f45.firebasestorage.app",
    messagingSenderId: "41527364478",
    appId: "1:41527364478:web:c2713ac0e72ed02c35812f"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
