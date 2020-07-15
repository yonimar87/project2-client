import React , { Component } from "react";
import fire from "./config/firebase"
import homelogin from './images/logo.png'

class Login extends Component{
  constructor(props){
    super(props)
    this.login = this.login.bind(this);
    this.handleChange= this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state={
      email : "",
      password : ""
    }
  }
  login(e){
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
      console.log(u);
    }).catch((err)=>{
      console.log(err);
    })
  }
  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
      console.log(u);
    }).catch((err)=>{
      console.log(err);
      alert("Sorry a username with that email address is already registered")
    })
  }
  handleChange(e) {
    this.setState({
      [e.target.name] : e.target.value
    })
  }


  render ()
  {
    return(
      <div className="loginform">

        <form>
          <input
          name="email"
          type="email"
          id="email"
          placeholder="Enter email address"
          onChange={this.handleChange}
          value={this.state.email} />
          <input
          name="password"
          type="password"
          onChange={this.handleChange}
          id="password"
          placeholder="Enter password"
          value={this.state.password}
          />
          <button onClick={this.login} id="loginbutton">Login</button>
          <button onClick={this.signup} id ="signupbutton">SignUp</button>
        </form>

      </div>
    )
  }
}

class Homelogin extends Component {
  render() {
    return (
      <div>
        <img id="homelogin" src={homelogin} />
      </div>
    )
  }
}
export default Login
