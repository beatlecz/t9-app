import React, {PropTypes as pt, Component} from 'react'

class InputForm extends Component {
  render() {
    let {onClear, words} = this.props
    let word = words.length > 0 ? words[0] : ''

    return (
      <div className="input-group input-group-lg" style={{marginBottom: 10}}>
        <input type="text" className="form-control" value={word} />
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={() => onClear()}>Clear</button>
        </span>
      </div>
    )
  }
}

InputForm.propTypes = {
  onClear: pt.func.isRequired,
  words: pt.arrayOf(pt.string)
}
InputForm.defaultProps = {
  words: []
}

export default InputForm
