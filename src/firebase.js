import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAst_pVVGfdbbeqARthDdMEWgzCw2C5SCA",
    authDomain: "clone-882de.firebaseapp.com",
    databaseURL: "https://clone-882de.firebaseio.com",
    projectId: "clone-882de",
    storageBucket: "clone-882de.appspot.com",
    messagingSenderId: "265884400569",
    appId: "1:265884400569:web:8c494cce68d6cf055a9468",
    measurementId: "G-XKBE33NHEP"
  });

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }

// import firebase from 'firebase'

// const firebaseApp = firebase.initializeApp({
//     apiKey: "AIzaSyCUYu7DTsdzu_2pGxG0IPnoBkDmNQ5-7gQ",
//     authDomain: "clone-c933e.firebaseapp.com",
//     databaseURL: "https://clone-c933e.firebaseio.com",
//     projectId: "clone-c933e",
//     storageBucket: "clone-c933e.appspot.com",
//     messagingSenderId: "1037959171425",
//     appId: "1:1037959171425:web:bd704b79d0860dde4b0920"
// })

// const db = firebaseApp.firestore()
// const auth = firebase.auth()

// export { db, auth }

