import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  // Your firebase credentials
  apiKey: "AIzaSyDZBwD36L1o9pO7EHwPUFSu09HohD0IbRM",
  authDomain: "alpine-aspect-290803.firebaseapp.com",
  projectId: "alpine-aspect-290803",
  storageBucket: "alpine-aspect-290803.appspot.com",
  messagingSenderId: "590676376069",
  appId: "1:590676376069:web:0fbf33dc1a94cc34c8ba6c",
  measurementId: "G-WRK89HXTDG"
});

var db = firebaseApp.firestore();

export { db };