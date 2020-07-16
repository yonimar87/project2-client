import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from './components/Home';
import Chat from './pages/Chat';
import Login from './components/Login';
import { auth } from './config/firebase';
import fire from './components/config/firebase'

function PrivateRoute ({component: Component, authenticated, ...rest}) {
  return(
    <Route
      {...rest}
      render={(props) => authenticated === true
      ? <Component {...props} />
      : <Redirect to={{pathname: '/components/login', state: {from: props.location}}}/>}
    />
  )
}

function PublicRoute({component: COmponent, authenticated, ...rest}) {
  return (
    <Route
       {...rest}
       render={(props) => authenticated === false
       ?<Component {...props} />
       :<Redirect to='/chat' />}
       />
  )
}

render() {
  return this.state.loading === true ? <h2>Loading...</h2> : (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <PrivateRoute path="/chat" authenticated={this.state.authenticated} component={Chat}></PrivateRoute>
        <PublicRoute path="/component/login" authenticated={this.state.authenticated} component={Login}></PublicRoute>
      </Switch>
    </Router>
  );
}
