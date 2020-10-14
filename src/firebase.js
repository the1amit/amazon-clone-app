import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAgHgF8cDXzbuaf0rB_Y3py_XqyzGUHe_c",
  authDomain: "clone-f328c.firebaseapp.com",
  databaseURL: "https://clone-f328c.firebaseio.com",
  projectId: "clone-f328c",
  storageBucket: "clone-f328c.appspot.com",
  messagingSenderId: "503126524628",
  appId: "1:503126524628:web:b46e64fb98c21178f87141",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
