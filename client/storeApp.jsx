import React, {Component} from 'react'
import {Provider} from 'react-redux'

import Store from './store'

export default function initStoreApp(reducers, opts) {
    let store = Store(reducers, opts)

    return class StoreApp extends Component {
        render() {
            return (
                <Provider store={store}>
                    {this.props.children}
                </Provider>
            )
        }
    }
}
