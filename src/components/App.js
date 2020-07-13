import React, { Component } from 'react'
import app from 'firebase/app'
import fire from './config/firebase'
import Login from './login'
import Home from './home'

 // import FaceEmotion from './WebcamComponent'

// import FaceEmotion from './WebcamComponent'
//import Tournament from './Tournament'

// import { Button } from 'reactstrap'
// import Application from './UserAuth/Application'
// import Newsfeed from './Newsfeed'
// import Buttons from './Buttons'
// import Tiles from './Tiles'




class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: {},
      user : {}
    }
  }

  componentWillMount() {
    app
      .database()
      .ref('test')
      .on('value', (data) => {
        console.log(data.val())
        this.setState({ data: data.val() })
      })
  }

  componentDidMount(){ //THIS IS FOR LOGIN
    this.authListener();
  }

  authListener(){ //THIS IS FOR LOGIN
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({user})
      }
      else{
        this.setState({user: null})
      }
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.user ? (<Home/>) : (<Login/>)}
        {/*
        <Counter />
        <Counter />
        <Characters />
        <Application />
        <Buttons />
        <Tournament />
        <Coinflip />
        <FaceEmotion />
        <Newsfeed />
        <Tiles />
        */}
      </div>
    )
  }
}


export default App
