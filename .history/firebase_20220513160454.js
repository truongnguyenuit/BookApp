
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDlOp5PyyHnkm2PDRhsHbvK8kQQ_MMprpc",
  authDomain: "fir-rn-e9cbb.firebaseapp.com",
  projectId: "fir-rn-e9cbb",
  storageBucket: "fir-rn-e9cbb.appspot.com",
  messagingSenderId: "273275229253",
  appId: "1:273275229253:web:9d19eda69ef152856d7f2c"
};


const app = initializeApp(firebaseConfig);