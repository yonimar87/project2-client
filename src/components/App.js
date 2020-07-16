import React, { Component } from 'react'
import app from 'firebase/app'
import {fire, db} from './config/firebase' //thhis gets information from firebase.js which has both db and fire defined.
import Login from './login'
import Home from './home'
import background from "./images/bar.jpeg";


class App extends Component {

  constructor() {
    super()
    this.state = {
      data: {},
      user : {},
      authenticated: false,
      loading: true,
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
      }console.log('dragon ' + user);
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.user ? (<Home user={this.state.user}/>) : (<Login/>)} {/*if the user is logged in, go to home otherwise login*/}
        <Background />
      </div>
    )
  }
}

class Background extends Component {//turns out you need to have classes for images from what we found. you can import them as per above
  render() {
    return <div>
      <img id="background" src={background}/>
    </div>
  }
}


export default App
