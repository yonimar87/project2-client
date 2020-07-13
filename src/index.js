import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCCHEmN-xF2iDQToQIBXYVUMTwhSLvewkQ',
  authDomain: 'drinking-game-663f5.firebaseapp.com',
  databaseURL: 'https://drinking-game-663f5.firebaseio.com',
  projectId: 'drinking-game-663f5',
  storageBucket: 'drinking-game-663f5.appspot.com',
  messagingSenderId: '545406269183',
  appId: '1:545406269183:web:75ce35012afc89aed27eca',
  measurementId: 'G-4XWZ366H43'
}

// firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
