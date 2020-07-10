import React, { Component } from 'react'

class Counter extends Component {

constructor(props) {
  super(props);
  this.state = {
    count: 0
  };
}

win = () => {
  this.setState({
    count: this.state.count + 1
  })
};

loss = () => {
  this.setState({
    count: this.state.count - 1
  })
};

  render() {
    return (
    <div>
    <h1> Player {} </h1>
    <p> Total Points: {this.state.count} </p>
    <button onClick={this.win}> You Won </button>
    <button onClick={this.loss}> You Lost </button>
    </div>
    );
  }
}

export default Counter
