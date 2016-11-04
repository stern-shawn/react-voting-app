export default socket => store => next => action => {
  // Only emit actions to the server that have the remote property
  if (action.meta && action.meta.remote) {
    socket.emit('action', action)
  }
  return next(action)
}

// Concise way of writing this... refer to currying concept
// export default function(socket) {
//   return function(store) {
//     return function(next) {
//       return function(action) {
//       }
//     }
//   }
// }
