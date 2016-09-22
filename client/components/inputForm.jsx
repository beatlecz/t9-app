import React, {PropTypes as pt, Component} from 'react'

class InputForm extends Component {
  render() {
    let {onClear, numbers} = this.props
    let numbersText = numbers.join('')

    return (
      <div className="input-group" style={{marginBottom: 10}}>
        <input type="text" className="form-control" value={numbersText} />
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={() => onClear()}>Clear</button>
        </span>
      </div>
    )
  }
}

InputForm.propTypes = {
  onClear: pt.func.isRequired
}
InputForm.defaultProps = {
}

export default InputForm
