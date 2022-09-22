// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDjH52srL4Mzf9jrdAbNvFWBXOqjdSiUEA",
    authDomain: "jts-ecommers.firebaseapp.com",
    projectId: "jts-ecommers",
    storageBucket: "jts-ecommers.appspot.com",
    messagingSenderId: "70431237273",
    appId: "1:70431237273:web:b63eae819265982606c408",
    measurementId: "G-K1E5L5G75L"
};
const app = firebase.initializeApp(firebaseConfig);

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}
