
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiLcAbRvWSVZWkRf2bO29pTZFDrgVPWgs",
  authDomain: "clone-adfcf.firebaseapp.com",
  projectId: "clone-adfcf",
  storageBucket: "clone-adfcf.appspot.com",
  messagingSenderId: "276765481799",
  appId: "1:276765481799:web:782c7cafe88c1f9c2b8a62",
  measurementId: "G-YTXSL1BE3F"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider }