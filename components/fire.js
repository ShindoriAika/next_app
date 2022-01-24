import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyCU8FY8j_1VV93YNb81ynLR3yvUXy85Hwk",
    authDomain: "react-lesson01-bc528.firebaseapp.com",
    projectId: "react-lesson01-bc528",
    storageBucket: "react-lesson01-bc528.appspot.com",
    messagingSenderId: "915719486340",
    appId: "1:915719486340:web:a6d5828697f92a28497bd1"
  };

  if(firebase.apps.length == 0){
      firebase.initializeApp(firebaseConfig)
  }