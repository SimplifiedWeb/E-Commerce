// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { jsonData } from "../src/Data/eccomerceData";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqexSYkkMTRmWD92UEkTr1MJp3qZK5_hE",
  authDomain: "e-commerce-6fa35.firebaseapp.com",
  projectId: "e-commerce-6fa35",
  storageBucket: "e-commerce-6fa35.appspot.com",
  messagingSenderId: "867740422737",
  appId: "1:867740422737:web:c4eb892222bdbc0f681e70",
  measurementId: "G-PE9D96717Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

// Iterate through each item in the jsonData array
// jsonData.forEach(async (item) => {
//   // Add the item to the "Products" collection in Firestore
//   await db.collection("Products").add(item);
//   console.log("running");
// });
