// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChdscmCgvKMjBtXY4I3K0pvzc9Bve9ybE",
    authDomain: "task-management-2ead1.firebaseapp.com",
    projectId: "task-management-2ead1",
    storageBucket: "task-management-2ead1.appspot.com",
    messagingSenderId: "826005788671",
    appId: "1:826005788671:web:42d8baec9bcbd8cd8939ca"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);