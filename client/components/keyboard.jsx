import React, {PropTypes as pt, Component} from 'react'

const Button = ({number, text, onClick, disabled}) => (
  <button
    style={{marginBottom: 10}}
    disabled={disabled}
    className="btn btn-lg btn-primary btn-block"
    onClick={() => onClick(number)}
  >
    <b>{number}</b> <br />
    <small>{text}</small>
  </button>
)

class Keyboard extends Component {
  render() {
    let {onPress} = this.props

    return (
      <div>
        <div className="row">
          <div className="col-xs-4">
            <Button number="1" text="&nbsp;" disabled />
          </div>
          <div className="col-xs-4">
            <Button number="2" text="abc" onClick={onPress} />
          </div>
          <div className="col-xs-4">
            <Button number="3" text="def" onClick={onPress} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-4">
            <Button number="4" text="ghi" onClick={onPress} />
          </div>
          <div className="col-xs-4">
            <Button number="5" text="jkl" onClick={onPress} />
          </div>
          <div className="col-xs-4">
            <Button number="6" text="mno" onClick={onPress} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-4">
            <Button number="7" text="pqrs" onClick={onPress} />
          </div>
          <div className="col-xs-4">
            <Button number="8" text="tuv" onClick={onPress} />
          </div>
          <div className="col-xs-4">
            <Button number="9" text="wxyz" onClick={onPress} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-4 col-xs-offset-4">
            <Button number="0" text="_" onClick={onPress} />
          </div>
        </div>
      </div>
    )
  }
}

Keyboard.propTypes = {
  onPress: pt.func.isRequired
}
Keyboard.defaultProps = {
}

export default Keyboard
