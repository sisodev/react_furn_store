// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyDA9bHe7k5OW4ZQDcE_aYHuhiixGH8_N_Q",
    authDomain: "furnstore-da8fb.firebaseapp.com",
    projectId: "furnstore-da8fb",
    storageBucket: "furnstore-da8fb.appspot.com",
    messagingSenderId: "787524001184",
    appId: "1:787524001184:web:3d0f0eebc63ab0be5958c5"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
