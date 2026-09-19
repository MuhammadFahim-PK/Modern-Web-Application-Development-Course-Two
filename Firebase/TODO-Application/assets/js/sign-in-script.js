console.log("Js file Connected....")

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-analytics.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWdpiRPWl3L-zHhMAV332BseQxOpE5Iws",
  authDomain: "fsma-soluction.firebaseapp.com",
  projectId: "fsma-soluction",
  storageBucket: "fsma-soluction.firebasestorage.app",
  messagingSenderId: "699151638629",
  appId: "1:699151638629:web:aab564ab2add6bded0668c",
  measurementId: "G-REHY9KBVQ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// console.log("App=>", app);

// Initialize Firebase Analytics
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// console.log("Auth=>", app);

const signin_form = document.getElementById("signin_form");

const signin_email = document.getElementById("signin_email");
const signin_password = document.getElementById("signin_password");
const signin_btn = document.getElementById("signin_btn");

//  Sign In User Account
signin_btn.addEventListener("click", signInAccount);


//  Check User Authentication
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     console.log("User is logged in.");
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     console.log("User is logged out.");
//     // ...
//   }
// });

//  Register User
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

//
function signInAccount() {
  const email = signin_email.value;
  console.log("User Email=>", email);

  const password = signin_password.value;
  console.log("User Password=>", password);

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      console.log("User =>", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      alert(errorMessage);
    });
}

