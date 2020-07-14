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
    <div className="playerpoints">
    <h1 className="playername"> Player {} </h1>
    <p className="pointstotal"> Total Points: {this.state.count} </p>
    <button onClick={this.win}> Player 1  </button>
    <button onClick={this.loss}> Player 2</button>
    </div>
    );
  }
}

export default Counter
