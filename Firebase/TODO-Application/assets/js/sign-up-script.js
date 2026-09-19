console.log("Js file Connected....")

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-analytics.js";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";
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

//  Get Form Elements
const signup_form = document.getElementById("signup_form");
const signup_name = document.getElementById("signup_name");
const signup_email = document.getElementById("signup_email");
const signup_phone = document.getElementById("signup_phone");
const signup_country = document.getElementById("signup_country");
const signup_education = document.getElementById("signup_education");
const signup_age = document.getElementById("signup_age");
const signup_password = document.getElementById("signup_password");
const signup_confirm_password = document.getElementById("signup_confirm_password");
const signup_btn = document.getElementById("signup_btn");

//  Create User Account
signup_btn.addEventListener("click", createUserAccount);

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
function createUserAccount() {
  // const name = signup_name.value;
  // console.log("User Name=>", name);

  const email = signup_email.value;
  console.log("User Email=>", email);

  // const phone = signup_phone.value;
  // console.log("User Phone=>", phone);

  // const country = signup_country.value;
  // console.log("User Country=>", country);

  // const education = signup_education.value;
  // console.log("User Education=>", education);

  // const age = signup_age.value;
  // console.log("User Age=>", age);

  const password = signup_password.value;
  console.log("User Password=>", password);

  // const confirmPassword = signup_confirm_password.value;
  // console.log("User Confirm Password=>", confirmPassword);

  // if (password !== confirmPassword) {
  //   alert("User Name, Email, Phone, Country, Education, Age, Password, and Confirm Password must be filled out");
  //   return;
  // }
  // if (password.length < 6) {
  //   alert("Password must be at least 6 characters long");
  //   return;
  // }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
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

