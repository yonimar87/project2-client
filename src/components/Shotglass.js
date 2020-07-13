import React, { Component } from 'react'
import shotglass from "../images/shotglass.jpg"; // with import
class Shotglass extends Component {
  render() {
    return <div>
      <img id="shotglass" src={shotglass}/>
    </div>
  }
}

export default Shotglass
