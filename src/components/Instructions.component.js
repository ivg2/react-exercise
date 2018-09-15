import React, { Component } from 'react'
import './../styles/instructions.css'

class Instructions extends Component {
  constructor(props) {
    super(props)
    this.state = this.handleDisplayImage.bind(this)
  }

  handleDisplayImage() {
    this.setState({ shouldDisplayImage: true })
  }

  render() {
    return (
      <div className="instructions">
        if (this.state.shouldDisplayImage){' '}
        {
          <img
            className="instructions__logo"
            src="https://uiuc.hack4impact.org/img/colored-logo.png"
            alt="h4i logo"
          />
        }
      </div>
    )
  }
}

export default Instructions
