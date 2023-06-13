// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBc1iTq2iSLxjNVYCXgbQ_hlTzvJ7TyFcU",
  authDomain: "blog2mia-c1dd9.firebaseapp.com",
  projectId: "blog2mia-c1dd9",
  storageBucket: "blog2mia-c1dd9.appspot.com",
  messagingSenderId: "571786170938",
  appId: "1:571786170938:web:7b3716e0f2e42d07e29b03",
  measurementId: "G-1CRGKQVDXZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);