import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import io from 'socket.io-client'
import reducer from './reducer'
import App from './components/App'
import {VotingContainer} from './components/Voting'
import {ResultsContainer} from './components/Results'

// Create a Redux store and give it an initial state using 'SET_STATE' action
const store = createStore(reducer)
store.dispatch({
  type: 'SET_STATE',
  state: {
    vote: {
      pair: ['Sunshine', '28 Days Later'],
      tally: {Sunshine: 2}
    }
  }
})

const socket = io(`${location.protocol}//${location.hostname}:8090`)

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
