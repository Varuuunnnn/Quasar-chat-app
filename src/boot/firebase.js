// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDe8Qhyzzi4IfXkU8XzRvDnOcwQ4ZX_Qo8",
  authDomain: "chatapp-3d8a8.firebaseapp.com",
  projectId: "chatapp-3d8a8",
  storageBucket: "chatapp-3d8a8.appspot.com",
  messagingSenderId: "622593857516",
  appId: "1:622593857516:web:1460cb1e661c5c3eeb92c9"
};

// Initialize Firebase
let=firebase.initializeApp(firebaseConfig)
let firebaseAuth= firebaseApp.auth()
let firebaseDb= firebaseApp.database()

export{ firebaseAuth, firebaseDb }