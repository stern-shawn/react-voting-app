import {List, Map} from 'immutable'

// Basic function to set 'entries' of the given state variable
// Use List constructor to convert all input to be an immutable list
export function setEntries(state, entries) {
  return state.set('entries', List(entries))
}

// Create a new state where vote is the next two entires, and entries becomes
// all entires after the first two
export function next(state) {
  const entries = state.get('entries')

  return state.merge({
    vote: Map({pair: entries.take(2)}),
    entries: entries.skip(2)
  })
}

// If the current entry exists in vote, increment the tally by 1,
// otherwise initialize to 0 votes (and then add 1)
export function vote(state, entry) {
  return state.updateIn(
    ['vote', 'tally', entry],
    0,
    tally => tally + 1
  )
}
