import React, { Component } from 'react'
import { Instructions } from './components'
import './styles/app.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <Instructions
          shouldDisplayImage={true}
          items={['instruction 1', 'instruction2', 'instruction3']}
        />
      </div>
    )
  }
}

export default App
