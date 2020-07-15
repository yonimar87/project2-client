import React, { Component } from 'react'
import app from 'firebase/app'
import fire from './config/firebase'
import Login from './login'
import Home from './home'
import Livechat from './Livechat'
import background from "./images/bar.jpeg";

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
        <Background />
        {/*
        */}
      </div>
    )
  }
}

class Background extends Component {
  render() {
    return <div>
      <img id="background" src={background}/>
    </div>
  }
}


export default App
