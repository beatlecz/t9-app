import React, {Component} from 'react'
import {fromJS} from 'immutable'
import {render} from 'react-dom'
import StoreAppCreator from './storeApp'
import * as reducers from './reducers'

import App from './app'

let StoreApp = StoreAppCreator(reducers)
let element = document.querySelector('#content')

render(
    <StoreApp>
        <App />
    </StoreApp>
, element)
