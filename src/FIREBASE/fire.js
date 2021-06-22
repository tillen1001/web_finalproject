import firebase from 'firebase';
import 'firebase/auth';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCwbFdk0uYhVPxPjucUZhRf4r0FE5iOmEE",
    authDomain: "web-finalproject-a117e.firebaseapp.com",
    databaseURL: "https://web-finalproject-a117e-default-rtdb.firebaseio.com",
    projectId: "web-finalproject-a117e",
    storageBucket: "web-finalproject-a117e.appspot.com",
    messagingSenderId: "1091128688404",
    appId: "1:1091128688404:web:8171585a359b7aded8cc01",
    measurementId: "G-Z2F0VH0Y7H"
  };

  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  export default fire;