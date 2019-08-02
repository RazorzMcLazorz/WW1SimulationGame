import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import NavBar from './parts/navBar'
import Footer from './parts/footer'

class Players extends Component {

  players(country) {
    
  }

  render() {
    return (
      <div className='players'>
        <NavBar/>

          Work in progress feature
          
          {this.players(this.props.countrySelected)}

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state
}
Players = connect(mapStateToProps, actions)(Players);
export default Players;