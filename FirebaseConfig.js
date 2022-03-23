const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyAZKiiQYBuh7BVjpg9T-BmSruLkqoxFVeE",
    authDomain: "agenda-davide.firebaseapp.com",
    databaseURL: "https://agenda-davide-default-rtdb.firebaseio.com",
    projectId: "agenda-davide",
    storageBucket: "agenda-davide.appspot.com",
    messagingSenderId: "799801289261",
    appId: "1:799801289261:web:92f97a8795088d3d5c26a4"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  const user = db.collection("contactos");
  module.exports = user;