import firebase from 'firebase'
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCHEmN-xF2iDQToQIBXYVUMTwhSLvewkQ",
  authDomain: "drinking-game-663f5.firebaseapp.com",
  databaseURL: "https://drinking-game-663f5.firebaseio.com",
  projectId: "drinking-game-663f5",
  storageBucket: "drinking-game-663f5.appspot.com",
  messagingSenderId: "545406269183",
  appId: "1:545406269183:web:75ce35012afc89aed27eca",
  measurementId: "G-4XWZ366H43"
};

const fire = firebase.initializeApp(firebaseConfig)

export default firebase;
