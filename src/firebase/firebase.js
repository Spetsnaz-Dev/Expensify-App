import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAGqUahkkZvp7sB8S2cE5_H6TpRvbi7j9g",
    authDomain: "expensify-a74e1.firebaseapp.com",
    databaseURL: "https://expensify-a74e1.firebaseio.com",
    projectId: "expensify-a74e1",
    storageBucket: "expensify-a74e1.appspot.com",
    messagingSenderId: "1074699093298"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
