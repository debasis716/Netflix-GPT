// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDphq17fg6PWXw28CWc16HQyYr8mqiBOhI",
    authDomain: "netflix-gpt-89748.firebaseapp.com",
    projectId: "netflix-gpt-89748",
    storageBucket: "netflix-gpt-89748.appspot.com",
    messagingSenderId: "706562358183",
    appId: "1:706562358183:web:feec171539198eec92d482",
    measurementId: "G-GSGHXKCFEW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);