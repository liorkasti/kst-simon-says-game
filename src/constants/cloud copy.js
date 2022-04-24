import 'firebase/firestore';
import firebase from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyCBKBef2L7MJ0JReOcdziDpR7hx-DrJJP4",
    authDomain: "gifted-cha.firebaseapp.com",
    projectId: "gifted-cha",
    storageBucket: "gifted-cha.appspot.com",
    messagingSenderId: "84310393878",
    appId: "1:84310393878:web:50bc6b278959051291a137"
};

let app;
if (firebase.apps.length === 0) {
    // Initialize Firebase
    app = firebase.initializeApp(firebaseConfig);
} else {
    app.firebase.app()
}

const db = app.firestore();
const doc = 'uib1iwf5UArALFQaBO5C';

export { db, doc }
