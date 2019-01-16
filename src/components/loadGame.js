import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../reducers/actions';
import Footer from './parts/footer';
import NavBar from './parts/navBar';
import { Link } from 'react-router-dom';

class LoadGame extends Component {
  state = {

  }

  gamesCreated = async () => {

  }

  render() {
    return (
      <div className='loadGame'>
        <NavBar/>
        <div id="loadBody">
          
        </div>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state
}
LoadGame = connect(mapStateToProps, actions)(LoadGame);
export default LoadGame;