import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase";
import 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyB-PfV0jkAoUD16v3BGMvmFhOhxHR8pWSo",
  authDomain: "controlefin-b1c5f.firebaseapp.com",
  projectId: "controlefin-b1c5f",
  storageBucket: "controlefin-b1c5f.appspot.com",
  messagingSenderId: "671091603871",
  appId: "1:671091603871:web:b2fc71b033559a9c2325aa",
  measurementId: "G-GEFF6CQ3CD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const database= firebase.firestore()

export default database;