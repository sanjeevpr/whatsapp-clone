import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAQZ-sxQO18cPkHKv26_Un_e7eLHm0ktmA",
    authDomain: "whatsapp-b995e.firebaseapp.com",
    projectId: "whatsapp-b995e",
    storageBucket: "whatsapp-b995e.appspot.com",
    messagingSenderId: "755548489465",
    appId: "1:755548489465:web:00acd0fa40f58db00d8428"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };