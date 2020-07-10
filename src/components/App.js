import React, { Component } from 'react'
import app from 'firebase/app'
import Tiles from './Tiles'
import Buttons from './Buttons'
import Users from './Users'
import Shotglass from './Shotglass'
import Counter from './Counter'
import Characters from './Characters'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: {}
    }
  }

  componentWillMount() {
    app
      .database()
      .ref('test')
      .on('value', (data) => {
        console.log(data.val())
        this.setState({ data: data.val() })
      })
  }

  render() {
    return (
      <div>
        <Tiles />
        <Buttons />
        <Users />
        <Shotglass />
        <Counter />
        <Counter />
        <Characters />
      </div>
    )
  }
}

export default App
