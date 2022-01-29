import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBIv8dOnXrp163O0klUHFhIrk25zgHYuxk",
    authDomain: "todo-154e8.firebaseapp.com",
    databaseURL: "https://todo-154e8-default-rtdb.firebaseio.com",
    projectId: "todo-154e8",
    storageBucket: "todo-154e8.appspot.com",
    messagingSenderId: "11365210302",
    appId: "1:11365210302:web:fb3e16a236c3124521a6ef"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // Use these for db & auth
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { auth, db };