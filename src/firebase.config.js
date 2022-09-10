// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBduhgBN5s52Y1IqH1eyjWzfM3D6iAxvlg",
  authDomain: "website-479f7.firebaseapp.com",
  projectId: "website-479f7",
  storageBucket: "website-479f7.appspot.com",
  messagingSenderId: "265375472885",
  appId: "1:265375472885:web:20ab82945d1b72f150f9bc",
  measurementId: "G-F5LXTKN229"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();