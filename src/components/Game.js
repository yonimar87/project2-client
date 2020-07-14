import React, { Component } from 'react'
import shotglass from './images/shotglass3.png'
class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: '',
      turnCounter: 0,
      tilesSize: 7,
      marker: 3,
      tiles: [] // [false, false,false,true,false,false, false]
    }
    this.coinToss = this.coinToss.bind(this)
    this.buildArray = this.buildArray.bind(this)
    this.generateTiles = this.generateTiles.bind(this)
  }
  // componentDidUpdate(prevProps, prevState){
  //   if(prevState.turnCounter !== this.state.turnCounter){
  //     this.buildArray()
  //   }
  // }
  coinToss() {
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
    //console.log(this.state.result)
  }
  
  buildArray() {
    let tCounter = this.state.turnCounter;
    let tMarker = this.state.marker;
    let player1 = 6;
    let player2 = 0;
    if (this.state.turnCounter % 2 === 0 && this.state.result === "heads" ){
        tCounter++;
        tMarker++;
        if (tMarker === player1) {
          alert("Congratulation Player 1 wins! ")
        }
    } else if (this.state.turnCounter % 2 !== 0 && this.state.result === "heads") {
      //tCounter++;
      tMarker--;
      if (tMarker === player2) {
        alert("Congratulation Player 2 wins! ")
      }
    }
    this.setState({marker: tMarker, turnCounter: tCounter +1}, this.generateTiles)
  }

  generateTiles() {
    const arrayTiles = []
    for (let i = 0; i < this.state.tilesSize; i++) {
      if (i === this.state.marker) {
        arrayTiles.push(true)
      } else {
        arrayTiles.push(false)
      }
    }
    console.log({arrayTiles});
    this.setState({tiles: arrayTiles})
    console.log(this.state.tiles)
  }

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
        <div className="Hidden">
          THIS NEEDS TO BE THE HIDDEN div
        </div>
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
            <div class="tile_x">YEET</div>
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
            {/* <h2>TAIL</h2> */}
          </div>
          <div className="side-b">
            {/* <h2>HEAD</h2> */}
          </div>
        </div>
        <h1>Flip a coin</h1>
        {/* <button id="btn" onClick={this.props.coinFlip}>
          Coin Toss
         </button> */}
      </div>
    )
  }
}
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
export default Game
