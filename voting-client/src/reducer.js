import {Map} from 'immutable'

// Helper function to merge new state into previous state
function setState (state, newState) {
  // We can use the built-in merge function of Map here
  return state.merge(newState)
}

// Use the ES6 defaults notation to have state set to a map if none given
export default function (state = Map(), action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state)
  }

  return state
}
