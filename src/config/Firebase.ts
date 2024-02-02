// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA21CwT1ZxsA9Fpoql-i9jyLe7u_aGw7HY",
    authDomain: "dumpbin-ee96e.firebaseapp.com",
    projectId: "dumpbin-ee96e",
    storageBucket: "dumpbin-ee96e.appspot.com",
    messagingSenderId: "211722749156",
    appId: "1:211722749156:web:ef47d3e041347c2b50d8f1",
    measurementId: "G-CJ6G5BCY8P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { app, analytics, db }