import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyAeYLavcsXAu2qyS3m3sl80bPDNeCrUqlk",
    authDomain: "bemp-app-ed66c.firebaseapp.com",
    databaseURL: "https://bemp-app-ed66c.firebaseio.com",
    projectId: "bemp-app-ed66c",
    storageBucket: "bemp-app-ed66c.appspot.com",
    messagingSenderId: "929043957791",
    appId: "1:929043957791:web:052c46f8f3643e8f5fad2a"
};

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {storage, firebase as default};