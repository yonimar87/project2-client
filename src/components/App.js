import React, { Component } from 'react'
import app from 'firebase/app'
import Tiles from './Tiles'
import Buttons from './Buttons'
import Users from './Users'
import Counter from './Counter'
import Characters from './Characters'
import Tournament from './Tournament'
import fire from './config/firebase'
import Login from './login'
import Home from './home'
import FaceEmotion from './WebcamComponent'
import Coinflip from './Coinflip'
import { Button } from 'reactstrap'
// import Application from './UserAuth/Application'
// import Newsfeed from './Newsfeed'

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
        {/*<Application />*/}
        {this.state.user ? (<Home/>) : (<Login/>)}
        <Tiles />
        <Buttons />
        <Users />
        <Counter />
        <Counter />
        <Characters />
        <Tournament />
        <Coinflip />
        {/*<FaceEmotion />
        <Newsfeed />*/}
      </div>
    )
  }
}


export default App
