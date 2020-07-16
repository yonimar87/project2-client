import React, { Component } from 'react'
import Webcam from 'react-webcam'

class FaceEmotion extends Component {
  constructor(props) {
    super(props)
    this.state = { screenshot: null }
  }
  screenshot() {
    let screenshot = this.refs.webcam.getScreenshot()
    this.setState({ screenshot: screenshot })
  }

  render() {
    return (
      <div>
        <Webcam audio={false} ref="webcam" />
        <button onClick={this.screenshot.bind(this)}>Capture</button>
        {this.state.screenshot ? <img src={this.state.screenshot} /> : null}
      </div>
    )
  }
}
export default FaceEmotion
