import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyByQq670GErTCLNgeXN_ATLr3PqpZQTI5w",
  authDomain: "web-chat-b5ab4.firebaseapp.com",
  projectId: "web-chat-b5ab4",
  storageBucket: "web-chat-b5ab4.appspot.com",
  messagingSenderId: "981470485510",
  appId: "1:981470485510:web:f108df101269e617773787",
  measurementId: "G-VL0HC0J1JP"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { auth, db };