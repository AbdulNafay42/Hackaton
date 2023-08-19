const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btnmain");
const container = document.querySelector(".container");

sign_up_btn && sign_up_btn.addEventListener("click", () => {
   container.classList.add("sign-up-mode");
});

// sign_in_btn.addEventListener("click", () => {
//   container.classList.remove("sign-up-mode");
// }); //// Animation

import {initializeApp} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import {getAnalytics} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyAlpuG94s1RAZeSSyYn6rJGhTu0zNO6VQQ",
  authDomain: "login-b93b8.firebaseapp.com",
  projectId: "login-b93b8",
  storageBucket: "login-b93b8.appspot.com",
  messagingSenderId: "995571198178",
  appId: "1:995571198178:web:0aef97b0ecc209d44d56bb",
  measurementId: "G-ZBJGQLJ4K1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const emailSignUp = document.getElementById("email-sign-up");
const passSignUp = document.getElementById("pass-sign-up");
const signUpBtn = document.getElementById("sign-up-btn");

signUpBtn && signUpBtn.addEventListener("click", () => {
 createUserWithEmailAndPassword(auth, emailSignUp.value, passSignUp.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      window.location.href = "./index.html";
    });
});

const emailSignIn = document.getElementById("email-sign-in");
const passSignIn = document.getElementById("pass-sign-in");
const signInBtn = document.getElementById("sign-in-btn");

signInBtn && signInBtn.addEventListener("click", () => {
  signInWithEmailAndPassword(auth, emailSignIn.value, passSignIn.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      window.location.href = "./dashboard.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
});

/// DASHBOARD
const publishBtn = document.getElementById("publish-btn");
const postedBlog = document.getElementById("posted-blog");

publishBtn && publishBtn.addEventListener('click', () => {
  const inputTitle = document.getElementById("input-title").value;
  const inputContent = document.getElementById("Input-content").value;

  const blogHTML = `
    <div class="card">
      <div class="section-1 d-flex">
        <img src="images/pic.jpg" alt="">
        <p>${inputTitle}</p>
      </div>
      <div class="section-2 d-flex">
        <p>Abdul Nafay - August 19 2023</p>
      </div>
      <div class="section-3">
        <p>${inputContent}</p>
      </div>
    </div>
  `;

  postedBlog.innerHTML += blogHTML;
});
