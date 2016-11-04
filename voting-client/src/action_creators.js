export function setState (state) {
  return {
    type: 'SET_STATE',
    state
  }
}

export function vote (entry) {
  return {
    // Give this action metadata of remote=true so it can be sent to server
    meta: {remote: true},
    type: 'VOTE',
    entry
  }
}

export function next () {
  return {
    meta: {remote: true},
    type: 'NEXT'
  }
}
