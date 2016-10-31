// import React from 'react'
//
// export default React.createClass({
//   render: function() {
//     return <div className="winner">
//       Winner is {this.props.winner}
//     </div>
//   }
// })

// import React  from 'react'
//
// const Winner = React.createClass({
//   render () {
//     return (
//       <div className="winner">
//         Winner is {this.props.winner}
//       </div>
//     )
//   }
// })
//
// export default Winner

import React from 'react'

class Winner extends React.Component {
  render () {
    return (
      <div className="winner">
        Winner is {this.props.winner}
      </div>
    )
  }
}

export default Winner
