import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import {getMessaging} from 'firebase/messaging';
const app = firebase.initializeApp({
  apiKey: "AIzaSyDX6bRcQou7-vmH1Dqz3CiZvYHBVKXgJM8",
  authDomain: "food-order-app-a370b.firebaseapp.com",
  projectId: "food-order-app-a370b",
  storageBucket: "food-order-app-a370b.appspot.com",
  messagingSenderId: "568148409619",
  appId: "1:568148409619:web:3731f14a9c6d7e7f7aaee6",
  measurementId: "G-TJRZFWVHEQ"
});


export const auth = getAuth(app);
export default app;
export const db = getFirestore(app);
export const messaging = getMessaging(app);