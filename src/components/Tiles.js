import React, { Component } from 'react'
import shotglass from "../images/shotglass.jpg"; // with import
// import Coinflip from './Coinflip'

class Tiles extends Component {
  constructor(){
    super()
    this.state = {
      coinResult: '',
    };
    // this.flipResult = this.flipResult.bind(this);
  }

  // const drinkUrl = url(../images/shotglass.jpg)
  // const market = 4
  //
  //   then in the state do an
  //   if  (heads) = true
  //     setvalue = false for the one im on // image disappears from current div.
  //      marker -1
  //     setState value = true
  //     tile to left tile to right
  //     else {
  //       setvalue = false for the one im on
  //       marker + 1
  //       setstate value = true
  //       to the other side.
  // flipResult(result) {
  //   this.setState({coinResult: this.props.result})
  //   console.log(flipResult)
  // }

  render() {
    return (
      <div>
        <div class="board" >
          <div class="tiles" id="tile1">tiles</div>
          <div class="tiles" id="tile2">tiles</div>
          <div class="tiles" id="tile3">tiles</div>
          <div  id="tile4"> < Shotglass /> </div>
          <div class="tiles" id="tile5">tiles</div>
          <div class="tiles" id="tile6">tiles</div>
          <div class="tiles" id="tile7">tiles</div>
        </div>
        <div>
          <Coinflip />
        </div>
      </div>
    )
  }
}


//------------child--------------------------------

class Coinflip extends React.Component {
constructor(props) {
   super(props);
   this.state = {
     result: "",
     nader: "nader" //came with the code we found. What does it actually do?
   };
   this.coinToss = this.coinToss.bind(this);
 }
 coinToss() {
   this.setState({ nader: "" }, () => {
     if (Math.random() < 0.5) {
       this.setState({ result: "heads" });
       console.log("heads");
     } else {
       this.setState({ result: "tails" });
       console.log("tails");
     }
   });
 }

 render() {
   return (
     <div>
       <div id="coin" className={this.state.result}>
         <div class="side-a">
           <h2>TAIL</h2>
         </div>
         <div className="side-b">
           <h2>HEAD</h2>
         </div>
       </div>
       <h1>Flip a coin</h1>
       <button id="btn" onClick={this.coinToss}>
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
      <img id="shotglass" src={shotglass}/>
    </div>
  }
}

export default Tiles

{/*
https://codepen.io/gaearon/pen/gWWZgR?editors=0010

class Tile extends Component {

}


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
