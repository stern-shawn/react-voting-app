import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Winner from './Winner'
import Tally from './Tally'

export default React.createClass({
  mixins: [PureRenderMixin],
  getPair: function () {
    return this.props.pair || []
  },
  render: function () {
    // Render winner if there is one, otherwise the interface...
    return this.props.winner ?
    <Winner ref='winner' winner={this.props.winner} /> :
    <div className='results'>
      {/* Lets play with sending props both as the returns of functions and directly
        also, apparently the only way to put comments into JSX is using this syntax... */}
      <Tally ref='tally' pair={this.getPair()} tally={this.props.tally} />
      <div className='management'>
        <button ref='next' className='next' onClick={this.props.next}>Next</button>
      </div>
    </div>
  }
})
