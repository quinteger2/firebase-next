// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCz9eInyOhiHLHctZ3XvTo-myQYtLe_474",
    authDomain: "firecms-2f7d7.firebaseapp.com",
    projectId: "firecms-2f7d7",
    storageBucket: "firecms-2f7d7.appspot.com",
    messagingSenderId: "947482818266",
    appId: "1:947482818266:web:a4ef8bd4707498e8b017e3",
    measurementId: "G-71HKN9P6DE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//export const analytics = getAnalytics(app);
export const database = getFirestore(app);
