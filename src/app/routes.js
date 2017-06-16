import React from 'react'
import { Route, Switch } from 'react-router-dom'
import loadCounter from 'bundle-loader?lazy!./features/Counter' // eslint-disable-line import/no-webpack-loader-syntax

import App from './App'

import FriendsView from './features/friends/components/FriendsView'
import NotFoundView from './components/NotFound'
import Bundle from './utils/Bundle'
// import {CounterView} from './features/Counter'

// components load their module for initial visit
const CounterView = (props) => (
  <Bundle load={loadCounter}>
    {({CounterView}) => <CounterView {...props} />}
  </Bundle>
)
export default (
  <App>
    <Switch>
      <Route exact path='/' component={FriendsView} />
      <Route path='/counter' component={CounterView} />
      <Route path='/404' component={NotFoundView} />
      <Route component={NotFoundView} />
    </Switch>
  </App>
)
