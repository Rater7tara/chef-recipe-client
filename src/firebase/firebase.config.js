// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkO3fyrVMyYrnubEPHyOKQ3Ebev7Hbx5I",
  authDomain: "chef-recipes-e7208.firebaseapp.com",
  projectId: "chef-recipes-e7208",
  storageBucket: "chef-recipes-e7208.appspot.com",
  messagingSenderId: "241946345650",
  appId: "1:241946345650:web:60455ebd116ccd493649ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;