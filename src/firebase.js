import firebase from 'firebase'


const  config = {
    apiKey: "AIzaSyDA9bHe7k5OW4ZQDcE_aYHuhiixGH8_N_Q",
    authDomain: "furnstore-da8fb.firebaseapp.com",
    projectId: "furnstore-da8fb",
    storageBucket: "furnstore-da8fb.appspot.com",
    messagingSenderId: "787524001184",
    appId: "1:787524001184:web:3d0f0eebc63ab0be5958c5"
  };
  // Initialize Firebase
firebase.initializeApp(config);


export default firebase;