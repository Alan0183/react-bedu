// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCSg-t6AMkcpcCVOKUxlBJOO-ZJAELTD80",
  authDomain: "bedu-e344a.firebaseapp.com",
  projectId: "bedu-e344a",
  storageBucket: "bedu-e344a.firebasestorage.app",
  messagingSenderId: "89198526382",
  appId: "1:89198526382:web:193ec46834c6f2f16a523f"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );