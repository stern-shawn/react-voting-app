import React from 'react'

export default React.createClass({
  getPair: function() {
    // Remember to use this syntax regularly to avoid errors
    // from undefined objects
    return this.props.pair || []
  },
  render: function() {
    return <div className="voting">
      {this.getPair().map(entry =>
        <button key={entry}
                onClick={() => this.props.vote(entry)}>
          <h1>{entry}</h1>
        </button>
      )}
    </div>
  }
})
