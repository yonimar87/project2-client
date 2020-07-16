import React , { Component } from "react";
import fire from "./config/firebase"
import homelogin from './images/logo.png'

class Login extends Component{
  constructor(props){
    super(props)
    this.login = this.login.bind(this);
    this.handleChange= this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.age = this.age.bind(this);
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
    if (err.code === "auth/invalid-email") {
      alert("Please use a viable email address")
    } else if
      (err.code === "auth/wrong-password") {
      alert("Password incorrect please try again")
    } else if
      (err.code === "auth/user-not-found") {
      alert("Please sign up")
    }
    console.log(err);
  })
}
signup(e){
  e.preventDefault();
  fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    console.log(u);
  }).catch((err)=>{
    if (err.code === "auth/email-already-in-use") {
      alert(err.message)
    } else if
      (err.code === "auth/weak-password") {
      alert("Password needs to be a minimum of 6 characters")
    } else if
      (err.code === "auth/invalid-email") {
      alert("Please use a viable email address")
    }
    console.log(err);
  })
}
  age(e){
    e.preventDefault();
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
          <button onClick={this.age} id="agever"> click here if 18 + </button>
        </form>

      </div>
    )
  }
}

class Footer extends Component {
  render() {
    return (
      <div>
        <h2> Godpeed games discourages drinking </h2>
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
