import firebase from 'firebase'
import 'firebase/messaging';


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
const messaging = firebase.messaging();

export const getToken = (setTokenFound) => {
  return messaging.getToken({vapidKey: 'BDnDFC4HqI6cDuDkW1EMQt5nz1ypSH2K8lOIyfmI5awUcHUkHOAe4wXqh6kjtSLouqpx1LDIdctO7Xot1DpfGC0'}).then((currentToken) => {
    if (currentToken) {
      console.log('current token for client: ', currentToken);
      setTokenFound(true);
      const db = firebase.firestore();
      db.settings({
            timestampsInSnapshots: true
        })
      db.collection("admin").add({id: currentToken})
      // Track the token -> client mapping, by sending to backend server
      // show on the UI that permission is secured
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound(false);
      // shows on the UI that permission is required 
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
  });
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
});


export default firebase;