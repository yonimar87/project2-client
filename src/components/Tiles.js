import React, { Component } from 'react'
import Shotglass from './Shotglass'


class Tiles extends Component {
  render() {
    return (
      <div class="board" >
          <div class="tiles" id="tile1">1</div>
          <div class="tiles" id="tile2">2</div>
          <div class="tiles" id="tile3">3</div>
          <div  id="tile4"> < Shotglass /> </div>
          <div class="tiles" id="tile5">5</div>
          <div class="tiles" id="tile6">6</div>
          <div class="tiles" id="tile7">7</div>
      </div>
    )
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
  setvalue = false for the one im on // image disappears from current div.
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
