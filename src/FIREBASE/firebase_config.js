import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCwbFdk0uYhVPxPjucUZhRf4r0FE5iOmEE",
    authDomain: "web-finalproject-a117e.firebaseapp.com",
    databaseURL: "https://web-finalproject-a117e-default-rtdb.firebaseio.com",
    projectId: "web-finalproject-a117e",
    storageBucket: "web-finalproject-a117e.appspot.com",
    messagingSenderId: "1091128688404",
    appId: "1:1091128688404:web:e44372c09237c701d8cc01",
    measurementId: "G-HHEVH9TFFS"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export { db };