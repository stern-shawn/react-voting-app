import {createStore} from 'redux'
import reducer from './reducer'

export default function makeStore() {
  // The variable reducer is the ONLY variable in our application
  return createStore(reducer)
}
