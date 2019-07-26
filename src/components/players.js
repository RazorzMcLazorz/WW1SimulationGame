import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Footer from './parts/footer'
import NavBar from './parts/navBar'
import { Link } from 'react-router-dom'
import ContainedButtons from '../components/parts/button'

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