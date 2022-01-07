import firebase from 'firebase/app';

// import 'firebase/i
import 'firebase/auth'; // for authentication
import 'firebase/firestore'; // for cloud firestore
import 'firebase/storage'; // for storage

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAN35L5AQ373qx1Btonua_v1kHO1Rwvq7s',
  authDomain: 'lofi-phuc.firebaseapp.com',
  projectId: 'lofi-phuc',
  storageBucket: 'lofi-phuc.appspot.com',
  messagingSenderId: '260036309171',
  appId: '1:260036309171:web:3bbbdd8fe2f97b31c640c6',
  measurementId: 'G-J3DJC4KM5F',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();

export { auth, provider, storage };
export default db;
