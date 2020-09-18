import firebase from "firebase";
//import * as firebase from 'firebase';
//import firestore from 'firebase/firestore';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAlnaJUsiXVEQns_iYkuB2IWckPu6X3cho",
    authDomain: "clone-be4f9.firebaseapp.com",
    databaseURL: "https://clone-be4f9.firebaseio.com",
    projectId: "clone-be4f9",
    storageBucket: "clone-be4f9.appspot.com",
    messagingSenderId: "1071951937939",
    appId: "1:1071951937939:web:9aa66b9605d00bba7be866",
    measurementId: "G-MQDEY3LF6J"

});

//const db = firebaseApp.fireStore();
const auth = firebase.auth();

export {

    auth
}