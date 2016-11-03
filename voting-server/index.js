import makeStore from './src/store'
import startServer from './src/server'

// Initialize app by creating our store then starting the server
export const store = makeStore()
startServer(store)

// Feed store a dummy set of movies and NEXT
store.dispatch({
  type: 'SET_ENTRIES',
  entries: require('./entries.json')
})
store.dispatch({type: 'NEXT'})
