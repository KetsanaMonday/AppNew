import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from "firebase/app";
import { getAuth,getReactNativePersistence,initializeAuth} from "firebase/auth";

import { getFirestore } from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAV--C28ldkoc3BORPVKEEJINon9c3M7W8",
  authDomain: "starlit-lotus-440808-u3.firebaseapp.com",
  projectId: "starlit-lotus-440808-u3",
  storageBucket: "starlit-lotus-440808-u3.firebasestorage.app",
  messagingSenderId: "962025942251",
  appId: "1:962025942251:web:5df09e0834f02bc96fa2ae",
  measurementId: "G-33Q5W7DHDS"
};

export   const FIREBASE_APP = initializeApp(firebaseConfig);
export const AUTH = initializeAuth(FIREBASE_APP, {
   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
 });
 export const analytics = getAnalytics(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB= getFirestore(FIREBASE_APP);