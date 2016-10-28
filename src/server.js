import Server from 'socket.io'

// Attach our server to port 8090
export default function startServer(store) {
  const io = new Server().attach(8090)

  // Every time there is a change, send the new state to all subscribers
  store.subscribe(
    () => io.emit('state', store.getState().toJS())
  )

  // Emit the current state to someone who is just connecting
  io.on('connection', (socket) => {
    socket.emit('state', store.getState().toJS())
    // Accept actions from clients and send them to the store
    socket.on('action', store.dispatch.bind(store))
  })
}
