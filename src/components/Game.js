import React, { Component } from 'react'
import shotglass from './images/shotglass3.png'
class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: '',
      Winner: '',
      turnCounter: 0,
      tilesSize: 7,
      marker: 3,
      tiles: [false, false,false,true,false,false, false]
    }
    this.coinToss = this.coinToss.bind(this)
    this.buildArray = this.buildArray.bind(this)
    this.generateTiles = this.generateTiles.bind(this)
  /*  this._handleClick = this._handleClick.bind(this) */

  }

  coinToss() {
    this.setState({result: ''});
    setTimeout( () => {
      let tossOutcome = '';
      if (Math.random() < 0.5) {
        tossOutcome = "heads";
        //this.setState({ result: "heads" }, this.buildArray);
        console.log(tossOutcome);
      } else {
        tossOutcome = "tails";
        //this.setState({ result: "tails" }, this.buildArray);
        console.log(tossOutcome);
      }
      this.setState({result: tossOutcome}, this.buildArray);
    },0);
  }

  buildArray() {
    let tCounter = this.state.turnCounter;
    let tMarker = this.state.marker;
    let player1 = 6;
    let player2 = 0;
    let winner = '';
    if (this.state.turnCounter % 2 === 0 && this.state.result === "heads" ){
      //  tCounter++;
        tMarker++;
        if (tMarker === player1) {
          winner = "player1";
          //alert("Congratulation Player 1 wins! ")
        }
    } else if (this.state.turnCounter % 2 !== 0 && this.state.result === "heads") {
      tMarker--;
      if (tMarker === player2) {
        winner = "player2"
        //alert("Congratulation Player 2 wins! ")
      }
    }
    this.setState({marker: tMarker, turnCounter: tCounter +1, Winner: winner}, this.generateTiles)
  }

  generateTiles() {
    const arrayTiles = []
    setTimeout( () => {
    for (let i = 0; i < this.state.tilesSize; i++) {
      if (i === this.state.marker) {
        arrayTiles.push(true)
      } else {
        arrayTiles.push(false)
      }
    }
    console.log({arrayTiles});
    this.setState({tiles: arrayTiles})
    //console.log(this.state.tiles)
  },2050);
  }

/*  _handleClick(event) {
    this.setState({turnCounter: 0, marker: 3, result: '', Winner: '', tiles: [false, false,false,true,false,false, false]})
  }
*/
  render() {
    return (
      <div className="gamePage">
        <div className="p1">
          <h1>Player 1</h1>
        </div>
        <div className="flip">
          <Coinflip coinFlip={this.coinToss} outcome={this.state.result} />
        </div>
        <div className="p2">
          <h1>Player 2</h1>
        </div>
        <div className="gameBottom">
            <TileSet tiles={this.state.tiles} />
        </div>
        <div className="tilesParent">
          { /* <TileSet /> */ }
        </div>

        { this.state.Winner && <WinDiv Winner={this.state.Winner} /* _handleClick={this._handleClick} */ /> }

      </div>
    )
  }
}
//------------child--------------------------------
class TileSet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tiles: this.props.tiles
    }
  }
  render() {
    return (
      <div className="tiles">
        {this.props.tiles.map((tile) => {
          return !tile ? (
            <div class="tile_x">Closer..</div>
          ) : (
            <div id="tile4">
              {' '}
              <Shotglass />{' '}
            </div>
          )
        })}
      </div>
    )
  }
}
//------------child--------------------------------
class Coinflip extends React.Component {
  render() {
    return (
      <div>
        <div id="coin" className={this.props.outcome} onClick={this.props.coinFlip}>
          <div class="side-a">
          </div>
          <div className="side-b">
          </div>
        </div>
        <h1>Flip a coin</h1>
      </div>
    )
  }
}
//---------------child -----------------------
const WinDiv = (props) => <div className="winner">
  <div> {props.Winner} Drink!!</div>
  <button /* onClick={props._handleClick} */ >Restart</button>
  </div>

// class WinDiv extends React.Component {
//   render () {
//     return (
//       <div>
//         {this.props.Winner}
//       </div>
//     )
//   }
// }
//

//-----------childs-------------------------------
class Shotglass extends Component {
  render() {
    return (
      <div>
        <img id="shotglass" src={shotglass} />
      </div>
    )
  }
}
 //------- child ----------------------------------
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
    <button onClick={this.win}> Player 1 wins: </button>
    <button onClick={this.loss}> Player 2 wins: </button>
    </div>
    );
  }
}

export default Game
