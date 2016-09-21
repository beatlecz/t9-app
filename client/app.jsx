import React, {Component} from 'react'
import {render} from 'react-dom'

class Main extends Component {
  render() {
    return (
      <div>
        <h4>Hello world</h4>
      </div>
    )
  }
}

let element = document.querySelector('#content')
console.log(element)


render(<Main />, element)
