import React, { Component } from 'react'
import {fire} from './config/firebase'
import Game from './Game'

class Home extends Component {
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this)
  }
  logout() { //log out authenticator
    fire.auth().signOut()
  }
  render() {
    return (
      <div>
        <h1>You are logged in!!!</h1>
        <button onClick={this.logout}>Logout</button>
        <Game props={this.props.user} /> {/*rendering the main app which is the game.js*/}
      </div>
    )
  }
}
export default Home
