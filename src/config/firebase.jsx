// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDAfj4HdKvgwKOIQbspcJGSb6H_KD6Zzjc",
  authDomain: "ecommerce-by-sabi67.firebaseapp.com",
  projectId: "ecommerce-by-sabi67",
  storageBucket: "ecommerce-by-sabi67.appspot.com",
  messagingSenderId: "65426237111",
  appId: "1:65426237111:web:30922bc0c12691c743cf32",
  measurementId: "G-J23LXQ8P12"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore=getFirestore(app)
export {auth,analytics,firestore}