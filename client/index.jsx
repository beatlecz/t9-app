import 'babel-core/polyfill'
import React, {Component} from 'react'
import {fromJS} from 'immutable'
import {render} from 'react-dom'
import {StoreAppCreator} from './store'
import * as reducers from './reducers'

import App from './app'

// See development console (in chrome) to see state changes
let StoreApp = StoreAppCreator(reducers, {mode: 'debug'})
let element = document.querySelector('#content')

render(
    <StoreApp>
        <App />
    </StoreApp>
, element)
