// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtvjmhm8hQep2OLfC_OUcNRb0_AxrMcMc",
  authDomain: "as-autometive-auth.firebaseapp.com",
  projectId: "as-autometive-auth",
  storageBucket: "as-autometive-auth.appspot.com",
  messagingSenderId: "1088185600620",
  appId: "1:1088185600620:web:b04fb260cae41d65fc6649",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)