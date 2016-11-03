import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default React.createClass({
  mixins: [PureRenderMixin],
  getPair: function () {
    // Remember to use this syntax regularly to avoid errors
    // from undefined objects
    return this.props.pair || []
  },
  isDisabled: function () {
    // Bang-bang, you're a boolean! Disable the buttons if component has a
    // truthy hasVoted prop
    return !!this.props.hasVoted
  },
  hasVotedFor: function (entry) {
    return this.props.hasVoted === entry
  },
  render: function () {
    return <div className='voting'>
      {this.getPair().map(entry =>
        <button key={entry}
                disabled={this.isDisabled()}
                onClick={() => this.props.vote(entry)}>
          <h1>{entry}</h1>
          {this.hasVotedFor(entry) ? <div className='label'>Voted</div> : null}
        </button>
      )}
    </div>
  }
})
