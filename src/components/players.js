import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'

class Players extends Component {

  render() {
    return (
      <div className='players'>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state
}
Players = connect(mapStateToProps, actions)(Players);
export default Players;