// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_91pL2ZNX1QSMTZ9CjzG1roiEn4FBwlY",
  authDomain: "tecnocardalesshop.firebaseapp.com",
  projectId: "tecnocardalesshop",
  storageBucket: "tecnocardalesshop.appspot.com",
  messagingSenderId: "533439298179",
  appId: "1:533439298179:web:d375cfbd2752e7dccd79b6",
  measurementId: "G-5GDKRYHC53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);