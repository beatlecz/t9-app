import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as Actions from './actions'
import 'bootstrap/dist/css/bootstrap.min.css'

import InputForm from './components/inputForm'
import WordsList from './components/wordsList'
import Keyboard from './components/keyboard'

class Main extends Component {
  render() {
    let {isFetching, words, numbers} = this.props.app.toJS()
    let {fetchWords, addNumber, clearNumbers} = this.props

    return (
      <div className="container">
        <h3>T9 App</h3>
        <hr />
        <div className="row">
          <div className="col-xs-6">
            <InputForm words={words} onClear={clearNumbers} />
            <Keyboard onPress={addNumber} />
          </div>
          <div className="col-xs-6">
            <WordsList words={words} />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
      app: state.get('app')
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
