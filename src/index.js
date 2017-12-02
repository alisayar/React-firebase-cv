import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAyHciRMT6noixU5nACMNhIlTC-VxNtwRE",
    authDomain: "react-veritabani.firebaseapp.com",
    databaseURL: "https://react-veritabani.firebaseio.com",
    projectId: "react-veritabani",
    storageBucket: "react-veritabani.appspot.com",
    messagingSenderId: "354105707231"
  };
  firebase.initializeApp(config);

  ReactDOM.render(<App />, document.getElementById('root'));
  registerServiceWorker();
