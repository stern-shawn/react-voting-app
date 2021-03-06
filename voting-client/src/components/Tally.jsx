import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default React.createClass({
  mixins: [PureRenderMixin],
  // Return the vote count for the given entry
  getVotes: function (entry) {
    if (this.props.tally && this.props.tally.has(entry)) {
      return this.props.tally.get(entry)
    }
    // If nothing found, tally must be 0
    return 0
  },
  render: function () {
    return (
      <div className='tally'>
        {this.props.pair.map(entry =>
          <div key={entry} className='entry'>
            <h1>{entry}</h1>
            <div className='voteCount'>
              {this.getVotes(entry)}
            </div>
          </div>)}
      </div>
    )
  }
})
