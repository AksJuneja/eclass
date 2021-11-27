import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig=
{
    apiKey: "AIzaSyDGh2DSzuXH9-FDfaL1rlnW4rH9nMeRYNo",
  authDomain: "eclass-d6336.firebaseapp.com",
  projectId: "eclass-d6336",
  storageBucket: "eclass-d6336.appspot.com",
  messagingSenderId: "617833283547",
  appId: "1:617833283547:web:dd9765ca1475a025cc71fe"

}

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


export { auth, provider, storage };
export default db;

