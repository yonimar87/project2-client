import React from 'react'
import app from 'firebase/app'

class App extends React.Component {
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
    return <div className="App">FireBase is ass</div>
  }
}

export default App
