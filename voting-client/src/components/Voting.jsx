import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import Winner from './Winner'
import Vote from './Vote'

// Export the 'pure' Voting component
export const Voting = React.createClass({
  mixins: [PureRenderMixin],
  render: function () {
    return <div>
      {this.props.winner ?
        <Winner ref='winner' winner={this.props.winner} /> :
        <Vote {...this.props} />
      }
    </div>
  }
})

function mapStateToProps (state) {
  return {
    // getIn['vote', 'pair'] is the path through the state object, ie.
    // state -> vote -> pair yields ['Trainspotting', '28 Days Later']
    pair: state.getIn(['vote', 'pair']),
    winner: state.get('winner')
  }
}

// connect() connects the output of mapStateToProps into the props that
// Voting will receive, and RETURNS a connected version of Voting component
// Export the 'connected' version of the Voting component
export const VotingContainer = connect(mapStateToProps)(Voting)
