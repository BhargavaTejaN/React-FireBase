// basics to create a app and connect to firebase

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCzn12tL-nyec5FF1UdQ3l8-E_DHz9tWc",
  authDomain: "react-with-firebase-61bfc.firebaseapp.com",
  projectId: "react-with-firebase-61bfc",
  storageBucket: "react-with-firebase-61bfc.appspot.com",
  messagingSenderId: "586454047059",
  appId: "1:586454047059:web:4961d4426951860fe2a9a6",
  databaseURL:'https://react-with-firebase-61bfc-default-rtdb.firebaseio.com'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);