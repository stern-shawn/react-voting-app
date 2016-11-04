import {List, Map} from 'immutable'

// Helper function to merge new state into previous state
function setState (state, newState) {
  // We can use the built-in merge function of Map here
  return state.merge(newState)
}

// Given a state and an entry, set hasVoted to that entry if it exists in
// the state. Return unmodified state otherwise.
function vote (state, entry) {
  const currentPair = state.getIn(['vote', 'pair'])
  if (currentPair && currentPair.includes(entry)) {
    return state.set('hasVoted', entry)
  } else {
    return state
  }
}

function resetVote (state) {
  const hasVoted = state.get('hasVoted')
  // Make sure that the result of getIn is cast to immutable List
  const currentPair = state.getIn(['vote', 'pair'], List())

  if (hasVoted && !currentPair.includes('hasVoted')) {
    return state.remove('hasVoted')
  } else {
    return state
  }
}

// Use the ES6 defaults notation to have state set to a map if none given
export default function (state = Map(), action) {
  switch (action.type) {
    case 'SET_STATE':
      return resetVote(setState(state, action.state))
    case 'VOTE':
      return vote(state, action.entry)
  }

  return state
}
