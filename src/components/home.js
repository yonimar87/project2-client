import React , { Component } from "react";
import fire from "./config/firebase"
import Game from "./Game"
import Counter from './Counter'
import Characters from './Characters'

class Home extends Component{
  constructor(props){
    super(props)
    this.logout = this.logout.bind(this);

  }
  logout(){
    fire.auth().signOut();
  }
  render ()
  {
    return(
      <div>
      <h1>You are logged in!!!</h1>
      <button onClick={this.logout}>Logout</button>
      < Game />
      < Counter />
      < Characters />
      </div>
    )
  }
}
export default Home
