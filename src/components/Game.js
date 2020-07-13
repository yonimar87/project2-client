import React, { Component } from 'react'
import shotglass3 from "../images/shotglass3.png";

class Game extends Component {
  constructor(props){
    super(props)
    this.state = {
      result: '',
      turnCounter: 0,
      tilesSize: 7,
      marker: 3,
      tiles: [] // [false, false,false,true,false,false, false]
    };
    this.coinToss = this.coinToss.bind(this);
    this.buildArray = this.buildArray.bind(this);
    this.generateTiles = this.generateTiles.bind(this);
  }

  // componentDidUpdate(prevProps, prevState){
  //   if(prevState.turnCounter !== this.state.turnCounter){
  //     this.buildArray()
  //   }
  // }

  coinToss() {
    if (Math.random() < 0.5) {
      this.setState({ result: "heads" }, this.buildArray);
      console.log("heads");
    } else {
      this.setState({ result: "tails" }, this.buildArray);
      console.log("tails");
    }
    console.log(this.state.result)
  }

  buildArray() {
    if (this.state.turnCounter % 2 === 0 && this.state.result === "heads" ){
      this.setState({marker: this.state.marker++}, this.generateTiles)
    } else if (this.state.turnCounter % 2 !== 0 && this.state.result === "heads") {
      this.setState({marker: this.state.marker--}, this.generateTiles)
    }
  }

  generateTiles() {
    const arrayTiles = [];
    for (let i = 0; i < this.state.tilesSize; i++) {
      if (i === this.state.marker) {
        arrayTiles.push(true);
      } else {
        arrayTiles.push(false);
      }
    }
    console.log({arrayTiles});
    this.setState({tiles: arrayTiles, turnCounter: this.state.turnCounter++})
    console.log(this.state.tiles)
  }

  render() {
    return (
      <div>
        <div>
          <Coinflip coinFlip={this.coinToss} outcome={this.state.result}/>
        </div>
        <div class="board">
        < TileSet tiles={this.state.tiles} />
        </div>
        <div>
          {this.state.result}
        </div>
      </div>
    )
  }
}



//------------child--------------------------------

class TileSet extends Component {
   constructor(props){
   super(props)
   this.state = {
     tiles: this.props.tiles
   }
  }
   render() {
     return (
       <div>
          {this.state.tiles.map(tile => {
            return !tile ?
                <div class="tiles" id="tile_x">tiles</div>
              :
                <div id="tile4"> < Shotglass /> </div>
              }
          )}
       </div>
     )
   }
  }

//------------child--------------------------------

class Coinflip extends React.Component {

 render() {
   return (
     <div>
       <div id="coin" className={this.props.outcome}>
         <div class="side-a">
           <h2>TAIL</h2>
         </div>
         <div className="side-b">
           <h2>HEAD</h2>
         </div>
       </div>
       <h1>Flip a coin</h1>
       <button id="btn" onClick={this.props.coinFlip}>
         Coin Toss
       </button>
     </div>
   );
 }
}

//-----------childs-------------------------------

class Shotglass extends Component {
  render() {
    return <div>
      <img id="shotglass" src={shotglass3}/>
    </div>
  }
}

export default Game

{/*
https://codepen.io/gaearon/pen/gWWZgR?editors=0010


//Set value of a const to = URL
const marker 4
then in the state do an
if  (heads) = true
  setvalue = false for the one im on
   marker -1
  setState value = true
  tile to left tile to right
  else {
    setvalue = false for the one im on
    marker + 1
    setstate value = true
    to the other side.
  }
*/}
