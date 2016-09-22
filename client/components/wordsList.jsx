import React, {PropTypes as pt, Component} from 'react'

class WordsList extends Component {
  render() {
    let {words} = this.props

    return (
      <ul className="list-group">
        {words.map((word, i) => (
          <li key={i} className="list-group-item">
            {word}
          </li>
        ))}
      </ul>

    )
  }
}

WordsList.propTypes = {
  words: pt.arrayOf(pt.string)
}
WordsList.defaultProps = {
  words: []
}

export default WordsList
