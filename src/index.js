import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//setting up firebase as our database
import firebase from 'firebase/app'
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCH9S8SJymI4cxAzjlcKIsSwmS_dM3V5Y0",
    authDomain: "cart-60fba.firebaseapp.com",
    projectId: "cart-60fba",
    storageBucket: "cart-60fba.appspot.com",
    messagingSenderId: "682994639016",
    appId: "1:682994639016:web:8aa7b772e15ee2ae71629d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

