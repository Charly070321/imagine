// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD6-vtwjRq2t017jjEjPUWQSES19PNkHAw",
    authDomain: "imagineappointment.firebaseapp.com",
    projectId: "imagineappointment",
    storageBucket: "imagineappointment.appspot.com",
    messagingSenderId: "425826842965",
    appId: "1:425826842965:web:2cdb04ad4bf0aa8dcb17dc",
    measurementId: "G-GKP0C7CSJL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;


// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

// export { auth, provider };
// export { db };







// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyCz_SKNVJyG2lcwkhJprsC8kUpnkv4gPIY",
//     authDomain: "medirtro.firebaseapp.com",
//     projectId: "medirtro",
//     storageBucket: "medirtro.appspot.com",
//     messagingSenderId: "225023444715",
//     appId: "1:225023444715:web:fbb49dd9cedf1fff4d20ae",
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export default auth;