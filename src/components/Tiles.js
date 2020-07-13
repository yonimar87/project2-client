import React, { Component } from 'react'
import shotglass from "../images/shotglass.jpg"; // with import



class Tiles extends Component {
  // constructor(props){
  //   super(props)

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

  render() {
    return (
      <div class="board" >
          <div class="tiles" id="tile1">tiles</div>
          <div class="tiles" id="tile2">tiles</div>
          <div class="tiles" id="tile3">tiles</div>
          <div  id="tile4"> < Shotglass /> </div>
          <div class="tiles" id="tile5">tiles</div>
          <div class="tiles" id="tile6">tiles</div>
          <div class="tiles" id="tile7">tiles</div>
      </div>
    )
  }
}

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
