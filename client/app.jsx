import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class Main extends Component {
  render() {

    let {isFetching, words} = this.props.appState.toJS()

    return (
      <div>
        {isFetching}
        <ul>
          {words.map(w => <li>{w}</li>)}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
      appState: state.get('appState')
    }
}
function mapDispatchToProps(dispatch) {
    return {} //bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
