import {List, Map} from 'immutable'

// Basic function to set 'entries' of the given state variable
// Use List constructor to convert all input to be an immutable list
export function setEntries(state, entries) {
  return state.set('entries', List(entries))
}

// Create a new state where vote is the next two entries, and entries becomes
// all entries after the first two
export function next(state) {
  // Concatenate the winner of the previous state's vote to entries
  const entries = state.get('entries').concat(getWinners(state.get('vote')))

  // If only one entry remains, clear the object and set the winner
  if (entries.size === 1) {
    return state.remove('vote')
                .remove('entries')
                .set('winner', entries.first())
  } else {
    return state.merge({
      vote: Map({pair: entries.take(2)}),
      entries: entries.skip(2)
    })
  }
}

// If the current entry exists in vote, increment the tally by 1,
// otherwise initialize to 0 votes (and then add 1)
export function vote(state, entry) {
  return state.updateIn(
    ['vote', 'tally', entry],
    0,
    tallyValue => tallyValue + 1
  )
}

// Helper function, return the winning vote or both if tied
// Use [] to make sure output is a List/array type for the receiving concat function
function getWinners(vote) {
  if (!vote) return []
  const [a, b] = vote.get('pair')
  const aVotes = vote.getIn(['tally', a], 0)
  const bVotes = vote.getIn(['tally', b], 0)
  if (aVotes > bVotes) {
    return [a]
  } else if (aVotes < bVotes) {
    return [b]
  } else {
    return [a, b]
  }
}
