import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as Actions from './actions'

class Main extends Component {

  componentDidMount() {
    let {fetchWords} = this.props

    fetchWords('2345')
  }

  render() {

    let {isFetching, words} = this.props.appState.toJS()
    
    return (
      <div>
        {isFetching}
        <ul>
          {words.map((w,i) => <li key={i}>{w}</li>)}
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
    return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
