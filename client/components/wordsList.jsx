import React, {PropTypes as pt, Component} from 'react'

class WordsList extends Component {
  render() {
    let {words} = this.props

    return (
      <div className="list-group">
        {words.map((word, i) => (
          <a key={i} className="list-group-item">
            {word}
          </a>
        ))}
      </div>

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
