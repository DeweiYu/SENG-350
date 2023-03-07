import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYYK9q_lkdNCyOEI0uQhH9Qsx71_NfNO8",
  authDomain: "seng350-69b7e.firebaseapp.com",
  projectId: "seng350-69b7e",
  storageBucket: "seng350-69b7e.appspot.com",
  messagingSenderId: "482374126101",
  appId: "1:482374126101:web:1919606223ab4781331c1c",
  measurementId: "G-747LTWXG8X"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };