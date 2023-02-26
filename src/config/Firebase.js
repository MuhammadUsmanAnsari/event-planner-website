// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
import { getFirestore} from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuztWM-UOa2Gwy3UK-uXlWYeSNqh618Ks",
  authDomain: "event-planner-3df59.firebaseapp.com",
  projectId: "event-planner-3df59",
  storageBucket: "event-planner-3df59.appspot.com",
  messagingSenderId: "641868482721",
  appId: "1:641868482721:web:9a84b69dbeeaed6ca288e0",
  measurementId: "G-L9P6ZXCYQ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export {analytics,auth,firestore}