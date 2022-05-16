import firebase from 'firebase/app'; 
import 'firebase/firestore';
import 'firebase/auth';
  

const firebaseConfig = {
    apiKey: "AIzaSyA-Cc7dKcdf6MFjWp97UEd0ndAIWe8QClw",
    authDomain: "react-journal-app-dbcf5.firebaseapp.com",
    projectId: "react-journal-app-dbcf5",
    storageBucket: "react-journal-app-dbcf5.appspot.com",
    messagingSenderId: "527939278323",
    appId: "1:527939278323:web:4470dee2ffd391a9e12e86"
};
  

firebase.initializeApp(firebaseConfig); 

const db = firebase.firestore(); 
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase 
}   