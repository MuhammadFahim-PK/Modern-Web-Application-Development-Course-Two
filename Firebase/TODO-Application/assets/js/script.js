console.log("Js file Connected....")

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-analytics.js";
import {
    getFirestore,
    collection,
    doc,
    setDoc,
    addDoc,
    getDocs,
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";

import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";
import {
    getFirestore,
    collection,

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

// Initialize Firestore
const db = getFirestore(app);
// console.log("Database=>", app);

const signup_form_box = document.getElementById("signup_form_box");
const signin_form_box = document.getElementById("signin_form_box");
const user_loggedin_box = document.getElementById("user_loggedin_box");

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

const signin_form = document.getElementById("signin_form");
const signin_email = document.getElementById("signin_email");
const signin_password = document.getElementById("signin_password");
const signin_btn = document.getElementById("signin_btn");

const logout_btn = document.getElementById("logout_btn");

const username = document.getElementById("username");


//  Create User Account
signup_btn.addEventListener("click", createUserAccount);

//  Sign In User Account
signin_btn.addEventListener("click", signInAccount);

//  Logout User Account
logout_btn.addEventListener("click", logoutAccount);

//  Sign In Link
const show_signin_box = document.getElementById("show_signin_box");
show_signin_box.addEventListener("click", () => {
    signin_form_box.style.display = "block";
    signup_form_box.style.display = "none";
});

//  Sign Up Link
const show_signup_box = document.getElementById("show_signup_box");
show_signup_box.addEventListener("click", () => {
    signup_form_box.style.display = "block";
    signin_form_box.style.display = "none";
});

//  Check User Authentication
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        console.log("User is logged in.");
        const uid = user.uid;
        // ...
        signin_form_box.style.display = "none";
        user_loggedin_box.style.display = "block";
        signup_form_box.style.display = "none";

        username.innerHTML = user.email;
    } else {
        // User is signed out
        console.log("User is logged out.");
        // ...
        signup_form_box.style.display = "none";
        signin_form_box.style.display = "block";
        user_loggedin_box.style.display = "none";
    }
});

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

    const email = signup_email.value.trim();
    console.log("User Email=>", email);

    const phone = signup_phone.value.trim();
    console.log("User Phone=>", phone);

    const country = signup_country.value.trim();
    console.log("User Country=>", country);

    const education = signup_education.value;
    console.log("User Education=>", education);

    const age = signup_age.value;
    console.log("User Age=>", age);

    const password = signup_password.value;
    console.log("User Password=>", password);

    const confirmPassword = signup_confirm_password.value;
    console.log("User Confirm Password=>", confirmPassword);

    console.log("Email =>", email);
    console.log("Phone =>", phone);
    console.log("Country =>", country);
    console.log("Education =>", education);
    console.log("Age =>", age);

    if (!email || !phone || !country || !education || !age || !password) {
        alert("Please fill in all fields.");
        return;
    }

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
            // console.log("User =>", user);

            console.log("User created =>", user);
            console.log("User UID =>", user.uid);

            // Save extra fields in Firestore
            return setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                email: email,
                phone: phone,
                country: country,
                education: education,
                age: age,
                createdAt: new Date()
            });

        })
        .then(() => {
            console.log("Extra user information saved!");
            alert("Account created successfully!");
        })
        .catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // ..
            // alert(errorMessage);

            console.log("Error Code =>", error.code);
            console.log("Error Message =>", error.message);

            alert(error.message);
        });
}

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
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}

//  Logout User Account
function logoutAccount() {
    auth.signOut()
        .then(() => {
            // ...
            console.log("User signed out.");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert(errorMessage);
        });
}


//

function outer() {
    let x = 10;
    return function inner() {
        x += 5;
        return x;
    }
}

const first = outer();
const second = outer();

console.log(first()); // 15
console.log(second()); // 20
console.log(first()); // 20