import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyDXgmxgcTDznq9Du4FyoteHy3N5JDy4s0U",
  authDomain: "fire-reactnative.firebaseapp.com",
  projectId: "fire-reactnative",
  storageBucket: "fire-reactnative.appspot.com",
  messagingSenderId: "152431470740",
  appId: "1:152431470740:web:e5ef023deec6fe3322ac81",
  measurementId: "G-STKYPQELQV"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default { auth };
