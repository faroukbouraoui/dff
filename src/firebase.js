import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD55VjxgsbvFDsxyRgXrsofDrZrvqwqwMs",
  authDomain: "what-s-app-clone-ebb0b.firebaseapp.com",
  databaseURL: "https://what-s-app-clone-ebb0b.firebaseio.com",
  projectId: "what-s-app-clone-ebb0b",
  storageBucket: "what-s-app-clone-ebb0b.appspot.com",
  messagingSenderId: "424214654547",
  appId: "1:424214654547:web:f37c46c465c5dd305ba0a6",
  measurementId: "G-6LJLCEJEYE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
