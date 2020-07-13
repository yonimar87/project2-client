import React , { Component } from "react";
import fire from "./config/firebase"
import { AuthContext } from "./index";

{/*class Login extends Component{
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
      <div>
        <form>
          <input
          name="email"
          type="email"
          id="email"
          placehodler="Enter email address"
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
          <button onClick={this.login}>Login</button>
          <button onClick={this.signup}>SignUp</button>
        </form>

      </div>
    )
  }
}*/}


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState("");



  const handleForm = e => {
  e.preventDefault();
  firebase
  .auth()
  .signInWithEmailAndPassword(email, password)
  .then(res => {
    if (res.user) Auth.setLoggedIn(true);
  })
  .catch(e => {
    setErrors(e.message);
  });
};

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={e => handleForm(e)}>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          name="email"
          type="email"
          placeholder="email"
        />
        <input
          onChange={e => setPassword(e.target.value)}
          name="password"
          value={password}
          type="password"
          placeholder="password"
        />
        <hr />
        <button class="googleBtn" type="button">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="logo"
          />
          Login With Google
        </button>
        <button type="submit">Login</button>
        <span>{error}</span>
      </form>
    </div>
  );
};


export default Login
