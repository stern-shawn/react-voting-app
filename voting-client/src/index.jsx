import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import io from 'socket.io-client'
import reducer from './reducer'
import {setState} from './action_creators'
import remoteActionMiddleware from './remote_action_middleware'
import App from './components/App'
import {VotingContainer} from './components/Voting'
import {ResultsContainer} from './components/Results'

// Switching the locations of the declaration of store and socket.
// We now need socket to exist first since it's being passed to the middleware
// connected to the store

// Set up our connection to the server. SET_STATE whenever it sends state
const socket = io(`${location.protocol}//${location.hostname}:8090`)
socket.on('state', state => store.dispatch(setState(state)))

// Take the middleware we want registered and apply it when we create the
// redux store
const createStoreWithMiddleware = applyMiddleware(
  // Pass the socket to our middleware so we can send actions to the server...
  remoteActionMiddleware(socket)
)(createStore)
const store = createStoreWithMiddleware(reducer)

const routes = <Route component={App}>
  <Route path='/results' component={ResultsContainer} />
  <Route path='/' component={VotingContainer} />
</Route>

// Wrap our Router component with the Provider so it'll be the ancestor to all
// app components for the sake of connecting components to the Redux store
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
)
