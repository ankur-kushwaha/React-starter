import React from 'react'
import { Route, Switch } from 'react-router-dom'

import App from './App'
import FriendsView from './features/friends/components/FriendsView'
import NotFoundView from './components/NotFound'
import {CounterView} from './features/Counter'

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
