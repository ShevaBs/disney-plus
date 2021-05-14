import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBfQdRbjD6wJixyueMDNQBRsFK6nT7HOc4",
  authDomain: "disney-clone-698b3.firebaseapp.com",
  projectId: "disney-clone-698b3",
  storageBucket: "disney-clone-698b3.appspot.com",
  messagingSenderId: "136874940458",
  appId: "1:136874940458:web:89dbbd7334a2319a108b53",
  measurementId: "G-0391NQNX56"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
