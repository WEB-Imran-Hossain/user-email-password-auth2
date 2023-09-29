// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANhoJmHfI0txa2XKPf7q0KBanVc3Q2-mE",
  authDomain: "user-email-password-auth2.firebaseapp.com",
  projectId: "user-email-password-auth2",
  storageBucket: "user-email-password-auth2.appspot.com",
  messagingSenderId: "418933012418",
  appId: "1:418933012418:web:eefee82a853fc3b605885b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
