import React, { Component } from 'react'
import './../styles/instructions.css'

class Instructions extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="instructions">
        {this.props.shouldDisplayImage && (
          <img
            className="instructions__logo"
            src="https://uiuc.hack4impact.org/img/colored-logo.png"
            alt="h4i logo"
          />
        )}

        {this.props.items.map((item, index) => (
          <ul key={index}>
            {item.length >= 3 && (
              <li>
                {this.props.items.indexOf(item) % 2 === 1
                  ? item.toUpperCase()
                  : item}
              </li>
            )}
          </ul>
        ))}
      </div>
    )
  }
}

export default Instructions
