// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlOp5PyyHnkm2PDRhsHbvK8kQQ_MMprpc",
  authDomain: "fir-rn-e9cbb.firebaseapp.com",
  projectId: "fir-rn-e9cbb",
  storageBucket: "fir-rn-e9cbb.appspot.com",
  messagingSenderId: "273275229253",
  appId: "1:273275229253:web:9e9f13fddf9e46276d7f2c"
};
let app;
 if (firebase.apps.length ===0) {
    app = initializeApp(firebaseConfig);

 }else {
     app = firebase.app()
 }
// Initialize Firebase
const auth = firebase.auth